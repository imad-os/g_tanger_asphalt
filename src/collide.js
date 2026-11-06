// Contacts between cars (oriented boxes, separating axis test in the ground plane) and between cars and the
// barriers along the road. Responses are impulses with restitution and friction applied at the contact point,
// so a hit at the rear quarter spins a car and a hard hit high on the body can roll it.
// Returns the impulse sizes so the race can decide on takedowns and wrecks. No allocation.

const C = { nx: 0, nz: 0, depth: 0, px: 0, pz: 0 };
const corners = new Float32Array(8);

function boxCorners(v, out) {
    const R = v.R, hx = v.half.x, hz = v.half.z;
    // ground-plane axes: left (R0, R2) and forward (R6, R8), normalised in xz
    let ax = R[0], az = R[2], al = Math.hypot(ax, az) || 1; ax /= al; az /= al;
    let fx = R[6], fz = R[8], fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
    let k = 0;
    for (let sx = -1; sx <= 1; sx += 2) for (let sz = -1; sz <= 1; sz += 2) {
        out[k++] = v.px - R[6] * v.cgZ + ax * hx * sx + fx * hz * sz;   // the body box is centred on the model, not the centre of mass
        out[k++] = v.pz - R[8] * v.cgZ + az * hx * sx + fz * hz * sz;
    }
    return out;
}

// SAT between two cars in xz; fills C with the minimum translation axis (pointing from a to b)
function sat(a, b) {
    let best = 1e9;
    for (let w = 0; w < 2; w++) {
        const v = w ? b : a, R = v.R;
        for (let ax = 0; ax < 2; ax++) {
            let nx = ax ? R[6] : R[0], nz = ax ? R[8] : R[2];
            const l = Math.hypot(nx, nz) || 1; nx /= l; nz /= l;
            const pa = project(a, nx, nz), pb = project(b, nx, nz);
            const ca = (a.px - a.R[6] * a.cgZ) * nx + (a.pz - a.R[8] * a.cgZ) * nz, cb = (b.px - b.R[6] * b.cgZ) * nx + (b.pz - b.R[8] * b.cgZ) * nz;
            const overlap = pa + pb - Math.abs(cb - ca);
            if (overlap <= 0) return false;
            if (overlap < best) { best = overlap; const sg = cb - ca >= 0 ? 1 : -1; C.nx = nx * sg; C.nz = nz * sg; }
        }
    }
    C.depth = best;
    // contact point: the corner of b deepest along -n, averaged with a's deepest along +n
    boxCorners(b, corners);
    let mn = 1e9, px = 0, pz = 0;
    for (let k = 0; k < 4; k++) { const d = corners[k * 2] * C.nx + corners[k * 2 + 1] * C.nz; if (d < mn) { mn = d; px = corners[k * 2]; pz = corners[k * 2 + 1]; } }
    boxCorners(a, corners);
    let mx = -1e9, qx = 0, qz = 0;
    for (let k = 0; k < 4; k++) { const d = corners[k * 2] * C.nx + corners[k * 2 + 1] * C.nz; if (d > mx) { mx = d; qx = corners[k * 2]; qz = corners[k * 2 + 1]; } }
    C.px = (px + qx) / 2; C.pz = (pz + qz) / 2;
    return true;
}
function project(v, nx, nz) {
    const R = v.R;
    let ax = R[0], az = R[2], al = Math.hypot(ax, az) || 1; ax /= al; az /= al;
    let fx = R[6], fz = R[8], fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
    return Math.abs(ax * nx + az * nz) * v.half.x + Math.abs(fx * nx + fz * nz) * v.half.z;
}

export const HIT = { j: 0, rel: 0, nx: 0, nz: 0, px: 0, py: 0, pz: 0 };

// Car vs car. Returns the impulse (N s) or 0.
export function carCar(a, b) {
    if (Math.abs(a.py - b.py) > 2.2) return 0;
    const dx = a.px - b.px, dz = a.pz - b.pz;
    const r = a.half.z + b.half.z;
    if (dx * dx + dz * dz > r * r) return 0;
    if (!sat(a, b)) return 0;
    const nx = C.nx, nz = C.nz;
    // push apart by mass ratio
    const ta = a.invMass / (a.invMass + b.invMass), tb = 1 - ta;
    const corr = C.depth + 0.01;
    a.px -= nx * corr * ta; a.pz -= nz * corr * ta;
    b.px += nx * corr * tb; b.pz += nz * corr * tb;
    // contact at mid body height
    const py = (a.py + b.py) / 2 + 0.1;
    const rax = C.px - a.px, ray = py - a.py, raz = C.pz - a.pz;
    const rbx = C.px - b.px, rby = py - b.py, rbz = C.pz - b.pz;
    const vax = a.vx + (a.wy * raz - a.wz * ray), vay = a.vy + (a.wz * rax - a.wx * raz), vaz = a.vz + (a.wx * ray - a.wy * rax);
    const vbx = b.vx + (b.wy * rbz - b.wz * rby), vby = b.vy + (b.wz * rbx - b.wx * rbz), vbz = b.vz + (b.wx * rby - b.wy * rbx);
    const rvx = vbx - vax, rvy = vby - vay, rvz = vbz - vaz;
    const vn = rvx * nx + rvz * nz;
    if (vn >= 0) return 0;
    const e = 0.25;
    const k = a.invMassAt(rax, ray, raz, nx, 0, nz) + b.invMassAt(rbx, rby, rbz, nx, 0, nz);
    const j = -(1 + e) * vn / k;
    a.impulse(-nx * j, 0, -nz * j, rax, ray, raz);
    b.impulse(nx * j, 0, nz * j, rbx, rby, rbz);
    // friction (scraping side by side)
    const tx = rvx - nx * vn, ty = rvy, tz = rvz - nz * vn;
    const tl = Math.hypot(tx, ty, tz);
    if (tl > 0.05) {
        const jt = Math.min(j * 0.35, tl / k);
        const ux = tx / tl, uy = ty / tl, uz = tz / tl;
        a.impulse(ux * jt, uy * jt, uz * jt, rax, ray, raz);
        b.impulse(-ux * jt, -uy * jt, -uz * jt, rbx, rby, rbz);
    }
    HIT.j = j; HIT.rel = -vn; HIT.nx = nx; HIT.nz = nz; HIT.px = C.px; HIT.py = py; HIT.pz = C.pz;
    return j;
}

// Car vs the barriers at the pavement edge. q: scratch query object. Returns the impulse or 0.
const WALL = 3.25;   // barrier inner face, metres beyond the asphalt edge (see world.js PAVE)
export function carWall(v, track, q) {
    boxCorners(v, corners);
    let best = 0, bx = 0, bz = 0, bnx = 0, bnz = 0;
    for (let k = 0; k < 4; k++) {
        const x = corners[k * 2], z = corners[k * 2 + 1];
        track.query(x, z, v.hint, q);
        if (track.flags[q.i] & 4) continue;            // open where the route crosses itself
        const over = q.d >= 0 ? q.d - (q.hl + WALL) : -q.d - (q.hr + WALL);
        if (over > best) {
            best = over; bx = x; bz = z;
            const sg = q.d >= 0 ? -1 : 1;              // push back toward the road centre
            bnx = q.lx * sg; bnz = q.lz * sg;
        }
    }
    if (best <= 0) return 0;
    v.px += bnx * best; v.pz += bnz * best;
    const py = v.py + 0.15;
    const rx = bx - v.px, ry = py - v.py, rz = bz - v.pz;
    const pvx = v.vx + (v.wy * rz - v.wz * ry), pvy = v.vy + (v.wz * rx - v.wx * rz), pvz = v.vz + (v.wx * ry - v.wy * rx);
    const vn = pvx * bnx + pvz * bnz;
    if (vn >= 0) return 0;
    const k = v.invMassAt(rx, ry, rz, bnx, 0, bnz);
    const j = -(1 + 0.2) * vn / k;
    v.impulse(bnx * j, 0, bnz * j, rx, ry, rz);
    const tx = pvx - bnx * vn, tz = pvz - bnz * vn;
    const tl = Math.hypot(tx, tz);
    if (tl > 0.05) {
        const jt = Math.min(j * 0.3, tl / k);
        v.impulse(-tx / tl * jt, 0, -tz / tl * jt, rx, ry, rz);
    }
    HIT.j = j; HIT.rel = -vn; HIT.nx = bnx; HIT.nz = bnz; HIT.px = bx; HIT.py = py; HIT.pz = bz;
    return j;
}
