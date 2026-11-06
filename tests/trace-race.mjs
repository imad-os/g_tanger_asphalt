// prints every racer's progress once a second: s (m), d (lateral m), km/h, gear, wreck  node tests/trace-race.mjs "?dev=corniche&bot" 30
import { open } from './shot.mjs';
const s = await open(process.argv[2] || '?dev=corniche&bot');
const secs = +process.argv[3] || 30;
await s.page.waitForFunction(() => window.TA && TA.session && TA.state === 'race', null, { timeout: 60000 });
for (let k = 0; k < secs; k++) {
    await s.page.waitForTimeout(1000);
    const row = await s.page.evaluate(() => { const S = TA.session, R = S.race; return R.time.toFixed(1) + ' | ' + R.racers.map(r => (r.player >= 0 ? '*' : '') + Math.round(r.s) + '/' + r.veh.trackQ_d.toFixed(1) + '/' + Math.round(r.veh.fwdSpeed * 3.6) + (r.wreck > 0 ? 'W' : '')).join('  ') + ' | traffic ' + R.all.filter(o => o.traffic && o.active).map(o => Math.round(o.s) + '/' + o.veh.trackQ_d.toFixed(0) + '/' + Math.round(o.veh.fwdSpeed * 3.6)).join(' '); });
    console.log(row);
}
await s.close();
