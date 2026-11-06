// Builds the race tracks from real data:
//  - road network: OpenStreetMap (osm/roads.json, ODbL, (c) OpenStreetMap contributors)
//  - heights: AWS Terrain Tiles (raw/terrain.bin, see tools/terrain.mjs)
//  - buildings: OpenStreetMap footprints near each route (osm/buildings.json, optional)
// Output: assets/routes.json (index + metadata) and assets/routes/<id>.bin (see src/track.js for the layout).
// `node tools/build-routes.mjs --plot <png>` also draws every route over the road network for checking.
import fs from 'node:fs';
import { PNG } from 'pngjs';
import { GEO, toXY } from './geo.mjs';
import { ROUTES } from './routes-def.mjs';

const STEP = 2;
const GROUND = [3.5, 10, 24, 48, 90, 160];      // lateral offsets (beyond the asphalt edge) of the ground strip
const roads = JSON.parse(fs.readFileSync('osm/roads.json', 'utf8'));
const tmeta = JSON.parse(fs.readFileSync('raw/terrain.json', 'utf8'));
const tgrid = new Float32Array(fs.readFileSync('raw/terrain.bin').buffer.slice(0));
const bfile = fs.existsSync('osm/buildings.json') ? JSON.parse(fs.readFileSync('osm/buildings.json', 'utf8')) : null;

function terrain(x, z) {
    const fx = (x - tmeta.x0) / tmeta.step, fz = (z - tmeta.z0) / tmeta.step;
    const i = Math.max(0, Math.min(tmeta.nx - 2, Math.floor(fx))), j = Math.max(0, Math.min(tmeta.nz - 2, Math.floor(fz)));
    const a = Math.max(0, Math.min(1, fx - i)), b = Math.max(0, Math.min(1, fz - j));
    const g = (ii, jj) => tgrid[jj * tmeta.nx + ii];
    return (g(i, j) * (1 - a) + g(i + 1, j) * a) * (1 - b) + (g(i, j + 1) * (1 - a) + g(i + 1, j + 1) * a) * b;
}

// ---- graph ----
const CLASS = { motorway: 1, trunk: 1, primary: 1.05, secondary: 1.15, tertiary: 1.35, motorway_link: 1.3, trunk_link: 1.3,
    primary_link: 1.3, secondary_link: 1.4, tertiary_link: 1.6, unclassified: 2.6, residential: 4, living_street: 8 };
const WIDTH = { motorway: 11, trunk: 10, primary: 9, secondary: 8, tertiary: 7, unclassified: 6.5, residential: 6, living_street: 5.5 };
const nodes = new Map();   // osm node id -> { x, z, edges: [] }
for (const w of roads.ways) {   // node ids: the rounded coordinates (shared nodes have the same ones)
    w.nodes = [];
    for (let k = 0; k < w.g.length; k += 2) w.nodes.push(w.g[k].toFixed(5) + ',' + w.g[k + 1].toFixed(5));
    const cls = CLASS[w.h] || 3;
    for (let k = 0; k < w.nodes.length; k++) {
        const id = w.nodes[k];
        if (!nodes.has(id)) { const p = toXY(w.g[k * 2], w.g[k * 2 + 1]); nodes.set(id, { id, x: p.x, z: p.z, edges: [] }); }
    }
    for (let k = 1; k < w.nodes.length; k++) {
        const a = nodes.get(w.nodes[k - 1]), b = nodes.get(w.nodes[k]);
        const len = Math.hypot(a.x - b.x, a.z - b.z);
        const e = { len, cost: len * cls, way: w };
        a.edges.push({ to: b.id, ...e }); b.edges.push({ to: a.id, ...e });
    }
}
function nearestNode(lat, lon) {
    const p = toXY(lat, lon);
    let best = null, bd = 1e18;
    for (const n of nodes.values()) {
        if (!n.edges.length) continue;
        const good = n.edges.some(e => (CLASS[e.way.h] || 3) <= 1.5);
        const d = Math.hypot(n.x - p.x, n.z - p.z) * (good ? 1 : 1.6);
        if (d < bd) { bd = d; best = n; }
    }
    return best;
}
function dijkstra(a, b, banned) {
    const dist = new Map([[a.id, 0]]), prev = new Map();
    const heap = [[0, a.id]];
    const push = (it) => { heap.push(it); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
    const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
    while (heap.length) {
        const [d, id] = pop();
        if (id === b.id) break;
        if (d > dist.get(id)) continue;
        for (const e of nodes.get(id).edges) {
            const pen = banned && banned.has(e.to) && e.to !== b.id ? 30 : 1;
            const nd = d + e.cost * pen;
            if (nd < (dist.get(e.to) ?? 1e18)) { dist.set(e.to, nd); prev.set(e.to, { from: id, way: e.way }); push([nd, e.to]); }
        }
    }
    const path = [];
    let c = b.id;
    if (!prev.has(c)) throw new Error('no path');
    while (c !== a.id) { const p = prev.get(c); path.push({ id: c, way: p.way }); c = p.from; }
    path.push({ id: a.id, way: path.length ? path[path.length - 1].way : null });
    return path.reverse();
}

// ---- polyline helpers ----
function resample(pts, step) {   // pts: [{x,z,w}] -> evenly spaced
    const out = [{ ...pts[0] }];
    let carry = 0;
    for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i];
        const L = Math.hypot(b.x - a.x, b.z - a.z);
        if (L < 1e-6) continue;
        let t = step - carry;
        while (t <= L) {
            const f = t / L;
            out.push({ x: a.x + (b.x - a.x) * f, z: a.z + (b.z - a.z) * f, w: a.w + (b.w - a.w) * f });
            t += step;
        }
        carry = L - (t - step);
    }
    return out;
}
function smooth(pts, radius, iters, closed) {
    let p = pts;
    for (let it = 0; it < iters; it++) {
        const q = new Array(p.length);
        for (let i = 0; i < p.length; i++) {
            let sx = 0, sz = 0, n = 0;
            for (let k = -radius; k <= radius; k++) {
                let j = i + k;
                if (closed) j = (j + p.length) % p.length; else if (j < 0 || j >= p.length) continue;
                sx += p[j].x; sz += p[j].z; n++;
            }
            const keep = !closed && (i === 0 || i === p.length - 1);
            q[i] = keep ? p[i] : { ...p[i], x: sx / n, z: sz / n };
        }
        p = q;
    }
    return p;
}

function buildRoute(def) {
    // waypoints -> path through the real network
    const wps = def.way.map(([la, lo]) => nearestNode(la, lo));
    let path = [];
    const used = new Set();
    for (let k = 1; k < wps.length; k++) {
        const seg = dijkstra(wps[k - 1], wps[k], used);
        for (const s of seg) used.add(s.id);
        if (path.length) seg.shift();
        path = path.concat(seg);
    }
    const closed = def.laps > 0;
    let pts = path.map(p => { const n = nodes.get(p.id); return { x: n.x, z: n.z, w: WIDTH[p.way ? p.way.h : 'secondary'] || 6, name: p.way ? p.way.n : '' }; });
    if (closed && Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].z - pts[pts.length - 1].z) < 1) pts.pop();
    const names = [];
    for (const p of pts) if (p.name && !names.includes(p.name)) names.push(p.name);
    if (closed) pts.push({ ...pts[0] });
    pts = resample(pts, 1);
    if (closed) pts.pop();
    // smooth: keeps the real shape, rounds the corners to a drivable radius
    pts = smooth(pts, 6, 6, closed);
    pts = smooth(pts, 3, 4, closed);
    if (closed) pts.push({ ...pts[0] });
    pts = resample(pts, STEP);
    if (closed) { // make the last sample land exactly on the first
        const a = pts[pts.length - 1], b = pts[0];
        if (Math.hypot(a.x - b.x, a.z - b.z) < STEP * 0.5) pts.pop();
        pts.push({ ...pts[0] });
    }
    const n = pts.length;
    // heights: terrain under the road, smoothed, grade limited (real roads cut and fill)
    let y = pts.map(p => terrain(p.x, p.z));
    for (let it = 0; it < 3; it++) {
        const yy = y.slice();
        for (let i = 0; i < n; i++) { let s = 0, c = 0; for (let k = -12; k <= 12; k++) { let j = i + k; if (closed) j = (j + n - 1) % (n - 1); else if (j < 0 || j >= n) continue; s += y[j]; c++; } yy[i] = s / c; }
        y = yy;
    }
    for (let i = 0; i < n; i++) y[i] = Math.max(y[i], 1.2);   // the sea is at 0
    const MAXG = 0.11 * STEP;
    for (let pass = 0; pass < 4; pass++) {
        for (let i = 1; i < n; i++) y[i] = Math.min(y[i], y[i - 1] + MAXG), y[i] = Math.max(y[i], y[i - 1] - MAXG);
        for (let i = n - 2; i >= 0; i--) y[i] = Math.min(y[i], y[i + 1] + MAXG), y[i] = Math.max(y[i], y[i + 1] - MAXG);
    }
    if (closed) y[n - 1] = y[0];
    // widths: real class width x 1.3 for racing room, smoothed
    let hw = pts.map(p => Math.max(6.5, p.w * 1.3));
    for (let it = 0; it < 4; it++) { const h2 = hw.slice(); for (let i = 0; i < n; i++) { let s = 0, c = 0; for (let k = -15; k <= 15; k++) { const j = i + k; if (j < 0 || j >= n) continue; s += hw[j]; c++; } h2[i] = s / c; } hw = h2; }
    // tangents / left vectors
    const L = pts.map((p, i) => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)]; const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1; return { lx: dz / l, lz: -dx / l }; });
    // ground strips; cut / fill near the road
    const gl = new Float32Array(n * GROUND.length), gr = new Float32Array(n * GROUND.length);
    const flags = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
        for (let side = 0; side < 2; side++) {
            const sg = side === 0 ? 1 : -1;
            let seaHits = 0;
            for (let k = 0; k < GROUND.length; k++) {
                const off = hw[i] + GROUND[k];
                const gx = pts[i].x + L[i].lx * off * sg, gz = pts[i].z + L[i].lz * off * sg;
                const t = terrain(gx, gz);
                const blend = k === 0 ? 0 : k === 1 ? 0.25 : k === 2 ? 0.55 : 1;
                let h = y[i] + 0.15 + (t - y[i] - 0.15) * blend;
                if (t < 0.6 && k >= 2) { h = Math.min(h, -1.5); seaHits++; }
                (side === 0 ? gl : gr)[i * GROUND.length + k] = h;
            }
            if (seaHits >= 2) flags[i] |= side === 0 ? 1 : 2;   // 1 sea on the left, 2 sea on the right
        }
    }
    // where the route passes near another part of itself (crossings): no walls, no props, no ramps there
    {
        const cell = 30, grid = new Map();
        for (let i = 0; i < n; i++) { const key = Math.floor(pts[i].x / cell) + ',' + Math.floor(pts[i].z / cell); if (!grid.has(key)) grid.set(key, []); grid.get(key).push(i); }
        for (let i = 0; i < n; i++) {
            const cx = Math.floor(pts[i].x / cell), cz = Math.floor(pts[i].z / cell);
            for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const j of grid.get((cx + a) + ',' + (cz + b)) || []) {
                let gap = Math.abs(i - j); if (closed) gap = Math.min(gap, n - 1 - gap);
                if (gap > 40 && Math.hypot(pts[i].x - pts[j].x, pts[i].z - pts[j].z) < hw[i] + hw[j] + 8) flags[i] |= 4;
            }
        }
    }
    // ramps: on long, straight, flat-ish parts (not in the first 300 m, not in the last 200 m)
    const ramps = [];
    let lastRamp = -1e9;
    for (let i = 150; i < n - 100; i++) {
        const s = i * STEP;
        if (s - lastRamp < 650) continue;
        let straight = true;
        for (let k = -40; k <= 70; k++) {
            const a = L[Math.max(0, i + k - 2)], b = L[Math.min(n - 1, i + k + 2)];
            if (a.lx * b.lx + a.lz * b.lz < 0.996) { straight = false; break; }
        }
        if (!straight) continue;
        let clear = true; for (let k = -10; k < 20; k++) if (flags[Math.min(n - 1, i + k)] & 4) clear = false;
        if (!clear) continue;
        const d = ((i * 7919) % 3 - 1) * hw[i] * 0.45;
        ramps.push({ s, d: +d.toFixed(2), w: 6, len: 11, h: 1.6 });
        lastRamp = s;
    }
    // terrain patch: a 30 m grid within 600 m of the route. Under the ground strips it follows the strips (a bit
    // lower, so they win); beyond them it is the real terrain; the sea is under the water plane. The game draws it
    // in tiles: no gaps on the inside of bends, no scenery standing on nothing.
    const TC = 30, TR = 600;
    let tx0 = 1e9, tz0 = 1e9, tx1 = -1e9, tz1 = -1e9;
    for (const p of pts) { tx0 = Math.min(tx0, p.x); tz0 = Math.min(tz0, p.z); tx1 = Math.max(tx1, p.x); tz1 = Math.max(tz1, p.z); }
    tx0 = Math.floor((tx0 - TR) / TC) * TC; tz0 = Math.floor((tz0 - TR) / TC) * TC;
    const tnx = Math.ceil((tx1 + TR - tx0) / TC) + 1, tnz = Math.ceil((tz1 + TR - tz0) / TC) + 1;
    const tmask = new Uint8Array(tnx * tnz), th = new Int16Array(tnx * tnz).fill(-32768);
    const RR = Math.ceil(TR / TC);
    for (let i = 0; i < n; i += 4) {
        const ci = Math.round((pts[i].x - tx0) / TC), cj = Math.round((pts[i].z - tz0) / TC);
        for (let a = -RR; a <= RR; a++) for (let b = -RR; b <= RR; b++) {
            if (a * a + b * b > RR * RR) continue;
            const ii = ci + a, jj = cj + b; if (ii >= 0 && jj >= 0 && ii < tnx && jj < tnz) tmask[jj * tnx + ii] = 1;
        }
    }
    const tcell = 40, tgridS = new Map();
    for (let i = 0; i < n; i++) { const key = Math.floor(pts[i].x / tcell) + ',' + Math.floor(pts[i].z / tcell); if (!tgridS.has(key)) tgridS.set(key, []); tgridS.get(key).push(i); }
    const NGt = GROUND.length;
    for (let jj = 0; jj < tnz; jj++) for (let ii = 0; ii < tnx; ii++) {
        if (!tmask[jj * tnx + ii]) continue;
        const x = tx0 + ii * TC, z = tz0 + jj * TC;
        const t = terrain(x, z);
        let h = t < 0.6 ? -2.5 : t;
        // under the strips of every stretch of road that covers this point: just below the lowest strip height
        let under = 1e9;
        const cx = Math.floor(x / tcell), cz = Math.floor(z / tcell);
        for (let a = -5; a <= 5; a++) for (let b = -5; b <= 5; b++) {
            const l = tgridS.get((cx + a) + ',' + (cz + b)); if (!l) continue;
            for (const j of l) {
                const ex = x - pts[j].x, ez = z - pts[j].z;
                if (Math.abs(ex * -L[j].lz + ez * L[j].lx) > 16) continue;
                const dj = ex * L[j].lx + ez * L[j].lz, oj = Math.abs(dj) - hw[j];
                if (oj > GROUND[NGt - 1] - 4) continue;
                let g;
                if (oj <= GROUND[0]) g = y[j] - 0.6;
                else { const aj = dj >= 0 ? gl : gr; let k = 1; while (k < NGt - 1 && GROUND[k] < oj) k++; const f = Math.min(1, (oj - GROUND[k - 1]) / (GROUND[k] - GROUND[k - 1])); g = aj[j * NGt + k - 1] + (aj[j * NGt + k] - aj[j * NGt + k - 1]) * f; }
                under = Math.min(under, g - 0.5);
            }
        }
        if (under < 1e8) h = Math.min(h, under);
        th[jj * tnx + ii] = Math.round(Math.max(-300, Math.min(3000, h * 10)));
    }
    const ter = { x0: tx0, z0: tz0, cell: TC, nx: tnx, nz: tnz, h: th };

    // buildings near this route (footprints within 160 m of the centre line, not on the road)
    let bld = [];
    const NG = GROUND.length;
    if (bfile) {
        const cell = 40, grid = new Map();
        for (let i = 0; i < n; i++) { const key = Math.floor(pts[i].x / cell) + ',' + Math.floor(pts[i].z / cell); if (!grid.has(key)) grid.set(key, []); grid.get(key).push(i); }
        const near = (x, z) => {   // nearest sample and distance
            let bi = -1, bd = 1e9;
            const cx = Math.floor(x / cell), cz = Math.floor(z / cell);
            for (let a = -5; a <= 5; a++) for (let b = -5; b <= 5; b++) {
                const l = grid.get((cx + a) + ',' + (cz + b)); if (!l) continue;
                for (const i of l) { const d = Math.hypot(pts[i].x - x, pts[i].z - z); if (d < bd) { bd = d; bi = i; } }
            }
            return [bi, bd];
        };
        for (const b of bfile.b) {
            const poly = [];
            for (let k = 0; k < b.g.length; k += 2) { const p = toXY(b.g[k], b.g[k + 1]); poly.push(p); }
            if (poly.length > 3 && Math.hypot(poly[0].x - poly[poly.length - 1].x, poly[0].z - poly[poly.length - 1].z) < 0.1) poly.pop();
            if (poly.length < 3) continue;
            let cx = 0, cz = 0; for (const p of poly) { cx += p.x; cz += p.z; } cx /= poly.length; cz /= poly.length;
            const [bi, bd] = near(cx, cz);
            if (bi < 0 || bd > 170) continue;
            let clash = false;
            for (const p of poly) { const [pi, pd] = near(p.x, p.z); if (pi >= 0 && pd < hw[pi] + 5) { clash = true; break; } }
            if (clash) continue;
            let area = 0; for (let k = 0; k < poly.length; k++) { const a = poly[k], c = poly[(k + 1) % poly.length]; area += a.x * c.z - c.x * a.z; }
            area = Math.abs(area) / 2;
            if (area < 25) continue;
            let h = b.h || (b.lv ? b.lv * 3.2 + 1 : 0);
            if (!h) { const r = ((Math.abs(Math.round(cx * 13 + cz * 7))) % 100) / 100; h = area > 600 ? 9 + r * 12 : 6 + r * 9; }
            h = Math.min(h, 80);
            // stand on the ground the game draws (the ground strips), not on raw terrain: no floating buildings,
            // and none past the end of the strips or over the sea
            let base = 1e9, bad = false;
            for (const p of poly) {
                const [pi] = near(p.x, p.z);
                const dx = p.x - pts[pi].x, dz = p.z - pts[pi].z;
                const d = dx * L[pi].lx + dz * L[pi].lz, off = Math.abs(d) - hw[pi];
                if (off > GROUND[GROUND.length - 1] - 8) { bad = true; break; }
                const arr = d >= 0 ? gl : gr;
                let g;
                if (off <= GROUND[0]) g = y[pi] + 0.15;
                else { let k = 1; while (k < NG - 1 && GROUND[k] < off) k++; const a = GROUND[k - 1], b = GROUND[k], t = Math.min(1, (off - a) / (b - a)); g = arr[pi * NG + k - 1] + (arr[pi * NG + k] - arr[pi * NG + k - 1]) * t; }
                if (g < 0.5) { bad = true; break; }
                base = Math.min(base, g);
                // the strips of any other stretch of the route that covers this point must be land too (a curved
                // route lays sea strips across buildings that are near a different part of it)
                const gx0 = Math.floor(p.x / cell), gz0 = Math.floor(p.z / cell);
                for (let a = -5; a <= 5 && !bad; a++) for (let b2 = -5; b2 <= 5 && !bad; b2++) {
                    const l = grid.get((gx0 + a) + ',' + (gz0 + b2)); if (!l) continue;
                    for (const j of l) {
                        const ex = p.x - pts[j].x, ez = p.z - pts[j].z;
                        const along = ex * -L[j].lz + ez * L[j].lx;     // forward = (-lz, lx)
                        if (Math.abs(along) > 1.5) continue;
                        const dj = ex * L[j].lx + ez * L[j].lz, oj = Math.abs(dj) - hw[j];
                        if (oj < GROUND[1] || oj > GROUND[GROUND.length - 1]) continue;
                        const aj = dj >= 0 ? gl : gr; let k = 1; while (k < NG - 1 && GROUND[k] < oj) k++;
                        if (Math.min(aj[j * NG + k - 1], aj[j * NG + k]) < 0.5) { bad = true; break; }
                    }
                }
                if (bad) break;
            }
            if (bad) continue;
            bld.push({ i: bi, h: +h.toFixed(1), y: +base.toFixed(2), p: poly.map(p => [+p.x.toFixed(2), +p.z.toFixed(2)]) });
        }
        bld.sort((a, b) => a.i - b.i);
        // keep the budget: at most ~2600 buildings per route, the closest first
        if (bld.length > 2600) bld = bld.slice(0, 2600);
    }
    return { def, pts, y, hw, gl, gr, flags, ramps, closed, names, bld, n, ter };
}

function writeRoute(R) {
    const n = R.n;
    const f32 = new Float32Array(n * 5 + n * GROUND.length * 2);
    let o = 0;
    for (let i = 0; i < n; i++) f32[o++] = R.pts[i].x;
    for (let i = 0; i < n; i++) f32[o++] = R.y[i];
    for (let i = 0; i < n; i++) f32[o++] = R.pts[i].z;
    for (let i = 0; i < n; i++) f32[o++] = R.hw[i];
    for (let i = 0; i < n; i++) f32[o++] = R.hw[i];
    f32.set(R.gl, o); o += R.gl.length;
    f32.set(R.gr, o); o += R.gr.length;
    const buf = Buffer.concat([Buffer.from(f32.buffer), Buffer.from(R.flags.buffer)]);
    fs.writeFileSync(`assets/routes/${R.def.id}.bin`, buf);
    // buildings: compact JSON (Int16 decimetres would be smaller, JSON keeps it simple and gzip does well on Pages)
    const bl = R.bld.map(b => [b.i, b.h, b.y, b.p.flat()]);
    fs.writeFileSync(`assets/routes/${R.def.id}.bld.json`, JSON.stringify(bl));
    // terrain patch: header (x0, z0, cell, nx, nz as Float32) + Int16 heights in decimetres (-32768 = none)
    const T = R.ter, head = new Float32Array([T.x0, T.z0, T.cell, T.nx, T.nz]);
    fs.writeFileSync(`assets/routes/${R.def.id}.ter.bin`, Buffer.concat([Buffer.from(head.buffer), Buffer.from(T.h.buffer)]));
    // minimap: every 10th sample
    const mm = [];
    for (let i = 0; i < n; i += 10) mm.push(Math.round(R.pts[i].x), Math.round(R.pts[i].z));
    return { id: R.def.id, name: R.def.name, area: R.def.area, laps: R.def.laps, closed: R.closed, n, length: Math.round((n - 1) * STEP),
        ground: GROUND, ramps: R.ramps, roads: R.names.slice(0, 6), minimap: mm, buildings: R.bld.length,
        climb: Math.round(Math.max(...R.y) - Math.min(...R.y)) };
}

const plotArg = process.argv.indexOf('--plot');
fs.mkdirSync('assets/routes', { recursive: true });
const index = [];
const built = [];
for (const def of ROUTES) {
    const R = buildRoute(def);
    built.push(R);
    const m = writeRoute(R);
    index.push(m);
    let cross = 0; for (let i = 0; i < R.n; i++) if (R.flags[i] & 4) cross++;
    console.log(def.id.padEnd(12), 'cross', cross, (m.length + ' m').padEnd(8), 'climb', m.climb + ' m', 'ramps', m.ramps.length, 'bld', m.buildings, '|', m.roads.slice(0, 3).join(' / '));
}
fs.writeFileSync('assets/routes.json', JSON.stringify({ license: 'Road shapes: (c) OpenStreetMap contributors, ODbL 1.0. Heights: AWS Terrain Tiles.', routes: index }));
// the centre lines, for the buildings request (osm/request.json, job "buildings")
fs.writeFileSync('raw/route-lines.json', JSON.stringify(built.map(R => { const a = []; for (let i = 0; i < R.n; i += 15) { const ll = GEO.toLL(R.pts[i].x, R.pts[i].z); a.push(+ll.lat.toFixed(5), +ll.lon.toFixed(5)); } return a; })));

if (plotArg > 0) {
    const file = process.argv[plotArg + 1];
    const W = 2000, H = 1300;
    const png = new PNG({ width: W, height: H });
    png.data.fill(255);
    const a = toXY(GEO.bbox[0], GEO.bbox[1]), b = toXY(GEO.bbox[2], GEO.bbox[3]);
    const sx = W / (b.x - a.x), sz = H / (a.z - b.z);
    const put = (x, z, c, r = 0) => { const px = Math.round((x - a.x) * sx), py = Math.round((z - b.z) * sz); for (let dx = -r; dx <= r; dx++) for (let dy = -r; dy <= r; dy++) { const X = px + dx, Y = py + dy; if (X < 0 || Y < 0 || X >= W || Y >= H) continue; const o = (Y * W + X) * 4; png.data[o] = c[0]; png.data[o + 1] = c[1]; png.data[o + 2] = c[2]; } };
    for (let j = 0; j < H; j += 2) for (let i = 0; i < W; i += 2) { const x = a.x + i / sx, z = b.z + j / sz; if (terrain(x, z) < 0.6) put(x, z, [170, 205, 240], 1); }
    for (const w of roads.ways) { const g = w.g; const c = (CLASS[w.h] || 3) <= 1.15 ? [120, 120, 120] : [205, 205, 205]; for (let k = 2; k < g.length; k += 2) { const p = toXY(g[k - 2], g[k - 1]), q = toXY(g[k], g[k + 1]); const L2 = Math.hypot(q.x - p.x, q.z - p.z); for (let t = 0; t <= L2; t += 3) put(p.x + (q.x - p.x) * t / L2, p.z + (q.z - p.z) * t / L2, c); } }
    const COLORS = [[230, 40, 40], [40, 130, 230], [30, 170, 60], [200, 120, 0], [150, 50, 200], [0, 160, 160], [220, 0, 140], [90, 90, 0], [0, 0, 0], [255, 140, 0]];
    built.forEach((R, k) => { for (let i = 0; i < R.n; i++) put(R.pts[i].x, R.pts[i].z, COLORS[k % COLORS.length], 2); put(R.pts[0].x, R.pts[0].z, [0, 0, 0], 7); });
    fs.writeFileSync(file, PNG.sync.write(png));
    console.log('plot', file);
}
