// Cars, events, progress (stars, credits, unlocked cars, upgrades, paint) saved with MyPC.save('career').
import { SPECS } from './vehicle.js';

export const CARS = [
    // everyday cars first; original names (no makers' names or badges). roof: a second colour for the roof (-1 = none)
    { id: 'city', name: 'Kasbah City', stars: 0, paint: 0xf4f4f4, roof: 0xc8102e, mine: 1 },   // the owner's own car
    { id: 'hatch', name: 'Medina Hatch', stars: 0, paint: 0xf2b705, roof: 0x0b0b0e },
    { id: 'volt', name: 'Volta Saloon', stars: 8, paint: 0xf4f4f4, roof: -1 },
    { id: 'suvlux', name: 'Atlas Cruiser', stars: 18, paint: 0x2b2f36, roof: -1 },
    { id: 'wedge', name: 'Spartel Wedge', stars: 30, paint: 0xb9bec4, roof: -1 },
    { id: 'police', name: 'Interceptor', stars: 44, paint: 0xf4f4f4, roof: -1 },
    { id: 'gt', name: 'Hercules GT', stars: 62, paint: 0xd81e2c, roof: -1 }
];
export const PAINTS = [0xf4f4f4, 0xc8102e, 0xd81e2c, 0xe0402a, 0xf2b705, 0x18c6b2, 0x1d63d6, 0x1b2a4a, 0x5b2bd6, 0x2b2f36, 0x0f7a3c, 0xb9bec4, 0x9aa3ad, 0x0b0b0e];
const RIVALS = ['Yassine', 'Salma', 'Karim', 'Nora', 'Omar', 'Imane', 'Hamza', 'Rania', 'Mehdi', 'Aya'];
const RIVAL_PAINTS = [0xe8e8e8, 0x2aa1e0, 0x3a3a46, 0xc0392b, 0x9aa3ad, 0xf27b05, 0x1b2a4a, 0x7bc043, 0xe6c229, 0x16a085];
const RIVAL_ROOFS = [0x0b0b0e, -1, 0xf4f4f4, -1, 0xc8102e, -1];
export const MAXUP = 5;

export function stats(carId, up) {
    const s = SPECS[carId]; up = up || { engine: 0, nitro: 0, grip: 0 };
    const p = s.power * (1 + 0.06 * up.engine);
    // where drag eats all the power, or where the engine (motor) runs out of revs in top gear
    const rev = s.rpm * Math.PI / 30 / (s.gears[s.gears.length - 1] * s.final) * 0.34 * 3.6;
    const top = Math.round(Math.min(rev, Math.cbrt(p * 1000 / (0.5 * 1.225 * s.cda)) * 3.6 * 0.9));
    const acc = Math.min(100, Math.round(p / s.mass * 1000 / 5.2));
    const hand = Math.min(100, Math.round((s.mu * (1 + 0.025 * up.grip) - 0.9) * 180 + s.cl * 25));
    const nit = Math.min(100, Math.round(s.nitro * (1 + 0.08 * up.nitro) / s.mass * 1000 * 8));
    return { top, acc, hand, nit };
}

export class Career {
    constructor(saved, routes) {
        this.routes = routes.routes;
        const d = saved || {};
        const ids = CARS.map(c => c.id), known = id => ids.includes(id);   // saves from before the car list changed
        this.d = {
            stars: d.stars || {}, credits: d.credits || 3000, owned: ['city', 'hatch'].concat((d.owned || []).filter(id => known(id) && id !== 'city' && id !== 'hatch')), up: d.up || {}, paint: d.paint || {}, roof: d.roof || {},
            car: known(d.car) ? d.car : 'city', best: d.best || {}, settings: Object.assign({ quality: 'auto', fps: 0, units: 'kmh', easy: [0, 0], esc: [1, 1], cam: 0 }, d.settings || {})
        };
        this.events = [];
        const modes = ['race', 'takedown', 'time'];
        this.routes.forEach((r, k) => {
            modes.forEach((m, j) => {
                this.events.push({ id: r.id + ':' + m, route: r.id, mode: m, chapter: k, need: k * 4 + j * 2, laps: r.laps,
                    rivals: m === 'time' ? 0 : 5, goal: m === 'takedown' ? 3 + Math.min(4, k >> 1) : m === 'time' ? Math.round(r.length / (32 + k * 0.6)) : 3,
                    reward: 1500 + k * 400 + j * 300 });
            });
        });
    }
    save() { window.MyPC.save('career', this.d); }
    totalStars() { let n = 0; for (const k in this.d.stars) n += this.d.stars[k]; return n; }
    up(car) { return this.d.up[car] || (this.d.up[car] = { engine: 0, nitro: 0, grip: 0 }); }
    paintOf(car) { return this.d.paint[car] !== undefined ? this.d.paint[car] : CARS.find(c => c.id === car).paint; }
    roofOf(car) { return this.d.roof[car] !== undefined ? this.d.roof[car] : CARS.find(c => c.id === car).roof; }
    upCost(car, kind) { const lv = this.up(car)[kind]; const cls = { D: 1, C: 1.4, B: 1.9, A: 2.6, S: 3.4 }[SPECS[car].cls] || 1; return Math.round((lv + 1) * 900 * cls / 100) * 100; }
    buyUp(car, kind) {
        const u = this.up(car); if (u[kind] >= MAXUP) return false;
        const c = this.upCost(car, kind); if (this.d.credits < c) return false;
        this.d.credits -= c; u[kind]++; this.save(); return true;
    }
    unlocked(car) { return this.d.owned.includes(car) || this.totalStars() >= CARS.find(c => c.id === car).stars; }
    eventOpen(ev) { return this.totalStars() >= ev.need; }

    // the starting grid for a race config
    grid(cfg) {
        const g = [];
        const nP = cfg.players.length;
        const pcls = SPECS[cfg.players[0].car].cls;
        const order = ['D', 'C', 'B', 'A', 'S'];
        const ci = order.indexOf(pcls);
        // rivals drive cars of the same class (everyday cars race everyday cars); the next class too when it is small
        let pool = Object.keys(SPECS).filter(k => SPECS[k].cls === pcls);
        if (pool.length < 2) pool = Object.keys(SPECS).filter(k => SPECS[k].cls !== 'T' && Math.abs(order.indexOf(SPECS[k].cls) - ci) <= 1);
        const nR = cfg.rivals !== undefined ? cfg.rivals : 5;
        const chapter = cfg.event ? cfg.event.chapter : 3;
        for (let k = 0; k < nR; k++) {
            const car = pool[(k * 3 + chapter) % pool.length];
            g.push({ spec: car, paint: RIVAL_PAINTS[(k + chapter) % RIVAL_PAINTS.length], roof: RIVAL_ROOFS[(k + chapter) % RIVAL_ROOFS.length], player: -1, name: RIVALS[(k + chapter) % RIVALS.length],
                skill: Math.min(1, 0.8 + chapter * 0.018 + (k % 3) * 0.03), upgrades: { engine: Math.min(5, chapter >> 1), nitro: 1, grip: Math.min(5, chapter >> 1) } });
        }
        // players start at the back of the grid, like the real thing
        for (let p = 0; p < nP; p++) {
            const pl = cfg.players[p];
            g.push({ spec: pl.car, paint: pl.paint !== undefined ? pl.paint : this.paintOf(pl.car), roof: pl.roof !== undefined ? pl.roof : this.roofOf(pl.car), player: p, name: pl.name || ('P' + (p + 1)),
                upgrades: this.up(pl.car), assist: { easy: this.d.settings.easy[p] || pl.bot ? 1 : 0, bot: !!pl.bot, auto: 1, esc: this.d.settings.esc[p] } });
        }
        return g;
    }

    // after the race: stars, credits, records
    result(cfg, race) {
        const out = { cfg, rows: [], players: [] };
        const sorted = race.racers.slice().sort((a, b) => a.place - b.place);
        for (const r of sorted) out.rows.push({ place: r.place, name: r.player >= 0 ? (race.players.length > 1 ? 'P' + (r.player + 1) : (window.TA && window.TA.info && window.TA.info.profile ? window.TA.info.profile.name : 'You')) : r.name, player: r.player, time: r.finished ? r.finishTime : 0, car: r.spec.model });
        for (const p of race.players) {
            const res = { place: p.place, time: p.finished ? p.finishTime : 0, takedowns: p.takedowns, near: p.nearMiss, drift: p.driftScore, wrecks: p.wrecks, stars: 0, credits: 0 };
            const ev = cfg.event;
            if (ev) {
                if (ev.mode === 'race') res.stars = p.place === 1 ? 3 : p.place === 2 ? 2 : p.place === 3 ? 1 : 0;
                else if (ev.mode === 'takedown') res.stars = p.takedowns >= ev.goal + 2 ? 3 : p.takedowns >= ev.goal + 1 ? 2 : p.takedowns >= ev.goal ? 1 : 0;
                else if (ev.mode === 'time') res.stars = !p.finished ? 0 : p.finishTime <= ev.goal * 0.92 ? 3 : p.finishTime <= ev.goal * 0.97 ? 2 : p.finishTime <= ev.goal ? 1 : 0;
                const prev = this.d.stars[ev.id] || 0;
                if (res.stars > prev) this.d.stars[ev.id] = res.stars;
                res.credits = Math.round(ev.reward * (0.35 + res.stars * 0.3)) + p.takedowns * 120;
            } else res.credits = Math.round(400 + Math.max(0, 6 - p.place) * 120 + p.takedowns * 80);
            this.d.credits += res.credits;
            const key = cfg.route + (ev ? ':' + ev.mode : '');
            if (p.finished && (!this.d.best[key] || p.finishTime < this.d.best[key])) { this.d.best[key] = +p.finishTime.toFixed(2); res.record = true; }
            out.players.push(res);
        }
        // score for My PC's top 10: better place, more takedowns, faster
        const p0 = out.players[0];
        out.score = Math.max(0, Math.round((10 - p0.place) * 1000 + p0.takedowns * 250 + p0.near * 40 + (p0.time ? Math.max(0, 600 - p0.time) * 5 : 0)));
        this.save();
        return out;
    }
}
