// Upgrade looks: what the garage's upgrades add to a car, built from simple shapes fitted to the car's own body.
//  engine   1+ twin exhaust tips (bigger at 3 and 5), 3+ hood scoop (bigger at 5)
//  gearbox  2+ rear diffuser fins, 4+ rear wing (roof colour)
//  grip     1+ sport rim lips: graphite (1-2), bronze (3-4), gold (5)
//  brakes   1+ calipers: red (1-2), yellow (3-4), roof colour (5); 3+ big discs
//  nitro    2+ blue neon under the sills (brighter at 4)
// One merged mesh on the body (+ one glow mesh) and one small mesh per wheel: a handful of draw calls, only for the
// players' cars and the garage.
import * as THREE from 'three';
import { partGeometry } from './assets.js';

// vertex data builder: col alpha = the car shader's kind (0 plain, 0.75 accent = roof colour)
class Kit {
    constructor() { this.p = []; this.n = []; this.c = []; }
    add(geo, m, rgb, kind) {
        const g = geo.index ? geo.toNonIndexed() : geo;
        const P = g.attributes.position, N = g.attributes.normal;
        const v = new THREE.Vector3(), nm = new THREE.Matrix3().getNormalMatrix(m);
        const r = (rgb >> 16 & 255) / 1.25, gg = (rgb >> 8 & 255) / 1.25, b = (rgb & 255) / 1.25, a = kind === 'accent' ? 200 : 0;
        for (let i = 0; i < P.count; i++) {
            v.fromBufferAttribute(P, i).applyMatrix4(m); this.p.push(v.x, v.y, v.z);
            v.fromBufferAttribute(N, i).applyMatrix3(nm).normalize(); this.n.push(v.x, v.y, v.z);
            // accent parts take the roof colour times col.r: full brightness
            this.c.push(kind === 'accent' ? 204 : Math.min(255, r * 1.25), kind === 'accent' ? 204 : Math.min(255, gg * 1.25), kind === 'accent' ? 204 : Math.min(255, b * 1.25), a);
        }
        if (g !== geo) g.dispose();
    }
    box(x, y, z, sx, sy, sz, rgb, kind, rx = 0) {
        const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, 0, 0)), new THREE.Vector3(sx, sy, sz));
        this.add(BOX, m, rgb, kind);
    }
    // a cylinder along X (wheels, discs) or Z (pipes)
    cyl(x, y, z, r, len, rgb, kind, alongZ, geo) {
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(alongZ ? Math.PI / 2 : 0, 0, alongZ ? 0 : Math.PI / 2));
        const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(r, len, r));
        this.add(geo || CYL, m, rgb, kind);
    }
    geometry() {
        if (!this.p.length) return null;
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
        g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
        g.setAttribute('col', new THREE.BufferAttribute(new Uint8Array(this.c), 4, true));
        g.computeBoundingSphere();
        return g;
    }
}
const BOX = new THREE.BoxGeometry(1, 1, 1);
const CYL = new THREE.CylinderGeometry(1, 1, 1, 14);
const RING = new THREE.CylinderGeometry(1, 1, 1, 18, 1, true);
const PIPE = new THREE.CylinderGeometry(1, 0.85, 1, 10);

// highest body point near x = 0 between two z values (hood / boot / roof line)
function topBetween(model, z0, z1, xMax) {
    const P = partGeometry(model, 'body').attributes.position;
    let top = -1e9;
    for (let i = 0; i < P.count; i++) { const x = P.getX(i), z = P.getZ(i); if (Math.abs(x) <= xMax && z >= z0 && z <= z1) top = Math.max(top, P.getY(i)); }
    return top > -1e9 ? top : null;
}

// up: { engine, gearbox, grip, brakes, nitro } (0..5); dims from carDims
export function buildKit(model, dims, up) {
    const u = Object.assign({ engine: 0, gearbox: 0, grip: 0, brakes: 0, nitro: 0 }, up);
    const body = new Kit(), glow = new Kit();
    const W = dims.w, L = dims.l, back = dims.back, front = dims.front;
    const wr = dims.wheels;
    // exhaust tips under the rear bumper
    if (u.engine >= 1) {
        const r = u.engine >= 5 ? 0.075 : u.engine >= 3 ? 0.062 : 0.05, y = Math.max(0.24, wr[2].y * 0.75);
        for (const s of [1, -1]) {
            body.cyl(s * W * 0.27, y, back + 0.06, r, 0.22, 0xd9dce2, 0, true, PIPE);
            body.cyl(s * W * 0.27, y, back + 0.02, r * 0.7, 0.05, 0x101012, 0, true);
            if (u.engine >= 3) { body.cyl(s * (W * 0.27 + r * 2.3), y, back + 0.06, r, 0.22, 0xd9dce2, 0, true, PIPE); body.cyl(s * (W * 0.27 + r * 2.3), y, back + 0.02, r * 0.7, 0.05, 0x101012, 0, true); }
        }
    }
    // hood scoop
    if (u.engine >= 3) {
        const zc = front - L * 0.18, hood = topBetween(model, zc - L * 0.05, zc + L * 0.05, W * 0.15);
        if (hood !== null) {
            const big = u.engine >= 5 ? 1.3 : 1;
            body.box(0, hood + 0.035 * big, zc, W * 0.26 * big, 0.08 * big, L * 0.16, 0x17181b, 0, -0.08);
            body.box(0, hood + 0.06 * big, zc + L * 0.08, W * 0.2 * big, 0.04 * big, 0.02, 0x050505, 0);
        }
    }
    // rear diffuser fins
    if (u.gearbox >= 2) {
        body.box(0, 0.2, back + 0.12, W * 0.62, 0.035, 0.26, 0x111214, 0);
        for (let k = -2; k <= 2; k++) body.box(k * W * 0.12, 0.25, back + 0.12, 0.025, 0.1, 0.26, 0x111214, 0);
    }
    // rear wing in the roof colour on two posts
    if (u.gearbox >= 4) {
        const boot = topBetween(model, back, back + L * 0.18, W * 0.3);
        if (boot !== null) {
            const wy = boot + 0.13;
            for (const s of [1, -1]) body.box(s * W * 0.25, boot + 0.05, back + 0.2, 0.05, 0.16, 0.12, 0x111214, 0);
            body.box(0, wy, back + 0.18, W * 0.8, 0.035, 0.3, 0, 'accent', -0.06);
            for (const s of [1, -1]) body.box(s * W * 0.4, wy - 0.02, back + 0.18, 0.02, 0.12, 0.34, 0x111214, 0);
        }
    }
    // neon under the sills (unlit glow)
    if (u.nitro >= 2) {
        const bright = u.nitro >= 4 ? 255 : 170;
        for (const s of [1, -1]) glow.box(s * W * 0.4, 0.12, (front + back) / 2, 0.05, 0.02, L * 0.55, (40 << 16) | (140 << 8) | 255, 0);
        glow.c = glow.c.map((x, i) => (i & 3) === 3 ? bright : x);
    }
    // per wheel (spins with it): rim lips, discs; calipers stay put (on the body)
    const rimCol = u.grip >= 5 ? 0xd9b440 : u.grip >= 3 ? 0xa97c3a : 0x2c2f35;
    const calCol = u.brakes >= 5 ? -1 : u.brakes >= 3 ? 0xf1c40f : 0xd0201c;
    const wheel = [];
    for (let k = 0; k < 4; k++) {
        const w = wr[k], side = Math.sign(w.x) || 1, out = new Kit();
        let wb = null; try { wb = partGeometry(model, ['wfl', 'wfr', 'wbl', 'wbr'][k]); } catch (e) { wb = null; }
        let half = 0.12;
        if (wb && wb.attributes.position) { wb.computeBoundingBox(); half = Math.max(Math.abs(wb.boundingBox.max.x), Math.abs(wb.boundingBox.min.x)); }
        if (u.grip >= 1) {
            out.cyl(side * (half + 0.004), 0, 0, w.r * 0.86, 0.03, rimCol, 0, false, RING);
            out.cyl(side * (half + 0.006), 0, 0, w.r * 0.2, 0.03, rimCol, 0, false);
            for (let a = 0; a < 5; a++) { const an = a / 5 * Math.PI * 2; const m = new THREE.Matrix4().compose(new THREE.Vector3(side * (half + 0.005), Math.sin(an) * w.r * 0.5, Math.cos(an) * w.r * 0.5), new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2 - an, 0, 0)), new THREE.Vector3(0.025, w.r * 0.66, w.r * 0.11)); out.add(BOX, m, rimCol, 0); }
        }
        if (u.brakes >= 3) out.cyl(side * (half - 0.02), 0, 0, w.r * 0.62, 0.02, 0x8e9196, 0, false);
        wheel.push(out.geometry());
        if (u.brakes >= 1) {
            const s2 = u.brakes >= 3 ? 1.25 : 1;
            body.box(w.x + side * (half - 0.005), w.y + w.r * 0.32, w.z - (k < 2 ? 1 : -1) * w.r * 0.12, 0.05, w.r * 0.32 * s2, w.r * 0.45 * s2, calCol < 0 ? 0 : calCol, calCol < 0 ? 'accent' : 0);
        }
    }
    return { body: body.geometry(), glow: glow.geometry(), wheel };
}
