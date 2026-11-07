// Rigid-body car with four ray-cast wheels: suspension springs and dampers, tyre forces from slip (a light
// Pacejka-style curve, friction circle for combined grip), weight transfer (it falls out of the per-wheel loads),
// engine torque curve, automatic gearbox, aerodynamic drag, rolling resistance and downforce.  Jumps are plain
// ballistic flight, crashes are impulses (see collide.js).  Units: metres, kilograms, seconds, newtons.
// Car frame: +Z forward, +Y up, +X left.  No allocation in step().

const G = 9.81, RHO = 1.225, TYRE_R = 0.34;

export const SPECS = {
    // id: model, class, mass kg, power kW, peak torque Nm, rpm max, gears, final drive, CdA m2, Cl (downforce), grip mu, steer max rad, nitro kN
    // everyday cars (real numbers: weight with a driver, power, torque, gears) and a few fast ones. snd: cylinders,
    // turbo, ev (electric: one gear, flat torque; rpm max is the motor's), shift: seconds per gear change (manual ~0.45)
    city:   { model: 'car_city',   cls: 'D', mass: 1090, power: 110, torque: 250, rpm: 6300, gears: [3.42, 2.0, 1.42, 1.1, 0.9, 0.76], final: 4.05, cda: 0.66, cl: 0.04, mu: 1.06, steer: 0.64, nitro: 4.2, drive: 'f', turbo: 1, cyl: 3, shift: 0.28 },
    hatch:  { model: 'car_hatch',  cls: 'D', mass: 1235, power: 96, torque: 230, rpm: 6200, gears: [3.42, 1.95, 1.36, 1.05, 0.87, 0.73], final: 4.05, cda: 0.64, cl: 0.03, mu: 1.0, steer: 0.62, nitro: 3.6, drive: 'f', turbo: 1, cyl: 3, shift: 0.45 },
    volt:   { model: 'car_volt',   cls: 'C', mass: 1920, power: 366, torque: 510, rpm: 16500, gears: [1], final: 9.0, cda: 0.5, cl: 0.04, mu: 1.04, steer: 0.58, nitro: 7, drive: 'a', ev: 1 },
    suvlux: { model: 'car_suvlux', cls: 'C', mass: 2250, power: 300, torque: 620, rpm: 6500, gears: [4.7, 3.14, 2.1, 1.67, 1.29, 1.0, 0.84, 0.67], final: 3.3, cda: 1.05, cl: 0.03, mu: 1.0, steer: 0.56, nitro: 8, drive: 'a', turbo: 1, cyl: 8 },
    wedge:  { model: 'car_wedge',  cls: 'B', mass: 3150, power: 447, torque: 960, rpm: 12800, gears: [1], final: 9.0, cda: 1.0, cl: 0.02, mu: 1.0, steer: 0.52, nitro: 11, drive: 'a', ev: 1 },
    police: { model: 'car_police', cls: 'A', mass: 1900, power: 330, torque: 570, rpm: 6600, gears: [4.7, 3.14, 2.1, 1.67, 1.29, 1.0, 0.84, 0.67], final: 3.2, cda: 0.74, cl: 0.06, mu: 1.08, steer: 0.56, nitro: 8.5, drive: 'a', turbo: 1, cyl: 6 },
    gt:     { model: 'car_gt',     cls: 'S', mass: 1150, power: 620, torque: 760, rpm: 9200, gears: [3.0, 2.1, 1.62, 1.31, 1.1, 0.94, 0.82], final: 3.3, cda: 0.7, cl: 0.7, mu: 1.32, steer: 0.52, nitro: 11, drive: 'r', cyl: 10 },
    // traffic
    t_small:  { model: 'tr_sedan', cls: 'T', mass: 1250, power: 85, torque: 170, rpm: 6000, gears: [3.5, 2.0, 1.3, 1.0, 0.8], final: 4.0, cda: 0.7, cl: 0, mu: 0.95, steer: 0.6, nitro: 0, drive: 'f', cyl: 4 },
    t_heavy:  { model: 'tr_truck', cls: 'T', mass: 3500, power: 120, torque: 450, rpm: 4000, gears: [5.0, 3.0, 1.9, 1.3, 1.0, 0.8], final: 4.1, cda: 1.6, cl: 0, mu: 0.9, steer: 0.55, nitro: 0, drive: 'r', cyl: 6, diesel: 1 }
};

function curve(a) { // tyre force shape vs slip angle (rad): peak at ~0.13 rad (7.5 degrees, a road tyre)
    return Math.sin(1.45 * Math.atan(14 * a));
}

export class Vehicle {
    constructor(spec, dims, upgrades) {
        this.spec = spec;
        const up = Object.assign({ engine: 0, nitro: 0, grip: 0, gearbox: 0, brakes: 0 }, upgrades);
        this.up = up;
        this.power = spec.power * (1 + 0.06 * up.engine);
        this.torqueMax = spec.torque * (1 + 0.06 * up.engine);
        this.nitroForce = spec.nitro * 1000 * (1 + 0.08 * up.nitro);
        this.mu = spec.mu * (1 + 0.025 * up.grip);
        // gearbox: quicker shifts and a stronger pull through the gears (closer ratios, lighter flywheel)
        this.shiftTime = (spec.shift || 0.15) * (1 - 0.13 * up.gearbox);
        this.gearPull = 1 + 0.025 * up.gearbox;
        // brakes: bigger discs and stickier pads hold more of the tyre's grip when stopping
        this.brakeGrip = 1 + 0.035 * up.brakes;
        this.spinT = 0; this.spinDur = 0.9; this.spinDir = 1; this.spinA = 0; this.spinDone = false;
        this.mass = spec.mass;
        this.invMass = 1 / spec.mass;
        // inertia of a box (body dims from the model) with the mass a bit lower than its middle
        const w = dims.w, h = dims.h * 0.8, l = dims.l;
        const m = spec.mass;
        this.Ix = m * (h * h + l * l) / 12; this.Iy = m * (w * w + l * l) / 12; this.Iz = m * (w * w + h * h) / 12;
        this.half = { x: w / 2, y: dims.h / 2, z: l / 2 };
        this.cgY = dims.cg;                 // centre of mass height above the model's ground line
        // state
        this.px = 0; this.py = 0; this.pz = 0;
        this.vx = 0; this.vy = 0; this.vz = 0;
        this.qx = 0; this.qy = 0; this.qz = 0; this.qw = 1;
        this.wx = 0; this.wy = 0; this.wz = 0;
        this.R = new Float32Array(9);     // rotation matrix, columns = left (x), up (y), forward (z) in world
        // wheels: mount points relative to the centre of mass
        this.wheels = [];
        // centre of mass along the car: static front weight share by layout (rear drive 45 %, front drive 60 %)
        const zf = (dims.wheels[0].z + dims.wheels[1].z) / 2, zr = (dims.wheels[2].z + dims.wheels[3].z) / 2;
        const share = spec.drive === 'r' ? 0.45 : spec.drive === 'f' ? 0.6 : 0.5;
        this.cgZ = zr + share * (zf - zr);
        for (let k = 0; k < 4; k++) {
            const d = dims.wheels[k];
            this.wheels.push({
                mx: d.x, my: d.y - this.cgY + 0.18, mz: d.z - this.cgZ, r: d.r, front: k < 2,
                rest: 0.36, comp: 0, prevComp: 0, contact: false, load: 0,
                spin: 0, spinAngle: 0, steer: 0, slipLat: 0, slipLong: 0,
                cx: 0, cy: 0, cz: 0, surf: 0, hint: 0, travel: 0
            });
        }
        const sag = 0.11;
        this.k = spec.mass * G / 4 / sag;
        this.c = 2 * 0.32 * Math.sqrt(this.k * spec.mass / 4);
        this.input = { throttle: 0, brake: 0, steer: 0, handbrake: 0, nitro: 0 };
        this.steerNow = 0;
        this.gear = 1; this.rpm = spec.ev ? 0 : 900; this.shiftT = 0;
        this.nitroOn = 0;
        this.grounded = 0; this.airTime = 0;
        this.speed = 0; this.fwdSpeed = 0; this.latSpeed = 0;
        this.hint = 0;
        this.assist = { esc: 1, tc: 1, air: 1 };
        this.reverse = false; this.stopT = 0; this.hold = false;
        this.wrecked = 0;
        this.topSpeedCap = 1e9;
        this.updateR();
    }

    updateR() {
        const x = this.qx, y = this.qy, z = this.qz, w = this.qw, R = this.R;
        R[0] = 1 - 2 * (y * y + z * z); R[1] = 2 * (x * y + z * w); R[2] = 2 * (x * z - y * w);   // column 0: local X (left)
        R[3] = 2 * (x * y - z * w); R[4] = 1 - 2 * (x * x + z * z); R[5] = 2 * (y * z + x * w);   // column 1: local Y (up)
        R[6] = 2 * (x * z + y * w); R[7] = 2 * (y * z - x * w); R[8] = 1 - 2 * (x * x + y * y);   // column 2: local Z (forward)
    }
    setPose(x, y, z, yaw) {
        this.px = x; this.py = y; this.pz = z;
        const h = yaw / 2;
        this.qx = 0; this.qy = Math.sin(h); this.qz = 0; this.qw = Math.cos(h);
        this.vx = this.vy = this.vz = 0; this.wx = this.wy = this.wz = 0;
        for (const wh of this.wheels) { wh.comp = wh.prevComp = 0.1; wh.spin = 0; }
        this.updateR();
    }
    yaw() { return Math.atan2(this.R[6], this.R[8]); }

    // world inverse inertia applied to a torque vector (body frame diag inertia)
    applyAngular(tx, ty, tz, dt) {
        const R = this.R;
        // to body: b = R^T t
        const bx = R[0] * tx + R[1] * ty + R[2] * tz;
        const by = R[3] * tx + R[4] * ty + R[5] * tz;
        const bz = R[6] * tx + R[7] * ty + R[8] * tz;
        const ax = bx / this.Ix, ay = by / this.Iy, az = bz / this.Iz;
        this.wx += (R[0] * ax + R[3] * ay + R[6] * az) * dt;
        this.wy += (R[1] * ax + R[4] * ay + R[7] * az) * dt;
        this.wz += (R[2] * ax + R[5] * ay + R[8] * az) * dt;
    }
    // impulse at a world point (relative rx, ry, rz from the centre of mass)
    impulse(jx, jy, jz, rx, ry, rz) {
        this.vx += jx * this.invMass; this.vy += jy * this.invMass; this.vz += jz * this.invMass;
        this.applyAngular(ry * jz - rz * jy, rz * jx - rx * jz, rx * jy - ry * jx, 1);
    }
    // effective inverse mass along normal n at relative point r (for collision impulses)
    invMassAt(rx, ry, rz, nx, ny, nz) {
        // (r x n)
        const cx = ry * nz - rz * ny, cy = rz * nx - rx * nz, cz = rx * ny - ry * nx;
        const R = this.R;
        const bx = R[0] * cx + R[1] * cy + R[2] * cz, by = R[3] * cx + R[4] * cy + R[5] * cz, bz = R[6] * cx + R[7] * cy + R[8] * cz;
        return this.invMass + bx * bx / this.Ix + by * by / this.Iy + bz * bz / this.Iz;
    }

    engineTorque(rpm) {
        const r = rpm / this.spec.rpm;
        // petrol: rises to the peak at ~55 %, holds, falls after 90 %; turbo: full torque from ~33 % (2000 rpm, small turbos lag below that);
        // electric: full torque from standstill, then the power limit takes over
        const sp = this.spec, lo = sp.ev ? 0 : sp.turbo ? 0.33 : 0.55;
        let k = r < lo ? 0.55 + 0.45 * (r / lo) : r < 0.9 ? 1 : 1 - (r - 0.9) * (sp.ev ? 1.5 : 2.5);
        if (k < 0) k = 0;
        let tq = this.torqueMax * k;
        const pw = this.power * 1000 / Math.max(100, rpm * Math.PI / 30); // power-limited torque
        return Math.min(tq, pw);
    }

    startSpin(dir) { this.spinT = this.spinDur; this.spinDir = dir; this.spinA = 0; this.spinDone = false; }
    stopSpin() { this.spinT = 0; this.spinA = 0; }
    // steering lock (rad) at a forward speed: less at speed, capped by what the tyres can hold (the AI uses it too).
    // slip = body slip angle (rad): extra lock to catch a slide; drift = handbrake held (full speed lock, for countersteer)
    lockAt(fwd, slip = 0, drift = false) {
        const sp = this.spec, v = Math.max(0, fwd);
        const lock = sp.steer / (1 + v * 0.035);
        if (drift) return lock;
        const wb = Math.max(1.5, this.wheels[0].mz - this.wheels[2].mz);
        return Math.min(lock, Math.atan(wb * sp.mu * G / Math.max(1, v * v)) + 0.13 + slip);
    }
    step(dt, track, q) {
        const sp = this.spec, R = this.R, inp = this.input;
        const lx = R[0], ly = R[1], lz = R[2], ux = R[3], uy = R[4], uz = R[5], fx = R[6], fy = R[7], fz = R[8];
        const speed = Math.hypot(this.vx, this.vy, this.vz);
        const fwd = this.vx * fx + this.vy * fy + this.vz * fz;
        this.speed = speed; this.fwdSpeed = fwd;
        this.latSpeed = this.vx * lx + this.vy * ly + this.vz * lz;

        // steering: rate limited, less lock at speed (like a real car's driver would use)
        // and never more than the tyres can hold: a real driver turns the wheel only as far as the car still
        // turns (grip lock = wheelbase x mu g / v^2), plus the body's slip angle so a slide can still be caught
        const lock = this.lockAt(fwd, Math.abs(Math.atan2(this.latSpeed, Math.max(1, Math.abs(fwd)))), inp.handbrake > 0);
        const target = inp.steer * lock;
        const rate = 2.6 * dt;
        this.steerNow += Math.max(-rate, Math.min(rate, target - this.steerNow));

        // gearbox (automatic, with reverse when stopped and braking)
        const wheelR = this.wheels[2].r;
        let driven = 0, nd = 0;
        for (let k = 0; k < 4; k++) {
            const w = this.wheels[k];
            if (sp.drive === 'a' || (sp.drive === 'f') === w.front) { driven += Math.abs(w.spin); nd++; }
        }
        // the models' wheels are drawn big (cartoon proportions): the drivetrain works with a real tyre radius
        const wheelW = driven / Math.max(1, nd) * wheelR / TYRE_R;
        const gr = sp.gears[this.gear - 1] * sp.final;
        // engine speed follows the driven wheels (wheelspin revs it up); the gearbox shifts on road speed
        const roadW = Math.abs(fwd) / TYRE_R;
        const rpmT = Math.max(sp.ev ? 0 : 900, Math.min(sp.rpm * 1.02, Math.max(roadW, wheelW) * gr * 30 / Math.PI));
        this.rpm += (rpmT - this.rpm) * Math.min(1, dt * 25);
        if (this.shiftT > 0) this.shiftT -= dt;
        else if (!this.reverse && this.grounded) {
            const roadRpm = roadW * gr * 30 / Math.PI;
            if (roadRpm > sp.rpm * 0.95 && this.gear < sp.gears.length) { this.gear++; this.shiftT = this.shiftTime; }
            else if (this.gear > 1) {
                const lower = roadW * sp.gears[this.gear - 2] * sp.final * 30 / Math.PI;
                if (lower < sp.rpm * (inp.throttle > 0.5 ? 0.72 : 0.6)) { this.gear--; this.shiftT = 0.1; }
            }
        }
        // reverse: only once stopped with the brake held for a moment (never while held on the grid)
        if (inp.brake > 0.5 && fwd < 0.8 && inp.throttle < 0.1 && !this.hold) this.stopT += dt; else this.stopT = 0;
        if (this.stopT > 0.35) this.reverse = true;
        if (inp.throttle > 0.1 && this.reverse) this.reverse = false;   // the engine pulls forward again (stops a backward roll first)
        if (this.reverse) this.gear = 1;

        let driveForce = 0;
        const thr = this.reverse ? inp.brake : inp.throttle;
        if (this.shiftT <= 0 && thr > 0) {
            const tq = this.engineTorque(this.rpm) * thr;
            driveForce = tq * sp.gears[this.gear - 1] * sp.final * 0.88 / TYRE_R * this.gearPull;
            if (this.reverse) driveForce = -Math.min(driveForce, 4000);
            if (this.rpm >= sp.rpm * 1.0 && !this.reverse) driveForce *= 0.2;   // limiter
        }
        if (fwd > this.topSpeedCap) driveForce = Math.min(driveForce, 0);
        const nitroF = this.nitroOn > 0 ? this.nitroForce * this.nitroOn : 0;
        let brakeIn = this.reverse ? 0 : inp.brake;
        // auto hold: stopped with no pedal pressed, the car does not roll down a hill
        if (!this.reverse && inp.throttle < 0.05 && inp.brake < 0.05 && Math.abs(fwd) < 0.8) brakeIn = 0.5;
        if (this.hold) brakeIn = 1;
        const brakeTotal = brakeIn * this.mass * G * 1.15 * this.brakeGrip;    // ~1.15 g of braking at full pedal
        // 360 stunt: the body turns once around while the car keeps its line (tyres barely hold it sideways)
        const spinning = this.spinT > 0;
        if (spinning) driveForce = 0;

        let fxT = 0, fyT = -this.mass * G, fzT = 0, tx = 0, ty = 0, tz = 0;
        let contacts = 0;
        const steer = this.steerNow;
        const cs = Math.cos(steer), sn = Math.sin(steer);
        const hb = spinning ? 0 : inp.handbrake;
        const wMass = this.mass / 4;
        for (let k = 0; k < 4; k++) {
            const w = this.wheels[k];
            // mount point in world
            const rx = lx * w.mx + ux * w.my + fx * w.mz, ry = ly * w.mx + uy * w.my + fy * w.mz, rz = lz * w.mx + uz * w.my + fz * w.mz;
            const mx = this.px + rx, my = this.py + ry, mz = this.pz + rz;
            track.query(mx, mz, w.hint, q);
            w.hint = q.i; w.surf = q.off;
            const cosUp = uy > 0.25 ? uy : 0.25;
            const dist = (my - q.y) / cosUp;           // along -up to the ground
            const comp = w.rest + w.r - dist;
            w.prevComp = w.comp;
            if (comp <= 0 || uy < 0.2) {
                w.contact = false; w.comp = 0; w.load = 0; w.slipLat = 0; w.slipLong = 0;
                w.travel = w.rest;
                // wheel slowly spins down in the air, driven wheels spin up with throttle
                w.spin *= 0.995;
                continue;
            }
            const c = Math.min(comp, w.rest + 0.12);
            w.comp = c; w.travel = w.rest - c;
            w.contact = true; contacts++;
            // damper: rebound stiffer than bump (like real dampers), so a landing does not bounce the car
            const cv = (c - w.prevComp) / dt;
            let Fz = this.k * c + this.c * cv * (cv < 0 ? 1.7 : 1);
            if (comp > w.rest + 0.12) Fz += (comp - w.rest - 0.12) * this.k * 6 + Math.max(0, cv) * this.c * 2;   // bump stop
            if (Fz < 0) Fz = 0;
            w.load = Fz;
            // contact point
            const cx = mx - ux * dist, cy = my - uy * dist, cz = mz - uz * dist;
            w.cx = cx; w.cy = cy; w.cz = cz;
            const ox = cx - this.px, oy = cy - this.py, oz = cz - this.pz;
            // point velocity
            const pvx = this.vx + (this.wy * oz - this.wz * oy), pvy = this.vy + (this.wz * ox - this.wx * oz), pvz = this.vz + (this.wx * oy - this.wy * ox);
            // wheel heading: forward rotated about up by steer (front wheels)
            let hx = fx, hy = fy, hz = fz;
            if (w.front) { hx = fx * cs + lx * sn; hy = fy * cs + ly * sn; hz = fz * cs + lz * sn; }
            // project on the ground plane
            const nx = q.nx, ny = q.ny, nz = q.nz;
            let dp = hx * nx + hy * ny + hz * nz;
            hx -= nx * dp; hy -= ny * dp; hz -= nz * dp;
            let hl = Math.hypot(hx, hy, hz) || 1; hx /= hl; hy /= hl; hz /= hl;
            // side = n x h  (points left)
            const sx = ny * hz - nz * hy, sy = nz * hx - nx * hz, sz = nx * hy - ny * hx;
            const vLong = pvx * hx + pvy * hy + pvz * hz;
            const vLat = pvx * sx + pvy * sy + pvz * sz;
            // grip: road 1, kerb / pavement a bit less
            let mu = this.mu * (q.off === 0 ? 1 : 0.85);
            const load = Fz;
            // load sensitivity: grip per newton falls a little with load
            const muEff = mu * (1.08 - 0.08 * Math.min(2, load / (this.mass * G / 4)));
            const maxF = muEff * load;
            // lateral
            const alpha = Math.atan2(vLat, Math.abs(vLong) + 1.5);
            let latGrip = 1;
            if (!w.front && hb > 0) latGrip = 0.42;     // handbrake: rear wheels slide
            if (spinning) latGrip = 0.06;
            let Fy = -curve(alpha) * maxF * latGrip;
            const stopLat = Math.abs(vLat) * wMass / dt;
            if (Math.abs(Fy) > stopLat) Fy = Fy > 0 ? stopLat : -stopLat;
            // longitudinal
            let Fx = 0;
            const isDriven = sp.drive === 'a' || (sp.drive === 'f') === w.front;
            if (isDriven) Fx += (driveForce / nd);
            if (nitroF && !w.front) Fx += nitroF / 2;
            let bF = brakeTotal * (w.front ? 0.32 : 0.18);
            if (!w.front && hb > 0) bF += hb * this.mass * G * 0.35;
            if (bF > 0) {
                const stopL = Math.abs(vLong) * wMass / dt;
                const b = Math.min(bF, stopL);
                Fx -= vLong > 0 ? b : -b;
            }
            // rolling resistance (Crr 0.013 of the load, faded in near standstill)
            Fx -= 0.013 * Fz * Math.max(-1, Math.min(1, vLong));
            // traction: driven wheel force beyond grip = wheelspin
            w.slipLong = 0;
            if (Math.abs(Fx) > maxF) {
                w.slipLong = Math.min(1, (Math.abs(Fx) - maxF) / maxF);
                if (this.assist.tc && isDriven && driveForce > 0) Fx = Math.sign(Fx) * maxF * 0.98;
            }
            // traction control also keeps the cornering grip: power only up to what the tyre has left beside the
            // side force (else a powerful rear-drive car slides its tail out in every bend)
            if (this.assist.tc && isDriven && driveForce > 0 && hb === 0 && Fx > 0) {
                const room = Math.sqrt(Math.max(0, maxF * maxF - Fy * Fy)) * 0.98;
                if (Fx > room) Fx = room;
            }
            // friction circle
            const lim = bF > 0 && driveForce <= 0 ? maxF * this.brakeGrip : maxF;   // better brakes stop harder
            const tot = Math.hypot(Fx, Fy);
            if (tot > lim) { const k2 = lim / tot; Fx *= k2; Fy *= k2; }
            w.slipLat = Math.abs(vLat) > 1.5 ? Math.min(1, (Math.abs(alpha) - 0.13) * 4) : 0;   // sliding = past the tyre's peak
            if (w.slipLat < 0) w.slipLat = 0;
            if (!w.front && hb > 0 && Math.abs(vLong) > 6) w.slipLat = Math.max(w.slipLat, 0.6);
            // wheel spin (visual + rpm): rolling speed, faster when spinning
            const roll = vLong / w.r;
            w.spin = roll * (1 + w.slipLong * 0.6) + (isDriven && driveForce > 0 && w.slipLong > 0 ? 6 * w.slipLong : 0);
            if (!w.front && hb > 0 && Math.abs(vLong) > 1) w.spin *= 0.2;
            // total force at the contact point: suspension along the ground normal + tyre forces
            const Fwx = nx * Fz + hx * Fx + sx * Fy, Fwy = ny * Fz + hy * Fx + sy * Fy, Fwz = nz * Fz + hz * Fx + sz * Fy;
            fxT += Fwx; fyT += Fwy; fzT += Fwz;
            // torque: suspension applies at the mount (keeps the body from tipping too easily), tyre forces at the contact
            const ax = ox, ay = oy + 0.25 * dist, az = oz;   // a bit above the contact (roll centre)
            tx += ay * Fwz - az * Fwy; ty += az * Fwx - ax * Fwz; tz += ax * Fwy - ay * Fwx;
        }
        // reverse engine braking / idle wheel spin when not driven
        for (let k = 0; k < 4; k++) { const w = this.wheels[k]; w.spinAngle += w.spin * dt; if (w.spinAngle > 1e4) w.spinAngle -= 1e4; }

        // aerodynamics: drag against velocity, downforce along -up
        const drag = 0.5 * RHO * sp.cda * speed;
        fxT -= drag * this.vx; fyT -= drag * this.vy; fzT -= drag * this.vz;
        const down = 0.5 * RHO * sp.cl * fwd * Math.abs(fwd) * (contacts > 0 ? 1 : 0.2);
        fxT -= ux * down; fyT -= uy * down; fzT -= uz * down;

        this.grounded = contacts;
        if (contacts === 0) this.airTime += dt; else this.airTime = 0;

        // stability control: damps yaw beyond what the steering asks for (off while the handbrake is held)
        const yawRate = this.wx * ux + this.wy * uy + this.wz * uz;
        if (contacts >= 3 && this.assist.esc && hb === 0 && !spinning && fwd > 5) {
            const wheelBase = this.wheels[0].mz - this.wheels[2].mz;
            // the turn the steering asks for, but never more than grip allows (mu g / v): asking for more would
            // twist the car into a spin. It only ever slows a rotation that is too fast (oversteer), never adds one.
            const cap = sp.mu * G * 1.1 / fwd;
            const want = Math.max(-cap, Math.min(cap, fwd * Math.tan(steer) / wheelBase));
            const err = yawRate - want;
            if (err * yawRate > 0) {
                const t2 = -err * this.Iy * 6 * this.assist.esc;
                tx += ux * t2; ty += uy * t2; tz += uz * t2;
            }
        }
        // drift helper: with the handbrake and steering the car holds a controllable slide
        if (contacts >= 3 && hb > 0 && !spinning && fwd > 12) {
            const t3 = inp.steer * this.Iy * 1.4;
            tx += ux * t3; ty += uy * t3; tz += uz * t3;
        }
        // in the air the body turns into the wind a little (aerodynamic yaw stability: drag acts behind the
        // centre of mass), so a car that left a kicker crooked lands pointing where it goes
        if (contacts === 0 && speed > 8) {
            const beta = Math.atan2(this.latSpeed, Math.max(1, Math.abs(fwd)));
            const yr = this.wx * ux + this.wy * uy + this.wz * uz;
            const ty3 = this.Iy * ((0.6 + 2.4 * this.assist.air) * beta - (0.3 + 1.5 * this.assist.air) * yr);
            tx += ux * ty3; ty += uy * ty3; tz += uz * ty3;
        }
        // air control: a little pitch / roll levelling so landings on four wheels stay possible (assist)
        if (contacts === 0 && this.assist.air && !this.wrecked) {
            // torque that rotates local up toward world up: up x Y
            const ax = -uz, az = ux;   // (ux,uy,uz) x (0,1,0) = (-uz*1... ) => (uy*0 - uz*1, uz*0 - ux*0, ux*1 - uy*0) = (-uz, 0, ux)
            // PD control toward upright: strong enough that a one-sided ramp hit gives a big roll, not a roof landing
            const k3 = 7 * this.assist.air, c3 = 3.2 * this.assist.air;
            tx += (ax * k3 - this.wx * c3) * this.Ix; tz += (az * k3 - this.wz * c3) * this.Iz;
        }

        // integrate (semi-implicit Euler)
        this.vx += fxT * this.invMass * dt; this.vy += fyT * this.invMass * dt; this.vz += fzT * this.invMass * dt;
        this.applyAngular(tx, ty, tz, dt);
        if (spinning) {
            // yaw rate follows a smooth bell (sin) whose area is exactly one turn
            const T = this.spinDur, t0 = T - this.spinT;
            const want = this.spinDir * Math.PI * Math.PI / T * Math.sin(Math.PI * Math.min(1, t0 / T));
            const yr = this.wx * ux + this.wy * uy + this.wz * uz;
            this.wx += ux * (want - yr); this.wy += uy * (want - yr); this.wz += uz * (want - yr);
            this.spinA += Math.abs(want) * dt;
            this.spinT -= dt;
            if (this.spinT <= 0) {
                this.spinT = 0;
                const yr2 = this.wx * ux + this.wy * uy + this.wz * uz;
                this.wx -= ux * yr2; this.wy -= uy * yr2; this.wz -= uz * yr2;
                // a full turn = the stunt counts (a crash in the middle stops it: see stopSpin)
                if (this.spinA > Math.PI * 1.8) this.spinDone = true;
            }
        }
        // angular damping (air + tyre scrub)
        const ad = contacts ? 0.995 : 0.999;
        this.wx *= ad; this.wy *= ad; this.wz *= ad;
        this.px += this.vx * dt; this.py += this.vy * dt; this.pz += this.vz * dt;
        // quaternion: q += 0.5 * (w,0) * q * dt
        const qx = this.qx, qy = this.qy, qz = this.qz, qw = this.qw, wx = this.wx, wy = this.wy, wz = this.wz;
        this.qx += 0.5 * dt * (wx * qw + wy * qz - wz * qy);
        this.qy += 0.5 * dt * (wy * qw + wz * qx - wx * qz);
        this.qz += 0.5 * dt * (wz * qw + wx * qy - wy * qx);
        this.qw += 0.5 * dt * (-wx * qx - wy * qy - wz * qz);
        const ql = Math.hypot(this.qx, this.qy, this.qz, this.qw);
        this.qx /= ql; this.qy /= ql; this.qz /= ql; this.qw /= ql;
        this.updateR();

        // body vs ground: if the body itself sinks into the road (roof landing, hard bottoming), push it out
        track.query(this.px, this.pz, this.hint, q);
        this.hint = q.i;
        this.trackQ_s = q.s; this.trackQ_d = q.d;
        const minY = q.y + 0.25;
        // lowest corner of the body box
        const hx2 = this.half.x, hy2 = this.half.y * 0.9, hz2 = this.half.z;
        let low = 1e9, lcx = 0, lcy = 0, lcz = 0;
        for (let c = 0; c < 8; c++) {
            const sx2 = c & 1 ? hx2 : -hx2, sy2 = c & 2 ? hy2 : -hy2 * 0.4, sz2 = (c & 4 ? hz2 : -hz2) - this.cgZ;
            const ox = lx * sx2 + ux * sy2 + fx * sz2, oy = ly * sx2 + uy * sy2 + fy * sz2, oz = lz * sx2 + uz * sy2 + fz * sz2;
            const yy = this.py + oy;
            if (yy < low) { low = yy; lcx = ox; lcy = oy; lcz = oz; }
        }
        const pen = q.y - low;
        this.bodyHit = 0;
        if (pen > 0) {
            this.py += pen * 0.8;
            // velocity of that corner along the normal
            const nx = q.nx, ny = q.ny, nz = q.nz;
            const pvx = this.vx + (this.wy * lcz - this.wz * lcy), pvy = this.vy + (this.wz * lcx - this.wx * lcz), pvz = this.vz + (this.wx * lcy - this.wy * lcx);
            const vn = pvx * nx + pvy * ny + pvz * nz;
            if (vn < 0) {
                const im = this.invMassAt(lcx, lcy, lcz, nx, ny, nz);
                const j = -(1.25) * vn / im;
                this.impulse(nx * j, ny * j, nz * j, lcx, lcy, lcz);
                // scraping friction on the body
                const tvx = pvx - nx * vn, tvy = pvy - ny * vn, tvz = pvz - nz * vn;
                const tl = Math.hypot(tvx, tvy, tvz);
                if (tl > 0.01) {
                    const jt = Math.min(j * 0.6, tl / im);
                    this.impulse(-tvx / tl * jt, -tvy / tl * jt, -tvz / tl * jt, lcx, lcy, lcz);
                }
                this.bodyHit = -vn;
            }
        }
        if (minY > this.py && contacts === 0 && pen <= 0) { /* nothing */ }
    }
}
