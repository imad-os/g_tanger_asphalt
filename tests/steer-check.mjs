// Steering direction check in a real browser: in a fresh race each time, hold accelerate (↑) and then one arrow,
// and measure how the car's heading turns against the road: right arrow must turn right, left arrow left.
// node tests/steer-check.mjs [out folder]
import { open } from './shot.mjs';
const dir = process.argv[2];
async function turn(key) {
    const s = await open('?dev=corniche&car=city');
    const p = s.page;
    await p.waitForFunction(() => window.TA && TA.session && TA.session.race && TA.session.race.state === 'race', null, { timeout: 60000 });
    // heading against the road: + = pointing to the left of the road
    const head = () => p.evaluate(() => { const v = TA.session.race.players[0].veh, T = TA.session.race.track, i = v.hint;
        return (v.R[6] * T.tz[i] - v.R[8] * T.tx[i]) * 57.3; });
    await p.keyboard.down('ArrowUp'); await p.waitForTimeout(1500);
    const a = await head();
    await p.keyboard.down(key); await p.waitForTimeout(700);
    const b = await head();
    if (dir) await p.screenshot({ path: dir + '/steer-' + key + '.png' });
    await s.close();
    return b - a;
}
const r = await turn('ArrowRight'), l = await turn('ArrowLeft');
console.log('heading change (degrees, + = left): right arrow', r.toFixed(1), ', left arrow', l.toFixed(1));
console.log(r < -2 && l > 2 ? 'PASS: right goes right, left goes left' : 'FAIL: steering is inverted or does nothing');
