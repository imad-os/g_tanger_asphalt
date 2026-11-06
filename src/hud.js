// Race HUD (DOM, one panel per player). Texts are written only when they change; the minimap canvas is redrawn
// at 15 Hz with the real route shape.
import { I18n } from './i18n.js';

function el(tag, cls, parent, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; if (parent) parent.appendChild(e); return e; }
function fmt(t) { if (t < 0) t = 0; const m = Math.floor(t / 60), s = t - m * 60; return m + ':' + (s < 10 ? '0' : '') + s.toFixed(2); }

class Panel {
    constructor(root, p, session, cfg) {
        this.p = p;
        this.root = el('div', 'hud-p', root);
        this.top = el('div', 'h-top', this.root);
        this.posBox = el('div', 'h-pos', this.top);
        this.posN = el('span', 'n', this.posBox); this.posD = el('span', 'd', this.posBox);
        this.lapBox = el('div', 'h-lap', this.top);
        this.timeBox = el('div', 'h-time', this.root);
        this.goalBox = el('div', 'h-goal', this.root);
        this.msg = el('div', 'h-msg', this.root);
        this.speedo = el('div', 'h-speedo', this.root);
        this.spd = el('div', 'h-spd', this.speedo, '0');
        el('div', 'h-unit', this.speedo, I18n.t('kmh'));
        this.gear = el('div', 'h-gear', this.speedo, '1');
        this.bars = el('div', 'h-nitro', this.speedo);
        this.seg = [];
        for (let k = 0; k < 3; k++) { const s = el('div', 'seg', this.bars); this.seg.push(el('i', '', s)); }
        el('div', 'h-nlabel', this.speedo, I18n.t('nitro'));
        this.map = el('canvas', 'h-map', this.root);
        this.map.width = 220; this.map.height = 220;
        this.ctx = this.map.getContext('2d');
        this.cache = {};
        this.mapT = 0;
        this.msgT = 0;
        this.buildMap(session.track);
        this.wreck = el('div', 'h-wreck', this.root, I18n.t('wrecked'));
        this.fps = el('div', 'h-fps', this.root);
    }
    buildMap(T) {
        // the route shape (rotated so north is up), drawn once into an offscreen canvas
        let minx = 1e9, maxx = -1e9, minz = 1e9, maxz = -1e9;
        for (let i = 0; i < T.n; i += 4) { minx = Math.min(minx, T.px[i]); maxx = Math.max(maxx, T.px[i]); minz = Math.min(minz, T.pz[i]); maxz = Math.max(maxz, T.pz[i]); }
        const span = Math.max(maxx - minx, maxz - minz) * 1.12;
        this.mx = (minx + maxx) / 2; this.mz = (minz + maxz) / 2; this.ms = 200 / span;
        const off = document.createElement('canvas'); off.width = 220; off.height = 220;
        const c = off.getContext('2d');
        c.lineJoin = 'round'; c.lineCap = 'round';
        c.beginPath();
        for (let i = 0; i < T.n; i += 3) { const x = 110 + (T.px[i] - this.mx) * this.ms, y = 110 + (T.pz[i] - this.mz) * this.ms; if (i) c.lineTo(x, y); else c.moveTo(x, y); }
        c.strokeStyle = 'rgba(0,0,0,0.55)'; c.lineWidth = 10; c.stroke();
        c.strokeStyle = '#e8edf5'; c.lineWidth = 4; c.stroke();
        // finish flag
        const e = T.closed ? 0 : T.n - 1;
        c.fillStyle = '#ff3b30'; c.beginPath(); c.arc(110 + (T.px[e] - this.mx) * this.ms, 110 + (T.pz[e] - this.mz) * this.ms, 6, 0, 7); c.fill();
        this.base = off;
    }
    set(key, node, text) { if (this.cache[key] !== text) { this.cache[key] = text; node.textContent = text; } }
    update(session, dt) {
        const race = session.race, r = race.players[this.p];
        const n = race.racers.length;
        if (race.mode !== 'time') { this.set('pos', this.posN, String(r.place)); this.set('posd', this.posD, '/' + n); }
        else { this.set('pos', this.posN, ''); this.set('posd', this.posD, ''); }
        if (race.track.closed) this.set('lap', this.lapBox, I18n.t('lap') + ' ' + Math.min(race.laps, Math.max(1, r.lap + 1)) + '/' + race.laps);
        else this.set('lap', this.lapBox, Math.max(0, Math.round((race.total - r.prog) / 100) / 10).toFixed(1) + ' km');
        const t = r.finished ? r.finishTime : Math.max(0, race.time);
        this.set('time', this.timeBox, fmt(t));
        const ev = race.opts.event;
        if (ev && ev.mode === 'takedown') this.set('goal', this.goalBox, I18n.t('takedowns') + ' ' + r.takedowns + ' / ' + ev.goal);
        else if (ev && ev.mode === 'time') this.set('goal', this.goalBox, I18n.t('goal') + ' ' + fmt(ev.goal));
        else this.set('goal', this.goalBox, '');
        const kmh = Math.round(Math.max(0, r.veh.fwdSpeed) * 3.6);
        this.set('spd', this.spd, String(kmh));
        this.set('gear', this.gear, r.veh.reverse ? 'R' : String(r.veh.gear));
        const g = r.nitro * 3;
        for (let k = 0; k < 3; k++) {
            const f = Math.max(0, Math.min(1, g - k));
            const w = (f * 100 | 0) + '%';
            if (this.cache['s' + k] !== w) { this.cache['s' + k] = w; this.seg[k].style.transform = 'scaleX(' + f.toFixed(2) + ')'; }
        }
        const cls = 'h-speedo' + (r.veh.nitroOn ? (r.nitroLevel === 3 ? ' over' : r.nitroLevel === 2 ? ' perfect' : ' on') : '') + (r.nitro >= 0.98 ? ' full' : '');
        if (this.cache.cls !== cls) { this.cache.cls = cls; this.speedo.className = cls; }
        const wr = r.wreck > 0 && !r.traffic ? 'h-wreck show' : 'h-wreck';
        if (this.cache.wr !== wr) { this.cache.wr = wr; this.wreck.className = wr; }
        if (this.msgT > 0) { this.msgT -= dt; if (this.msgT <= 0) this.msg.className = 'h-msg'; }
        this.mapT -= dt;
        if (this.mapT <= 0) { this.mapT = 1 / 15; this.drawMap(race, r); }
    }
    say(text, kind) {
        this.msg.textContent = text;
        this.msg.className = 'h-msg';
        void this.msg.offsetWidth;   // restart the CSS animation (only on events, not per frame)
        this.msg.className = 'h-msg show k-' + kind;
        this.msgT = 1.6;
    }
    drawMap(race, me) {
        const c = this.ctx;
        c.clearRect(0, 0, 220, 220);
        c.drawImage(this.base, 0, 0);
        for (const r of race.racers) {
            const x = 110 + (r.veh.px - this.mx) * this.ms, y = 110 + (r.veh.pz - this.mz) * this.ms;
            c.fillStyle = r === me ? '#ffd400' : r.player >= 0 ? '#3cf' : '#ff5a4f';
            c.beginPath(); c.arc(x, y, r === me ? 7 : 5, 0, 6.3); c.fill();
            if (r === me) { c.strokeStyle = '#000'; c.lineWidth = 2; c.stroke(); }
        }
    }
}

export class Hud {
    constructor(root) { this.root = root; this.panels = []; this.count = el('div', 'h-count', null); }
    begin(session, cfg) {
        this.root.innerHTML = '';
        this.root.className = 'hud' + (session.race.players.length > 1 ? ' split' : '');
        this.panels = session.race.players.map((r, p) => new Panel(this.root, p, session, cfg));
        this.count = el('div', 'h-count', this.root);
        this.lastCount = '';
        this.help = el('div', 'h-help', this.root, I18n.t('controlsHelp'));
        this.helpT = 6;
        this.root.style.display = 'block';
        this.showFps = !!(window.TA && window.TA.career && window.TA.career.d.settings.fps);
        this.fpsT = 0;
    }
    update(session, dt) {
        const race = session.race;
        for (const p of this.panels) p.update(session, dt);
        // countdown
        let c = '';
        if (race.state === 'countdown') c = String(Math.ceil(-race.time));
        if (c === '4') c = '';
        if (c !== this.lastCount) { this.lastCount = c; this.count.textContent = c; this.count.className = 'h-count' + (c ? ' show' : ''); }
        // events
        while (race.events.length) {
            const e = race.events.shift();
            if (e.kind === 'scrape') continue;
            if (e.kind === 'go') { this.count.textContent = 'GO!'; this.count.className = 'h-count show go'; setTimeout(() => { if (this.count.textContent === 'GO!') this.count.className = 'h-count'; }, 900); continue; }
            const p = this.panels[e.player]; if (p) p.say(e.text, e.kind);
        }
        if (this.helpT > 0) { this.helpT -= dt; if (this.helpT <= 0) this.help.style.opacity = '0'; }
        if (this.showFps) {
            this.fpsT -= dt;
            if (this.fpsT <= 0) {
                this.fpsT = 0.5;
                const log = window.TA.fpsLog; let s = 0, n = 0;
                for (let i = Math.max(0, log.length - 30); i < log.length; i++) { s += log[i]; n++; }
                this.panels[0].fps.textContent = n ? Math.round(1000 / (s / n)) + ' fps · ' + Math.round(session.scale * 100) + '%' : '';
            }
        }
    }
    end() { this.root.innerHTML = ''; this.root.style.display = 'none'; this.panels = []; }
}
