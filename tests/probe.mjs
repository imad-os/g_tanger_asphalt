// debug: prints scene facts during a dev race
import { open } from './shot.mjs';
const s = await open(process.argv[2] || '?dev=corniche', { log: 1 });
await s.page.waitForTimeout(+process.argv[3] || 8000);
const r = await s.page.evaluate(new Function(process.argv[4] || `
  const S = TA.session; const c = S.views[0].cam; const p = S.race.players[0].veh; const T = S.track;
  let vis = 0, tot = 0; for (const ch of S.world.chunks) for (const m of ch.meshes) { tot++; if (m.visible) vis++; }
  return { cam: c.position.toArray(), camDir: c.getWorldDirection(c.position.clone()).toArray(), near: c.near, far: c.far,
    car: [p.px, p.py, p.pz], v: [p.vx, p.vy, p.vz], t0: [T.px[0], T.py[0], T.pz[0]], vis, tot, ch0: [S.world.chunks[0].cx, S.world.chunks[0].cz, S.world.chunks[0].r],
    rpm: p.rpm, gear: p.gear, info: TA.renderer.info.render };
`));
console.log(JSON.stringify(r, null, 1));
await s.close();
