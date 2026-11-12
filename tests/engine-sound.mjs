// Engine sound check: drives each car with the real physics (idle, a steady 3000 rpm part, a full-throttle run
// through the gears, a lift, a cruise), renders the engine worklet offline in Chromium with exactly those rpm /
// load / speed values and saves a WAV per car to listen to. Prints level, clipping and the firing check: at a
// steady 3000 rpm the strongest low tone must be the firing rate (rpm / 60 * cylinders / 2). maxStep = the jump between
// two samples that only 1 in 1000 exceed (over 0.15 = constant static / crackle; single exhaust pops are fine).
// node tests/engine-sound.mjs <out folder> [car]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { Models } from '../src/assets.js';
import { carDims } from '../src/carview.js';
import { Vehicle, SPECS } from '../src/vehicle.js';
import { Track, STEP } from '../src/track.js';
import { serve } from './shot.mjs';
const { chromium } = createRequire(import.meta.url)('playwright');

const OUT = process.argv[2] || 'engine-sound';
const only = process.argv[3];
fs.mkdirSync(OUT, { recursive: true });
const B = fs.readFileSync(new URL('../assets/models.bin', import.meta.url));
Models.buf = B.buffer.slice(B.byteOffset, B.byteOffset + B.length);
Models.index = JSON.parse(fs.readFileSync(new URL('../assets/models.json', import.meta.url)));

const n = 4000, ground = [3.5, 10, 24, 48, 90, 160], NG = ground.length;
const buf = new ArrayBuffer(n * 5 * 4 + n * NG * 2 * 4 + n);
const f = new Float32Array(buf, 0, n * 5 + n * NG * 2);
for (let i = 0; i < n; i++) { f[2 * n + i] = i * STEP; f[3 * n + i] = 15; f[4 * n + i] = 15; }
const T = new Track({ n, ground, ramps: [], closed: false }, buf);
const q = {}, DT = 1 / 120;

// the timeline at 100 points a second: [rpm, load, speed]
function drive(id) {
    const spec = SPECS[id], v = new Vehicle(spec, carDims(spec.model));
    T.at(10, 0, q); v.setPose(q.x, q.y + v.cgY + 0.05, q.z, 0);
    v.hold = true; for (let i = 0; i < 120; i++) v.step(DT, T, q); v.hold = false;
    const tl = [];
    const idle = spec.ev ? 0 : 850;
    for (let k = 0; k < 150; k++) tl.push([idle, 0, 0]);                       // 1.5 s idle
    for (let k = 0; k < 150; k++) tl.push([spec.ev ? 4000 : 3000, 0.4, 0]);  // 1.5 s steady (the firing check)
    for (let k = 0; k < 50; k++) tl.push([idle, 0, 0]);
    let t = 0, lastK = -1;
    const plan = s => s < 11 ? 1 : s < 13 ? 0 : s < 16 ? 0.3 : 0;            // full throttle, lift, cruise, coast
    while (t < 18) {
        v.input.throttle = plan(t);
        v.step(DT, T, q); t += DT;
        const k = Math.floor(t * 100);
        if (k !== lastK) { lastK = k; tl.push([v.rpm, v.shiftT > 0 ? 0.04 : v.input.throttle, v.speed]); }
    }
    return tl;
}

function wav(file, data, sr) {
    const b = Buffer.alloc(44 + data.length * 2);
    b.write('RIFF', 0); b.writeUInt32LE(36 + data.length * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12);
    b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(sr, 24); b.writeUInt32LE(sr * 2, 28);
    b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(data.length * 2, 40);
    for (let i = 0; i < data.length; i++) b.writeInt16LE(Math.max(-32767, Math.min(32767, Math.round(data[i] * 32767))), 44 + i * 2);
    fs.writeFileSync(file, b);
}

const port = 8765 + Math.floor(Math.random() * 200);
const server = await serve(port);
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('http://localhost:' + port + '/mypc-app.json');
const ids = only ? [only] : ['city', 'hatch', 'volt', 'suvlux', 'wedge', 'police', 'gt', 't_small', 't_heavy'];
const rows = [];
for (const id of ids) {
    const spec = SPECS[id], tl = drive(id);
    const SR = 44100;
    const res = await page.evaluate(async ({ tl, spec, SR }) => {
        const dur = tl.length / 100;
        const c = new OfflineAudioContext(1, Math.ceil(dur * SR), SR);
        await c.audioWorklet.addModule('/assets/engine-worklet.js');
        const node = new AudioWorkletNode(c, 'engine', { numberOfInputs: 0, outputChannelCount: [1],
            processorOptions: { cyl: spec.cyl || 4, turbo: !!spec.turbo, ev: !!spec.ev, diesel: !!spec.diesel, rpmMax: spec.rpm, seed: 3 } });
        const P = node.parameters;
        P.get('gain').setValueAtTime(0.8, 0);
        tl.forEach(([rpm, load, speed], k) => { const t = k / 100; P.get('rpm').setValueAtTime(rpm, t); P.get('load').setValueAtTime(load, t); P.get('speed').setValueAtTime(speed, t); });
        node.connect(c.destination);
        const t0 = performance.now();
        const b = await c.startRendering();
        return { ms: performance.now() - t0, data: Array.from(b.getChannelData(0)), dur };
    }, { tl, spec, SR });
    const d = Float32Array.from(res.data);
    let peak = 0, sum = 0, bad = 0, clip = 0;
    const steps = new Float32Array(d.length);
    for (let i = 0; i < d.length; i++) { const x = d[i]; if (!Number.isFinite(x)) bad++; peak = Math.max(peak, Math.abs(x)); sum += x * x; if (Math.abs(x) > 0.98) clip++; if (i) steps[i] = Math.abs(x - d[i - 1]); }
    steps.sort(); const jump = steps[Math.floor(steps.length * 0.999)];   // 1 sample in 1000: steady static, not a single pop
    // firing check on the steady part (1.8 .. 2.9 s): strongest DFT bin between 20 and 400 Hz (5 Hz steps)
    let fire = null;
    if (!spec.ev) {
        const a = Math.round(1.8 * SR), b = Math.round(2.9 * SR);
        let best = 0, bf = 0;
        for (let hz = 20; hz <= 400; hz += 1) {
            let re = 0, im = 0;
            for (let i = a; i < b; i++) { const w = 2 * Math.PI * hz * i / SR; re += d[i] * Math.cos(w); im += d[i] * Math.sin(w); }
            const m = re * re + im * im; if (m > best) { best = m; bf = hz; }
        }
        fire = { expect: 3000 / 60 * (spec.cyl || 4) / 2, found: bf };
    }
    wav(path.join(OUT, id + '.wav'), d, SR);
    rows.push({ car: id, cyl: spec.ev ? 'EV' : (spec.cyl || 4) + (spec.turbo ? ' turbo' : '') + (spec.diesel ? ' diesel' : ''), seconds: res.dur, renderMs: Math.round(res.ms),
        cpuShare: +(res.ms / 1000 / res.dur * 100).toFixed(2), peak: +peak.toFixed(2), rms: +Math.sqrt(sum / d.length).toFixed(3), clipped: clip, nan: bad, maxStep: +jump.toFixed(2),
        firingHz: fire ? fire.expect : '-', strongestHz: fire ? fire.found : '-' });
}
console.table(rows);
// harsh static: up to 0.3.0 the intake roar was raw white noise (steps of 0.9 all through full throttle)
const bad2 = rows.filter(r => r.clipped || r.nan || r.maxStep > 0.15 || (r.firingHz !== '-' && Math.abs(r.firingHz - r.strongestHz) > 3));
console.log(bad2.length ? 'FAIL: ' + bad2.map(r => r.car).join(', ') : 'PASS');
await browser.close(); server.close();
