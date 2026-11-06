// lists every wreck of a bot race: node tests/wrecks.mjs "?dev=corniche&bot" 60
import { open } from './shot.mjs';
const s = await open(process.argv[2] || '?dev=corniche&bot');
await s.page.waitForFunction(() => window.TA && TA.session && TA.state === 'race', null, { timeout: 60000 });
await s.page.evaluate(() => { TA.session.race.log = []; });
await s.page.waitForTimeout((+process.argv[3] || 60) * 1000);
console.log((await s.page.evaluate(() => TA.session.race.log.join('\n') + '\nplaces ' + TA.session.race.racers.map(r => r.name + ':' + Math.round(r.s)).join(' '))));
await s.close();
