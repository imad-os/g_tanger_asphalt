# Tangier Asphalt

An arcade street racer for **My PC** (Samsung TV, PC, phone) set on real roads of Tangier, Morocco:
nitro (three levels, perfect nitro, Overdrive), drifts, ramps and jumps, takedowns, crashes, city
traffic in both directions, a 30-event career with stars, a garage with upgrades and paints, and
2-player split screen with full button remapping. Played with the TV remote, game controllers or
the My PC phone controller.

## Routes (real Tangier roads, from OpenStreetMap)

| Route | Where | Length |
| --- | --- | --- |
| Corniche Sprint | Avenue Mohammed VI along the bay | 5.3 km |
| Marina Bay Dash | Tanja Marina Bay, port and the bay | 5.2 km |
| Villa Harris Hills | Villa Harris, Malabata, the east coast | 6.0 km |
| Rmilat Forest | Marshan, Rmilat, the Mountain | 5.3 km |
| Achakar Cliffs | Cap Spartel road, Achakar | 8.8 km |
| Mesnana Golf (2 laps) | Mesnana and the Royal golf | 9.5 km |
| Zone Franche Run | Route to the free zone and Gzenaya | 6.8 km |
| Route de Rabat | The N1 south out of the city | 7.0 km |
| Kawassim Night (2 laps) | Kawassim at night | 5.0 km |
| Dradeb Rush | Dradeb and the old town edge | 3.7 km |

Kawassim and Mesnana are not named as places in OpenStreetMap, so those two routes follow the main
roads where they are usually placed; edit the waypoints in `tools/routes-def.mjs` to move them.

## Physics (measured with `node tests/physics.mjs`)

Rigid body car with four ray-cast wheels, springs and dampers (stiffer rebound), tyre forces from slip
with a friction circle and load sensitivity, weight transfer, torque curve + power limit, automatic
gearbox, aerodynamic drag and downforce, rolling resistance, ballistic jumps, impulse crashes.

Mostly everyday cars (original names, no makers' badges): the player's own white compact with a red roof,
a 3-cylinder hatch, an electric saloon, an electric wedge pickup, a big SUV, a police car and one supercar.

| Car | Like | 0-100 km/h | Top speed | 100-0 braking | Skid pad |
| --- | --- | --- | --- | --- | --- |
| Kasbah City (81 kW, 3-cyl turbo, FWD) | 2019 small hatch, two-tone roof | 9.3 s | 185 km/h | 40.6 m | 0.89 g |
| Medina Hatch (96 kW, 3-cyl turbo, FWD) | city hatch | 8.6 s | 202 km/h | 40.0 m | 0.89 g |
| Volta Saloon (366 kW, electric, AWD) | electric saloon | 4.6 s | 235 km/h | 39.0 m | 0.80 g |
| Atlas Cruiser (300 kW, V8 turbo, AWD) | big SUV | 4.6 s | 256 km/h | 39.5 m | 0.80 g |
| Spartel Wedge (447 kW, electric, AWD, 3.1 t) | angular steel pickup | 4.5 s | 183 km/h | 39.4 m | 0.80 g |
| Interceptor (330 kW, V6 turbo, AWD) | police car | 4.1 s | 297 km/h | 36.9 m | 0.89 g |
| Hercules GT (620 kW, V10, RWD) | supercar | 3.4 s | 387 km/h | 33.7 m | 0.98 g |

Engine sound (`assets/engine-worklet.js`, an AudioWorklet): every cylinder's firing pulse goes through an exhaust
model, so the note follows the real firing rate (3000 rpm: 75 Hz for a 3-cylinder, 200 Hz for a V8; checked by
`node tests/engine-sound.mjs <folder>`, which also saves a WAV per car driven by the real physics), with intake roar,
turbo whistle and blow-off, gear-change dips, overrun pops on big engines, and motor / gear whine for electric cars.

Jumps off a 1.6 m kicker: 30 m at 100 km/h, 61 m at 150, 96 m at 200. Hitting it with one side gives a
big roll and a landing on the wheels. Nitro adds 6.5 to 11 kN on top of the engine.

## Controls (defaults, all remappable per player in Settings > Controls)

Settings > Controls: OK on a button box, then press the new button within 3 seconds: any pad button, trigger,
stick direction, Home, keyboard key or remote key. Up to 4 buttons per action, ✕ clears a row; steering response
and stick dead zone per player.


ZR accelerate (auto accelerate is on by default), ZL brake / reverse, stick or D-pad steer,
**B** nitro (press twice with a full gauge = Overdrive), **A** drift, **Y** look back, **X** camera,
**+** pause. TV remote: arrows steer, OK = nitro, Back = look back.

## Build

```
npm install
npm run build        # bundles src/ into dist/game.js and stamps the version
```

The data pipeline (OpenStreetMap through a GitHub Action, terrain heights, routes, models) is described
in `CLAUDE.md`.

## Credits

- Road shapes, coast and buildings © OpenStreetMap contributors, ODbL 1.0 (https://www.openstreetmap.org/copyright)
- Elevation: AWS Terrain Tiles (public dataset, https://registry.opendata.aws/terrain-tiles/)
- Cars, racing props, nature, impact / interface / sci-fi sounds, music loops: Kenney (https://kenney.nl), CC0 (`assets/LICENSES/`)
- Font: Chakra Petch, SIL Open Font License 1.1 (`fonts/OFL.txt`)
- Engine: three.js (MIT)

An original game: no names, art, music or tracks from other racing games.
