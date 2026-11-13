// After the finish line (owner request 2026-11-13): the road goes on ~500 m, the car takes over, keeps its lane, slows
// smoothly and stops on the road; the player's keys do nothing any more. Puts the player 40 m before the line at
// 150 km/h (Hercules GT, the fastest car; the bot drives up to the line), holding ↑, and also ← once over the line.  node tests/finish-runoff.mjs [out folder] [routes]
import { open } from './shot.mjs';
const dir = process.argv[2];
const routes = (process.argv[3] || 'corniche,dradeb,achakar').split(',');
let fail = 0;
for (const id of routes) {
    const s = await open('?dev=' + id + '&car=gt&notraffic&rivals=0&bot'); const p = s.page;
    await p.waitForFunction(() => window.TA && TA.session && TA.session.race && TA.session.race.state === 'race', null, { timeout: 60000 });
    const info = await p.evaluate(() => { const R = TA.session.race, T = R.track, r = R.players[0]; R.place(r, T.finish - 40, -2, 42); return { finish: T.finish, length: T.length }; });
    await p.keyboard.down('ArrowUp');
    let finished = false, crossKmh = 0, maxDev = -99, shot = false, x, ended = false;
    for (let k = 0; k < 900; k++) {
        await p.waitForTimeout(100);
        const y = await p.evaluate(() => { if (!TA.session) return null; const R = TA.session.race, r = R.players[0], v = r.veh, T = R.track; return { s: r.s, kmh: v.fwdSpeed * 3.6, fin: r.finished, wreck: r.wreck, d: v.trackQ_d, hw: v.trackQ_d > 0 ? T.hl[v.hint] : T.hr[v.hint] }; });
        if (!y) { ended = true; break; }   // results screen: the car had stopped
        x = y;
        if (x.fin && !finished) { finished = true; await p.keyboard.down('ArrowLeft'); crossKmh = Math.round(x.kmh); if (dir) await p.screenshot({ path: dir + '/finish-' + id + '-line.png' }); }
        if (finished) { const o = Math.abs(x.d) - x.hw; if (o > maxDev) { maxDev = o; if (process.env.LOG) console.log('worst', JSON.stringify(x)); } }
        if (dir && finished && !shot && x.kmh < 60) { shot = true; await p.screenshot({ path: dir + '/finish-' + id + '-slowing.png' }); }
        if (process.env.LOG) console.log(JSON.stringify(x));
        if (finished && Math.abs(x.kmh) < 0.5) break;
    }
    if (!ended) await p.waitForTimeout(600);
    if (dir) await p.screenshot({ path: dir + '/finish-' + id + (ended ? '-results.png' : '-stopped.png') });
    const ok = finished && Math.abs(x.kmh) < (ended ? 6 : 0.5) && x.s < info.length - 20 && !x.wreck && maxDev < 0;
    if (!ok) fail++;
    console.log(id, JSON.stringify({ finishAt: info.finish, roadEnds: info.length, crossKmh, stoppedAt: Math.round(x.s), roadLeft: Math.round(info.length - x.s), stoppedKmh: +x.kmh.toFixed(1), results: ended, offRoad: maxDev > 0, ok }));
    await s.close();
}
console.log(fail ? 'FAIL ' + fail : 'PASS');
