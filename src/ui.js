// Menus (DOM over the showroom): title, home, career, quick race, two players, garage, settings with full
// button remapping, results. Works with arrows + OK alone; A / Esc / Backspace go back; the focus is a thick
// bright frame visible from the sofa.
import { I18n } from './i18n.js';
import { CARS, PAINTS, stats, MAXUP } from './career.js';
import { SPECS } from './vehicle.js';
import { ACTIONS, bindLabel, defaultMap } from './input.js';

const t = (k) => I18n.t(k);
function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
        if (k === 'class') e.className = attrs[k];
        else if (k === 'on') e.addEventListener('click', attrs[k]);
        else if (k === 'style') e.setAttribute('style', attrs[k]);
        else if (attrs[k] !== undefined && attrs[k] !== false) e.setAttribute(k, attrs[k]);
    }
    for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) e.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
    return e;
}
const starStr = (n, max) => '★'.repeat(n) + '☆'.repeat(Math.max(0, (max || 3) - n));
const fmtT = (s) => { const m = Math.floor(s / 60), r = s - m * 60; return m + ':' + (r < 10 ? '0' : '') + r.toFixed(2); };

export class UI {
    constructor(app, root) {
        this.app = app; this.root = root;
        this.stack = [];
        this.focus = null;
        this.screen = '';
        this.show = true;
        this.carSel = null;
        this.quickCfg = { route: app.routes.routes[0].id, laps: 0, rivals: 5, traffic: 1, time: '' };
        root.addEventListener('mouseover', (e) => { const f = e.target.closest('[data-f]'); if (f) this.setFocus(f); });
    }
    wantsShowroom() { return this.show; }
    hide() { this.root.style.display = 'none'; this.show = false; }
    loading(on) {
        let l = document.getElementById('loading');
        if (on) { if (!l) { l = h('div', { id: 'loading' }, h('div', { class: 'spin' }), h('div', null, t('loading'))); document.body.appendChild(l); } l.style.display = 'flex'; }
        else if (l) l.style.display = 'none';
    }
    tick() { }

    // ---- framework ----
    render(name, build, opts) {
        this.screen = name;
        this.root.style.display = 'block'; this.show = true;
        this.root.innerHTML = '';
        this.root.className = 'ui s-' + name;
        const content = build();
        this.root.appendChild(content);
        this.onBack = opts && opts.back;
        this.onLR = null;
        const first = this.root.querySelector('[data-first]') || this.root.querySelector('[data-f]');
        this.setFocus(first);
        if (this.app.sound) this.app.sound.ui('switch');
    }
    setFocus(el) {
        if (this.focus) this.focus.classList.remove('focus');
        this.focus = el;
        if (el) {
            el.classList.add('focus');
            el.scrollIntoView && el.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            if (el.dataset.say && window.MyPC.announce) window.MyPC.announce(el.dataset.say);
            if (el._onFocus) el._onFocus();
        }
    }
    move(dx, dy) {
        const all = Array.from(this.root.querySelectorAll('[data-f]'));
        if (!this.focus) { this.setFocus(all[0]); return; }
        const a = this.focus.getBoundingClientRect();
        const ax = a.left + a.width / 2, ay = a.top + a.height / 2;
        let best = null, bs = 1e9;
        for (const e of all) {
            if (e === this.focus) continue;
            const b = e.getBoundingClientRect();
            const bx = b.left + b.width / 2, by = b.top + b.height / 2;
            const vx = bx - ax, vy = by - ay;
            const along = vx * dx + vy * dy;
            if (along <= 4) continue;
            const across = Math.abs(vx * dy - vy * dx);
            const score = along + across * 2.2;
            if (score < bs) { bs = score; best = e; }
        }
        if (best) { this.setFocus(best); if (this.app.sound) this.app.sound.ui('move'); }
    }
    input(action, dev, repeat) {
        if (this.app.state === 'race' || this.app.state === 'loading') return;
        if (this.app.input.capture) return;
        if (this.joinMode && !repeat) return;
        const rtl = I18n.lang === 'ar';
        if (action === 'up') this.move(0, -1);
        else if (action === 'down') this.move(0, 1);
        else if (action === 'left' || action === 'right') {
            const dir = (action === 'left' ? -1 : 1) * (rtl ? -1 : 1);
            if (this.focus && this.focus._lr) { this.focus._lr(dir * (rtl ? -1 : 1)); if (this.app.sound) this.app.sound.ui('move'); }
            else this.move(action === 'left' ? -1 : 1, 0);
        }
        else if (action === 'confirm' && !repeat) { if (this.focus) { if (this.app.sound) this.app.sound.ui('ok'); this.focus.click(); } }
        else if (action === 'cancel' && !repeat) { if (this.onBack) { if (this.app.sound) this.app.sound.ui('back'); this.onBack(); } }
    }
    btn(label, on, cls, extra) { const b = h('button', Object.assign({ class: 'btn ' + (cls || ''), 'data-f': '1', 'data-say': typeof label === 'string' ? label : '', on }, extra || {}), label); return b; }
    opt(label, values, get, set) {   // ◀ value ▶ row
        const v = h('span', { class: 'ov' });
        const row = h('div', { class: 'opt', 'data-f': '1' }, h('span', { class: 'ol' }, label), h('span', { class: 'oa' }, '◀'), v, h('span', { class: 'oa' }, '▶'));
        const show = () => { const cur = values.find(x => x.v === get()); v.textContent = cur ? cur.l : String(get()); row.dataset.say = label + ' ' + v.textContent; };
        row._lr = (d) => { const i = values.findIndex(x => x.v === get()); const n = values[(i + d + values.length) % values.length]; set(n.v); show(); };
        row.addEventListener('click', () => row._lr(1));
        show();
        return row;
    }

    // ---- screens ----
    title() {
        this.render('title', () => h('div', { class: 'title' },
            h('div', { class: 'logo' }, h('span', { class: 'l1' }, 'TANGIER'), h('span', { class: 'l2' }, 'ASPHALT')),
            h('div', { class: 'tag' }, 'Corniche · Marina Bay · Rmilat · Achakar · Mesnana · Dradeb'),
            this.btn(t('press'), () => this.home(), 'press', { 'data-first': '1' }),
            h('div', { class: 'foot' }, t('creditsText'))
        ));
        this.app.showroom.show(this.app.career.d.car, this.app.career.paintOf(this.app.career.d.car));
    }
    topbar() {
        const c = this.app.career;
        return h('div', { class: 'topbar' }, h('div', { class: 'brand' }, 'TANGIER', h('b', null, 'ASPHALT')),
            h('div', { class: 'wallet' }, h('span', { class: 'st' }, '★ ' + c.totalStars()), h('span', { class: 'cr' }, '◆ ' + c.d.credits.toLocaleString())));
    }
    home() {
        const c = this.app.career;
        this.app.showroom.show(c.d.car, c.paintOf(c.d.car));
        this.render('home', () => h('div', { class: 'wrap' }, this.topbar(),
            h('div', { class: 'tiles' },
                this.tile('career', t('career'), c.totalStars() + ' / ' + c.events.length * 3 + ' ★', () => this.career(), true),
                this.tile('quick', t('quick'), this.app.routes.routes.length + ' Tangier routes', () => this.quick()),
                this.tile('two', t('two'), 'Split screen', () => this.twoPlayers()),
                this.tile('garage', t('garage'), CARS.find(x => x.id === c.d.car).name, () => this.garage()),
                this.tile('settings', t('settings'), t('controls') + ' · ' + t('graphics'), () => this.settings())
            ),
            h('div', { class: 'hint' }, t('controlsHelp'))
        ), { back: () => this.title() });
    }
    tile(id, name, sub, on, first) {
        return h('div', { class: 'tile t-' + id, 'data-f': '1', 'data-say': name, 'data-first': first ? '1' : undefined, on },
            h('div', { class: 'tn' }, name), h('div', { class: 'ts' }, sub));
    }

    career() {
        const c = this.app.career, routes = this.app.routes.routes;
        this.render('career', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('career')),
            h('div', { class: 'routes' }, routes.map((r, k) => {
                const evs = c.events.filter(e => e.route === r.id);
                const got = evs.reduce((a, e) => a + (c.d.stars[e.id] || 0), 0);
                const open = c.eventOpen(evs[0]);
                const card = h('div', { class: 'rcard' + (open ? '' : ' locked'), 'data-f': '1', 'data-say': r.name, 'data-first': k === 0 ? '1' : undefined, on: () => open ? this.events(r) : null },
                    h('div', { class: 'rk' }, t('chapter') + ' ' + (k + 1)),
                    this.mini(r), h('div', { class: 'rn' }, r.name), h('div', { class: 'ra' }, r.area + ' · ' + (r.length / 1000).toFixed(1) + ' km' + (r.laps ? ' · ' + r.laps + ' ' + t('laps') : '')),
                    h('div', { class: 'rs' }, open ? starStr(Math.min(9, got), 9) : '🔒 ' + t('need') + ' ' + evs[0].need + ' ★'));
                return card;
            }))
        ), { back: () => this.home() });
    }
    mini(r) {   // the real route shape as a small SVG
        const pts = r.minimap; let minx = 1e9, maxx = -1e9, minz = 1e9, maxz = -1e9;
        for (let i = 0; i < pts.length; i += 2) { minx = Math.min(minx, pts[i]); maxx = Math.max(maxx, pts[i]); minz = Math.min(minz, pts[i + 1]); maxz = Math.max(maxz, pts[i + 1]); }
        const s = 100 / Math.max(maxx - minx, maxz - minz, 1);
        let d = '';
        for (let i = 0; i < pts.length; i += 2) d += (i ? 'L' : 'M') + ((pts[i] - minx) * s + (100 - (maxx - minx) * s) / 2).toFixed(1) + ' ' + ((pts[i + 1] - minz) * s + (100 - (maxz - minz) * s) / 2).toFixed(1);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '-6 -6 112 112'); svg.setAttribute('class', 'rmap');
        svg.innerHTML = '<path d="' + d + '" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="7" stroke-linejoin="round"/><path d="' + d + '" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>';
        return svg;
    }
    events(r) {
        const c = this.app.career;
        const evs = c.events.filter(e => e.route === r.id);
        this.render('events', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, r.name),
            h('div', { class: 'sub' }, r.area + ' · ' + (r.roads || []).slice(0, 3).join(' · ')),
            h('div', { class: 'evs' }, evs.map((e, k) => {
                const open = c.eventOpen(e);
                const goal = e.mode === 'race' ? t('raceD') : e.mode === 'takedown' ? t('takedownD') + ' (' + e.goal + ')' : t('timeD') + ' (' + fmtT(e.goal) + ')';
                return h('div', { class: 'ev' + (open ? '' : ' locked'), 'data-f': '1', 'data-first': k === 0 ? '1' : undefined, 'data-say': t(e.mode === 'time' ? 'timeattack' : e.mode), on: () => open ? this.pickCar({ route: r.id, event: e, laps: e.laps, rivals: e.rivals, mode: e.mode }) : null },
                    h('div', { class: 'em' }, t(e.mode === 'time' ? 'timeattack' : e.mode)), h('div', { class: 'eg' }, goal),
                    h('div', { class: 'er' }, open ? starStr(c.d.stars[e.id] || 0) + '   ◆ ' + e.reward : '🔒 ' + t('need') + ' ' + e.need + ' ★'));
            }))
        ), { back: () => this.career() });
    }

    quick() {
        const q = this.quickCfg, routes = this.app.routes.routes;
        this.render('quick', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('quick')),
            h('div', { class: 'form' },
                this.opt(t('route'), routes.map(r => ({ v: r.id, l: r.name })), () => q.route, v => { q.route = v; }),
                this.opt(t('laps'), [{ v: 0, l: 'Auto' }, { v: 1, l: '1' }, { v: 2, l: '2' }, { v: 3, l: '3' }], () => q.laps, v => { q.laps = v; }),
                this.opt(t('rivals'), [0, 1, 3, 5, 7].map(v => ({ v, l: String(v) })), () => q.rivals, v => { q.rivals = v; }),
                this.opt(t('traffic'), [{ v: 1, l: t('on') }, { v: 0, l: t('off') }], () => q.traffic, v => { q.traffic = v; }),
                this.opt(t('time'), [{ v: '', l: t('auto') }, { v: 'day', l: t('day') }, { v: 'sunset', l: t('sunset') }, { v: 'night', l: t('night') }], () => q.time, v => { q.time = v; }),
                this.btn(t('choose'), () => this.pickCar({ route: q.route, laps: q.laps || undefined, rivals: q.rivals, traffic: !!q.traffic, time: q.time || undefined, mode: 'race' }), 'go')
            )
        ), { back: () => this.home() });
    }

    // car choice for player p (0 or 1), then the race
    pickCar(cfg, p, chosen) {
        p = p || 0; chosen = chosen || [];
        const c = this.app.career;
        const two = cfg.twoP;
        let cur = p === 0 ? c.d.car : chosen[0] ? chosen[0].car : c.d.car;
        const info = h('div', { class: 'carinfo' });
        const showInfo = (id) => {
            cur = id;
            const car = CARS.find(x => x.id === id), st = stats(id, c.up(id));
            info.innerHTML = '';
            info.appendChild(h('div', { class: 'cn' }, car.name));
            info.appendChild(h('div', { class: 'cc' }, 'Class ' + SPECS[id].cls + (two ? ' · ' + t(p ? 'p2' : 'p1') : '')));
            info.appendChild(this.bars(st));
            this.app.showroom.show(id, c.paintOf(id));
        };
        const list = h('div', { class: 'carlist' }, CARS.map(car => {
            const ok = c.unlocked(car.id);
            const el = h('div', { class: 'ccard' + (ok ? '' : ' locked') + (car.id === cur ? ' sel' : ''), 'data-f': '1', 'data-say': car.name, 'data-first': car.id === cur ? '1' : undefined,
                on: () => { if (!ok) return; chosen[p] = { car: car.id }; if (two && p === 0) this.pickCar(cfg, 1, chosen); else this.go(cfg, chosen); } },
                h('div', { class: 'ccl' }, SPECS[car.id].cls), h('div', { class: 'ccn' }, car.name), ok ? null : h('div', { class: 'ccs' }, '🔒 ' + car.stars + ' ★'));
            el._onFocus = () => showInfo(car.id);
            return el;
        }));
        this.render('pick', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('choose') + (two ? ' — ' + t(p ? 'p2' : 'p1') : '')), h('div', { class: 'pick' }, list, info)),
            { back: () => (two && p === 1 ? this.pickCar(cfg, 0, chosen) : cfg.event ? this.career() : two ? this.twoPlayers() : this.quick()) });
        showInfo(cur);
    }
    bars(st) {
        const row = (k, v, max) => h('div', { class: 'bar' }, h('span', null, t(k)), h('i', null, h('b', { style: 'transform:scaleX(' + Math.min(1, v / max).toFixed(3) + ')' })), h('em', null, k === 'speed' ? v + ' km/h' : String(v)));
        return h('div', { class: 'bars' }, row('speed', st.top, 420), row('accel', st.acc, 100), row('handling', st.hand, 100), row('nitroS', st.nit, 100));
    }
    go(cfg, chosen) {
        const c = this.app.career;
        if (!cfg.twoP) { c.d.car = chosen[0].car; c.save(); }
        cfg.players = chosen.map((x, k) => ({ car: x.car, paint: k === 1 && chosen[0].car === x.car ? PAINTS[(PAINTS.indexOf(c.paintOf(x.car)) + 4) % PAINTS.length] : c.paintOf(x.car) }));
        this.app.input.players[1].devs = cfg.twoP ? this.app.input.players[1].devs : null;
        if (!cfg.twoP) this.app.input.players[0].devs = null;
        this.app.startRace(cfg);
    }

    twoPlayers() {
        const inp = this.app.input;
        const sets = [new Set(), new Set()];
        let stage = 0;
        const p1 = h('div', { class: 'joinp' }, h('div', { class: 'jn' }, t('p1')), h('div', { class: 'js' }, t('waiting')));
        const p2 = h('div', { class: 'joinp' }, h('div', { class: 'jn' }, t('p2')), h('div', { class: 'js' }, t('waiting')));
        this.render('two', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('two')), h('div', { class: 'sub' }, t('join')), h('div', { class: 'join' }, p1, p2),
            h('div', { class: 'sub small' }, 'Keyboard: player 1 = arrows + Enter, player 2 = W A S D + F')), { back: () => { this.joinMode = false; inp.join = null; this.home(); } });
        this.joinMode = true;
        inp.join = (dev, what) => {
            if (what === 'act:cancel' && stage === 0) { this.joinMode = false; inp.join = null; this.home(); return true; }
            if (sets[0].has(dev) || sets[1].has(dev)) return true;
            sets[stage].add(dev);
            (stage ? p2 : p1).classList.add('ok'); (stage ? p2 : p1).querySelector('.js').textContent = t('ready') + ' · ' + dev;
            if (this.app.sound) this.app.sound.ui('ok');
            stage++;
            if (stage === 2) {
                inp.players[0].devs = sets[0]; inp.players[1].devs = sets[1];
                inp.join = null;
                setTimeout(() => { this.joinMode = false; this.twoOptions(); }, 500);
            }
            return true;
        };
    }
    twoOptions() {
        const q = Object.assign({}, this.quickCfg, { rivals: 3 });
        const routes = this.app.routes.routes;
        this.render('quick', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('two')),
            h('div', { class: 'form' },
                this.opt(t('route'), routes.map(r => ({ v: r.id, l: r.name })), () => q.route, v => { q.route = v; }),
                this.opt(t('rivals'), [0, 1, 3, 5].map(v => ({ v, l: String(v) })), () => q.rivals, v => { q.rivals = v; }),
                this.opt(t('traffic'), [{ v: 1, l: t('on') }, { v: 0, l: t('off') }], () => q.traffic, v => { q.traffic = v; }),
                this.opt(t('time'), [{ v: '', l: t('auto') }, { v: 'day', l: t('day') }, { v: 'sunset', l: t('sunset') }, { v: 'night', l: t('night') }], () => q.time, v => { q.time = v; }),
                this.btn(t('choose'), () => this.pickCar({ route: q.route, rivals: q.rivals, traffic: !!q.traffic, time: q.time || undefined, twoP: true, mode: 'race' }), 'go')
            )), { back: () => { this.app.input.players[1].devs = null; this.app.input.players[0].devs = null; this.home(); } });
    }

    garage(sel) {
        const c = this.app.career;
        sel = sel || c.d.car;
        const car = CARS.find(x => x.id === sel);
        const ok = c.unlocked(sel);
        this.app.showroom.show(sel, c.paintOf(sel));
        const list = h('div', { class: 'carlist' }, CARS.map(x => {
            const el = h('div', { class: 'ccard' + (c.unlocked(x.id) ? '' : ' locked') + (x.id === sel ? ' sel' : ''), 'data-f': '1', 'data-say': x.name, 'data-first': x.id === sel ? '1' : undefined, on: () => this.garage(x.id) },
                h('div', { class: 'ccl' }, SPECS[x.id].cls), h('div', { class: 'ccn' }, x.name), c.unlocked(x.id) ? null : h('div', { class: 'ccs' }, '🔒 ' + x.stars + ' ★'));
            el._onFocus = () => this.app.showroom.show(x.id, c.paintOf(x.id));
            return el;
        }));
        const u = c.up(sel);
        const upRow = (k) => {
            const full = u[k] >= MAXUP;
            return h('div', { class: 'uprow' + (ok ? '' : ' locked'), 'data-f': '1', 'data-say': t(k === 'nitro' ? 'nitroS' : k), on: () => { if (ok && c.buyUp(sel, k)) { this.app.sound.ui('ok'); this.garage(sel); this.focusSel('.uprow', ['engine', 'nitro', 'grip'].indexOf(k)); } } },
                h('span', { class: 'un' }, t(k === 'nitro' ? 'nitroS' : k)), h('span', { class: 'ul' }, '■'.repeat(u[k]) + '□'.repeat(MAXUP - u[k])),
                h('span', { class: 'uc' }, full ? 'MAX' : '◆ ' + c.upCost(sel, k)));
        };
        const sw = h('div', { class: 'swatches' }, PAINTS.map((p, k) => {
            const e = h('div', { class: 'sw' + (c.paintOf(sel) === p ? ' sel' : ''), 'data-f': '1', style: 'background:#' + p.toString(16).padStart(6, '0'), on: () => { c.d.paint[sel] = p; c.save(); this.app.showroom.show(sel, p); this.garage(sel); this.focusSel('.sw', k); } });
            e._onFocus = () => this.app.showroom.show(sel, p);
            return e;
        }));
        this.render('garage', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('garage')),
            h('div', { class: 'pick' }, list, h('div', { class: 'carinfo' },
                h('div', { class: 'cn' }, car.name), h('div', { class: 'cc' }, 'Class ' + SPECS[sel].cls),
                this.bars(stats(sel, u)),
                ok ? this.btn(c.d.car === sel ? t('selected') : t('select'), () => { c.d.car = sel; c.save(); this.garage(sel); }, 'go') : h('div', { class: 'need' }, '🔒 ' + t('need') + ' ' + car.stars + ' ★'),
                h('h3', null, t('upgrade')), upRow('engine'), upRow('nitro'), upRow('grip'),
                h('h3', null, t('paint')), sw))
        ), { back: () => this.home() });
    }
    focusSel(sel, k) { const l = this.root.querySelectorAll(sel); if (l[k]) this.setFocus(l[k]); }

    settings() {
        const c = this.app.career, s = c.d.settings;
        const save = () => c.save();
        this.render('settings', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('settings')),
            h('div', { class: 'form' },
                this.btn(t('controls') + ' — ' + t('p1'), () => this.controls(0), '', { 'data-first': '1' }),
                this.btn(t('controls') + ' — ' + t('p2'), () => this.controls(1)),
                this.opt(t('graphics'), [{ v: 'auto', l: t('auto') }, { v: 'low', l: t('low') }, { v: 'mid', l: t('mid') }, { v: 'high', l: t('high') }], () => s.quality, v => { s.quality = v; save(); this.app.setQuality && this.app.setQuality(v); }),
                this.opt(t('fps'), [{ v: 0, l: t('off') }, { v: 1, l: t('on') }], () => s.fps, v => { s.fps = v; save(); }),
                h('div', { class: 'credits' }, h('b', null, t('credits_title')), ' ', t('creditsText'))
            )), { back: () => this.home() });
    }
    controls(p) {
        const inp = this.app.input, P = inp.players[p], c = this.app.career, s = c.d.settings;
        const persist = () => { window.MyPC.save('controls', inp.save()); c.save(); };
        const rows = ACTIONS.map(a => {
            const chips = h('span', { class: 'chips' }, P.map[a].map(b => h('i', null, bindLabel(b))));
            const row = h('div', { class: 'crow', 'data-f': '1', 'data-say': t('a_' + a), on: () => {
                chips.innerHTML = ''; chips.appendChild(h('i', { class: 'wait' }, t('pressBtn')));
                inp.startCapture(p, a, 0, () => { persist(); this.controls(p); this.focusSel('.crow', ACTIONS.indexOf(a)); });
            } }, h('span', { class: 'ca' }, t('a_' + a)), chips);
            return row;
        });
        this.render('controls', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('controls') + ' — ' + t(p ? 'p2' : 'p1')),
            h('div', { class: 'form wide' },
                rows,
                this.opt(t('autoAcc'), [{ v: true, l: t('on') }, { v: false, l: t('off') }], () => P.auto, v => { P.auto = v; persist(); }),
                this.opt(t('easy'), [{ v: 0, l: t('off') }, { v: 1, l: t('on') }], () => s.easy[p], v => { s.easy[p] = v; persist(); }),
                this.opt(t('esc'), [{ v: 1, l: t('on') }, { v: 0, l: t('off') }], () => s.esc[p], v => { s.esc[p] = v; persist(); }),
                this.btn(t('reset'), () => { P.map = defaultMap(); persist(); this.controls(p); })
            ), h('div', { class: 'hint' }, t('controlsHelpRemote'))), { back: () => this.settings() });
    }

    results(res) {
        const pl = res.players;
        this.render('results', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('results')),
            h('div', { class: 'res' },
                h('table', { class: 'rtab' }, res.rows.map(r => h('tr', { class: r.player >= 0 ? 'me' : '' }, h('td', null, String(r.place)), h('td', null, r.name), h('td', null, r.time ? fmtT(r.time) : '—')))),
                h('div', { class: 'rsum' }, pl.map((p, k) => h('div', { class: 'rp' },
                    pl.length > 1 ? h('div', { class: 'rpn' }, t(k ? 'p2' : 'p1')) : null,
                    res.cfg.event ? h('div', { class: 'rstars' }, starStr(p.stars)) : null,
                    h('div', null, t('takedowns') + ': ' + p.takedowns), h('div', null, t('nearMiss') + ': ' + p.near),
                    h('div', null, t('drift') + ': ' + p.drift.toFixed(1) + ' s'),
                    h('div', { class: 'rcr' }, '+ ◆ ' + p.credits), p.record ? h('div', { class: 'rrec' }, t('best') + '!') : null)))
            ),
            h('div', { class: 'row' }, this.btn(t('cont'), () => res.cfg.event ? this.career() : res.cfg.twoP ? this.twoOptions() : this.home(), 'go', { 'data-first': '1' }),
                this.btn(t('retry'), () => this.app.startRace(res.cfg)))
        ), { back: () => this.home() });
    }
}
