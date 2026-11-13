// Garage on a TV screen (1920x1080, owner report 2026-11-13: lower rows were cut off): every row of both tabs
// (Upgrades / Paint) must be inside the screen, reachable with the arrows, and upgrades must change the car's look
// (no kit at level 0, kit parts at level 5). Screenshots of both tabs, plain and fully upgraded.
// node tests/garage-check.mjs [out folder]
import { open } from './shot.mjs';
const dir = process.argv[2];
const s = await open('', { w: 1920, h: 1080 }); const p = s.page;
await p.waitForFunction(() => window.TA && TA.ui && TA.career, null, { timeout: 60000 });
await p.waitForTimeout(1000);
const res = {};
async function check(name) {
    await p.waitForTimeout(500);
    const r = await p.evaluate(() => {
        const H = innerHeight, W = innerWidth;
        const vis = [...document.querySelectorAll('.ui [data-f]')].map(e => e.getBoundingClientRect()).filter(b => b.width && b.height);
        return { rows: vis.length, outside: vis.filter(b => b.bottom > H - 8 || b.right > W || b.top < 0).length, lowest: Math.round(Math.max(...vis.map(b => b.bottom))), screen: H,
            kit: TA.showroom.car.kit ? TA.showroom.car.kit.length : 0 };
    });
    if (dir) await p.screenshot({ path: dir + '/garage-' + name + '.png' });
    res[name] = r;
}
await p.evaluate(() => { const c = TA.career; c.d.up.city = { engine: 0, gearbox: 0, grip: 0, brakes: 0, nitro: 0 }; TA.ui.garage('city', 'up'); });
await check('plain-upgrades');
await p.evaluate(() => { const c = TA.career; c.d.up.city = { engine: 5, gearbox: 5, grip: 5, brakes: 5, nitro: 5 }; TA.ui.garage('city', 'up'); });
await check('full-upgrades');
// the remote: from the Upgrades tab go right to Paint (moving onto a tab shows it)
await p.waitForTimeout(600); await p.evaluate(() => TA.ui.setFocus(TA.ui.root.querySelector('.wrap.garage:last-child .gtab') || TA.ui.root.querySelector('.gtab')));
await p.keyboard.press('ArrowRight'); await p.waitForTimeout(300);
res.tabAfterRight = await p.evaluate(() => TA.ui.gTab); res.focusAfterRight = await p.evaluate(() => TA.ui.focus.className + ' ' + TA.ui.focus.textContent);
for (let i = 0; i < 4; i++) { await p.keyboard.press('ArrowDown'); await p.waitForTimeout(150); }
res.focusAfterDown = await p.evaluate(() => TA.ui.focus.className);
await check('full-paint');
await p.evaluate(() => { TA.career.d.up.hatch = { engine: 3, gearbox: 4, grip: 3, brakes: 3, nitro: 2 }; TA.ui.garage('hatch', 'up'); });
await check('hatch-upgrades');
console.log(JSON.stringify(res, null, 1));
const ok = Object.values(res).filter(r => r.rows).every(r => r.outside === 0) && res['plain-upgrades'].kit === 0 && res['full-upgrades'].kit >= 5 && res.tabAfterRight === 'paint' && /sw/.test(res.focusAfterDown);
console.log(ok ? 'PASS' : 'FAIL');
await s.close();
