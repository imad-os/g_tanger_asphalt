// Physics check without a browser: real numbers for each car (0-100 km/h, top speed, 100-0 braking, steady
// cornering grip on a skid pad, a ramp jump, a wall hit).  node tests/physics.mjs [car]
import fs from 'node:fs';
import { Models } from '../src/assets.js';
import { carDims } from '../src/carview.js';
import { Vehicle, SPECS } from '../src/vehicle.js';
import { Track, STEP } from '../src/track.js';

const B = fs.readFileSync(new URL('../assets/models.bin', import.meta.url));
Models.buf = B.buffer.slice(B.byteOffset, B.byteOffset + B.length);
Models.index = JSON.parse(fs.readFileSync(new URL('../assets/models.json', import.meta.url)));

// synthetic tracks: centre line from a function of s
function makeTrack(n, fn, hw = 15, ramps = []) {
    const ground = [3.5, 10, 24, 48, 90, 160], NG = ground.length;
    const buf = new ArrayBuffer(n * 5 * 4 + n * NG * 2 * 4 + n);
    const f = new Float32Array(buf, 0, n * 5 + n * NG * 2);
    for (let i = 0; i < n; i++) {
        const p = fn(i * STEP);
        f[i] = p[0]; f[n + i] = p[1]; f[2 * n + i] = p[2]; f[3 * n + i] = hw; f[4 * n + i] = hw;
        for (let k = 0; k < NG; k++) { f[5 * n + i * NG + k] = p[1]; f[5 * n + n * NG + i * NG + k] = p[1]; }
    }
    return new Track({ n, ground, ramps, closed: false }, buf);
}
const straight = makeTrack(3000, s => [0, 0, s]);
const R0 = 80;
const circle = makeTrack(400, s => [R0 * Math.cos(s / R0) - R0, 0, R0 * Math.sin(s / R0)], 15);
const q = {};
const DT = 1 / 120;
function car(id) {
    const spec = SPECS[id], dims = carDims(spec.model);
    const v = new Vehicle(spec, dims);
    return v;
}
function place(v, T, s) { T.at(s, 0, q); v.setPose(q.x, q.y + v.cgY + 0.05, q.z, Math.atan2(q.fx ?? T.tx[0], q.fz ?? T.tz[0])); v.hint = 0; for (const w of v.wheels) w.hint = 0; }
function settle(v, T) { v.hold = true; for (let i = 0; i < 120; i++) v.step(DT, T, q); v.hold = false; }

const ids = process.argv[2] ? [process.argv[2]] : ['city', 'hatch', 'volt', 'suvlux', 'wedge', 'police', 'gt'];
const rows = [];
for (const id of ids) {
    const r = { car: id };
    // acceleration and top speed on the flat
    let v = car(id); place(v, straight, 10); settle(v, straight);
    v.input.throttle = 1; let t = 0, t100 = 0, t200 = 0, vmax = 0;
    while (t < 60 && v.pz < 5800) { v.step(DT, straight, q); t += DT; const kmh = v.fwdSpeed * 3.6; if (!t100 && kmh >= 100) t100 = t; if (!t200 && kmh >= 200) t200 = t; vmax = Math.max(vmax, kmh); }
    r.t100 = +t100.toFixed(2); r.t200 = +t200.toFixed(1); r.vmax = Math.round(vmax); r.gear = v.gear;
    // braking 100-0
    v = car(id); place(v, straight, 10); settle(v, straight);
    v.input.throttle = 1; while (v.fwdSpeed < 100 / 3.6) v.step(DT, straight, q);
    v.input.throttle = 0; v.input.brake = 1; const z0 = v.pz; t = 0;
    while (v.fwdSpeed > 0.3 && t < 10) { v.step(DT, straight, q); t += DT; }
    r.brake100 = +(v.pz - z0).toFixed(1);
    // skid pad: drive the circle, find the highest steady speed (steer by a simple controller toward d = 0)
    let best = 0;
    for (let kmh = 40; kmh <= 160; kmh += 5) {
        v = car(id); place(v, circle, 4); settle(v, circle);
        v.vx = q.fx !== undefined ? 0 : 0;
        // start rolling at the target speed along the tangent
        const sp = kmh / 3.6; v.vx = v.R[6] * sp; v.vz = v.R[8] * sp;
        let ok = true; t = 0;
        while (t < 8) {
            circle.query(v.px, v.pz, v.hint, q);
            const err = q.d, head = Math.atan2(v.R[6] * circle.tz[q.i] - v.R[8] * circle.tx[q.i], v.R[6] * circle.tx[q.i] + v.R[8] * circle.tz[q.i]);
            v.input.steer = Math.max(-1, Math.min(1, -err * 0.15 - head * 1.5 + 0.0));
            // hold speed
            v.input.throttle = v.fwdSpeed < sp ? 0.8 : 0; v.input.brake = 0;
            v.step(DT, circle, q); t += DT;
            if (Math.abs(err) > 6) { ok = false; break; }
        }
        if (ok && v.fwdSpeed > sp * 0.9) best = kmh; else break;
    }
    r.skidpad = best; r.latG = +((best / 3.6) ** 2 / R0 / 9.81).toFixed(2);
    rows.push(r);
}
console.table(rows);

// jump: a 1.6 m kicker (11 m long) at 150 km/h; airtime, peak height, distance, landing attitude
const rampT = makeTrack(1500, s => [0, 0, s], 15, [{ s: 600, d: 0, w: 6, len: 11, h: 1.6 }]);
const jumps = [];
for (const [kmh, off, id] of [[100, 0, 'hatch'], [150, 0, 'hatch'], [200, 0, 'hatch'], [180, 0, 'police'], [180, 2.6, 'police'], [180, 3.3, 'police'], [180, 3.3, 'hatch']]) {
    const v = car(id); place(v, rampT, 400); v.px += off; settle(v, rampT);
    const sp = kmh / 3.6; v.vz = sp;
    let t = 0, air = 0, top = 0, z0 = 0, z1 = 0, minUp = 1, flying = false, land = 0;
    while (t < 12 && v.pz < 900) {
        v.input.throttle = v.fwdSpeed < sp ? 1 : 0;
        v.step(DT, rampT, q); t += DT;
        if (v.grounded === 0) { if (!flying && v.pz > 590) { flying = true; z0 = v.pz; } if (flying) { air += DT; top = Math.max(top, v.py - v.cgY); } }
        else if (flying && !z1) { z1 = v.pz; land = v.vy; }
        if (flying) minUp = Math.min(minUp, v.R[4]);
        if (z1 && v.pz > z1 + 40) break;
    }
    jumps.push({ car: id, kmh, offset: off, airtime: +air.toFixed(2), peak: +top.toFixed(2), distance: Math.round(z1 - z0), landVy: +land.toFixed(1), worstTilt: Math.round(Math.acos(Math.min(1, minUp)) * 180 / Math.PI), upright: v.R[4] > 0.9 });
}
console.table(jumps);

// wall: hit the barrier at 30 degrees at 120 km/h, then a head-on car crash
import { carWall, carCar } from '../src/collide.js';
const crashes = [];
for (const ang of [15, 30, 60]) {
    const v = car('hatch'); place(v, straight, 400); settle(v, straight);
    const a = ang * Math.PI / 180, sp = 120 / 3.6;
    v.setPose(v.px, v.py, v.pz, a); v.vx = Math.sin(a) * sp; v.vz = Math.cos(a) * sp;
    let t = 0, j = 0, after = 0;
    while (t < 3) { v.step(DT, straight, q); const h = carWall(v, straight, q); if (h > j) j = h; t += DT; if (j && !after && t > 0) after = 0; }
    crashes.push({ test: 'wall ' + ang + '°', before: 120, after: Math.round(v.speed * 3.6), peakG: +(j / v.mass / 9.81 / DT / 6).toFixed(1), upright: v.R[4] > 0.9 });
}
{
    const a = car('hatch'), b = car('t_heavy' in SPECS ? 'hatch' : 'hatch');
    place(a, straight, 400); settle(a, straight); place(b, straight, 440); settle(b, straight);
    b.setPose(b.px, b.py, b.pz, Math.PI); a.vz = 100 / 3.6; b.vz = -60 / 3.6;
    let t = 0, j = 0; while (t < 2) { a.step(DT, straight, q); b.step(DT, straight, q); const h = carCar(a, b); if (h > j) j = h; t += DT; }
    crashes.push({ test: 'head-on 100 vs 60 km/h', before: 100, after: Math.round(a.fwdSpeed * 3.6), peakG: +(j / a.mass / 9.81 / DT / 6).toFixed(1), upright: a.R[4] > 0.9 });
}
console.table(crashes);
