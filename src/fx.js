// Pooled effects, fixed sizes, no allocation per frame: sparks, tyre smoke, skid marks, speed streaks, debris.
import * as THREE from 'three';
import { pointsMaterial, shadeMaterial, glowMaterial } from './shaders.js';
import { partGeometry } from './assets.js';

class PointPool {
    constructor(scene, max, additive) {
        this.max = max; this.n = 0;
        this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3);
        this.col = new Uint8Array(max * 4); this.size = new Float32Array(max);
        this.life = new Float32Array(max); this.age = new Float32Array(max); this.grow = new Float32Array(max);
        this.base = new Uint8Array(max * 4);
        const g = new THREE.BufferGeometry();
        this.aPos = new THREE.BufferAttribute(this.pos, 3); this.aPos.setUsage(THREE.DynamicDrawUsage);
        this.aCol = new THREE.BufferAttribute(this.col, 4, true); this.aCol.setUsage(THREE.DynamicDrawUsage);
        this.aSize = new THREE.BufferAttribute(this.size, 1); this.aSize.setUsage(THREE.DynamicDrawUsage);
        g.setAttribute('position', this.aPos); g.setAttribute('col', this.aCol); g.setAttribute('size', this.aSize);
        g.setDrawRange(0, 0);
        this.mat = pointsMaterial(additive);
        this.points = new THREE.Points(g, this.mat);
        this.points.frustumCulled = false; this.points.renderOrder = 3;
        this.gravity = additive ? -9.8 : 0.6;
        scene.add(this.points);
        this.next = 0;
    }
    emit(x, y, z, vx, vy, vz, r, g, b, a, size, life, grow) {
        const i = this.next; this.next = (this.next + 1) % this.max;
        if (this.n < this.max) this.n++;
        this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
        this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
        this.base[i * 4] = r; this.base[i * 4 + 1] = g; this.base[i * 4 + 2] = b; this.base[i * 4 + 3] = a;
        this.size[i] = size; this.life[i] = life; this.age[i] = 0; this.grow[i] = grow || 0;
    }
    update(dt) {
        const n = this.n;
        for (let i = 0; i < n; i++) {
            if (this.age[i] >= this.life[i]) { this.col[i * 4 + 3] = 0; continue; }
            this.age[i] += dt;
            const k = 1 - this.age[i] / this.life[i];
            this.vel[i * 3 + 1] += this.gravity * dt;
            this.vel[i * 3] *= 0.985; this.vel[i * 3 + 2] *= 0.985;
            this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
            this.size[i] += this.grow[i] * dt;
            this.col[i * 4] = this.base[i * 4]; this.col[i * 4 + 1] = this.base[i * 4 + 1]; this.col[i * 4 + 2] = this.base[i * 4 + 2];
            this.col[i * 4 + 3] = this.base[i * 4 + 3] * k;
        }
        this.points.geometry.setDrawRange(0, n);
        this.aPos.needsUpdate = true; this.aCol.needsUpdate = true; this.aSize.needsUpdate = true;
    }
}

class Skids {
    constructor(scene, max) {
        this.max = max; this.next = 0;
        this.pos = new Float32Array(max * 4 * 3); this.col = new Uint8Array(max * 4 * 4); this.uv = new Float32Array(max * 4 * 2);
        const idx = new Uint16Array(max * 6);
        for (let k = 0; k < max; k++) { const v = k * 4; idx.set([v, v + 1, v + 2, v, v + 2, v + 3], k * 6); }
        for (let k = 0; k < max * 4; k++) { this.uv[k * 2] = 0.5; this.uv[k * 2 + 1] = 0.5; }
        const g = new THREE.BufferGeometry();
        this.aPos = new THREE.BufferAttribute(this.pos, 3); this.aPos.setUsage(THREE.DynamicDrawUsage);
        this.aCol = new THREE.BufferAttribute(this.col, 4, true); this.aCol.setUsage(THREE.DynamicDrawUsage);
        g.setAttribute('position', this.aPos); g.setAttribute('col', this.aCol); g.setAttribute('uv', new THREE.BufferAttribute(this.uv, 2));
        g.setIndex(new THREE.BufferAttribute(idx, 1));
        this.mesh = new THREE.Mesh(g, shadeMaterial()); this.mesh.frustumCulled = false; this.mesh.renderOrder = 1;
        scene.add(this.mesh);
        this.last = new Float32Array(16 * 4).fill(NaN);   // per wheel key: last x, y, z
        this.dirty = false;
    }
    // key: wheel slot (car * 4 + wheel), position on the ground, side vector, strength 0..1
    add(key, x, y, z, sx, sz, a) {
        const L = this.last, o = key * 4;
        if (a <= 0 || isNaN(L[o])) { L[o] = x; L[o + 1] = y; L[o + 2] = z; L[o + 3] = a > 0 ? 1 : NaN; if (a <= 0) L[o] = NaN; return; }
        const dx = x - L[o], dz = z - L[o + 2];
        if (dx * dx + dz * dz < 0.36) return;
        const k = this.next; this.next = (this.next + 1) % this.max;
        const w = 0.13, p = this.pos, c = this.col, b = k * 12;
        p[b] = L[o] + sx * w; p[b + 1] = L[o + 1] + 0.03; p[b + 2] = L[o + 2] + sz * w;
        p[b + 3] = L[o] - sx * w; p[b + 4] = L[o + 1] + 0.03; p[b + 5] = L[o + 2] - sz * w;
        p[b + 6] = x - sx * w; p[b + 7] = y + 0.03; p[b + 8] = z - sz * w;
        p[b + 9] = x + sx * w; p[b + 10] = y + 0.03; p[b + 11] = z + sz * w;
        const al = Math.min(200, 60 + a * 150);
        for (let v = 0; v < 4; v++) { c[k * 16 + v * 4] = 12; c[k * 16 + v * 4 + 1] = 12; c[k * 16 + v * 4 + 2] = 12; c[k * 16 + v * 4 + 3] = al; }
        L[o] = x; L[o + 1] = y; L[o + 2] = z;
        this.dirty = true;
    }
    reset(key) { this.last[key * 4] = NaN; }
    update() { if (this.dirty) { this.aPos.needsUpdate = true; this.aCol.needsUpdate = true; this.dirty = false; } }
}

class Streaks {   // speed lines close to the camera: thin additive lines
    constructor(scene, n) {
        this.n = n;
        this.pos = new Float32Array(n * 6); this.col = new Uint8Array(n * 8);
        this.seed = new Float32Array(n * 3);
        for (let k = 0; k < n; k++) { this.seed[k * 3] = Math.random() * 6.28; this.seed[k * 3 + 1] = 2 + Math.random() * 3; this.seed[k * 3 + 2] = Math.random() * 40; }
        const g = new THREE.BufferGeometry();
        this.aPos = new THREE.BufferAttribute(this.pos, 3); this.aPos.setUsage(THREE.DynamicDrawUsage);
        this.aCol = new THREE.BufferAttribute(this.col, 4, true); this.aCol.setUsage(THREE.DynamicDrawUsage);
        g.setAttribute('position', this.aPos); g.setAttribute('col', this.aCol);
        this.lines = new THREE.LineSegments(g, glowMaterial()); this.lines.frustumCulled = false; this.lines.renderOrder = 4;
        scene.add(this.lines);
    }
    update(dt, cam, speed, nitro) {
        const strength = Math.max(0, Math.min(1, (speed - 45) / 40)) * 0.6 + (nitro ? 0.4 : 0);
        this.lines.visible = strength > 0.02;
        if (!this.lines.visible) return;
        const e = cam.matrixWorld.elements;
        const rx = e[0], ry = e[1], rz = e[2], ux = e[4], uy = e[5], uz = e[6], fx = -e[8], fy = -e[9], fz = -e[10];
        const cx = e[12], cy = e[13], cz = e[14];
        for (let k = 0; k < this.n; k++) {
            let z = this.seed[k * 3 + 2] - dt * speed * 1.4;
            if (z < 2) z += 40;
            this.seed[k * 3 + 2] = z;
            const a = this.seed[k * 3], r = this.seed[k * 3 + 1];
            const ox = Math.cos(a) * r, oy = Math.sin(a) * r * 0.6;
            const len = 2 + speed * 0.06;
            const x0 = cx + rx * ox + ux * oy + fx * z, y0 = cy + ry * ox + uy * oy + fy * z, z0 = cz + rz * ox + uz * oy + fz * z;
            this.pos[k * 6] = x0; this.pos[k * 6 + 1] = y0; this.pos[k * 6 + 2] = z0;
            this.pos[k * 6 + 3] = x0 + fx * len; this.pos[k * 6 + 4] = y0 + fy * len; this.pos[k * 6 + 5] = z0 + fz * len;
            const al = 140 * strength;
            const blue = nitro ? 255 : 220;
            this.col[k * 8] = nitro ? 120 : 220; this.col[k * 8 + 1] = nitro ? 190 : 220; this.col[k * 8 + 2] = blue; this.col[k * 8 + 3] = al;
            this.col[k * 8 + 4] = 0; this.col[k * 8 + 5] = 0; this.col[k * 8 + 6] = 0; this.col[k * 8 + 7] = 0;
        }
        this.aPos.needsUpdate = true; this.aCol.needsUpdate = true;
    }
}

class Debris {
    constructor(scene, carMat) {
        this.items = [];
        const kinds = ['debris_bumper', 'debris_door', 'debris_tire', 'debris_spoiler', 'debris_plate'];
        for (let k = 0; k < 10; k++) {
            const m = new THREE.Mesh(partGeometry(kinds[k % kinds.length], 'body'), carMat);
            m.userData.s0 = kinds[k % kinds.length] === 'debris_tire' ? 0.65 : 0.85;   // pieces in proportion to the cars
            m.visible = false; m.userData.v = new THREE.Vector3(); m.userData.w = new THREE.Vector3(); m.userData.t = 0;
            scene.add(m); this.items.push(m);
        }
        this.next = 0;
    }
    burst(x, y, z, vx, vy, vz, n) {
        for (let k = 0; k < n; k++) {
            const m = this.items[this.next]; this.next = (this.next + 1) % this.items.length;
            m.visible = true; m.position.set(x, y + 0.6, z);
            m.userData.v.set(vx * 0.5 + (Math.random() - 0.5) * 6, 2.5 + Math.random() * 3.5, vz * 0.5 + (Math.random() - 0.5) * 6);
            m.userData.w.set(Math.random() * 10, Math.random() * 10, Math.random() * 10);
            m.userData.t = 2.2; m.userData.floor = y - 0.4; m.scale.setScalar(m.userData.s0 || 1);
        }
    }
    update(dt) {
        for (const m of this.items) {
            if (!m.visible) continue;
            const u = m.userData;
            u.t -= dt; if (u.t <= 0) { m.visible = false; continue; }
            if (u.t < 0.5) m.scale.setScalar(u.s0 * u.t / 0.5);          // shrink away at the end
            u.v.y -= 9.8 * dt;
            m.position.x += u.v.x * dt; m.position.y += u.v.y * dt; m.position.z += u.v.z * dt;
            if (m.position.y < u.floor) { m.position.y = u.floor; u.v.y *= -0.3; u.v.x *= 0.7; u.v.z *= 0.7; u.w.multiplyScalar(0.7); }
            m.rotation.x += u.w.x * dt; m.rotation.y += u.w.y * dt; m.rotation.z += u.w.z * dt;
        }
    }
}

export class FX {
    constructor(scene, tier, carMat) {
        const low = tier === 'low';
        this.sparks = new PointPool(scene, low ? 80 : 200, true);
        this.smoke = new PointPool(scene, low ? 60 : 160, false);
        this.skids = new Skids(scene, low ? 300 : 700);
        this.streaks = new Streaks(scene, low ? 24 : 48);
        this.debris = new Debris(scene, carMat);
        this.low = low;
    }
    spark(x, y, z, vx, vz, n) {
        for (let k = 0; k < n; k++) this.sparks.emit(x, y, z, vx * 0.5 + (Math.random() - 0.5) * 6, 1 + Math.random() * 4, vz * 0.5 + (Math.random() - 0.5) * 6, 255, 190 + Math.random() * 60, 90, 255, 0.12, 0.25 + Math.random() * 0.3);
    }
    puff(x, y, z, vx, vz, a) {
        this.smoke.emit(x, y + 0.2, z, vx * 0.2 + (Math.random() - 0.5), 0.6 + Math.random() * 0.6, vz * 0.2 + (Math.random() - 0.5), 225, 225, 228, 110 * a, 0.8, 1.1, 2.6);
    }
    update(dt) { this.sparks.update(dt); this.smoke.update(dt); this.skids.update(); this.debris.update(dt); }
}
