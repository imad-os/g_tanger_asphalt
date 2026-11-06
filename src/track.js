// A route at run time: centre line samples every STEP metres (from tools/build-routes.mjs) and the queries the
// physics needs: where is a point along the road (s, d), how high is the road surface there and which way it faces.
// No allocation in queries: they fill a caller-owned result object.

export const STEP = 2;

export class Track {
    constructor(meta, buf) {
        this.meta = meta;
        this.n = meta.n;
        this.closed = !!meta.closed;
        let o = 0;
        const f = (count) => { const a = new Float32Array(buf, o, count); o += count * 4; return a; };
        this.px = f(this.n); this.py = f(this.n); this.pz = f(this.n);
        this.hl = f(this.n); this.hr = f(this.n);          // half width to the left / right edge of the asphalt
        this.gl = f(this.n * meta.ground.length);          // ground heights at the lateral offsets meta.ground (left side)
        this.gr = f(this.n * meta.ground.length);          // and right side
        this.flags = new Uint8Array(buf, o, this.n); o += this.n;
        // derived: unit tangent (horizontal), left vector, slope
        this.tx = new Float32Array(this.n); this.tz = new Float32Array(this.n);
        this.slope = new Float32Array(this.n);
        this.curv = new Float32Array(this.n);
        for (let i = 0; i < this.n; i++) {
            const a = Math.max(0, i - 1), b = Math.min(this.n - 1, i + 1);
            let dx = this.px[b] - this.px[a], dz = this.pz[b] - this.pz[a];
            const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
            this.tx[i] = dx; this.tz[i] = dz;
            this.slope[i] = (this.py[b] - this.py[a]) / l;
        }
        for (let i = 0; i < this.n; i++) {
            const a = Math.max(0, i - 3), b = Math.min(this.n - 1, i + 3);
            const cr = this.tx[a] * this.tz[b] - this.tz[a] * this.tx[b];
            const dt = Math.max(1e-3, (b - a) * STEP);
            this.curv[i] = Math.asin(Math.max(-1, Math.min(1, cr))) / dt; // + = turning left... sign checked by AI only
        }
        this.length = (this.n - 1) * STEP;
        this.ramps = meta.ramps || [];   // [{ s, d, w, len, h }]
        this.rampIdx = new Int16Array(this.n).fill(-1);
        for (let r = 0; r < this.ramps.length; r++) {
            const R = this.ramps[r];
            const i0 = Math.max(0, Math.floor(R.s / STEP) - 1), i1 = Math.min(this.n - 1, Math.ceil((R.s + R.len) / STEP) + 1);
            for (let i = i0; i <= i1; i++) this.rampIdx[i] = r;
        }
    }
    // left vector at i = (tz, -tx)?  forward (tx,tz), up y; left = up x forward = (tz*1 - 0, ..) -> (fz, 0, -fx)
    // up x fwd = (uy*fz - uz*fy, uz*fx - ux*fz, ux*fy - uy*fx) = (fz, 0, -fx)
    lx(i) { return this.tz[i]; }
    lz(i) { return -this.tx[i]; }

    // Finds the sample before (x, z) starting at hint. Fills out: i, t, s, d (left +), y (road surface), nx ny nz,
    // hl, hr (half widths), off (0 road, 1 kerb / pavement, 2 beyond the wall line)
    query(x, z, hint, out) {
        const n = this.n;
        let i = hint < 0 ? 0 : hint >= n - 1 ? n - 2 : hint;
        for (let guard = 0; guard < 400; guard++) {
            const ax = this.px[i], az = this.pz[i];
            const sx = this.px[i + 1] - ax, sz = this.pz[i + 1] - az;
            const len2 = sx * sx + sz * sz || 1;
            const t = ((x - ax) * sx + (z - az) * sz) / len2;
            if (t < 0 && i > 0) { i--; continue; }
            if (t > 1 && i < n - 2) { i++; continue; }
            break;
        }
        const ax = this.px[i], az = this.pz[i];
        const sx = this.px[i + 1] - ax, sz = this.pz[i + 1] - az;
        const len = Math.hypot(sx, sz) || 1;
        let t = ((x - ax) * sx + (z - az) * sz) / (len * len);
        if (t < 0) t = 0; else if (t > 1) t = 1;
        const lx = sz / len, lz = -sx / len;
        // blend left vectors of both ends for smooth d in bends
        const qx = ax + sx * t, qz = az + sz * t;
        const d = (x - qx) * lx + (z - qz) * lz;
        const y0 = this.py[i] + (this.py[i + 1] - this.py[i]) * t;
        const hl = this.hl[i] + (this.hl[i + 1] - this.hl[i]) * t;
        const hr = this.hr[i] + (this.hr[i + 1] - this.hr[i]) * t;
        const slope = (this.py[i + 1] - this.py[i]) / len;
        let y = y0, dyds = slope, dydd = 0;
        // kerb + pavement: 15 cm higher, 0.4 m ramp up
        const edge = d >= 0 ? d - hl : -d - hr;
        let off = 0;
        if (edge > 0) {
            off = 1;
            const k = edge < 0.4 ? edge / 0.4 : 1;
            y += 0.15 * k;
            if (edge < 0.4) dydd = (d >= 0 ? 1 : -1) * 0.15 / 0.4;
            if (edge > 3.0) off = 2;
        }
        const s = (i + t) * STEP;
        const r = this.rampIdx[i];
        if (r >= 0) {
            const R = this.ramps[r];
            const u = s - R.s, v = d - R.d;
            if (u >= 0 && u <= R.len && v >= -R.w / 2 && v <= R.w / 2) {
                const k = R.h / R.len;
                y += u * k; dyds += k;
            }
        }
        // normal of the surface: tangent (fx, dyds, fz) x left (lx, dydd, lz) ... n = left x fwd
        const fx = sx / len, fz = sz / len;
        // n = cross(L, F) where L = (lx, dydd, lz), F = (fx, dyds, fz)
        let nx = dydd * fz - lz * dyds, ny = lz * fx - lx * fz, nz = lx * dyds - dydd * fx;
        if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
        const nl = Math.hypot(nx, ny, nz) || 1;
        out.i = i; out.t = t; out.s = s; out.d = d; out.y = y; out.nx = nx / nl; out.ny = ny / nl; out.nz = nz / nl;
        out.hl = hl; out.hr = hr; out.off = off; out.lx = lx; out.lz = lz; out.fx = fx; out.fz = fz;
        return out;
    }
    // point on the road at distance s and lateral offset d (left +)
    at(s, d, out) {
        let f = s / STEP;
        if (f < 0) f = 0; if (f > this.n - 1.001) f = this.n - 1.001;
        const i = f | 0, t = f - i;
        const ax = this.px[i], az = this.pz[i], bx = this.px[i + 1], bz = this.pz[i + 1];
        const len = Math.hypot(bx - ax, bz - az) || 1;
        const fx = (bx - ax) / len, fz = (bz - az) / len, lx = fz, lz = -fx;
        out.x = ax + (bx - ax) * t + lx * d; out.z = az + (bz - az) * t + lz * d;
        out.y = this.py[i] + (this.py[i + 1] - this.py[i]) * t;
        out.fx = fx; out.fz = fz; out.lx = lx; out.lz = lz; out.i = i;
        out.hl = this.hl[i]; out.hr = this.hr[i];
        return out;
    }
}
