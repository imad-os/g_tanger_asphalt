// Runs in GitHub Actions (the dev container cannot reach Overpass).
// Reads osm/request.json and writes compact OpenStreetMap extracts into osm/.
// Data (c) OpenStreetMap contributors, ODbL 1.0: https://www.openstreetmap.org/copyright
import fs from 'node:fs';

const req = JSON.parse(fs.readFileSync('osm/request.json', 'utf8'));
const MIRRORS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter',
    'https://maps.mail.ru/osm/tools/overpass/api/interpreter'];

async function overpass(q) {
    let last;
    for (let round = 0; round < 3; round++) {
        for (const url of MIRRORS) {
            try {
                const r = await fetch(url, { method: 'POST', body: 'data=' + encodeURIComponent(q),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'tangier-asphalt-build/1.0' } });
                if (!r.ok) throw new Error(url + ' ' + r.status);
                return await r.json();
            } catch (e) { last = e; console.log('retry', e.message); await new Promise(r => setTimeout(r, 5000)); }
        }
    }
    throw last;
}
const r5 = v => Math.round(v * 1e5) / 1e5;
function geom(el) { const a = []; for (const p of el.geometry || []) a.push(r5(p.lat), r5(p.lon)); return a; }

async function roads() {
    const [s, w, n, e] = req.bbox;
    const bb = `(${s},${w},${n},${e})`;
    const q = `[out:json][timeout:180];(way["highway"~"^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|motorway_link|trunk_link|primary_link|secondary_link|tertiary_link|living_street)$"]${bb};);out tags geom;`;
    const d = await overpass(q);
    const out = [];
    for (const el of d.elements) {
        if (el.type !== 'way') continue;
        const t = el.tags || {};
        out.push({ id: el.id, n: t.name || t['name:fr'] || '', nar: t['name:ar'] || '', h: t.highway, l: +t.lanes || 0,
            o: t.oneway === 'yes' ? 1 : t.oneway === '-1' ? -1 : 0, br: t.bridge ? 1 : 0, tu: t.tunnel ? 1 : 0,
            j: t.junction || '', nodes: el.nodes, g: geom(el) });
    }
    fs.writeFileSync('osm/roads.json', JSON.stringify({ bbox: req.bbox, license: 'ODbL 1.0, (c) OpenStreetMap contributors', ways: out }));
    const c = await overpass(`[out:json][timeout:120];(way["natural"="coastline"]${bb};);out geom;`);
    fs.writeFileSync('osm/coast.json', JSON.stringify({ license: 'ODbL 1.0, (c) OpenStreetMap contributors', ways: c.elements.map(el => ({ id: el.id, nodes: el.nodes, g: geom(el) })) }));
    const p = await overpass(`[out:json][timeout:120];(node["place"]${bb};way["leisure"~"golf_course|park"]${bb};way["landuse"~"industrial|residential|forest|grass|commercial"]${bb};way["natural"~"beach|wood|scrub"]${bb};);out tags geom;`);
    fs.writeFileSync('osm/areas.json', JSON.stringify({ license: 'ODbL 1.0, (c) OpenStreetMap contributors', els: p.elements.map(el => ({ t: el.type[0], k: el.tags, g: el.type === 'node' ? [r5(el.lat), r5(el.lon)] : geom(el) })) }));
    console.log('roads', out.length, 'coast', c.elements.length, 'areas', p.elements.length);
}

async function buildings() {
    // req.lines: [[lat,lon,lat,lon,...], ...] route centre lines; buildings within req.r metres
    const r = req.r || 140;
    const out = [];
    const seen = new Set();
    for (const line of req.lines) {
        for (let i = 0; i < line.length; i += 2 * 120) {
            const part = line.slice(i, i + 2 * 121).map(r5).join(',');
            const d = await overpass(`[out:json][timeout:180];(way["building"](around:${r},${part}););out tags geom;`);
            for (const el of d.elements) {
                if (seen.has(el.id)) continue; seen.add(el.id);
                const t = el.tags || {};
                out.push({ lv: +t['building:levels'] || 0, h: parseFloat(t.height) || 0, b: t.building, g: geom(el) });
            }
            console.log('buildings', out.length);
        }
    }
    fs.writeFileSync('osm/buildings.json', JSON.stringify({ license: 'ODbL 1.0, (c) OpenStreetMap contributors', b: out }));
}

if (req.job === 'roads') await roads();
else if (req.job === 'buildings') await buildings();
