// 360 stunt check: every car at 60 / 100 / 160 km/h on the flat starts a spin; after it the body must have turned
// one full turn (heading back to the start within 15 degrees), still go straight on and keep most of its speed.
// node tests/spin-check.mjs [car]
import fs from 'node:fs';
import { Models } from '../src/assets.js';
import { carDims } from '../src/carview.js';
import { Vehicle, SPECS } from '../src/vehicle.js';
import { Track, STEP } from '../src/track.js';
const B = fs.readFileSync(new URL('../assets/models.bin', import.meta.url));
Models.buf = B.buffer.slice(B.byteOffset, B.byteOffset + B.length);
Models.index = JSON.parse(fs.readFileSync(new URL('../assets/models.json', import.meta.url)));
const n = 6000, ground = [3.5, 10, 24, 48, 90, 160], NG = ground.length;
const buf = new ArrayBuffer(n * 5 * 4 + n * NG * 2 * 4 + n);
const f = new Float32Array(buf, 0, n * 5 + n * NG * 2);
for (let i = 0; i < n; i++) { f[2 * n + i] = i * STEP; f[3 * n + i] = 400; f[4 * n + i] = 400; }
const T = new Track({ n, ground, ramps: [], closed: false }, buf);
const q = {}, DT = 1 / 120;
const ids = process.argv[2] ? [process.argv[2]] : ['city', 'hatch', 'volt', 'suvlux', 'wedge', 'police', 'gt'];
const rows = []; let fail = 0;
for (const id of ids) for (const kmh of [60, 100, 160]) {
    const spec = SPECS[id], v = new Vehicle(spec, carDims(spec.model));
    T.at(50, 0, q); v.setPose(q.x, q.y + v.cgY + 0.05, q.z, 0);
    v.hold = true; for (let i = 0; i < 120; i++) v.step(DT, T, q); v.hold = false;
    v.vz = kmh / 3.6; v.input.throttle = 1;
    for (let i = 0; i < 30; i++) v.step(DT, T, q);
    const v0 = v.speed;
    v.startSpin(1);
    let t = 0, turned = 0, last = Math.atan2(v.R[6], v.R[8]), worstTilt = 0;
    while (v.spinT > 0 && t < 3) { v.step(DT, T, q); t += DT; const h = Math.atan2(v.R[6], v.R[8]); let d = h - last; if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI; turned += d; last = h; worstTilt = Math.max(worstTilt, Math.acos(Math.min(1, v.R[4]))); }
    for (let i = 0; i < 60; i++) v.step(DT, T, q);   // half a second after
    const head = Math.atan2(v.R[6], v.R[8]) * 57.3, course = Math.atan2(v.vx, v.vz) * 57.3;
    const r = { car: id, kmh, seconds: +t.toFixed(2), turnedDeg: Math.round(turned * 57.3), headingAfter: Math.round(head), courseAfter: Math.round(course),
        keptSpeed: Math.round(v.speed / v0 * 100) + ' %', tiltDeg: Math.round(worstTilt * 57.3), done: v.spinDone, upright: v.R[4] > 0.9 };
    r.ok = Math.abs(r.turnedDeg - 360) < 20 && Math.abs(head) < 15 && Math.abs(course) < 15 && v.speed / v0 > 0.7 && r.upright && v.spinDone;
    if (!r.ok) fail++;
    rows.push(r);
}
console.table(rows);
console.log(fail ? 'FAIL ' + fail : 'PASS');
process.exit(fail ? 1 : 0);
