// 0.3.0 check in a real browser: (1) Garage has 5 upgrades (engine, gearbox, wheels & tyres, brakes, nitro) that
// can be bought with the remote; (2) Settings > Tyre smoke on / off is saved and used in the race (no smoke while
// drifting when off); (3) a double press of drift (X) in a race spins the car 360° and says "360".
// node tests/v030-check.mjs [out folder]
import { open } from './shot.mjs';
const dir = process.argv[2];
const res = {};
{   // garage + settings
    const s = await open(''); const p = s.page;
    await p.waitForFunction(() => window.TA && TA.ui && TA.career, null, { timeout: 60000 });
    await p.waitForTimeout(1200);
    await p.evaluate(() => { TA.career.d.credits = 50000; TA.ui.garage('city'); });
    await p.waitForTimeout(400);
    res.upRows = await p.evaluate(() => [...document.querySelectorAll('.uprow')].map(r => r.dataset.say));
    for (const [k, times] of [[1, 2], [3, 3]]) for (let i = 0; i < times; i++) {   // gearbox x2, brakes x3 with OK
        await p.evaluate(k => TA.ui.setFocus(document.querySelectorAll('.uprow')[k]), k);
        await p.keyboard.press('Enter'); await p.waitForTimeout(250);
    }
    res.saved = await p.evaluate(() => TA.career.d.up.city);
    await p.evaluate(k => TA.ui.setFocus(document.querySelectorAll('.uprow')[3]), 3);
    if (dir) await p.screenshot({ path: dir + '/garage-upgrades.png' });
    await p.evaluate(() => TA.ui.settings()); await p.waitForTimeout(300);
    await p.evaluate(() => TA.ui.setFocus([...document.querySelectorAll('.opt')].find(e => /Tyre smoke/.test(e.dataset.say))));
    await p.keyboard.press('ArrowRight'); await p.waitForTimeout(200);
    res.smokeSaved = await p.evaluate(() => TA.career.d.settings.smoke);
    if (dir) await p.screenshot({ path: dir + '/settings-smoke.png' });
    await s.close();
}
async function race(q, fn) {
    const s = await open('?dev=corniche&car=city&notraffic&rivals=0' + q); const p = s.page;
    await p.waitForFunction(() => window.TA && TA.session && TA.session.race && TA.session.race.state === 'race', null, { timeout: 60000 });
    const st = () => p.evaluate(() => { const r = TA.session.race.players[0], v = r.veh; return { kmh: v.fwdSpeed * 3.6, t: TA.session.race.time, spinT: v.spinT, spins: r.spins || 0, head: Math.atan2(v.R[6], v.R[8]), smoke: TA.session.fx.smoke.n }; });
    await p.keyboard.down('ArrowUp');
    for (let k = 0; k < 120 && (await st()).kmh < 70; k++) await p.waitForTimeout(100);
    const out = await fn(p, st);
    await s.close(); return out;
}
// drift with smoke off: hold X + right for 0.6 s of race time
res.smokeOff = await race('&smoke=0', async (p, st) => {
    await p.keyboard.down('KeyX'); await p.keyboard.down('ArrowRight');
    const t0 = (await st()).t; let most = 0, shot = false;
    while ((await st()).t - t0 < 0.7) { const x = await st(); most = Math.max(most, x.smoke); if (dir && !shot && x.t - t0 > 0.45) { shot = true; await p.screenshot({ path: dir + '/drift-smoke-off.png' }); } await p.waitForTimeout(30); }
    return most;
});
res.smokeOn = await race('', async (p, st) => {
    await p.keyboard.down('KeyX'); await p.keyboard.down('ArrowRight');
    const t0 = (await st()).t; let most = 0;
    while ((await st()).t - t0 < 0.7) { most = Math.max(most, (await st()).smoke); await p.waitForTimeout(30); }
    return most;
});
res.spin = await race('', async (p, st) => {
    for (let i = 0; i < 2; i++) { await p.keyboard.down('KeyX'); await p.waitForTimeout(100); await p.keyboard.up('KeyX'); await p.waitForTimeout(100); }
    let seen = false, shot = false, x;
    for (let k = 0; k < 300; k++) {
        x = await st();
        if (x.spinT > 0) seen = true;
        if (dir && !shot && x.spinT > 0 && x.spinT < 0.55) { shot = true; await p.screenshot({ path: dir + '/spin-360.png' }); }
        if (seen && x.spinT === 0) break;
        await p.waitForTimeout(25);
    }
    await p.waitForTimeout(300);
    const after = await st();
    if (dir) await p.screenshot({ path: dir + '/spin-360-done.png' });
    const msg = await p.evaluate(() => (document.querySelector('.h-msg') || {}).textContent || '');
    return { started: seen, spins: after.spins, kmhAfter: Math.round(after.kmh), msg };
});
console.log(JSON.stringify(res, null, 1));
const ok = res.upRows.length === 5 && res.saved.gearbox === 2 && res.saved.brakes === 3 && res.smokeSaved === 0 && res.smokeOff === 0 && res.smokeOn > 5 && res.spin.started && res.spin.spins === 1;
console.log(ok ? 'PASS' : 'FAIL');
