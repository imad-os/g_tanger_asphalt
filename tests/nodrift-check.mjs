// No drift without the drift button: drive straight at 50 / 80 / 120 km/h, hold full steer for 1 s (no handbrake),
// let go for 1 s. The rear tyres must keep grip (slide under 0.5), the body slip stay at most 7 degrees (a real car
// at the limit: 3-6) and the side speed be gone half a second after letting go. Then the same with the drift
// button: it must still slide.  node tests/nodrift-check.mjs [car]
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
for (const id of ids) for (const kmh of [50, 80, 120]) for (const hb of [0, 1]) {
    const spec = SPECS[id], v = new Vehicle(spec, carDims(spec.model));
    T.at(50, 0, q); v.setPose(q.x, q.y + v.cgY + 0.05, q.z, 0);
    v.hold = true; for (let i = 0; i < 120; i++) v.step(DT, T, q); v.hold = false;
    v.vz = kmh / 3.6;
    let t = 0, rear = 0, lat = 0, beta = 0, latAfter = 0, yaw = 0;
    while (t < 2.2) {
        const holding = t < 1;
        v.input.steer = holding ? 1 : 0; v.input.handbrake = holding ? hb : 0;
        v.input.throttle = v.fwdSpeed < kmh / 3.6 ? 0.6 : 0;
        v.step(DT, T, q); t += DT;
        const r = Math.max(v.wheels[2].slipLat, v.wheels[3].slipLat);
        const b = Math.atan2(Math.abs(v.latSpeed), Math.max(1, Math.abs(v.fwdSpeed))) * 180 / Math.PI;
        if (holding) { rear = Math.max(rear, r); lat = Math.max(lat, Math.abs(v.latSpeed)); beta = Math.max(beta, b); }
        else if (t > 1.5) latAfter = Math.max(latAfter, Math.abs(v.latSpeed));
    }
    const ok = hb ? beta > 12 : rear < 0.5 && beta <= 7 && latAfter < 0.06 * kmh / 3.6;
    if (!ok) fail++;
    rows.push({ car: id, kmh, drift: hb ? 'held' : 'no', rearSlide: +rear.toFixed(2), sideMs: +lat.toFixed(1), slipDeg: Math.round(beta), sideAfter: +latAfter.toFixed(1), ok });
}
console.table(rows);
console.log(fail ? 'FAIL ' + fail : 'PASS');
process.exit(fail ? 1 : 0);
