// A race session on screen: scene, world, race, one or two chase cameras (split screen), effects, HUD hooks and
// the frame budget (dynamic resolution keeps 60 fps: the internal size drops when frames run late).
import * as THREE from 'three';
import { Track } from './track.js';
import { World } from './world.js';
import { Race } from './race.js';
import { ChaseCam } from './camera.js';
import { FX } from './fx.js';
import { U, carMaterial } from './shaders.js';

export const THEMES = {
    corniche: { palms: 1, time: 'day' }, marina: { palms: 1, time: 'sunset' }, harris: { palms: 1, time: 'day' },
    rmilat: { time: 'day' }, achakar: { rocks: 1, dry: 1, time: 'sunset' }, mesnana: { time: 'day' },
    zonefranche: { dry: 1, time: 'day' }, rabat: { dry: 1, time: 'day' }, kawassim: { time: 'night' }, dradeb: { time: 'day' }
};

export function setTime(kind) {
    if (kind === 'night') {
        U.uSun.value.set(-0.3, 0.55, 0.4).normalize(); U.uSunCol.value.setRGB(0.45, 0.5, 0.7);
        U.uSky.value.setRGB(0.12, 0.16, 0.3); U.uGround.value.setRGB(0.1, 0.09, 0.1); U.uFog.value.setRGB(0.07, 0.09, 0.16); U.uNight.value = 1;
    } else if (kind === 'sunset') {
        U.uSun.value.set(-0.6, 0.22, -0.7).normalize(); U.uSunCol.value.setRGB(1.0, 0.72, 0.45);
        U.uSky.value.setRGB(0.6, 0.6, 0.78); U.uGround.value.setRGB(0.4, 0.3, 0.26); U.uFog.value.setRGB(0.93, 0.72, 0.6); U.uNight.value = 0.15;
    } else {
        U.uSun.value.set(0.45, 0.75, -0.48).normalize(); U.uSunCol.value.setRGB(1.0, 0.95, 0.86);
        U.uSky.value.setRGB(0.55, 0.72, 0.95); U.uGround.value.setRGB(0.42, 0.38, 0.32); U.uFog.value.setRGB(0.74, 0.82, 0.92); U.uNight.value = 0;
    }
}

export class Session {
    constructor(renderer, routeMeta, routeData, opts, quality) {
        this.renderer = renderer;
        this.quality = quality;
        this.scene = new THREE.Scene();
        this.scene.matrixWorldAutoUpdate = true;
        this.track = new Track(routeMeta, routeData.bin);
        const theme = THEMES[routeMeta.id] || {};
        setTime(opts.time || theme.time);
        const far = quality.tier === 'low' ? 520 : quality.tier === 'mid' ? 700 : 900;
        U.uFogFar.value = far; U.uFogNear.value = far * 0.3;
        this.far = far; this.detailFar = far * 0.55;
        this.world = new World(this.scene, this.track, routeData.bld, theme);
        this.race = new Race(this.scene, this.track, opts);
        this.views = this.race.players.map(() => new ChaseCam(16 / 9, far + 60));
        for (const v of this.views) v.shakeOn = quality.tier !== 'low';
        this.fx = new FX(this.scene, quality.tier, carMaterial(0x888888));
        this.race.onImpact = (r, j, rel, h) => {
            if (rel > 3) this.fx.spark(h.px, h.py, h.pz, r.veh.vx, r.veh.vz, Math.min(14, 2 + rel * 0.5 | 0));
            if (r.player >= 0) this.views[r.player].kick(Math.min(0.8, rel * 0.04));
            if (this.onSound) this.onSound('hit', r, rel);
        };
        this.race.onWreck = (r, why) => {
            const v = r.veh;
            this.fx.debris.burst(v.px, v.py, v.pz, v.vx, v.vy, v.vz, this.fx.low ? 2 : 4);
            this.fx.spark(v.px, v.py, v.pz, v.vx, v.vz, 18);
            if (this.onSound) this.onSound('wreck', r, why);
        };
        this.size = new THREE.Vector2();
        this.frameMs = 16.7; this.scale = quality.scale || 1; this.lateFrames = 0; this.goodFrames = 0;
    }

    // per 60 Hz tick
    update(dt, input) {
        const race = this.race;
        for (const r of race.players) {
            const P = input.players[r.player];
            Object.assign(r.ctl, P.ctl);
            r.assist.auto = P.auto ? 1 : 0;
            if (P.double) race.overdrive(r);
            const cam = this.views[r.player];
            if (P.edge.camera) cam.mode = (cam.mode + 1) % 3;
            cam.back = !!P.ctl.look;
        }
        race.update(dt);
        U.uTime.value += dt;
        // effects from the tyres: smoke and skid marks when sliding, sparks are emitted on impacts
        const fx = this.fx;
        for (let k = 0; k < race.all.length; k++) {
            const r = race.all[k];
            if (r.traffic && !r.active) continue;
            const v = r.veh;
            const near = r.player >= 0 || this.nearPlayer(v);
            for (let w = 0; w < 4; w++) {
                const wh = v.wheels[w];
                const slide = Math.max(wh.slipLat, wh.slipLong);
                const key = k * 4 + w;
                if (key < 64 && wh.contact && slide > 0.35 && v.speed > 4 && near) {
                    fx.skids.add(key, wh.cx, wh.cy, wh.cz, v.R[0], v.R[2], slide);
                    if (!fx.low || (k & 1)) if (Math.random() < slide * 0.5) fx.puff(wh.cx, wh.cy, wh.cz, v.vx, v.vz, slide);
                } else if (key < 64) fx.skids.add(key, 0, 0, 0, 0, 0, 0);
            }
            if (r.wreck > 0 && Math.random() < 0.3 && near) fx.puff(v.px, v.py, v.pz, 0, 0, 1);
        }
        fx.update(dt);
        for (let p = 0; p < this.views.length; p++) this.views[p].update(dt, race.players[p]);
    }
    nearPlayer(v) {
        for (const p of this.race.players) { const dx = p.veh.px - v.px, dz = p.veh.pz - v.pz; if (dx * dx + dz * dz < 160 * 160) return true; }
        return false;
    }

    // draw every player's view; fill the canvas (split horizontally for two players)
    render(frameMs) {
        const R = this.renderer;
        this.budget(frameMs);
        R.getSize(this.size);
        const W = this.size.x, H = this.size.y;
        const n = this.views.length;
        R.setScissorTest(n > 1);
        for (let p = 0; p < n; p++) {
            const view = this.views[p];
            const r = this.race.players[p];
            const vh = H / n, y = H - vh * (p + 1);
            view.cam.aspect = W / vh; view.cam.updateProjectionMatrix();
            R.setViewport(0, y, W, vh); R.setScissor(0, y, W, vh);
            this.world.cull(view.cam.position.x, view.cam.position.z, this.far, this.detailFar);
            this.world.sky.position.copy(view.cam.position);
            for (const o of this.race.all) {
                if (o.traffic && !o.active) { o.view.root.visible = false; o.view.shadow.visible = false; continue; }
                const dx = o.veh.px - view.cam.position.x, dz = o.veh.pz - view.cam.position.z;
                o.view.sync(o.veh, Math.sqrt(dx * dx + dz * dz), o.veh.nitroOn, o.veh.input.brake > 0.2 ? 1 : 0);
            }
            this.fx.streaks.update(1 / 60, view.cam, Math.max(0, r.veh.fwdSpeed), r.veh.nitroOn > 0);
            R.render(this.scene, view.cam);
        }
        R.setScissorTest(false);
    }

    // dynamic resolution: a few late frames in a row lower the internal size, a long run of quick frames raises it
    budget(ms) {
        if (!ms) return;
        this.frameMs = this.frameMs * 0.9 + ms * 0.1;
        if (ms > 18.5) this.lateFrames++; else this.lateFrames = Math.max(0, this.lateFrames - 1);
        if (ms < 15.5) this.goodFrames++; else this.goodFrames = 0;
        const min = this.quality.minScale || 0.5, max = this.quality.scale || 1;
        if (this.lateFrames > 10 && this.scale > min) { this.scale = Math.max(min, this.scale - 0.1); this.lateFrames = 0; this.onScale && this.onScale(this.scale); }
        else if (this.goodFrames > 240 && this.scale < max) { this.scale = Math.min(max, this.scale + 0.05); this.goodFrames = 0; this.onScale && this.onScale(this.scale); }
    }

    dispose() {
        this.race.dispose(); this.world.dispose();
        const f = this.fx;
        for (const o of [f.sparks.points, f.smoke.points, f.skids.mesh, f.streaks.lines]) { o.geometry.dispose(); o.material.dispose(); }
    }
}
