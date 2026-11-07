// No drift without the drift button, in a real browser: your car on the Corniche (no traffic, no rivals), hold ↑ to about
// 60 km/h, then hold → for 0.9 s (you start left of the centre: room to the right) without the drift button and log the slide every 0.1 s. Then the same holding
// the drift button too (X): that one must slide.  node tests/nodrift-browser.mjs [out folder]
import { open } from './shot.mjs';
const dir = process.argv[2];
async function run(drift) {
    const s = await open('?dev=corniche&car=city&notraffic&rivals=0');
    const p = s.page;
    await p.waitForFunction(() => window.TA && TA.session && TA.session.race && TA.session.race.state === 'race', null, { timeout: 60000 });
    const st = () => p.evaluate(() => { const r = TA.session.race.players[0], v = r.veh;
        return { t: TA.session.race.time, room: TA.session.race.track.hr[v.hint] + v.trackQ_d, d: v.trackQ_d, hit: r.wreck || 0, kmh: v.fwdSpeed * 3.6, steer: v.steerNow, side: Math.abs(v.latSpeed), slip: Math.atan2(Math.abs(v.latSpeed), Math.max(1, Math.abs(v.fwdSpeed))) * 57.3,
            rear: Math.max(v.wheels[2].slipLat, v.wheels[3].slipLat), front: Math.max(v.wheels[0].slipLat, v.wheels[1].slipLat), drift: r.driftT, hb: r.ctl.handbrake }; });
    await p.keyboard.down('ArrowUp');
    for (let k = 0; k < 80 && (await st()).kmh < 60; k++) await p.waitForTimeout(100);
    if (drift) await p.keyboard.down('KeyX');
    await p.keyboard.down('ArrowRight');
    let worst = { slip: 0, rear: 0, front: 0, side: 0, drift: 0, hb: 0 }, shot = false;
    const t0 = (await st()).t;
    // turn for 0.9 s of race time, or until 3 m before the right edge of the road (never hit the wall)
    for (let k = 0; k < 200; k++) {
        await p.waitForTimeout(40);
        const x = await st();
        if (x.room < 3 || x.t - t0 > 0.9) break;
        for (const key in worst) worst[key] = Math.max(worst[key], x[key]);
        if (process.env.LOG) console.log(drift, k, JSON.stringify(x, (a, b) => typeof b === 'number' ? +b.toFixed(2) : b));
        if (dir && !shot && x.t - t0 > 0.6) { shot = true; await p.screenshot({ path: dir + '/nodrift-' + (drift ? 'with' : 'without') + '-button.png' }); }
    }
    await s.close();
    return worst;
}
const no = await run(false), yes = await run(true);
const f = w => 'slip ' + w.slip.toFixed(1) + '°, rear tyres sliding ' + Math.round(w.rear * 100) + '%, front ' + Math.round(w.front * 100) + '% (smoke over 35%), side ' + w.side.toFixed(1) + ' m/s, handbrake ' + w.hb;
console.log('without the drift button:', f(no));
console.log('with the drift button:   ', f(yes));
console.log(no.slip <= 7 && no.rear < 0.35 && no.front < 0.35 && no.hb === 0 && yes.slip > 12 ? 'PASS' : 'FAIL');
