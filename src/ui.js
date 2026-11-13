// Menus (DOM over the showroom): title, home, career, quick race, two players, garage, settings with full
// button remapping, results. Works with arrows + OK alone; A / Esc / Backspace go back; the focus is a thick
// bright frame visible from the sofa.
import { I18n } from './i18n.js';
import { CARS, PAINTS, stats, MAXUP, UPGRADES } from './career.js';
import { SPECS } from './vehicle.js';
import { modelInfo } from './assets.js';
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
            if (!b.width && !b.height) continue;   // hidden (the garage's other tab)
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
        this.app.showroom.show(this.app.career.d.car, this.app.career.paintOf(this.app.career.d.car), this.app.career.roofOf(this.app.career.d.car));
    }
    topbar() {
        const c = this.app.career;
        return h('div', { class: 'topbar' }, h('div', { class: 'brand' }, 'TANGIER', h('b', null, 'ASPHALT')),
            h('div', { class: 'wallet' }, h('span', { class: 'st' }, '★ ' + c.totalStars()), h('span', { class: 'cr' }, '◆ ' + c.d.credits.toLocaleString())));
    }
    home() {
        const c = this.app.career;
        this.app.showroom.show(c.d.car, c.paintOf(c.d.car), c.roofOf(c.d.car));
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
                    this.mini(r), h('div', { class: 'rn' }, r.name), h('div', { class: 'ra' }, r.area + ' · ' + ((r.finish || r.length) / 1000).toFixed(1) + ' km' + (r.laps ? ' · ' + r.laps + ' ' + t('laps') : '')),
                    h('div', { class: 'rs' }, open ? starStr(Math.min(9, got), 9) : '🔒 ' + t('needPrev')));
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
                    h('div', { class: 'er' }, open ? starStr(c.d.stars[e.id] || 0) + '   ◆ ' + e.reward : '🔒 ' + t(c.lockReason(e))));
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
            info.appendChild(h('div', { class: 'cc' }, this.carTag(id) + (two ? ' · ' + t(p ? 'p2' : 'p1') : '')));
            info.appendChild(this.bars(st));
            this.app.showroom.show(id, c.paintOf(id), c.roofOf(id));
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
    // 'Class D · Your car · Electric'
    carTag(id) {
        const car = CARS.find(x => x.id === id), sp = SPECS[id];
        return 'Class ' + sp.cls + (car.mine ? ' · ' + t('yourCar') : '') + (sp.ev ? ' · ' + t('electric') : '');
    }
    bars(st) {
        const row = (k, v, max) => h('div', { class: 'bar' }, h('span', null, t(k)), h('i', null, h('b', { style: 'transform:scaleX(' + Math.min(1, v / max).toFixed(3) + ')' })), h('em', null, k === 'speed' ? v + ' km/h' : String(v)));
        return h('div', { class: 'bars' }, row('speed', st.top, 420), row('accel', st.acc, 100), row('handling', st.hand, 100), row('braking', st.brk, 100), row('nitroS', st.nit, 100));
    }
    go(cfg, chosen) {
        const c = this.app.career;
        if (!cfg.twoP) { c.d.car = chosen[0].car; c.save(); }
        cfg.players = chosen.map((x, k) => ({ car: x.car, roof: c.roofOf(x.car), paint: k === 1 && chosen[0].car === x.car ? PAINTS[(PAINTS.indexOf(c.paintOf(x.car)) + 4) % PAINTS.length] : c.paintOf(x.car) }));
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

    // Garage (redesigned 2026-11-13 so it fits a TV): car list | name, stats, Select, then two tabs, Upgrades and
    // Paint; only the chosen tab's rows are on screen. Upgrades change the car's look (src/carkit.js), shown live.
    garage(sel, tab) {
        const c = this.app.career;
        sel = sel || c.d.car;
        this.gTab = tab || this.gTab || 'up';
        const car = CARS.find(x => x.id === sel);
        const ok = c.unlocked(sel);
        const u = c.up(sel);
        const show = (id, p, r) => this.app.showroom.show(id, p, r, c.up(id));
        show(sel, c.paintOf(sel), c.roofOf(sel));
        const list = h('div', { class: 'carlist' }, CARS.map(x => {
            const el = h('div', { class: 'ccard' + (c.unlocked(x.id) ? '' : ' locked') + (x.id === sel ? ' sel' : ''), 'data-f': '1', 'data-say': x.name, 'data-first': x.id === sel && !tab ? '1' : undefined, on: () => this.garage(x.id) },
                h('div', { class: 'ccl' }, SPECS[x.id].cls), h('div', { class: 'ccn' }, x.name), c.unlocked(x.id) ? null : h('div', { class: 'ccs' }, '🔒 ' + x.stars + ' ★'));
            el._onFocus = () => show(x.id, c.paintOf(x.id), c.roofOf(x.id));
            return el;
        }));
        const upRow = (k) => {
            const full = u[k] >= MAXUP;
            return h('div', { class: 'uprow' + (ok ? '' : ' locked'), 'data-f': '1', 'data-say': t(k === 'nitro' ? 'nitroS' : k) + ', ' + t('look_' + k), on: () => { if (ok && c.buyUp(sel, k)) { this.app.sound.ui('ok'); this.garage(sel, 'up'); this.focusSel('.uprow', UPGRADES.indexOf(k)); } } },
                h('span', { class: 'un' }, t(k === 'nitro' ? 'nitroS' : k), h('small', null, t('look_' + k))), h('span', { class: 'ul' }, '■'.repeat(u[k]) + '□'.repeat(MAXUP - u[k])),
                h('span', { class: 'uc' }, full ? 'MAX' : '◆ ' + c.upCost(sel, k)));
        };
        const sw = h('div', { class: 'swatches' }, PAINTS.map((p, k) => {
            const e = h('div', { class: 'sw' + (c.paintOf(sel) === p ? ' sel' : ''), 'data-f': '1', 'data-say': t('paint'), style: 'background:#' + p.toString(16).padStart(6, '0'), on: () => { c.d.paint[sel] = p; c.save(); this.garage(sel, 'paint'); this.focusSel('.sw:not(.rf)', k); } });
            e._onFocus = () => show(sel, p, c.roofOf(sel));
            return e;
        }));
        // roof colour (two-tone): the first swatch = same as the body
        const hasRoof = modelInfo(SPECS[sel].model).roofY < 50;
        const roofs = [-1].concat(PAINTS);
        const rw = hasRoof ? h('div', { class: 'swatches' }, roofs.map((p, k) => {
            const bg = p < 0 ? 'background:linear-gradient(135deg,#' + c.paintOf(sel).toString(16).padStart(6, '0') + ' 50%,#555 50%)' : 'background:#' + p.toString(16).padStart(6, '0');
            const e = h('div', { class: 'sw rf' + (c.roofOf(sel) === p ? ' sel' : ''), 'data-f': '1', 'data-say': p < 0 ? t('sameRoof') : t('roof'), style: bg,
                on: () => { c.d.roof[sel] = p; c.save(); this.garage(sel, 'paint'); this.focusSel('.sw.rf', k); } });
            e._onFocus = () => show(sel, c.paintOf(sel), p);
            return e;
        })) : null;
        const upPane = h('div', { class: 'gpane' + (this.gTab === 'up' ? '' : ' off') }, ...UPGRADES.map(upRow));
        const paintPane = h('div', { class: 'gpane' + (this.gTab === 'paint' ? '' : ' off') }, sw, hasRoof ? h('h3', null, t('roof')) : null, rw);
        // tabs: moving onto one shows its rows (no OK needed); OK also works
        const tabs = h('div', { class: 'gtabs' }, ['up', 'paint'].map(k => {
            const e = h('div', { class: 'gtab' + (this.gTab === k ? ' on' : ''), 'data-f': '1', 'data-say': t(k === 'up' ? 'upgrade' : 'paint'), on: () => pick(k) }, t(k === 'up' ? 'upgrade' : 'paint'));
            e._onFocus = () => pick(k);
            // ◀ ▶ go straight to the other tab (the rows below are close enough to win the plain spatial move)
            e._lr = (d) => { const i = k === 'up' ? 0 : 1, j = i + ((I18n.lang === 'ar' ? -d : d) > 0 ? 1 : -1);   // d: screen direction (Arabic: tabs right to left)
                if (j === 0 || j === 1) this.setFocus(tabs.children[j]); else this.move(d, 0); };
            return e;
        }));
        const pick = (k) => {
            if (this.gTab === k) return;
            this.gTab = k;
            tabs.querySelectorAll('.gtab').forEach((e, i) => e.classList.toggle('on', ['up', 'paint'][i] === k));
            upPane.classList.toggle('off', k !== 'up'); paintPane.classList.toggle('off', k !== 'paint');
            show(sel, c.paintOf(sel), c.roofOf(sel));
        };
        this.render('garage', () => h('div', { class: 'wrap garage' }, this.topbar(), h('h1', null, t('garage')),
            h('div', { class: 'pick' }, list, h('div', { class: 'carinfo' },
                h('div', { class: 'cn' }, car.name), h('div', { class: 'cc' }, this.carTag(sel)),
                this.bars(stats(sel, u)),
                ok ? this.btn(c.d.car === sel ? t('selected') : t('select'), () => { c.d.car = sel; c.save(); this.garage(sel); }, 'go') : h('div', { class: 'need' }, '🔒 ' + t('need') + ' ' + car.stars + ' ★'),
                tabs, upPane, paintPane))
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
                this.opt(t('smoke'), [{ v: 1, l: t('on') }, { v: 0, l: t('off') }], () => s.smoke === 0 ? 0 : 1, v => { s.smoke = v; save(); if (this.app.session) this.app.session.smoke = !!v; }),
                // sound mix (on top of My PC's own volumes): ◀ ▶ in steps of 10 %
                ...['engine', 'sfx', 'music'].map(k => this.opt(t('vol_' + k), [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].map(v => ({ v, l: Math.round(v * 100) + ' %' })),
                    () => s.mix[k], v => { s.mix[k] = v; save(); this.app.sound.setMix(s.mix); if (k === 'sfx') this.app.sound.ui('switch'); })),
                h('div', { class: 'credits' }, h('b', null, t('credits_title')), ' ', t('creditsText'))
            )), { back: () => this.home() });
    }
    controls(p, focusId) {
        const inp = this.app.input, P = inp.players[p], c = this.app.career, s = c.d.settings;
        const persist = () => { window.MyPC.save('controls', inp.save()); c.save(); };
        // one row per action: up to 4 button boxes (OK = listen 3 s for ANY button, it replaces that box), + to add, ✕ to clear
        const again = (id) => { this.controls(p, id); };
        const rows = ACTIONS.map(a => {
            const list = P.map[a];
            const slot = (k) => {
                const b = list[k], id = a + ':' + k;
                const el = h('i', { class: 'cslot' + (b ? '' : ' add'), 'data-f': '1', 'data-id': id, 'data-say': t('a_' + a) + ' ' + (b ? bindLabel(b) : t('addB')), on: () => {
                    let left = 3;
                    el.className = 'cslot wait'; el.textContent = t('pressBtn') + ' 3';
                    const tick = setInterval(() => { left--; if (left > 0 && el.isConnected) el.textContent = t('pressBtn') + ' ' + left; }, 1000);
                    inp.startCapture(p, a, k, (got) => { clearInterval(tick); if (got) { persist(); this.app.sound && this.app.sound.ui('ok'); } again(id); }, 3);
                } }, b ? bindLabel(b) : '＋');
                return el;
            };
            const slots = [];
            for (let k = 0; k < Math.min(4, list.length + 1); k++) slots.push(slot(k));
            const clr = h('i', { class: 'cslot clr', 'data-f': '1', 'data-id': a + ':x', 'data-say': t('clearB') + ' ' + t('a_' + a), on: () => { P.map[a] = []; persist(); again(a + ':0'); } }, '✕');
            return h('div', { class: 'crow' }, h('span', { class: 'ca' }, t('a_' + a)), h('span', { class: 'chips' }, slots, clr));
        });
        this.render('controls', () => h('div', { class: 'wrap' }, this.topbar(), h('h1', null, t('controls') + ' — ' + t(p ? 'p2' : 'p1')),
            h('div', { class: 'maphelp' }, t('mapHelp')),
            h('div', { class: 'form wide' },
                rows,
                this.opt(t('autoAcc'), [{ v: true, l: t('on') }, { v: false, l: t('off') }], () => P.auto, v => { P.auto = v; persist(); }),
                this.opt(t('easy'), [{ v: 0, l: t('off') }, { v: 1, l: t('on') }], () => s.easy[p], v => { s.easy[p] = v; persist(); }),
                this.opt(t('esc'), [{ v: 1, l: t('on') }, { v: 0, l: t('off') }], () => s.esc[p], v => { s.esc[p] = v; persist(); }),
                this.opt(t('steerFeel'), [{ v: 2, l: t('gentle') }, { v: 1.4, l: t('normal') }, { v: 1, l: t('direct') }], () => P.curve, v => { P.curve = v; persist(); }),
                this.opt(t('deadZone'), [0.05, 0.1, 0.15, 0.25].map(v => ({ v, l: Math.round(v * 100) + ' %' })), () => P.dead, v => { P.dead = v; persist(); }),
                this.btn(t('reset'), () => { P.map = defaultMap(); persist(); this.controls(p); })
            )), { back: () => { inp.cancelCapture(); this.settings(); } });
        if (focusId) { const el = this.root.querySelector('[data-id="' + focusId + '"]') || this.root.querySelector('[data-id="' + focusId.split(':')[0] + ':0"]'); if (el) this.setFocus(el); }
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
            res.unlocked && res.unlocked.length ? h('div', { class: 'unl' }, '🔓 ' + t('unlocked') + ': ' + [...new Set(res.unlocked.map(e => {
                const r = this.app.routes.routes.find(x => x.id === e.route); return e.mode === 'race' ? (r ? r.name : e.route) : (r ? r.name + ' · ' : '') + t(e.mode === 'time' ? 'timeattack' : e.mode); }))].join(', ')) : null,
            h('div', { class: 'row' }, this.btn(t('cont'), () => res.cfg.event ? this.career() : res.cfg.twoP ? this.twoOptions() : this.home(), 'go', { 'data-first': '1' }),
                this.btn(t('retry'), () => this.app.startRace(res.cfg)))
        ), { back: () => this.home() });
    }
}
