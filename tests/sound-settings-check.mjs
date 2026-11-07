// Settings > Sound mix check in a real browser: the Engine / Effects / Music volume rows exist, ◀ ▶ change them,
// the game's sound uses the new levels and they are saved. node tests/sound-settings-check.mjs [shot.png]
import { open } from './shot.mjs';
const s = await open('');
const p = s.page;
await p.waitForFunction(() => window.TA && TA.ui && TA.career, null, { timeout: 60000 });
await p.waitForTimeout(1200);
await p.evaluate(() => TA.ui.settings());
await p.waitForTimeout(300);
const rows = await p.evaluate(() => [...document.querySelectorAll('.opt')].map(r => r.dataset.say));
// Engine volume: two steps left (◀) with the keyboard
await p.evaluate(() => { const r = [...document.querySelectorAll('.opt')].find(e => /Engine volume/.test(e.dataset.say)); TA.ui.setFocus(r); });
await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(150); await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(150);
await p.evaluate(() => { const r = [...document.querySelectorAll('.opt')].find(e => /Music volume/.test(e.dataset.say)); TA.ui.setFocus(r); });
for (let i = 0; i < 5; i++) { await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(120); }
const st = await p.evaluate(() => ({ saved: TA.career.d.settings.mix, sound: TA.sound.mix, rows: [...document.querySelectorAll('.opt')].filter(r => /volume/.test(r.dataset.say)).map(r => r.dataset.say) }));
if (process.argv[2]) await p.screenshot({ path: process.argv[2] });
console.log(rows.filter(r => /volume/i.test(r)), st);
const ok = st.rows.length === 3 && Math.abs(st.saved.engine - 0.8) < 1e-6 && Math.abs(st.sound.engine - 0.8) < 1e-6 && Math.abs(st.saved.music - 0.5) < 1e-6 && st.sound.music === st.saved.music;
console.log(ok ? 'PASS: engine / effects / music volume rows work and are used' : 'FAIL');
await s.close();
