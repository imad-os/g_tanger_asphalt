// One race: the players' cars, the rivals (AI), city traffic, nitro, drifts, airtime, near misses, takedowns,
// wrecks and respawns, positions and the finish. Physics runs at 120 Hz (two sub-steps per 60 Hz tick).
import { Vehicle, SPECS } from './vehicle.js';
import { CarView, carDims } from './carview.js';
import { carCar, carWall, HIT } from './collide.js';
import { STEP } from './track.js';

const SUB = 2, DT = 1 / 120;
const NITRO_USE = 0.2;     // gauge per second
const TRAFFIC_MODELS = [['tr_taxi', 0x1f8fa8], ['tr_sedan', 0xe7e3d8], ['tr_suv', 0x40464f], ['tr_van', 0xf2f2f2], ['tr_sedan', 0x8c1d1d], ['tr_delivery', 0xf4f4f4], ['tr_truck', 0x2c5aa0], ['tr_taxi', 0x1f8fa8], ['tr_sedan', 0xc9c9c9]];

export class Racer {
    constructor(race, spec, paint, opts) {
        this.race = race;
        this.spec = spec;
        const dims = carDims(spec.model);
        this.veh = new Vehicle(spec, dims, opts.upgrades);
        this.view = new CarView(race.scene, spec.model, paint, opts.roof);
        this.player = opts.player;          // 0 / 1 for humans, -1 for AI
        this.name = opts.name || '';
        this.skill = opts.skill || 0.9;
        this.ctl = { steer: 0, throttle: 0, brake: 0, nitro: 0, handbrake: 0 };
        this.nitro = opts.player >= 0 ? 0.35 : 0.3;
        this.nitroLevel = 0; this.nitroT = 0; this.perfectWin = 0; this.over = 0;
        this.s = 0; this.lap = 0; this.prog = 0; this.place = 0;
        this.finished = false; this.finishTime = 0;
        this.wreck = 0; this.wrecks = 0; this.takedowns = 0; this.nearMiss = 0; this.driftT = 0; this.driftScore = 0;
        this.airMax = 0; this.lane = opts.lane || 0; this.laneT = 0;
        this.stuckT = 0; this.upsideT = 0; this.lastS = 0;
        this.q = {}; this.q2 = {}; this.at = {};
        this.events = opts.events;
        this.hitCool = 0;
        this.traffic = false;
    }
}

export class Race {
    constructor(scene, track, opts) {
        this.scene = scene; this.track = track;
        this.opts = opts;
        this.racers = []; this.traffic = [];
        this.time = -3.5;          // countdown
        this.state = 'countdown';
        this.laps = track.closed ? Math.max(1, opts.laps || 2) : 1;
        this.total = track.closed ? track.length * this.laps : track.finish;
        this.events = [];          // { player, text, kind, t }
        this.slowmo = 0;
        this.q = {};
        this.mode = opts.mode || 'race';    // race | elimination | takedown | time
        this.elimT = 0;
        const grid = opts.grid;     // [{ spec, paint, player, name, skill, upgrades }]
        const startS = 30;
        for (let k = 0; k < grid.length; k++) {
            const g = grid[k];
            const r = new Racer(this, SPECS[g.spec], g.paint, { roof: g.roof, player: g.player, name: g.name, skill: g.skill, upgrades: g.upgrades, events: this.events });
            r.assist = g.assist || { easy: 0, auto: 1 };
            r.bot = !!(g.assist && g.assist.bot);
            if (r.player >= 0 && g.assist) r.veh.assist.esc = g.assist.esc === 0 ? 0 : 1;
            const row = Math.floor(k / 2), col = k % 2;
            const s = startS - row * 9;
            const d = (col ? -1 : 1) * Math.min(track.hl[0], track.hr[0]) * 0.4;
            this.place(r, s, d, 0);
            r.lane = d;
            this.racers.push(r);
        }
        this.players = this.racers.filter(r => r.player >= 0).sort((a, b) => a.player - b.player);
        this.trafficOn = opts.traffic !== false;
        if (this.trafficOn) for (let k = 0; k < (opts.trafficCount || 10); k++) {
            const [m, paint] = TRAFFIC_MODELS[k % TRAFFIC_MODELS.length];
            const spec = Object.assign({}, m === 'tr_truck' || m === 'tr_delivery' ? SPECS.t_heavy : SPECS.t_small, { model: m });
            const r = new Racer(this, spec, paint, { player: -1, events: this.events });
            r.traffic = true; r.active = false;
            r.veh.assist.air = 0;
            this.traffic.push(r);
        }
        this.all = this.racers.concat(this.traffic);
    }

    place(r, s, d, speed) {
        const a = this.track.at(s, d, r.at);
        const yaw = Math.atan2(a.fx, a.fz);
        const v = r.veh;
        v.setPose(a.x, a.y + v.cgY + 0.45, a.z, yaw);
        v.hint = a.i; for (const w of v.wheels) w.hint = a.i;
        v.vx = a.fx * speed; v.vz = a.fz * speed;
        v.gear = speed > 20 ? 3 : 1;
        r.s = s; r.lastS = s;
    }

    say(r, text, kind) { if (r.player >= 0) this.events.push({ player: r.player, text, kind: kind || 'info', t: 0 }); }

    // ---- per tick (60 Hz) ----
    update(dt) {
        if (this.slowmo > 0) { this.slowmo -= dt; dt *= 0.35; }
        this.time += dt;
        if (this.state === 'countdown' && this.time >= 0) { this.state = 'race'; this.events.push({ player: -1, text: 'GO', kind: 'go', t: 0 }); }
        const racing = this.state !== 'countdown';
        for (const r of this.racers) this.drive(r, dt, racing);
        if (racing && this.trafficOn) this.updateTraffic(dt);
        const steps = Math.max(1, Math.round(dt / (DT)));
        const h = dt / steps;
        for (let k = 0; k < steps; k++) this.physics(h, racing);
        for (const r of this.racers) this.after(r, dt);
        this.rank();
    }

    physics(h, racing) {
        const T = this.track, q = this.q, all = this.all;
        for (let k = 0; k < all.length; k++) {
            const r = all[k];
            if (r.traffic && !r.active) continue;
            const v = r.veh;
            v.hold = !racing && !r.traffic;   // held on the grid: brakes on (revving does not move it)
            v.step(h, T, q);
            v.groundY = q.y;
            if (carWall(v, T, q) > 0) this.wallHit(r, HIT.j, HIT.rel);
        }
        for (let a = 0; a < all.length; a++) {
            const A = all[a]; if (A.traffic && !A.active) continue;
            for (let b = a + 1; b < all.length; b++) {
                const B = all[b]; if (B.traffic && !B.active) continue;
                const j = carCar(A.veh, B.veh);
                if (j > 0) this.carHit(A, B, j, HIT.rel);
            }
        }
    }

    // ---- control ----
    drive(r, dt, racing) {
        const v = r.veh, T = this.track;
        if (r.wreck > 0) {
            v.input.throttle = 0; v.input.brake = 0; v.input.steer = 0; v.input.handbrake = 0; v.nitroOn = 0;
            return;
        }
        let steer, throttle, brake, hb = 0, wantNitro = 0;
        if (r.player >= 0 && r.finished) {
            // after the line the car drives itself: keeps its lane, lifts off and brakes smoothly to a stop before the
            // end of the run-off (harder only when the road left is short)
            const out = this.aiDrive(r, dt);
            steer = out.steer; throttle = 0;
            const left = T.closed ? 1e9 : T.length - 60 - r.s, sp = Math.max(0, v.fwdSpeed);
            const need = sp * sp / (2 * Math.max(20, left)) / (9.81 * 1.15);   // brake share that stops in time
            brake = sp > 0.5 ? Math.min(1, Math.max(0.36, need * 1.2)) : 0;   // ~4 m/s2: a firm, normal stop; stopped: the auto hold keeps it there (a held brake would select reverse)
        } else if (r.player >= 0 && !r.assist.easy) {
            const c = r.ctl;
            steer = c.steer; throttle = r.assist.auto ? Math.max(c.throttle, c.brake > 0.1 ? 0 : 1) : c.throttle;
            brake = c.brake; hb = c.handbrake; wantNitro = c.nitro;
            if (r.finished) { throttle = 0; brake = 0.3; }
        } else {
            // AI (also the "Easy drive" assist: the car drives itself, the player picks the lane and fires nitro)
            if (r.player >= 0) {
                r.lane += r.ctl.steer * dt * 9;
                wantNitro = r.ctl.nitro;
            }
            const out = this.aiDrive(r, dt);
            steer = out.steer; throttle = out.throttle; brake = out.brake;
            if (r.player < 0) wantNitro = out.nitro;
            if (r.player >= 0 && r.ctl.brake > 0.3) { brake = Math.max(brake, r.ctl.brake); throttle = 0; }
            if (r.finished && r.player >= 0) { throttle = 0; brake = 0.25; }
        }
        // nitro
        if (racing && wantNitro && r.nitro > 0.02 && !r.finished) {
            if (r.nitroLevel === 0) {
                r.nitroLevel = r.perfectWin > 0 ? 2 : 1;
                if (r.nitroLevel === 2) this.say(r, 'PERFECT NITRO', 'nitro');
            }
            r.nitro -= NITRO_USE * dt * (r.nitroLevel === 2 ? 0.8 : 1);
        } else if (r.over <= 0) r.nitroLevel = 0;
        if (r.over > 0) { r.over -= dt; r.nitroLevel = 3; if (r.over <= 0) r.nitroLevel = 0; }
        if (r.nitro < 0) r.nitro = 0;
        if (r.perfectWin > 0) r.perfectWin -= dt;
        v.nitroOn = r.nitroLevel === 0 ? 0 : r.nitroLevel === 1 ? 1 : r.nitroLevel === 2 ? 1.35 : 1.8;
        if (v.nitroOn) throttle = 1, brake = 0;
        v.input.steer = steer; v.input.throttle = throttle; v.input.brake = brake; v.input.handbrake = hb;
        v.topSpeedCap = 1e9;
    }

    // 360 stunt: a double press of drift spins the car once around while it keeps going; a full spin fills nitro
    spin360(r) {
        const v = r.veh;
        if (r.wreck > 0 || r.finished || this.state !== 'race' || v.spinT > 0 || v.fwdSpeed < 12) return;
        v.startSpin(r.ctl.steer < -0.2 ? -1 : 1);
        r.spinSaid = false;
    }
    // Overdrive: a full gauge, fired with a double press: big boost, cars nearby pushed away
    overdrive(r) {
        if (r.nitro < 0.98 || r.over > 0 || this.state !== 'race') return false;
        r.nitro = 0; r.over = 3.2; r.nitroLevel = 3;
        this.say(r, 'OVERDRIVE', 'nitro');
        const v = r.veh;
        for (const o of this.all) {
            if (o === r || (o.traffic && !o.active)) continue;
            const dx = o.veh.px - v.px, dz = o.veh.pz - v.pz, d = Math.hypot(dx, dz);
            if (d < 14 && d > 0.1) o.veh.impulse(dx / d * o.veh.mass * 6, o.veh.mass * 1.5, dz / d * o.veh.mass * 6, 0, 0.6, 0);
        }
        return true;
    }

    aiDrive(r, dt) {
        const v = r.veh, T = this.track, q = r.q2;
        const speed = Math.max(0, v.fwdSpeed);
        // keep the lane inside the road, move over to pass the car ahead
        const hl = T.hl[v.hint], hr = T.hr[v.hint];
        if (!r.traffic && (r.player < 0 || r.bot)) {
            r.laneT -= dt;
            if (r.laneT <= 0) { r.laneT = 0.25; r.lane = this.pickLane(r, speed, hl, hr); }
        }
        if (r.lane > hl - 1.4) r.lane = hl - 1.4;
        if (r.lane < -hr + 1.4) r.lane = -hr + 1.4;
        // aim point ahead
        const look = 7 + speed * 0.42;
        const a = T.at(r.s + look, r.lane, r.at);
        const dx = a.x - v.px, dz = a.z - v.pz;
        const R = v.R;
        const fx = R[6], fz = R[8], lx = R[0], lz = R[2];
        const along = dx * fx + dz * fz, side = dx * lx + dz * lz;
        const wheelBase = v.wheels[0].mz - v.wheels[2].mz;
        let steer = Math.atan2(2 * wheelBase * side, along * along + side * side) / v.lockAt(v.fwdSpeed);   // the wheel lock the car allows at this speed
        steer = Math.max(-1, Math.min(1, steer * 1.1));
        // target speed: the tightest bend ahead within braking distance
        const mu = v.mu * (r.traffic ? 0.45 : 0.86 * r.skill + 0.08);
        const i0 = v.hint, horizon = Math.min(T.n - 2, i0 + Math.ceil((40 + speed * speed / 14) / STEP));
        let vt = r.traffic ? r.cruise : 95 * r.skill;
        for (let i = i0 + 2; i <= horizon; i += 2) {
            const c = Math.abs(T.curv[i]) + 1e-4;
            const vmax = Math.sqrt(mu * 9.81 / c) * (r.traffic ? 1 : 1.08);
            const dist = (i - i0) * STEP;
            const allowed = Math.sqrt(vmax * vmax + 2 * 7.5 * dist);
            if (allowed < vt) vt = allowed;
        }
        // something in my path: follow a slower car, brake hard for an oncoming one
        const myD = v.trackQ_d;
        for (const o of this.all) {
            if (o === r || (o.traffic && !o.active)) continue;
            const ds = o.s - r.s;
            if (ds < 1 || ds > 10 + speed * 0.4 + speed * speed / 14 || Math.abs(o.d - myD) > 2.3 || Math.abs(o.d - r.lane) > 2.3) continue;
            const osr = o.traffic ? o.veh.fwdSpeed * o.dir : o.veh.fwdSpeed;
            if (osr < -1) r.laneT = 0;                      // oncoming in my path: pick a new lane now
            const os = Math.max(0, osr);
            vt = Math.min(vt, Math.sqrt(os * os + 2 * 7 * Math.max(0, ds - 7)));   // can still stop behind it
        }
        // rubber band: rivals far behind the leading player push a bit harder, far ahead ease off
        if (!r.traffic && this.players.length) {
            const lead = this.players[0].prog > (this.players[1] ? this.players[1].prog : -1e9) ? this.players[0] : this.players[1];
            const gap = r.prog - lead.prog;
            const k = gap < -60 ? 1.07 : gap > 150 ? 0.9 : 1;
            vt *= k;
            v.topSpeedCap = 1e9;
        }
        let throttle = 0, brake = 0;
        const err = vt - speed;
        if (err > 0) throttle = Math.min(1, err * 0.25 + 0.3);
        else brake = Math.min(1, -err * 0.12);
        if (r.traffic && speed > vt) throttle = 0;
        let nitro = 0;
        if (!r.traffic && r.player < 0 && this.state === 'race' && r.nitro > 0.3 && vt > speed + 10 && Math.abs(steer) < 0.2) nitro = 1;
        void q;
        const o = r.aiOut || (r.aiOut = { steer: 0, throttle: 0, brake: 0, nitro: 0 });
        o.steer = steer; o.throttle = throttle; o.brake = brake; o.nitro = nitro;
        return o;
    }

    // best lane over the next few seconds: away from oncoming cars and slower cars ahead, a little stickiness
    pickLane(r, speed, hl, hr) {
        let best = r.lane, bestCost = 1e9;
        for (let L = -hr + 1.6; L <= hl - 1.6 + 1e-3; L += 1.75) {
            let cost = Math.abs(L - r.lane) * 0.12 + (L > 1 ? 0.8 : 0);   // our side of the road is the right one
            for (const o of this.all) {
                if (o === r || (o.traffic && !o.active)) continue;
                const ds = o.s - r.s;
                const os = o.traffic ? o.veh.fwdSpeed * o.dir : o.veh.fwdSpeed;
                if (Math.abs(o.d - L) > (os < -1 ? 2.9 : 2.4)) continue;
                if (os < -1) {                                   // oncoming
                    const range = (speed - os) * 4 + 30;
                    if (ds > -4 && ds < range) cost += 12 + 10 * (1 - ds / range);
                } else {
                    const rel = speed - os;
                    const range = 8 + Math.max(0, rel) * 2.5;
                    if (ds > -3 && ds < range) cost += (o.traffic ? 6 : 3) * (1 - Math.max(0, ds) / range) + 1;
                }
            }
            if (cost < bestCost) { bestCost = cost; best = L; }
        }
        return best;
    }

    // ---- after physics, per tick ----
    after(r, dt) {
        const v = r.veh, T = this.track;
        // progress along the route
        const s = v.hint * STEP;
        if (T.closed) {
            if (r.lastS > T.length * 0.8 && s < T.length * 0.2) r.lap++;
            else if (r.lastS < T.length * 0.2 && s > T.length * 0.8) r.lap--;
        }
        r.lastS = s; r.s = s;
        r.d = v.trackQ_d || 0;
        r.prog = r.lap * T.length + s;
        if (this.state !== 'race') return;
        if (!r.finished && r.prog >= this.total) {
            r.finished = true; r.finishTime = this.time;
            // the car drives itself from here: it keeps the lane it is in
            if (r.player >= 0) { const h = r.veh.hint; r.lane = Math.max(-T.hr[h] + 2.5, Math.min(T.hl[h] - 2.5, r.veh.trackQ_d)); }
            if (r.player >= 0) this.say(r, 'FINISH', 'finish');
        }
        if (r.hitCool > 0) r.hitCool -= dt;
        // wrecked: wait, then back on the road
        if (r.wreck > 0) {
            r.wreck -= dt;
            if (r.wreck <= 0) this.respawn(r);
            return;
        }
        // upside down or stuck for a while = wreck / respawn
        const up = v.R[4];
        if (up < 0.25) { r.upsideT += dt; if (r.upsideT > 0.8) { this.wrecked(r, 'flip'); return; } } else r.upsideT = 0;
        if (Math.abs(v.fwdSpeed) < 2 && this.time > 3 && !r.finished) { r.stuckT += dt; if (r.stuckT > 4 && (r.player < 0 || r.bot || r.assist.auto || r.ctl.throttle > 0.5)) this.respawn(r); } else r.stuckT = 0;
        if (r.player < 0) return;
        // 360 stunt done: reward
        if (v.spinDone) { v.spinDone = false; r.spins = (r.spins || 0) + 1; r.nitro = Math.min(1, r.nitro + 0.22); r.perfectWin = 0.6; this.say(r, '360', 'drift'); }
        // drift: the body slides more than ~12 degrees at speed
        const slip = Math.atan2(Math.abs(v.latSpeed), Math.max(1, Math.abs(v.fwdSpeed)));
        if (v.grounded >= 3 && v.fwdSpeed > 15 && slip > 0.2 && !(v.spinT > 0)) {
            r.driftT += dt; r.nitro = Math.min(1, r.nitro + dt * 0.14);
            if (r.driftT > 0.6 && !r.driftSaid) { r.driftSaid = true; this.say(r, 'DRIFT', 'drift'); }
        } else if (r.driftT > 0) {
            if (r.driftT > 0.8) { r.driftScore += r.driftT; r.perfectWin = 0.6; }
            r.driftT = 0; r.driftSaid = false;
        }
        // airtime
        if (v.airTime > 0) r.airMax = Math.max(r.airMax, v.airTime);
        else if (r.airMax > 0) {
            if (r.airMax > 0.45) { this.say(r, 'AIR ' + r.airMax.toFixed(1) + ' s', 'air'); r.nitro = Math.min(1, r.nitro + r.airMax * 0.18); r.perfectWin = 0.6; }
            r.airMax = 0;
            if (v.bodyHit > 9) this.wrecked(r, 'landing');
        }
        // near misses with traffic
        if (this.trafficOn) for (const t of this.traffic) {
            if (!t.active || t.nearDone) continue;
            const ds = t.s - r.s;
            if (ds < 0 && ds > -6 && Math.abs(t.d - r.d) < 3.6 && v.fwdSpeed - t.veh.fwdSpeed * t.dir > 15) {
                t.nearDone = true; r.nearMiss++; r.nitro = Math.min(1, r.nitro + 0.06); this.say(r, 'NEAR MISS', 'near');
            }
        }
    }

    wallHit(r, j, rel) {
        if (r.wreck > 0 || this.state !== 'race') return;
        const v = r.veh;
        // a hard, square hit into the barrier wrecks the car (glancing scrapes do not)
        const along = Math.abs(v.vx * HIT.nx + v.vz * HIT.nz);
        if (rel > 19 && along > 17 && !r.traffic) this.wrecked(r, 'wall');
        else if (r.player >= 0 && rel > 4) this.events.push({ player: r.player, text: '', kind: 'scrape', t: 0, j: j });
        if (this.onImpact) this.onImpact(r, j, rel, HIT);
    }

    carHit(A, B, j, rel) {
        if (this.state !== 'race') return;
        if (this.onImpact) this.onImpact(A, j, rel, HIT);
        // who hit whom: the one moving faster toward the other
        const va = A.veh, vb = B.veh;
        const aTo = -(va.vx * HIT.nx + va.vz * HIT.nz) * -1, bTo = -(vb.vx * HIT.nx + vb.vz * HIT.nz);
        const attacker = aTo > bTo ? A : B, victim = attacker === A ? B : A;
        // head-on: two cars meeting with their fronts (oncoming traffic) = the faster one wrecks too
        const fa = va.R[6] * vb.R[6] + va.R[8] * vb.R[8];
        if (fa < -0.6 && rel > 16) { this.wrecked(A, 'head'); this.wrecked(B, 'head'); return; }
        if (victim.wreck > 0 || attacker.hitCool > 0) return;
        attacker.hitCool = 0.4;
        // takedown: a strong hit on the victim's side or back while the victim is slower
        const vf = victim.veh;
        const side = Math.abs(HIT.nx * vf.R[0] + HIT.nz * vf.R[2]);
        const strong = victim.traffic ? rel > 6 : (side > 0.55 ? rel > 7 : rel > 11);
        if (strong && j > (victim.traffic ? 2500 : 4200) && attacker.veh.fwdSpeed > 15) {
            this.wrecked(victim, 'takedown', attacker);
            if (attacker.player >= 0 || attacker.player < 0) {
                attacker.takedowns++;
                attacker.nitro = Math.min(1, attacker.nitro + (victim.traffic ? 0.12 : 0.3));
                this.say(attacker, victim.traffic ? 'TRAFFIC CHECK' : 'TAKEDOWN', 'takedown');
                if (attacker.player >= 0 && this.players.length === 1 && !victim.traffic) this.slowmo = 0.5;
            }
        }
    }

    wrecked(r, why, by) {
        r.veh.stopSpin();
        if (r.wreck > 0) return;
        const v = r.veh;
        if (this.log) this.log.push(this.time.toFixed(1) + ' ' + (r.traffic ? 'traffic' : r.name) + ' ' + why + (by ? ' by ' + (by.traffic ? 'traffic' : by.name) : '') + ' s' + Math.round(r.s) + ' d' + r.d.toFixed(1) + ' v' + Math.round(v.speed * 3.6) + ' hl' + this.track.hl[v.hint].toFixed(1) + ' hr' + this.track.hr[v.hint].toFixed(1));
        r.wreck = r.traffic ? 6 : 2.6; r.wrecks++;
        r.nitroLevel = 0; r.over = 0; v.nitroOn = 0;
        v.assist.air = 0;
        // throw it: lift, roll and yaw kick at a point above the centre of mass (the physics does the tumbling)
        const sp = Math.max(8, v.speed);
        const sgn = Math.random() < 0.5 ? -1 : 1;
        v.impulse(0, v.mass * (2.2 + sp * 0.06), 0, 0, 0, 0);
        v.wx += v.R[6] * sgn * (2 + sp * 0.06) + v.R[0] * 0.8; v.wz += v.R[8] * sgn * (2 + sp * 0.06) + v.R[2] * 0.8; v.wy += sgn * 1.4;
        if (r.player >= 0) this.say(r, why === 'takedown' ? 'TAKEN DOWN' : 'WRECKED', 'wreck');
        if (this.onWreck) this.onWreck(r, why, by);
    }

    respawn(r) {
        r.veh.stopSpin();
        const v = r.veh, T = this.track;
        const s = Math.max(10, Math.min(T.length - 10, r.s + 5));
        const lane = Math.max(-T.hr[v.hint] + 2, Math.min(T.hl[v.hint] - 2, r.player >= 0 ? -2 : r.lane));
        this.place(r, s, lane, r.traffic ? 0 : 26);
        r.wreck = 0; r.upsideT = 0; r.stuckT = 0;
        v.assist.air = r.traffic ? 0 : 1;
        r.lane = lane;
        if (r.traffic) r.active = false;
    }

    // ---- traffic: a pool of cars kept around the players, both directions (Morocco drives on the right) ----
    updateTraffic(dt) {
        const T = this.track;
        let minS = 1e9, maxS = -1e9;
        for (const p of this.players) { minS = Math.min(minS, p.s); maxS = Math.max(maxS, p.s); }
        for (const t of this.traffic) {
            if (t.active) {
                const behind = t.s < minS - 120, ahead = t.s > maxS + 900;
                if ((behind || ahead) && t.wreck <= 0) t.active = false;
                if (t.wreck > 0) { t.wreck -= dt; if (t.wreck <= 0) t.active = false; }
                // a car stuck for a while (against a wall, after a hit) is taken away once no player is close
                if (t.active && t.wreck <= 0 && Math.abs(t.veh.fwdSpeed) < 1) { t.stuckT = (t.stuckT || 0) + dt; if (t.stuckT > 5 && !this.nearAny(t, 70)) t.active = false; } else t.stuckT = 0;
                if (t.active && t.wreck <= 0) {
                    const out = this.trafficDrive(t, dt);
                    t.veh.input.steer = out.steer; t.veh.input.throttle = out.throttle; t.veh.input.brake = out.brake;
                }
                t.view.root.visible = t.active;
                continue;
            }
            t.view.root.visible = false; t.view.shadow.visible = false;
            t.spawnT = (t.spawnT || 0) - dt;
            if (t.spawnT > 0) continue;
            t.spawnT = 0.6 + Math.random() * 1.2;
            // spawn ahead of the leading player
            const s = maxS + 260 + Math.random() * 520;
            if (s > T.length - 30 && !T.closed) continue;
            const i = Math.min(T.n - 2, Math.floor(s / STEP));
            if (T.flags[i] & 4) continue;
            const hl = T.hl[i], hr = T.hr[i];
            const oncoming = Math.random() < 0.33;
            const lanesR = Math.max(1, Math.floor(hr / 3.6)), lanesL = Math.max(1, Math.floor(hl / 3.6));
            // oncoming cars keep to their outer lane on wide roads, so the middle stays free for overtaking
            const d = oncoming ? (lanesL > 1 ? (lanesL - 0.5) * hl / lanesL : 0.5 * hl) : -(Math.floor(Math.random() * lanesR) + 0.5) * hr / lanesR;
            let free = true;
            for (const o of this.all) if (o !== t && (!o.traffic || o.active) && Math.abs(o.s - s) < 25 && Math.abs((o.d || 0) - d) < 3) { free = false; break; }
            if (!free) continue;
            t.dir = oncoming ? -1 : 1;
            t.cruise = 13 + Math.random() * 7;
            const a = T.at(s, d, t.at);
            const yaw = Math.atan2(a.fx * t.dir, a.fz * t.dir);
            const v = t.veh;
            v.setPose(a.x, a.y + v.cgY + 0.45, a.z, yaw);
            v.hint = a.i; for (const w of v.wheels) w.hint = a.i;
            v.vx = a.fx * t.dir * t.cruise; v.vz = a.fz * t.dir * t.cruise;
            v.gear = 3; v.assist.air = 0;
            t.s = s; t.lastS = s; t.d = d; t.lane = d; t.active = true; t.wreck = 0; t.nearDone = false;
        }
    }
    trafficDrive(t, dt) {
        const v = t.veh, T = this.track;
        t.s = v.hint * STEP; t.d = v.trackQ_d || t.d;
        const speed = Math.max(0, v.fwdSpeed);
        const look = 6 + speed * 0.5;
        const a = T.at(t.s + look * t.dir, t.lane, t.at);
        const dx = a.x - v.px, dz = a.z - v.pz;
        const R = v.R;
        const along = dx * R[6] + dz * R[8], side = dx * R[0] + dz * R[2];
        const wb = v.wheels[0].mz - v.wheels[2].mz;
        let steer = Math.atan2(2 * wb * side, along * along + side * side) / v.lockAt(v.fwdSpeed);
        steer = Math.max(-1, Math.min(1, steer));
        let vt = t.cruise;
        const i0 = v.hint;
        for (let k = 2; k < 40; k += 3) { const i = Math.max(0, Math.min(T.n - 1, i0 + k * t.dir)); const c = Math.abs(T.curv[i]) + 1e-4; vt = Math.min(vt, Math.sqrt(0.35 * 9.81 / c)); }
        // brake for a slower car in the same lane ahead (but never for the racers: they come from behind fast)
        for (const o of this.traffic) {
            if (o === t || !o.active) continue;
            const ds = (o.s - t.s) * t.dir;
            if (ds > 0 && ds < 22 && Math.abs(o.d - t.d) < 2.5) vt = Math.min(vt, Math.max(0, o.veh.speed - 2));
        }
        const err = vt - speed;
        const o = t.aiOut || (t.aiOut = { steer: 0, throttle: 0, brake: 0, nitro: 0 });
        o.steer = steer; o.throttle = err > 0 ? Math.min(1, err * 0.3) : 0; o.brake = err < -2 ? Math.min(1, -err * 0.1) : 0;
        return o;
    }

    nearAny(t, dist) { for (const p of this.players) { const dx = p.veh.px - t.veh.px, dz = p.veh.pz - t.veh.pz; if (dx * dx + dz * dz < dist * dist) return true; } return false; }

    rank() {
        const list = this.racers;
        // simple insertion sort by progress (finished first by time)
        const arr = this._rank || (this._rank = list.slice());
        for (let i = 1; i < arr.length; i++) {
            const x = arr[i]; let j = i - 1;
            while (j >= 0 && better(x, arr[j])) { arr[j + 1] = arr[j]; j--; }
            arr[j + 1] = x;
        }
        for (let i = 0; i < arr.length; i++) arr[i].place = i + 1;
    }

    allPlayersDone() { for (const p of this.players) if (!p.finished) return false; return true; }

    dispose() { for (const r of this.all) r.view.dispose(); }
}
function better(a, b) {
    if (a.finished && b.finished) return a.finishTime < b.finishTime;
    if (a.finished !== b.finished) return a.finished;
    return a.prog > b.prog;
}
