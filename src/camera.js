// Chase camera: follows the car's direction of travel with a spring, widens the view with speed and nitro,
// shakes on hits (not on 'low' TVs), and circles a wrecked car.  Views: chase, far chase, bumper.
import * as THREE from 'three';

export class ChaseCam {
    constructor(aspect, far) {
        this.cam = new THREE.PerspectiveCamera(64, aspect, 0.3, far);
        this.mode = 0;
        this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3(); this.look = new THREE.Vector3();
        this.dir = new THREE.Vector3(0, 0, 1);
        this.shake = 0; this.shakeOn = true; this.init = false; this.wreckA = 0;
        this.back = false;
        this.t = new THREE.Vector3(); this.l = new THREE.Vector3();
    }
    kick(a) { if (this.shakeOn) this.shake = Math.min(1, this.shake + a); }
    update(dt, r) {
        const v = r.veh, R = v.R, c = this.cam;
        const sp = Math.max(0, v.fwdSpeed);
        // travel direction: velocity when moving, else the car's nose
        let dx = R[6], dz = R[8];
        if (v.speed > 4 && r.wreck <= 0) { const k = 0.65; dx = dx * (1 - k) + v.vx / v.speed * k; dz = dz * (1 - k) + v.vz / v.speed * k; }
        const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
        const a = 1 - Math.exp(-dt * 7);
        this.dir.x += (dx - this.dir.x) * a; this.dir.z += (dz - this.dir.z) * a;
        const fl = Math.hypot(this.dir.x, this.dir.z) || 1; const fx = this.dir.x / fl, fz = this.dir.z / fl;
        let dist, height, ahead;
        if (this.mode === 1) { dist = 9 + sp * 0.03; height = 3.4; ahead = 6; }
        else if (this.mode === 2) { dist = -0.6; height = 1.05; ahead = 30; }
        else { dist = 6.2 + sp * 0.022; height = 2.25 + sp * 0.004; ahead = 5; }
        const sg = this.back ? -1 : 1;
        if (r.wreck > 0) {   // circle the wreck
            this.wreckA += dt * 0.9;
            this.t.set(v.px + Math.sin(this.wreckA) * 9, v.py + 3.5, v.pz + Math.cos(this.wreckA) * 9);
            this.l.set(v.px, v.py, v.pz);
        } else {
            this.t.set(v.px - fx * dist * sg, v.py + height, v.pz - fz * dist * sg);
            this.l.set(v.px + fx * ahead * sg, v.py + (this.mode === 2 ? 0.9 : 0.8), v.pz + fz * ahead * sg);
        }
        if (!this.init || this.mode === 2 || this.back) { this.pos.copy(this.t); this.init = true; }
        else {
            const k = 1 - Math.exp(-dt * 12);
            this.pos.lerp(this.t, k);
            // never below the car's roof line when it's on the ground
            if (this.pos.y < v.py + 0.8) this.pos.y = v.py + 0.8;
        }
        c.position.copy(this.pos);
        if (this.shake > 0) {
            this.shake = Math.max(0, this.shake - dt * 2.2);
            const s = this.shake * this.shake * 0.35;
            c.position.x += (Math.random() - 0.5) * s; c.position.y += (Math.random() - 0.5) * s;
        }
        c.lookAt(this.l);
        const fov = 62 + Math.min(16, sp * 0.13) + (r.veh.nitroOn ? 8 * Math.min(1.5, r.veh.nitroOn) : 0);
        c.fov += (fov - c.fov) * (1 - Math.exp(-dt * 4));
        c.updateProjectionMatrix();
    }
}
