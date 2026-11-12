// Sound: one AudioContext (made in onStart, closed in onDestroy). Engines are synthesized per car in an
// AudioWorklet (assets/engine-worklet.js: firing pulses per cylinder through an exhaust model, turbo, electric
// whine; old oscillators only where AudioWorklet is missing), tyre squeal and wind are filtered noise, impacts and UI
// clicks are short Kenney CC0 samples, music is a looping <audio> element (no big decode on the TV).
import { VERSION } from './version.js';

const SFX = ['impactMetal_heavy_000', 'impactMetal_heavy_001', 'impactMetal_heavy_002', 'impactMetal_light_000', 'impactGlass_heavy_000',
    'impactPlate_heavy_000', 'select_001', 'confirmation_001', 'back_001', 'switch_001', 'explosionCrunch_000', 'forceField_000'];

export class Sound {
    constructor(vol) { this.vol = { music: vol.music ?? 0.7, sfx: vol.sfx ?? 0.8 }; this.mix = { engine: 1, sfx: 1, music: 1 }; this.ctx = null; this.buf = {}; this.engines = []; this.music = null; this.musicName = ''; }
    start() {
        if (this.ctx) return;
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        const c = this.ctx = new AC();
        this.master = c.createGain(); this.master.gain.value = this.vol.sfx; this.master.connect(c.destination);
        // one second of noise shared by every noise voice
        const nb = c.createBuffer(1, c.sampleRate, c.sampleRate), d = nb.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        this.noise = nb;
        this.worklet = null;
        if (c.audioWorklet) this.worklet = c.audioWorklet.addModule('assets/engine-worklet.js?v=' + VERSION).then(() => true).catch(() => false);
        for (const n of SFX) fetch('assets/sfx/' + n + '.ogg?v=' + VERSION).then(r => r.arrayBuffer()).then(b => c.decodeAudioData(b)).then(b => { this.buf[n] = b; }).catch(() => {});
        this.playMusic('alpha-dance');
    }
    noiseSrc() { const s = this.ctx.createBufferSource(); s.buffer = this.noise; s.loop = true; return s; }
    playMusic(name) {
        if (this.musicName === name) return;
        this.musicName = name;
        if (!this.music) { this.music = new Audio(); this.music.loop = true; }
        this.music.src = 'assets/music/' + name + '.ogg?v=' + VERSION;
        this.music.volume = this.vol.music * 0.45 * this.mix.music;
        const p = this.music.play(); if (p && p.catch) p.catch(() => {});
    }
    volume(v) {
        this.vol = { music: v.music ?? this.vol.music, sfx: v.sfx ?? this.vol.sfx };
        if (this.master) this.master.gain.value = this.vol.sfx;
        if (this.music) this.music.volume = this.vol.music * 0.45 * this.mix.music;
    }
    // the game's own mix (Settings > Sound), on top of My PC's volumes: engine, effects, music (0..1)
    setMix(m) { this.mix = { engine: m.engine ?? 1, sfx: m.sfx ?? 1, music: m.music ?? 1 }; this.volume({}); }
    play(name, gain, rate) {
        const b = this.buf[name]; if (!b || !this.ctx) return;
        const s = this.ctx.createBufferSource(); s.buffer = b; s.playbackRate.value = rate || 1;
        const g = this.ctx.createGain(); g.gain.value = (gain === undefined ? 1 : gain) * this.mix.sfx;
        s.connect(g); g.connect(this.master); s.start();
    }
    ui(kind) { this.play(kind === 'ok' ? 'confirmation_001' : kind === 'back' ? 'back_001' : kind === 'switch' ? 'switch_001' : 'select_001', 0.5); }

    // the engine's own sound: an AudioWorklet node for this car (cylinders, turbo, electric), else oscillators
    engineNode(spec, seed) {
        const c = this.ctx;
        if (this.workletOk) {
            const node = new AudioWorkletNode(c, 'engine', { numberOfInputs: 0, outputChannelCount: [1],
                processorOptions: { cyl: spec.cyl || 4, turbo: !!spec.turbo, ev: !!spec.ev, diesel: !!spec.diesel, rpmMax: spec.rpm, seed } });
            const P = node.parameters;
            return { node, rpm: P.get('rpm'), load: P.get('load'), speed: P.get('speed'), gain: P.get('gain'), nodes: [] };
        }
        return null;
    }
    engineVoice(spec, seed) {
        const c = this.ctx;
        const wk = spec ? this.engineNode(spec, seed || 1) : null;
        const o1 = c.createOscillator(); o1.type = 'sawtooth';
        const o2 = c.createOscillator(); o2.type = 'square';
        const n = this.noiseSrc();
        const ng = c.createGain(); ng.gain.value = 0.12;
        const f = c.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = 3;
        const g = c.createGain(); g.gain.value = 0;
        const g2 = c.createGain(); g2.gain.value = 0.5;
        o1.connect(f); o2.connect(g2); g2.connect(f); n.connect(ng); ng.connect(f); f.connect(g);
        // tyres + wind
        const t = this.noiseSrc(); const tf = c.createBiquadFilter(); tf.type = 'bandpass'; tf.frequency.value = 1700; tf.Q.value = 4;
        const tg = c.createGain(); tg.gain.value = 0; t.connect(tf); tf.connect(tg);
        const w = this.noiseSrc(); const wf = c.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 500;
        const wg = c.createGain(); wg.gain.value = 0; w.connect(wf); wf.connect(wg);
        const nit = this.noiseSrc(); const nf = c.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 900; nf.Q.value = 0.8;
        const ngn = c.createGain(); ngn.gain.value = 0; nit.connect(nf); nf.connect(ngn);
        const pan = c.createStereoPanner ? c.createStereoPanner() : null;
        const out = pan || c.createGain();
        if (wk) wk.node.connect(out); else g.connect(out);
        tg.connect(out); wg.connect(out); ngn.connect(out); out.connect(this.master);
        if (!wk) { o1.start(); o2.start(); n.start(); }
        t.start(); w.start(); nit.start();
        return { wk, spec, o1, o2, f, g, tg, wg, ngn, nf, pan, nodes: wk ? [t, w, nit] : [o1, o2, n, t, w, nit], out };
    }
    async begin(session) {
        if (!this.ctx) return;
        this.end();
        this.cur = session;
        if (this.worklet) this.workletOk = await this.worklet;
        if (this.cur !== session || this.engines.length) return;   // the race ended while the worklet loaded
        const n = session.race.players.length;
        for (let p = 0; p < n; p++) { const v = this.engineVoice(session.race.players[p].spec, p + 1); if (v.pan) v.pan.pan.value = n > 1 ? (p ? 0.5 : -0.5) : 0; this.engines.push(v); }
        // rivals: one engine voice per kind of rival car (made once here; making / dropping voices during the race
        // clicked and cost the TV a new audio node each time the nearest rival changed)
        this.rivals = [];
        for (const o of session.race.racers) {
            if (o.player >= 0 || this.rivals.length >= 3 || this.rivals.some(r => r.spec === o.spec)) continue;
            this.rivals.push(this.engineVoice(o.spec, 7 + this.rivals.length));
        }
        this.playMusic('time-driving');
    }
    update(session, dt) {
        if (!this.ctx || !this.engines.length) return;
        const t = this.ctx.currentTime;
        const race = session.race;
        const k = race.players.length > 1 ? 0.6 : 1;
        for (let p = 0; p < this.engines.length; p++) {
            const e = this.engines[p], r = race.players[p], v = r.veh;
            this.voice(e, v, r, t, k, 1);
        }
        // each rival voice follows the nearest rival driving that kind of car, louder when close
        const me = race.players[0].veh;
        for (let i = 0; i < this.rivals.length; i++) {
            const e = this.rivals[i];
            let best = null, bd = 1e9;
            for (let j = 0; j < race.racers.length; j++) { const o = race.racers[j]; if (o.player >= 0 || o.spec !== e.spec) continue; const d = Math.hypot(o.veh.px - me.px, o.veh.pz - me.pz); if (d < bd) { bd = d; best = o; } }
            if (best) this.voice(e, best.veh, best, t, k * Math.max(0, 1 - bd / 60) * 0.6, 0);
        }
    }
    voice(e, v, r, t, k, me) {
        const rpm = v.rpm, thr = Math.max(v.input.throttle, v.nitroOn ? 1 : 0);
        const wrecked = r.wreck > 0;
        if (e.wk) {
            // load: the throttle, cut while the gearbox changes gear (the revs drop and the note dips, like a real shift)
            const load = wrecked ? 0 : v.shiftT > 0 ? 0.04 : thr;
            e.wk.rpm.setValueAtTime(wrecked ? 800 : rpm, t);
            e.wk.load.setValueAtTime(load, t);
            e.wk.speed.setValueAtTime(me ? v.speed : 0, t);
            e.wk.gain.setTargetAtTime((wrecked ? 0.15 * k : (v.spec.ev ? 0.9 : 0.55 + 0.25 * load) * k) * this.mix.engine, t, 0.05);
        }
        const f0 = 28 + rpm / 60 * 1.6;
        e.o1.frequency.setTargetAtTime(f0, t, 0.03);
        e.o2.frequency.setTargetAtTime(f0 * 0.5, t, 0.03);
        e.f.frequency.setTargetAtTime(300 + rpm * 0.32 * (0.5 + thr * 0.5), t, 0.05);
        e.g.gain.setTargetAtTime((wrecked ? 0.02 : (0.1 + thr * 0.14) * k) * this.mix.engine, t, 0.05);
        let slide = 0; for (let i = 0; i < 4; i++) { const w = v.wheels[i]; if (w.contact) slide = Math.max(slide, w.slipLat, w.slipLong); }
        e.tg.gain.setTargetAtTime(slide > 0.3 && v.speed > 5 ? Math.min(0.22, (slide - 0.3) * 0.4) * k * this.mix.sfx : 0, t, 0.04);
        e.wg.gain.setTargetAtTime(me ? Math.min(0.18, v.speed * v.speed * 0.00002) * k * this.mix.sfx : 0, t, 0.1);
        e.ngn.gain.setTargetAtTime(v.nitroOn ? 0.16 * k * Math.min(1.6, v.nitroOn) * this.mix.sfx : 0, t, 0.06);
        e.nf.frequency.setTargetAtTime(v.nitroOn > 1.5 ? 600 : 1100, t, 0.1);
    }
    event(kind, r, x, session) {
        if (!this.ctx) return;
        const isP = r.player >= 0;
        let near = isP;
        if (!near) for (const p of session.race.players) if (Math.hypot(p.veh.px - r.veh.px, p.veh.pz - r.veh.pz) < 50) near = true;
        if (!near) return;
        if (kind === 'hit') {
            const now = this.ctx.currentTime;
            if (now - (this.lastHit || 0) < 0.12) return; this.lastHit = now;
            const g = Math.min(1, x / 18);
            if (g < 0.1) return;
            this.play(g > 0.5 ? 'impactMetal_heavy_00' + ((Math.random() * 3) | 0) : 'impactMetal_light_000', 0.4 + g * 0.6, 0.9 + Math.random() * 0.2);
        } else if (kind === 'wreck') {
            this.play('explosionCrunch_000', 0.9, 0.8); this.play('impactGlass_heavy_000', 0.7); this.play('impactPlate_heavy_000', 0.8, 0.85);
        }
    }
    drop(e) { for (const n of e.nodes) { try { n.stop(); } catch (_) { /* stopped */ } } if (e.wk) e.wk.node.disconnect(); e.out.disconnect(); }
    end() {
        for (const e of this.engines.concat(this.rivals || [])) this.drop(e);
        this.engines = []; this.rivals = []; this.cur = null;
        if (this.ctx) this.playMusic('alpha-dance');
    }
    pause() { if (this.ctx) this.ctx.suspend(); if (this.music) this.music.pause(); }
    resume() { if (this.ctx) this.ctx.resume(); if (this.music) { const p = this.music.play(); if (p && p.catch) p.catch(() => {}); } }
    close() { this.end(); if (this.music) { this.music.pause(); this.music.src = ''; } if (this.ctx) this.ctx.close(); this.ctx = null; }
}
