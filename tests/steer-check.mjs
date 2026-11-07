// Steering direction check in a real browser: hold the keyboard's right arrow (and then left) during a race and
// make sure the car moves to the right (then left) of the road. node tests/steer-check.mjs [out.png]
import { open } from './shot.mjs';
const s = await open('?dev=corniche&traffic=0');
const p = s.page;
await p.waitForFunction(() => window.TA && TA.session && TA.session.race && TA.session.race.state === 'race', null, { timeout: 60000 });
await p.waitForTimeout(2500);
// heading relative to the road: + = pointing to the left of the road
const off = () => p.evaluate(() => { const r = TA.session.race.players[0], v = r.veh, T = TA.session.race.track, i = v.hint;
    return (v.R[6] * T.tz[i] - v.R[8] * T.tx[i]) * 57.3; });
const hold = async (k) => { const a = await off(); await p.keyboard.down(k); await p.waitForTimeout(500); const b = await off(); await p.keyboard.up(k); await p.waitForTimeout(1500); return b - a; };
const d1 = await hold('ArrowRight');
if (process.argv[2]) await p.screenshot({ path: process.argv[2] });
const d2 = await hold('ArrowLeft');
console.log('heading change (degrees, + = left): right arrow', d1.toFixed(1), ', left arrow', d2.toFixed(1));
console.log(d1 < -1 && d2 > 1 ? 'PASS: right goes right, left goes left' : 'FAIL: steering is inverted');
await s.close();
