// Career progress in a real browser (owner report 2026-11-12: a win did not open the next route): a fresh career,
// a 1st place in chapter 1's race through the real results code -> the results screen says what opened and the
// chapter 2 card is open.  node tests/career-unlock.mjs [out folder]
import { open } from './shot.mjs';
const dir = process.argv[2];
const s = await open(''); const p = s.page;
await p.waitForFunction(() => window.TA && TA.ui && TA.career && TA.routes, null, { timeout: 60000 });
await p.waitForTimeout(1000);
const r = await p.evaluate(() => {
    const c = TA.career; c.d.stars = {};
    const ev = c.events[0], next = c.events.find(e => e.chapter === 1 && e.mode === 'race');
    const before = { route2: c.eventOpen(next), takedown1: c.eventOpen(c.events[1]) };
    // a finished race: the player 1st of 6
    const me = { player: 0, place: 1, finished: true, finishTime: 200, takedowns: 0, nearMiss: 0, driftScore: 0, wrecks: 0, spec: { model: 'car_city' }, name: 'P1' };
    const race = { racers: [me], players: [me] };
    const res = c.result({ route: ev.route, event: ev, laps: ev.laps, rivals: 5, mode: 'race' }, race);
    TA.ui.results(res);
    return { before, after: { route2: c.eventOpen(next), takedown1: c.eventOpen(c.events[1]), route3: c.eventOpen(c.events.find(e => e.chapter === 2 && e.mode === 'race')) }, unlocked: res.unlocked.map(e => e.id) };
});
await p.waitForTimeout(400);
const msg = await p.evaluate(() => (document.querySelector('.unl') || {}).textContent || '');
if (dir) await p.screenshot({ path: dir + '/results-unlocked.png' });
await p.evaluate(() => TA.ui.career()); await p.waitForTimeout(400);
const cards = await p.evaluate(() => [...document.querySelectorAll('.rcard')].slice(0, 3).map(e => (e.classList.contains('locked') ? 'locked: ' : 'open: ') + e.dataset.say + ' / ' + e.querySelector('.rs').textContent));
if (dir) await p.screenshot({ path: dir + '/career-after-win.png' });
console.log(JSON.stringify({ ...r, msg, cards }, null, 1));
const ok = !r.before.route2 && r.after.route2 && r.after.takedown1 && !r.after.route3 && /Unlocked/.test(msg) && cards[1].startsWith('open') && cards[2].startsWith('locked');
console.log(ok ? 'PASS' : 'FAIL');
await s.close();
