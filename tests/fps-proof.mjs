// 60 fps proof: plays a race with a self-driving player under Chrome CPU throttling and reports the frame
// rate, frame times, the game's own work per frame, draw calls and triangles, plus a screenshot per run.
// node tests/fps-proof.mjs <out dir> [throttle=4] [seconds=20] [query ...]
// The WebGL here is SwiftShader (software, in the GPU process, not throttled): the game's CPU work per
// frame is the number that carries over to the TV; the frame rate also includes software rendering.
import { open } from './shot.mjs';
import fs from 'node:fs';
const [, , outDir = 'proof-tmp', thr = '4', secs = '20', ...queries] = process.argv;
fs.mkdirSync(outDir, { recursive: true });
const runs = queries.length ? queries : ['?dev=corniche&bot', '?dev=kawassim&bot&car=gt', '?dev=achakar&bot&car=future', '?dev=harris&bot&2p'];
const rows = [];
for (const q of runs) {
    const s = await open(q + '&proof=1', { w: 1280, h: 720 });
    const cdp = await s.page.context().newCDPSession(s.page);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: +thr });
    await s.page.waitForFunction(() => window.TA && TA.session && TA.state === 'race', null, { timeout: 90000 });
    await s.page.waitForTimeout(6000);                 // countdown + start
    await s.page.evaluate(() => { TA.fpsLog.length = 0; TA.workLog.length = 0; });
    await s.page.waitForTimeout(+secs * 1000);
    const r = await s.page.evaluate(() => {
        const f = TA.fpsLog.slice(), w = TA.workLog.slice(), n = f.length, sum = f.reduce((a, b) => a + b, 0);
        const ws = w.slice().sort((a, b) => a - b), fs2 = f.slice().sort((a, b) => a - b);
        const info = TA.renderer.info.render, S = TA.session;
        return { frames: n, fps: +(n / (sum / 1000)).toFixed(1), late: +(100 * f.filter(x => x > 20).length / n).toFixed(1),
            p95: +fs2[Math.floor(n * 0.95)].toFixed(1), workAvg: +(w.reduce((a, b) => a + b, 0) / n).toFixed(2), workP95: +ws[Math.floor(n * 0.95)].toFixed(2),
            calls: info.calls, tris: info.triangles, scale: S.scale, size: TA.renderer.domElement.width + 'x' + TA.renderer.domElement.height,
            place: S.race.players.map(p => p.place + '/' + S.race.racers.length).join(' '), kmh: S.race.players.map(p => Math.round(p.veh.fwdSpeed * 3.6)).join(' ') };
    });
    const name = q.replace(/[?&=]/g, '_').replace(/^_/, '');
    await s.page.screenshot({ path: outDir + '/' + name + '.png' });
    rows.push({ run: q, throttle: thr + 'x', ...r });
    await s.close();
}
console.table(rows);
fs.writeFileSync(outDir + '/fps-proof.json', JSON.stringify(rows, null, 1));
