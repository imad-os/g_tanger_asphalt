// The owner's own car (Kasbah City): a detailed small hatch built in code, modelled on their 2019 white compact
// with a red roof: rounded body lofted from cross sections, black sills and wheel-arch cladding, a red roof floating
// on black pillars, red mirror caps, red fog-lamp rings, side air bumps with red inserts, a thin daytime light strip
// over round headlamps, tail lights and two-tone alloy wheels. No maker's badge or name.
// Real sizes in metres (length 3.99 m), scaled by K to sit with the other (chunky) cars of the game.
// Car frame: +Z forward, +X left, y up. Colour flag (4th byte): 255 paint (body colour), 192 accent (roof colour),
// 128 glass, 64 light, 0 plain.

const K = 1.2;
const PAINT = [200, 200, 200, 255], ACCENT = [200, 200, 200, 192], GLASS = [26, 30, 38, 128], BLACK = [30, 31, 34, 0],
    WELL = [14, 14, 16, 0], LIGHT = [255, 250, 235, 64], GREY = [120, 124, 130, 0], PLATE = [235, 235, 230, 0], LINE = [70, 72, 78, 0],
    CHROME = [185, 188, 194, 0], LENS = [210, 214, 220, 0];

function lin(pts, z) {   // piecewise linear table [[z, v]...]
    if (z <= pts[0][0]) return pts[0][1];
    for (let i = 1; i < pts.length; i++) if (z <= pts[i][0]) { const a = pts[i - 1], b = pts[i], t = (z - a[0]) / (b[0] - a[0]); return a[1] + (b[1] - a[1]) * t; }
    return pts[pts.length - 1][1];
}
// side profile
const TOP = [[-2.0, 0.96], [-1.97, 1.07], [-1.88, 1.25], [-1.74, 1.37], [-1.45, 1.43], [-0.7, 1.48], [-0.2, 1.485], [0.12, 1.46], [0.45, 1.3], [1.02, 1.0], [1.4, 0.96], [1.75, 0.92], [1.9, 0.88], [2.0, 0.82]];
const BELT = [[-2.0, 0.93], [-1.7, 1.0], [-0.5, 1.01], [0.6, 0.98], [1.1, 0.95], [2.0, 0.88]];
const HW = [[-2.0, 0.64], [-1.96, 0.75], [-1.88, 0.82], [-1.7, 0.86], [-1.2, 0.875], [1.3, 0.875], [1.7, 0.84], [1.9, 0.79], [2.0, 0.72]];
const YB = [[-2.0, 0.34], [-1.9, 0.24], [-1.65, 0.19], [1.6, 0.19], [1.88, 0.24], [2.0, 0.3]];
export const AXLE = { zf: 1.22, zr: -1.32, y: 0.31, r: 0.31, x: 0.735, arch: 0.37 };
// rows of every cross section (bottom centre -> top centre); segment sample counts keep the rows aligned
const SEG = [3, 2, 4, 4, 5, 2, 4];
export const ROWS = SEG.reduce((a, b) => a + b, 0) + 1;   // 25
const R_SILL = 3, R_SIDE = 5, R_BELT = 13, R_EDGE = 18, R_ROOF = 20;

function section(z) {
    const hw = lin(HW, z), yb = lin(YB, z), top = lin(TOP, z), belt0 = lin(BELT, z);
    const g = Math.max(0, Math.min(1, (top - belt0) / 0.42));        // greenhouse height (0 on the bonnet / tail)
    const belt = Math.min(belt0, top - 0.05 - 0.03 * (1 - g));
    const mid = (yb + belt) * 0.5;
    const ctl = [
        [0, yb], [hw * 0.86, yb], [hw * 0.975, yb + 0.1], [hw * 1.0, mid], [hw * 0.965, belt],
        [hw * (0.93 - 0.15 * g), top - 0.025 - 0.05 * g], [hw * (0.78 - 0.08 * g), top - 0.004], [0, top]
    ];
    const pts = [];
    for (let s = 0; s < SEG.length; s++) {
        const a = ctl[s], b = ctl[s + 1];
        for (let k = 0; k < SEG[s]; k++) {
            let t = k / SEG[s];
            // the round corners: ease the upper side and the roof edge
            let x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t;
            if (s === 3) x += Math.sin(t * Math.PI) * hw * 0.012;               // a little bulge in the doors
            if (s === 5 || s === 6) { const q = Math.sin(t * Math.PI / 2); y = a[1] + (b[1] - a[1]) * q; }
            pts.push([x, y]);
        }
    }
    pts.push(ctl[7]);
    return { pts, hw, yb, top, belt, g };
}
export function sideX(z, y) {   // the body side's x at height y (for decals)
    const p = section(z).pts;
    for (let k = R_SILL; k < R_BELT; k++) if (y >= p[k][1] && y <= p[k + 1][1]) { const t = (y - p[k][1]) / (p[k + 1][1] - p[k][1] || 1); return p[k][0] + (p[k + 1][0] - p[k][0]) * t; }
    return section(z).hw;
}

export function cityCar() {
    const body = { name: 'body', pos: [], nrm: [], col: [], idx: [] };
    const V = (part, p, n, c) => { part.pos.push(p[0], p[1], p[2]); part.nrm.push(n[0], n[1], n[2]); part.col.push(c[0], c[1], c[2], c[3]); part.idx.push(part.idx.length); };
    const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    // a triangle facing `out` (flat normal unless vertex normals are given)
    function tri(part, a, b, c, col, out, na, nb, nc) {
        let n = norm(cross(sub(b, a), sub(c, a)));
        if (dot(n, out) < 0) { [b, c] = [c, b]; [nb, nc] = [nc, nb]; n = [-n[0], -n[1], -n[2]]; }
        V(part, a, na || n, col); V(part, b, nb || n, col); V(part, c, nc || n, col);
    }
    const quad = (part, a, b, c, d, col, out) => { tri(part, a, b, c, col, out); tri(part, a, c, d, col, out); };

    // ---- the lofted body (left half, x > 0) ----
    const Z = [];
    for (let z = -2.0; z < 2.0 - 1e-6;) {
        Z.push(z);
        const near = Math.min(Math.abs(z - AXLE.zf), Math.abs(z - AXLE.zr));
        z += near < 0.45 ? 0.045 : Math.abs(z) > 1.75 ? 0.05 : 0.11;
    }
    Z.push(2.0);
    const G = Z.map(z => {
        const s = section(z);
        return s.pts.map(([x, y]) => {
            // wheel wells: the side is pushed in where it would cover a wheel
            let well = false;
            for (const az of [AXLE.zf, AXLE.zr]) if (Math.hypot(z - az, y - AXLE.y) < AXLE.arch + 0.03 && x > 0.5) well = true;
            return { p: [x, y, z], raw: [x, y, z], well };
        });
    });
    const NS = Z.length;
    // smooth normals from the grid (before the wheel wells are pushed in, so no dark smudges over the arches)
    for (let i = 0; i < NS; i++) for (let k = 0; k < ROWS; k++) {
        const a = G[Math.min(NS - 1, i + 1)][k].raw, b = G[Math.max(0, i - 1)][k].raw;
        const c = G[i][Math.min(ROWS - 1, k + 1)].raw, d = G[i][Math.max(0, k - 1)].raw;
        let n = norm(cross(sub(c, d), sub(a, b)));
        const o = sub(G[i][k].p, [0, 0.7, G[i][k].p[2]]);
        if (dot(n, o) < 0) n = [-n[0], -n[1], -n[2]];
        G[i][k].n = n;
        if (G[i][k].well) G[i][k].p = [0.56, G[i][k].p[1], G[i][k].p[2]];
    }
    const inCabin = (z) => z > -1.93 && z < 1.02;
    const dlo = (z) => z > -1.42 && z < 0.6 && !(z > -0.34 && z < -0.2);            // side glass, B pillar out
    const shield = (z) => z >= 0.13 && z < 1.02, rearGlass = (z) => z <= -1.73 && z > -1.95;
    function colour(k, z, well) {
        if (well) return WELL;
        if (k < R_SILL) return BLACK;                       // underbody
        if (k < R_SIDE) return BLACK;                       // black sill cladding
        if (k < R_BELT) return PAINT;
        const cab = inCabin(z);
        if (k < R_EDGE) return !cab ? PAINT : dlo(z) ? GLASS : BLACK;                 // windows / black pillars
        if (k < R_ROOF) return !cab ? PAINT : shield(z) || rearGlass(z) ? BLACK : PAINT;   // roof edge, A / D pillars
        return !cab ? PAINT : shield(z) || rearGlass(z) ? GLASS : PAINT;              // roof, windscreen, rear window
    }
    for (let i = 0; i < NS - 1; i++) for (let k = 0; k < ROWS - 1; k++) {
        const A = G[i][k], B = G[i + 1][k], C = G[i + 1][k + 1], D = G[i][k + 1];
        const zm = (A.p[2] + B.p[2]) / 2;
        const col = colour(k, zm, A.well || B.well || C.well || D.well);
        const out = norm([A.n[0] + C.n[0], A.n[1] + C.n[1], A.n[2] + C.n[2]]);
        const flat = col === BLACK || col === WELL;
        tri(body, A.p, B.p, C.p, col, out, flat ? null : A.n, flat ? null : B.n, flat ? null : C.n);
        tri(body, A.p, C.p, D.p, col, out, flat ? null : A.n, flat ? null : C.n, flat ? null : D.n);
    }
    // end caps (front face and tailgate), horizontal bands so the bumpers can be black
    for (const [i, dir] of [[NS - 1, 1], [0, -1]]) {
        const P = G[i];
        for (let k = 0; k < ROWS - 1; k++) {
            const a = P[k].p, b = P[k + 1].p, c = [0, b[1], b[2]], d = [0, a[1], a[2]];
            const y = (a[1] + b[1]) / 2;
            const col = dir > 0 ? (y < 0.33 ? BLACK : PAINT) : (y < 0.42 ? BLACK : y > 0.9 && k >= R_BELT ? GLASS : PAINT);
            quad(body, a, b, c, d, col, [0, 0, dir]);
        }
    }

    // ---- wheel arch cladding: a black band around each opening and a lip into the well ----
    for (const az of [AXLE.zf, AXLE.zr]) {
        const ra = AXLE.arch, w = 0.1, N = 20;
        for (let j = 0; j < N; j++) {
            const t0 = -0.18 + (Math.PI + 0.36) * j / N, t1 = -0.18 + (Math.PI + 0.36) * (j + 1) / N;
            const pt = (t, r, dx) => { const z = az + Math.cos(t) * r, y = AXLE.y + Math.sin(t) * r; return [sideX(z, Math.max(0.2, y)) + dx, y, z]; };
            quad(body, pt(t0, ra, 0.012), pt(t1, ra, 0.012), pt(t1, ra + w, 0.01), pt(t0, ra + w, 0.01), BLACK, [1, 0, 0]);
            const l0 = pt(t0, ra, 0.012), l1 = pt(t1, ra, 0.012);
            const i0 = [0.56, l0[1], l0[2]], i1 = [0.56, l1[1], l1[2]];
            const c = [0.6, AXLE.y, az];
            quad(body, l0, l1, i1, i0, WELL, sub(c, [0.6, (l0[1] + l1[1]) / 2, (l0[2] + l1[2]) / 2]));
        }
    }

    // ---- side details: air bumps with red inserts, door lines, handles, mirrors ----
    const skin = (z, y, d) => [sideX(z, y) + d, y, z];
    function decal(z0, z1, y0, y1, col, d, nz) {   // a patch that follows the side
        nz = nz || 6;
        for (let j = 0; j < nz; j++) {
            const za = z0 + (z1 - z0) * j / nz, zb = z0 + (z1 - z0) * (j + 1) / nz;
            quad(body, skin(za, y0, d), skin(zb, y0, d), skin(zb, y1, d), skin(za, y1, d), col, [1, 0, 0]);
        }
    }
    decal(-0.98, 0.7, 0.4, 0.6, BLACK, 0.018, 10);            // the air bump panel
    for (let b = 0; b < 4; b++) { const z = -0.62 + b * 0.32; decal(z, z + 0.2, 0.44, 0.56, [44, 45, 49, 0], 0.024, 2); }   // its capsules
    decal(0.5, 0.64, 0.44, 0.56, ACCENT, 0.026, 2);            // red insert at the front end
    decal(-0.9, -0.76, 0.44, 0.56, ACCENT, 0.026, 2);          // and the rear end
    for (const z of [0.66, -0.27, -1.22]) decal(z - 0.006, z + 0.006, 0.62, 0.97, LINE, 0.006, 1);   // door shut lines
    for (const z of [0.2, -0.72]) decal(z - 0.11, z + 0.03, 0.9, 0.935, CHROME, 0.02, 1);           // handles
    // mirror: black stalk, red cap
    const box = (cx, cy, cz, sx, sy, sz, colFn) => {
        const x0 = cx - sx / 2, x1 = cx + sx / 2, y0 = cy - sy / 2, y1 = cy + sy / 2, z0 = cz - sz / 2, z1 = cz + sz / 2;
        const f = [[[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1], [1, 0, 0]], [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0]],
            [[x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [0, 1, 0]], [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0]],
            [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1]], [[x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [x1, y0, z0], [0, 0, -1]]];
        for (const q of f) quad(body, q[0], q[1], q[2], q[3], colFn(q[4]), q[4]);
    };
    const mx = sideX(0.58, 1.0);
    box(mx + 0.04, 1.02, 0.58, 0.08, 0.04, 0.07, () => BLACK);
    box(mx + 0.13, 1.06, 0.55, 0.13, 0.11, 0.11, (n) => n[2] < -0.5 ? [40, 42, 48, 0] : ACCENT);    // glass faces back
    // roof rail lip at the back (spoiler), roof colour
    box(0.0001 + 0.31, lin(TOP, -1.8) + 0.012, -1.8, 0.62, 0.03, 0.12, () => ACCENT);

    // ---- front face (z = 2.0): light strip, bar, round headlamps, grille, plate, fog lamps ----
    const fz = 2.0 + 0.004;
    const rectF = (x0, x1, y0, y1, col, dz) => quad(body, [x0, y0, fz + (dz || 0)], [x1, y0, fz + (dz || 0)], [x1, y1, fz + (dz || 0)], [x0, y1, fz + (dz || 0)], col, [0, 0, 1]);
    const discF = (cx, cy, r, col, dz, n) => { n = n || 14; for (let j = 0; j < n; j++) { const a0 = j / n * Math.PI * 2, a1 = (j + 1) / n * Math.PI * 2; tri(body, [cx, cy, fz + dz], [cx + Math.cos(a0) * r, cy + Math.sin(a0) * r, fz + dz], [cx + Math.cos(a1) * r, cy + Math.sin(a1) * r, fz + dz], col, [0, 0, 1]); } };
    const ringF = (cx, cy, r0, r1, col, dz) => { const n = 16; for (let j = 0; j < n; j++) { const a0 = j / n * Math.PI * 2, a1 = (j + 1) / n * Math.PI * 2; quad(body, [cx + Math.cos(a0) * r0, cy + Math.sin(a0) * r0, fz + dz], [cx + Math.cos(a1) * r0, cy + Math.sin(a1) * r0, fz + dz], [cx + Math.cos(a1) * r1, cy + Math.sin(a1) * r1, fz + dz], [cx + Math.cos(a0) * r1, cy + Math.sin(a0) * r1, fz + dz], col, [0, 0, 1]); } };
    rectF(0, 0.2, 0.66, 0.74, BLACK, 0);            // the bar across the nose
    rectF(0, 0.2, 0.695, 0.705, CHROME, 0.002);    // a thin bright line in it
    rectF(0.2, 0.62, 0.675, 0.715, LIGHT, 0.002);   // daytime light strip
    rectF(0.2, 0.64, 0.645, 0.675, BLACK, 0.001);
    ringF(0.5, 0.53, 0.075, 0.1, BLACK, 0.003);     // headlamp housing
    discF(0.5, 0.53, 0.075, LIGHT, 0.004);          // headlamp
    discF(0.5, 0.53, 0.025, CHROME, 0.005, 8);
    rectF(0, 0.36, 0.42, 0.6, BLACK, 0.001);       // upper grille
    for (let j = 0; j < 5; j++) rectF(0, 0.34, 0.435 + j * 0.033, 0.447 + j * 0.033, [52, 54, 58, 0], 0.002);
    rectF(0, 0.2, 0.36, 0.44, PLATE, 0.003);       // plate (blank)
    rectF(0, 0.4, 0.24, 0.35, BLACK, 0.001);       // lower intake
    for (let j = 0; j < 3; j++) rectF(0, 0.38, 0.26 + j * 0.03, 0.27 + j * 0.03, [52, 54, 58, 0], 0.002);
    ringF(0.5, 0.33, 0.035, 0.068, ACCENT, 0.003);  // fog lamp ring (roof colour)
    discF(0.5, 0.33, 0.035, LENS, 0.004, 10);
    // ---- tailgate (z = -2.0): tail lights, plate, handle line ----
    const rz = -2.0 - 0.004;
    const rectR = (x0, x1, y0, y1, col, dz) => quad(body, [x0, y0, rz - (dz || 0)], [x1, y0, rz - (dz || 0)], [x1, y1, rz - (dz || 0)], [x0, y1, rz - (dz || 0)], col, [0, 0, -1]);
    rectR(0.42, 0.68, 0.74, 0.9, LIGHT, 0);        // tail light (red at the back in the shader)
    rectR(0.42, 0.68, 0.9, 0.93, BLACK, 0);
    rectR(0, 0.2, 0.52, 0.62, PLATE, 0.001);
    rectR(0, 0.26, 0.65, 0.68, BLACK, 0.001);
    rectR(0.45, 0.62, 0.3, 0.34, [150, 30, 30, 0], 0.001);   // rear reflectors on the bumper

    // ---- mirror the left half to the right ----
    const n0 = body.pos.length / 3;
    for (let v = 0; v < n0; v += 3) {
        for (const w of [0, 2, 1]) {   // reversed winding
            const q = (v + w) * 3;
            V(body, [-body.pos[q], body.pos[q + 1], body.pos[q + 2]], [-body.nrm[q], body.nrm[q + 1], body.nrm[q + 2]], body.col.slice((v + w) * 4, (v + w) * 4 + 4));
        }
    }

    // ---- wheels: tyre + two-tone alloy (dark spokes with bright faces) ----
    const parts = [body];
    function wheel(name, sx, z) {
        const w = { name, pos: [], nrm: [], col: [], idx: [] };
        const R = AXLE.r, Rr = 0.205, wd = 0.2, N = 20, x0 = AXLE.x - wd / 2, x1 = AXLE.x + wd / 2, cy = AXLE.y;
        const P = (x, a, r) => [x, cy + Math.sin(a) * r, z + Math.cos(a) * r];
        for (let j = 0; j < N; j++) {
            const a0 = j / N * Math.PI * 2, a1 = (j + 1) / N * Math.PI * 2, am = (a0 + a1) / 2;
            const out = [0, Math.sin(am), Math.cos(am)];
            quad(w, P(x0, a0, R), P(x1, a0, R), P(x1, a1, R), P(x0, a1, R), [24, 24, 26, 0], out);                   // tread
            quad(w, P(x1, a0, R), P(x1, a1, R), P(x1 + 0.005, a1, Rr + 0.02), P(x1 + 0.005, a0, Rr + 0.02), [34, 34, 37, 0], [1, 0, 0]);   // sidewall
            quad(w, P(x0, a0, R), P(x0, a1, R), P(x0, a1, 0.05), P(x0, a0, 0.05), [24, 24, 26, 0], [-1, 0, 0]);       // inner side
            quad(w, P(x1 + 0.005, a0, Rr + 0.02), P(x1 + 0.005, a1, Rr + 0.02), P(x1 - 0.01, a1, Rr), P(x1 - 0.01, a0, Rr), [70, 72, 76, 0], [1, 0, 0]);   // rim lip
        }
        // the alloy face: 5 double spokes
        const M = 40;
        for (let j = 0; j < M; j++) {
            const a0 = j / M * Math.PI * 2, a1 = (j + 1) / M * Math.PI * 2, am = (a0 + a1) / 2;
            const f = ((am / (Math.PI * 2) * 5) % 1);
            const spoke = (f > 0.08 && f < 0.2) || (f > 0.28 && f < 0.4);
            const face = spoke ? [150, 154, 160, 0] : [20, 20, 22, 0];
            quad(w, P(x1 - 0.01, a0, Rr), P(x1 - 0.01, a1, Rr), P(x1 + (spoke ? 0.01 : -0.04), a1, 0.06), P(x1 + (spoke ? 0.01 : -0.04), a0, 0.06), face, [1, 0, 0]);
        }
        for (let j = 0; j < 10; j++) { const a0 = j / 10 * Math.PI * 2, a1 = (j + 1) / 10 * Math.PI * 2; tri(w, [x1 + 0.015, cy, z], P(x1 + 0.01, a0, 0.06), P(x1 + 0.01, a1, 0.06), [60, 62, 66, 0], [1, 0, 0]); }
        if (sx < 0) {   // right side: mirror
            for (let v = 0; v < w.pos.length; v += 9) {
                for (let c = 0; c < 9; c += 3) { w.pos[v + c] = -w.pos[v + c]; w.nrm[v + c] = -w.nrm[v + c]; }
                for (let c = 0; c < 3; c++) { const t = w.pos[v + 3 + c]; w.pos[v + 3 + c] = w.pos[v + 6 + c]; w.pos[v + 6 + c] = t; const u = w.nrm[v + 3 + c]; w.nrm[v + 3 + c] = w.nrm[v + 6 + c]; w.nrm[v + 6 + c] = u; }
            }
        }
        parts.push(w);
    }
    wheel('wfl', 1, AXLE.zf); wheel('wfr', -1, AXLE.zf); wheel('wbl', 1, AXLE.zr); wheel('wbr', -1, AXLE.zr);
    for (const p of parts) for (let k = 0; k < p.pos.length; k++) p.pos[k] *= K;
    return parts;
}
