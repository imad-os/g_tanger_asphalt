// Builds the scenery of a route in chunks of CH samples (100 m): road, ground strips, barriers, buildings from
// OpenStreetMap footprints and props (Kenney CC0). Each chunk becomes four merged meshes (road, core, detail,
// buildings) so the whole visible world is a few dozen draw calls; chunks far away are hidden every frame.
import * as THREE from 'three';
import { STEP } from './track.js';
import { partData } from './assets.js';
import { worldMaterial, roadMaterial, buildingMaterial, seaMaterial, skyMaterial } from './shaders.js';

export const CH = 50;
const PAVE = 3.5;          // pavement width beyond the kerb

class Geo {
    constructor() { this.p = []; this.n = []; this.c = []; this.i = []; this.extra = null; }
    get count() { return this.p.length / 3; }
    vert(x, y, z, nx, ny, nz, r, g, b, a) {
        this.p.push(x, y, z); this.n.push(nx * 127 | 0, ny * 127 | 0, nz * 127 | 0, 0); this.c.push(r, g, b, a || 0);
        return this.count - 1;
    }
    tri(a, b, c) { this.i.push(a, b, c); }
    quad(a, b, c, d) { this.i.push(a, b, c, a, c, d); }
    // place a baked model part: yaw (rad), scale, at x y z
    model(model, part, x, y, z, yaw, scale, tint) {
        const d = partData(model, part);
        const cs = Math.cos(yaw), sn = Math.sin(yaw), s = scale || 1;
        const base = this.count;
        for (let k = 0; k < d.part.n; k++) {
            const px = d.pos[k * 3] * s, py = d.pos[k * 3 + 1] * s, pz = d.pos[k * 3 + 2] * s;
            const nx = d.nrm[k * 4] / 127, ny = d.nrm[k * 4 + 1] / 127, nz = d.nrm[k * 4 + 2] / 127;
            let r = d.col[k * 4], g = d.col[k * 4 + 1], b = d.col[k * 4 + 2];
            if (tint) { r = r * tint[0] | 0; g = g * tint[1] | 0; b = b * tint[2] | 0; }
            this.p.push(x + px * cs + pz * sn, y + py, z - px * sn + pz * cs);
            this.n.push(Math.round((nx * cs + nz * sn) * 127), Math.round(ny * 127), Math.round((-nx * sn + nz * cs) * 127), 0);
            this.c.push(Math.min(255, r), Math.min(255, g), Math.min(255, b), d.col[k * 4 + 3] === 64 ? 64 : 0);
        }
        for (let k = 0; k < d.idx.length; k++) this.i.push(base + d.idx[k]);
    }
    build(withNormals = true) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.p), 3));
        if (withNormals) g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(this.n), 4, true));
        g.setAttribute('col', new THREE.BufferAttribute(new Uint8Array(this.c), 4, true));
        const big = this.count > 65535;
        g.setIndex(new THREE.BufferAttribute(big ? new Uint32Array(this.i) : new Uint16Array(this.i), 1));
        if (this.extra) for (const k in this.extra) { const v = this.extra[k]; g.setAttribute(k, Array.isArray(v) ? new THREE.BufferAttribute(new Float32Array(v), 2) : v); }
        g.computeBoundingSphere();
        return g;
    }
}

function rng(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }

const PALETTE = [[236, 234, 226], [240, 236, 224], [230, 218, 192], [222, 206, 176], [214, 190, 160], [228, 226, 220], [205, 214, 220], [232, 206, 196]];

export class World {
    constructor(scene, track, bld, theme, ter) {
        this.scene = scene; this.track = track;
        this.chunks = [];
        this.mats = { world: worldMaterial(), road: roadMaterial(), bld: buildingMaterial() };
        this.theme = theme || {};
        const nCh = Math.ceil((track.n - 1) / CH);
        const bByChunk = [];
        for (const b of bld || []) { const c = Math.min(nCh - 1, Math.floor(b[0] / CH)); (bByChunk[c] || (bByChunk[c] = [])).push(b); }
        for (let c = 0; c < nCh; c++) this.chunks.push(this.buildChunk(c, bByChunk[c] || []));
        this.tiles = ter ? this.buildTerrain(ter) : [];
        // sea: a big plane at sea level (only where there is sea near the route)
        let sea = false;
        for (let i = 0; i < track.n; i++) if (track.flags[i] & 3) { sea = true; break; }
        if (sea) {
            const g = new THREE.PlaneGeometry(30000, 30000, 1, 1); g.rotateX(-Math.PI / 2);
            this.sea = new THREE.Mesh(g, seaMaterial()); this.sea.position.y = 0; this.sea.frustumCulled = false; this.sea.renderOrder = -1;
            scene.add(this.sea);
        }
        const sky = new THREE.Mesh(new THREE.SphereGeometry(5000, 16, 8), skyMaterial());
        sky.frustumCulled = false; sky.renderOrder = 10;
        this.sky = sky; scene.add(sky);
    }

    buildChunk(c, blds) {
        const T = this.track, n = T.n;
        const i0 = c * CH, i1 = Math.min(n - 1, i0 + CH);
        const road = new Geo(), core = new Geo(), detail = new Geo(), bg = new Geo();
        const dsArr = [];
        const rnd = rng(c * 7919 + 17);
        const COLS = 9;
        const G = T.meta.ground, NG = G.length;
        for (let i = i0; i <= i1; i++) {
            const x = T.px[i], y = T.py[i], z = T.pz[i];
            const lx = T.tz[i], lz = -T.tx[i];
            const hl = T.hl[i], hr = T.hr[i];
            const s = i * STEP;
            const cols = [hl + PAVE, hl + 0.4, hl, hl * 0.5, 0, -hr * 0.5, -hr, -hr - 0.4, -hr - PAVE];
            const ys = [0.15, 0.15, 0, 0, 0, 0, 0, 0.15, 0.15];
            for (let k = 0; k < COLS; k++) {
                const d = cols[k];
                road.vert(x + lx * d, y + ys[k], z + lz * d, 0, 1, 0, 0, 0, 0, 0);
                dsArr.push(d, s, hl, hr);
            }
            if (i > i0) {
                const a = (i - i0 - 1) * COLS, b = (i - i0) * COLS;
                for (let k = 0; k < COLS - 1; k++) road.quad(a + k, a + k + 1, b + k + 1, b + k);
            }
            // ground strips both sides
            for (let side = 0; side < 2; side++) {
                const sg = side ? -1 : 1, hw = side ? hr : hl, arr = side ? T.gr : T.gl;
                const base = core.count;
                // on the inside of a bend the strips must stop before the bend's centre, or neighbouring rows
                // cross and fold into big wedges in the sky
                const maxOff = this.innerLimit(i, side);
                for (let k = -1; k < NG; k++) {
                    let off = k < 0 ? hw + PAVE : hw + G[k];
                    off = Math.min(off, Math.max(hw + PAVE + 0.5 + k, maxOff));   // (the terrain patch fills what is cut off)
                    const h = k < 0 ? y + 0.15 : arr[i * NG + k];
                    let r, g, b;
                    const sand = h < 1.5 && (T.flags[i] & (side ? 2 : 1));
                    const nz = (Math.sin(x * 0.05 + k) + Math.sin(z * 0.07 - k * 2)) * 0.5;
                    if (h < -0.5) { r = 190; g = 175; b = 140; }
                    else if (sand) { r = 222 + nz * 10; g = 205 + nz * 10; b = 160; }
                    else if (k <= 0) { r = 150 + nz * 8; g = 140 + nz * 8; b = 118; }
                    else { r = 104 + nz * 22; g = 132 + nz * 18; b = 70 + nz * 8; }
                    if (this.theme.dry && h >= 1.5) { r += 30; g += 10; b += 5; }
                    core.vert(x + lx * off * sg, h, z + lz * off * sg, 0, 1, 0, r, g, b);
                }
                if (i > i0) {
                    const stride = (NG + 1) * 2;
                    const prev = base - stride;
                    for (let k = 0; k < NG; k++) {
                        if (side) core.quad(prev + k, base + k, base + k + 1, prev + k + 1);
                        else core.quad(prev + k, prev + k + 1, base + k + 1, base + k);
                    }
                }
            }
        }
        // barriers along both pavement edges (not where the route crosses itself); each 2 m panel has its own
        // vertices so red / white blocks on bends stay sharp
        for (let side = 0; side < 2; side++) {
            const sg = side ? -1 : 1;
            let px0 = 0, pz0 = 0, py0 = 0, pix = 0, piz = 0, has = false;
            for (let i = i0; i <= i1; i++) {
                if (T.flags[i] & 4) { has = false; continue; }
                const hw = side ? T.hr[i] : T.hl[i];
                const lx = T.tz[i], lz = -T.tx[i];
                const d = (hw + PAVE - 0.25) * sg;
                const x = T.px[i] + lx * d, z = T.pz[i] + lz * d, y = T.py[i] + 0.15;
                const ix = -lx * sg, iz = -lz * sg;   // facing the road
                if (has) {
                    const bend = Math.abs(T.curv[i]) > 0.012;
                    const red = bend && (i & 1);
                    const cr = red ? 205 : 232, cg = red ? 36 : 232, cb = red ? 28 : 226;
                    const t = 0.25;
                    const P = [[px0 - pix * t, py0, pz0 - piz * t], [px0 - pix * t, py0 + 0.95, pz0 - piz * t], [px0 + pix * t, py0 + 0.95, pz0 + piz * t], [px0 + pix * t, py0, pz0 + piz * t]];
                    const Q = [[x - ix * t, y, z - iz * t], [x - ix * t, y + 0.95, z - iz * t], [x + ix * t, y + 0.95, z + iz * t], [x + ix * t, y, z + iz * t]];
                    const faces = [[0, 1, ix, 0.2, iz, cr, cg, cb], [1, 2, 0, 1, 0, 200, 200, 196], [2, 3, -ix, 0, -iz, 150, 150, 150]];
                    for (const f of faces) {
                        const a0 = core.vert(P[f[0]][0], P[f[0]][1], P[f[0]][2], f[2], f[3], f[4], f[5], f[6], f[7]);
                        const a1 = core.vert(P[f[1]][0], P[f[1]][1], P[f[1]][2], f[2], f[3], f[4], f[5], f[6], f[7]);
                        const b1 = core.vert(Q[f[1]][0], Q[f[1]][1], Q[f[1]][2], f[2], f[3], f[4], f[5], f[6], f[7]);
                        const b0 = core.vert(Q[f[0]][0], Q[f[0]][1], Q[f[0]][2], f[2], f[3], f[4], f[5], f[6], f[7]);
                        if (side) core.quad(a0, a1, b1, b0); else core.quad(a0, b0, b1, a1);
                    }
                }
                px0 = x; pz0 = z; py0 = y; pix = ix; piz = iz; has = true;
            }
        }
        // props
        const urban = blds.length > 4;
        for (let i = i0; i < i1; i++) {
            if (T.flags[i] & 4) continue;
            const s = i * STEP;
            const lx = T.tz[i], lz = -T.tx[i];
            const yaw = Math.atan2(T.tx[i], T.tz[i]);
            for (let side = 0; side < 2; side++) {
                const sg = side ? -1 : 1, hw = side ? T.hr[i] : T.hl[i];
                const seaSide = T.flags[i] & (side ? 2 : 1);
                // street lights every 36 m, alternating
                if (i % 18 === (side ? 9 : 0)) {
                    const d = (hw + 1.6) * sg;
                    detail.model('light_modern', 'body', T.px[i] + lx * d, T.py[i] + 0.15, T.pz[i] + lz * d, yaw + (side ? -Math.PI / 2 : Math.PI / 2), 1);
                }
                // palms on the sea side and along the corniche, trees elsewhere (only where there are no buildings)
                const every = seaSide || this.theme.palms ? 7 : 11;
                if (i % every === (side ? 3 : 0) && rnd() < 0.85) {
                    const off = PAVE + 3 + rnd() * 6, d = (hw + off) * sg;
                    const gx = T.px[i] + lx * d, gz = T.pz[i] + lz * d;
                    const gy = this.groundAt(i, side, off) - 0.15;
                    if (gy > 0.5 && hw + off + 4 < this.innerLimit(i, side)) {
                        // mostly ordinary trees and bushes; palms only now and then (more along the sea front), all at real sizes
                        const palmP = seaSide ? 0.3 : this.theme.palms ? 0.15 : 0.05, k = rnd();
                        const kind = k < palmP ? (rnd() < 0.5 ? 'palm_tall' : 'palm_detailed')
                            : k < palmP + 0.35 ? 'tree_oak' : k < palmP + 0.7 ? 'tree_fat' : 'tree';
                        // models are 9-15 m tall with very wide crowns: palms ~7-8 m, trees ~5-7 m
                        const sc = kind[0] === 'p' ? 0.55 + rnd() * 0.12 : kind === 'tree' ? 0.36 + rnd() * 0.1 : kind === 'bush' ? 0.9 + rnd() * 0.5 : 0.48 + rnd() * 0.14;
                        detail.model(kind, 'body', gx, gy, gz, rnd() * 6.28, sc);
                    }
                }
                // rocks on the wild coast
                if (this.theme.rocks && i % 9 === 4 && rnd() < 0.6) {
                    const off = PAVE + 8 + rnd() * 20, d = (hw + off) * sg;
                    const gy = this.groundAt(i, side, off) - 0.4;
                    if (gy > 0.3 && hw + off + 6 < this.innerLimit(i, side)) detail.model(rnd() < 0.5 ? 'rock_a' : 'rock_tall', 'body', T.px[i] + lx * d, gy, T.pz[i] + lz * d, rnd() * 6.28, 0.7 + rnd());
                }
                // billboards now and then
                if (i % 160 === 80 && side === (c & 1)) {
                    const d = (hw + PAVE + 4) * sg;
                    detail.model('billboard', 'body', T.px[i] + lx * d, T.py[i], T.pz[i] + lz * d, yaw + (side ? -Math.PI / 2 : Math.PI / 2), 1.3);
                }
            }
            // start gantry
            if (i === 8 || (i === T.n - 12 && !T.closed)) this.gantry(core, i);
        }
        // ramps (wedges with yellow / black chevrons)
        for (const R of T.ramps) {
            const ri = Math.floor(R.s / STEP);
            if (ri < i0 || ri >= i1) continue;
            this.ramp(core, R);
        }
        // buildings
        for (const b of blds) this.building(bg, b);

        const out = { i0, i1, meshes: [] };
        road.extra = { ds: new THREE.BufferAttribute(new Float32Array(dsArr), 4) };
        const add = (geo, mat, kind) => {
            if (!geo.count) return;
            const m = new THREE.Mesh(geo.build(kind !== 'road'), mat);
            m.matrixAutoUpdate = false; m.updateMatrix();
            m.userData.kind = kind;
            this.scene.add(m); out.meshes.push(m);
        };
        add(road, this.mats.road, 'road');
        add(core, this.mats.world, 'core');
        add(detail, this.mats.world, 'detail');
        add(bg, this.mats.bld, 'bld');
        let cx = 0, cy = 0, cz = 0, k = 0;
        for (let i = i0; i <= i1; i += 5) { cx += T.px[i]; cy += T.py[i]; cz += T.pz[i]; k++; }
        out.cx = cx / k; out.cy = cy / k; out.cz = cz / k;
        out.r = 0; for (const m of out.meshes) out.r = Math.max(out.r, m.geometry.boundingSphere.radius + m.geometry.boundingSphere.center.distanceTo(new THREE.Vector3(out.cx, out.cy, out.cz)));
        return out;
    }

    // terrain patch (tools/build-routes.mjs): tiles of 16 x 16 cells, vertex colours by height, slope and theme
    buildTerrain(buf) {
        const hd = new Float32Array(buf, 0, 5), x0 = hd[0], z0 = hd[1], C = hd[2], nx = hd[3] | 0, nz = hd[4] | 0;
        const H = new Int16Array(buf, 20, nx * nz);
        const at = (i, j) => H[j * nx + i];
        const tiles = [], TS = 16, dry = this.theme.dry;
        for (let tj = 0; tj < nz - 1; tj += TS) for (let ti = 0; ti < nx - 1; ti += TS) {
            const g = new Geo(), idx = new Map();
            const vtx = (i, j) => {
                const key = j * nx + i; let v = idx.get(key); if (v !== undefined) return v;
                const h = at(i, j) / 10;
                const hx = (at(Math.min(nx - 1, i + 1), j) - at(Math.max(0, i - 1), j)) / 10, hz = (at(i, Math.min(nz - 1, j + 1)) - at(i, Math.max(0, j - 1))) / 10;
                let ddx = at(Math.min(nx - 1, i + 1), j) === -32768 || at(Math.max(0, i - 1), j) === -32768 ? 0 : hx / (2 * C);
                let ddz = at(i, Math.min(nz - 1, j + 1)) === -32768 || at(i, Math.max(0, j - 1)) === -32768 ? 0 : hz / (2 * C);
                const nl = Math.hypot(ddx, 1, ddz), ny = 1 / nl;
                const nzs = (Math.sin(i * 0.9) + Math.sin(j * 1.3)) * 0.5;
                let r, gg, b;
                if (h < 0.5) { r = 196; gg = 182; b = 146; }                          // wet sand under the water's edge
                else if (h < 3) { r = 220 + nzs * 8; gg = 204 + nzs * 8; b = 160; }   // beach
                else if (ny < 0.8) { r = 128 + nzs * 10; gg = 116 + nzs * 8; b = 96; } // steep: rock and earth
                else { r = 100 + nzs * 18; gg = 128 + nzs * 16; b = 68 + nzs * 6; }
                if (dry && h >= 3) { r += 34; gg += 12; b += 6; }
                v = g.vert(x0 + i * C, h, z0 + j * C, -ddx / nl, ny, -ddz / nl, r, gg, b);
                idx.set(key, v); return v;
            };
            for (let j = tj; j < Math.min(nz - 1, tj + TS); j++) for (let i = ti; i < Math.min(nx - 1, ti + TS); i++) {
                if (at(i, j) === -32768 || at(i + 1, j) === -32768 || at(i, j + 1) === -32768 || at(i + 1, j + 1) === -32768) continue;
                const a = vtx(i, j), b = vtx(i + 1, j), c = vtx(i + 1, j + 1), d = vtx(i, j + 1);
                g.quad(a, d, c, b);
            }
            if (!g.count) continue;
            const m = new THREE.Mesh(g.build(true), this.mats.world);
            m.matrixAutoUpdate = false; m.updateMatrix();
            this.scene.add(m);
            const bs = m.geometry.boundingSphere;
            tiles.push({ mesh: m, cx: bs.center.x, cz: bs.center.z, r: bs.radius });
        }
        return tiles;
    }

    // ground height the strips draw at offset `off` beyond the asphalt edge on one side of sample i
    groundAt(i, side, off) {
        const T = this.track, G = T.meta.ground, NG = G.length, arr = side ? T.gr : T.gl;
        if (off <= G[0]) return T.py[i] + 0.15;
        let k = 1; while (k < NG - 1 && G[k] < off) k++;
        const t = Math.min(1, (off - G[k - 1]) / (G[k] - G[k - 1]));
        return arr[i * NG + k - 1] + (arr[i * NG + k] - arr[i * NG + k - 1]) * t;
    }

    // largest lateral offset on this side that stays clear of the bend's centre (inside of bends only)
    innerLimit(i, side) {
        const T = this.track;
        let worst = 0;
        for (let j = Math.max(0, i - 12); j <= Math.min(T.n - 1, i + 12); j++) {
            const c = T.curv[j];
            // curv > 0 turns right (inside = right, side 1); curv < 0 turns left (inside = left, side 0)
            if ((c > 0 && side === 1) || (c < 0 && side === 0)) worst = Math.max(worst, Math.abs(c));
        }
        return worst > 1e-4 ? 0.7 / worst : 1e9;
    }

    gantry(g, i) {
        const T = this.track;
        const lx = T.tz[i], lz = -T.tx[i], fx = T.tx[i], fz = T.tz[i];
        const x = T.px[i], y = T.py[i], z = T.pz[i];
        const hl = T.hl[i] + 1.2, hr = T.hr[i] + 1.2, H = 7.5;
        const box = (cx, cy, cz, wx, hy, dz, r, gg, b, ax, az) => { // oriented box: wx along (ax, az), dz along forward
            const bx = -az, bz = ax;
            const P = [];
            for (let k = 0; k < 8; k++) {
                const sx = k & 1 ? wx : -wx, sy = k & 2 ? hy : 0, sz = k & 4 ? dz : -dz;
                P.push([cx + ax * sx + bx * sz, cy + sy, cz + az * sx + bz * sz]);
            }
            const F = [[0, 1, 3, 2, 0, -1, 0], [4, 6, 7, 5, 0, 1, 0], [0, 4, 5, 1, 0, 0, -1], [2, 3, 7, 6, 0, 0, 1], [0, 2, 6, 4, -1, 0, 0], [1, 5, 7, 3, 1, 0, 0]];
            for (const f of F) {
                const q = [];
                for (let k = 0; k < 4; k++) { const p = P[f[k]]; q.push(g.vert(p[0], p[1], p[2], f[4] * ax + f[6] * bx, f[5], f[4] * az + f[6] * bz, r, gg, b)); }
                g.quad(q[0], q[3], q[2], q[1]);
            }
        };
        box(x + lx * hl, y, z + lz * hl, 0.45, H, 0.45, 40, 40, 46, lx, lz);
        box(x - lx * hr, y, z - lz * hr, 0.45, H, 0.45, 40, 40, 46, lx, lz);
        // beam with a checker band
        const W = (hl + hr) / 2, mx = x + lx * (hl - hr) / 2, mz = z + lz * (hl - hr) / 2;
        const N = Math.max(8, Math.round(W * 2 / 1.2));
        for (let k = 0; k < N; k++) {
            const t = -W + (k + 0.5) * (2 * W / N);
            const dark = k & 1;
            box(mx + lx * t, y + H - 1.6, mz + lz * t, W / N, 0.8, 0.3, dark ? 20 : 240, dark ? 20 : 240, dark ? 24 : 240, lx, lz);
            box(mx + lx * t, y + H - 0.8, mz + lz * t, W / N, 0.8, 0.3, dark ? 240 : 20, dark ? 240 : 20, dark ? 240 : 24, lx, lz);
        }
        box(mx, y + H, mz, W + 0.5, 0.35, 0.5, 210, 40, 40, lx, lz);
        void fx; void fz;
    }

    ramp(g, R) {
        const T = this.track, q = {};
        const N = 6;
        const rows = [];
        for (let k = 0; k <= N; k++) {
            const u = k / N * R.len;
            T.at(R.s + u, R.d, q);
            const h = R.h * k / N;
            rows.push({ x: q.x, y: q.y + h + 0.02, z: q.z, lx: q.lx, lz: q.lz, by: q.y, h });
        }
        const hw = R.w / 2;
        for (let k = 0; k < N; k++) {
            const a = rows[k], b = rows[k + 1];
            const stripe = k & 1;
            const r = stripe ? 30 : 245, gg = stripe ? 30 : 200, bb = stripe ? 30 : 30;
            const v0 = g.vert(a.x + a.lx * hw, a.y, a.z + a.lz * hw, 0, 1, 0, r, gg, bb);
            const v1 = g.vert(a.x - a.lx * hw, a.y, a.z - a.lz * hw, 0, 1, 0, r, gg, bb);
            const v2 = g.vert(b.x - b.lx * hw, b.y, b.z - b.lz * hw, 0, 1, 0, r, gg, bb);
            const v3 = g.vert(b.x + b.lx * hw, b.y, b.z + b.lz * hw, 0, 1, 0, r, gg, bb);
            g.quad(v0, v1, v2, v3);
            // sides
            for (const sg of [1, -1]) {
                const s0 = g.vert(a.x + a.lx * hw * sg, a.by, a.z + a.lz * hw * sg, a.lx * sg, 0, a.lz * sg, 120, 120, 125);
                const s1 = g.vert(a.x + a.lx * hw * sg, a.y, a.z + a.lz * hw * sg, a.lx * sg, 0, a.lz * sg, 120, 120, 125);
                const s2 = g.vert(b.x + b.lx * hw * sg, b.y, b.z + b.lz * hw * sg, b.lx * sg, 0, b.lz * sg, 120, 120, 125);
                const s3 = g.vert(b.x + b.lx * hw * sg, b.by, b.z + b.lz * hw * sg, b.lx * sg, 0, b.lz * sg, 120, 120, 125);
                if (sg > 0) g.quad(s0, s1, s2, s3); else g.quad(s0, s3, s2, s1);
            }
        }
        // back face
        const e = rows[N];
        const f0 = g.vert(e.x + e.lx * hw, e.by, e.z + e.lz * hw, T.tx[0], 0, T.tz[0], 90, 90, 95);
        const f1 = g.vert(e.x - e.lx * hw, e.by, e.z - e.lz * hw, T.tx[0], 0, T.tz[0], 90, 90, 95);
        const f2 = g.vert(e.x - e.lx * hw, e.y, e.z - e.lz * hw, T.tx[0], 0, T.tz[0], 90, 90, 95);
        const f3 = g.vert(e.x + e.lx * hw, e.y, e.z + e.lz * hw, T.tx[0], 0, T.tz[0], 90, 90, 95);
        g.quad(f0, f3, f2, f1);
    }

    building(g, b) {
        const [, h, base, flat] = b;
        const pts = [];
        for (let k = 0; k < flat.length; k += 2) pts.push(new THREE.Vector2(flat[k], flat[k + 1]));
        if (pts.length < 3) return;
        if (THREE.ShapeUtils.isClockWise(pts)) pts.reverse();
        const pal = PALETTE[(Math.abs(Math.round(flat[0] * 3 + flat[1] * 7)) % PALETTE.length)];
        const tall = h > 24;
        const col = tall ? [196, 204, 212] : pal;
        const y0 = base - 3, y1 = base + h;
        if (!g.extra) g.extra = { wuv: [] };
        const uv = g.extra.wuv;
        let run = 0;
        for (let k = 0; k < pts.length; k++) {
            const a = pts[k], c = pts[(k + 1) % pts.length];
            const ex = c.x - a.x, ez = c.y - a.y, L = Math.hypot(ex, ez);
            if (L < 0.05) continue;
            // outward normal for counter-clockwise (in x, z with z down: check by sign)
            let nx = ez / L, nz = -ex / L;
            const v0 = g.vert(a.x, y0, a.y, nx, 0, nz, col[0], col[1], col[2]);
            const v1 = g.vert(c.x, y0, c.y, nx, 0, nz, col[0], col[1], col[2]);
            const v2 = g.vert(c.x, y1, c.y, nx, 0, nz, col[0], col[1], col[2]);
            const v3 = g.vert(a.x, y1, a.y, nx, 0, nz, col[0], col[1], col[2]);
            uv.push(run, -3, run + L, -3, run + L, h, run, h);
            g.quad(v0, v3, v2, v1);
            g.quad(v0, v1, v2, v3);   // both windings: footprint direction varies, cheaper than checking
            run += L;
        }
        // roof
        const tris = THREE.ShapeUtils.triangulateShape(pts, []);
        const rb = g.count;
        const rc = [col[0] * 0.86 | 0, col[1] * 0.84 | 0, col[2] * 0.8 | 0];
        for (const p of pts) { g.vert(p.x, y1, p.y, 0, 1, 0, rc[0], rc[1], rc[2]); uv.push(0, 0); }
        for (const t of tris) { g.tri(rb + t[0], rb + t[2], rb + t[1]); g.tri(rb + t[0], rb + t[1], rb + t[2]); }
    }

    finishBuildingUV() { /* uv arrays are converted in build() */ }

    // per frame: hide chunks that are far away; detail meshes have a shorter range
    cull(cx, cz, far, detailFar) {
        for (let k = 0; k < this.tiles.length; k++) { const t = this.tiles[k]; t.mesh.visible = Math.hypot(t.cx - cx, t.cz - cz) - t.r < far; }
        for (let k = 0; k < this.chunks.length; k++) {
            const c = this.chunks[k];
            const d = Math.hypot(c.cx - cx, c.cz - cz) - c.r;
            for (let m = 0; m < c.meshes.length; m++) {
                const mesh = c.meshes[m];
                mesh.visible = d < (mesh.userData.kind === 'detail' ? detailFar : far);
            }
        }
    }

    dispose() {
        for (const c of this.chunks) for (const m of c.meshes) { this.scene.remove(m); m.geometry.dispose(); }
        for (const t of this.tiles) { this.scene.remove(t.mesh); t.mesh.geometry.dispose(); }
        if (this.sea) { this.scene.remove(this.sea); this.sea.geometry.dispose(); this.sea.material.dispose(); }
        this.scene.remove(this.sky); this.sky.geometry.dispose(); this.sky.material.dispose();
        for (const k in this.mats) this.mats[k].dispose();
    }
}
