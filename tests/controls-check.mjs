// Button mapping check in a real browser: Settings > Controls, OK on the Accelerate box must NOT bind OK itself,
// it listens 3 s; then a keyboard key (W) is bound; another box left alone gives up after 3 s and keeps its button.
// node tests/controls-check.mjs [shots folder]
import { open } from './shot.mjs';
const dir = process.argv[2];
const s = await open('');
const p = s.page;
await p.waitForFunction(() => window.TA && TA.ui && TA.career, null, { timeout: 60000 });
await p.waitForTimeout(1500);
await p.evaluate(() => TA.ui.controls(0));
await p.waitForTimeout(300);
const label = (id) => p.evaluate((id) => { const e = document.querySelector('[data-id="' + id + '"]'); return e ? e.textContent : null; }, id);
const focus = (id) => p.evaluate((id) => TA.ui.setFocus(document.querySelector('[data-id="' + id + '"]')), id);
const before = await label('accel:0');
await focus('accel:0');
await p.keyboard.press('Enter');                 // opens listening: the Enter itself must not be taken
await p.waitForTimeout(600);
const listening = await label('accel:0');
if (dir) await p.screenshot({ path: dir + '/controls-listening.png' });
await p.keyboard.press('KeyW');
await p.waitForTimeout(500);
const after = await label('accel:0');
// time out: OK on Brake's first box, press nothing for 3.5 s
const brake0 = await label('brake:0');
await focus('brake:0'); await p.keyboard.press('Enter'); await p.waitForTimeout(3600);
const brakeAfter = await label('brake:0');
// a second box on Nitro: Space
await focus('nitro:1'); await p.keyboard.press('Enter'); await p.waitForTimeout(400); await p.keyboard.press('Space'); await p.waitForTimeout(400);
const nitro1 = await label('nitro:1');
// a controller: its B (button 0) opens the box and is still held -> ignored; then Home (16) is taken
await focus('camera:2');
await p.evaluate(() => { TA.input.onButton(0, true, 1, 'pad0'); document.querySelector('[data-id="camera:2"]').click(); });
await p.waitForTimeout(400);
await p.evaluate(() => { TA.input.onButton(0, false, 0, 'pad0'); TA.input.onButton(16, true, 1, 'pad0'); });
await p.waitForTimeout(300);
await p.evaluate(() => TA.input.onButton(16, false, 0, 'pad0'));
const cam2 = await label('camera:2');
if (dir) await p.screenshot({ path: dir + '/controls-done.png' });
console.log({ before, listening, after, brake0, brakeAfter, nitro1, cam2 });
const ok = /…/.test(listening) && after === '⌨ W' && brakeAfter === brake0 && nitro1 === '⌨ Space' && cam2 === 'Home';
console.log(ok ? 'PASS: listens 3 s, takes any button, gives up and keeps the old one' : 'FAIL');
await s.close();
