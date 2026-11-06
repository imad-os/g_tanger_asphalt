// All materials are small custom shaders: one sun, a sky-tinted ambient, linear fog, nothing per pixel that a TV
// GPU would struggle with. Vertex colours come from the baked models (see tools/build-models.mjs).
import * as THREE from 'three';

export const U = {               // shared uniforms (one object, every material points to it)
    uSun: { value: new THREE.Vector3(0.45, 0.75, -0.48).normalize() },
    uSunCol: { value: new THREE.Color(1.0, 0.94, 0.84) },
    uSky: { value: new THREE.Color(0.55, 0.72, 0.95) },
    uGround: { value: new THREE.Color(0.42, 0.38, 0.32) },
    uFog: { value: new THREE.Color(0.74, 0.82, 0.92) },
    uFogNear: { value: 220 },
    uFogFar: { value: 900 },
    uTime: { value: 0 },
    uNight: { value: 0 }          // 0 day .. 1 night (window lights, headlights)
};

const FOG_V = `
varying float vFog;
`;
const FOG_VCALC = `
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
`;
const COMMON = `
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
`;
const LIGHT = `
vec3 light(vec3 n) {
  float d = max(dot(n, uSun), 0.0);
  vec3 amb = mix(uGround, uSky, n.y * 0.5 + 0.5) * 0.55;
  return amb + uSunCol * d * (1.0 - uNight * 0.85);
}
`;

// World: props, ground, buildings' trims, everything with baked colours.
export function worldMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: U,
        vertexShader: COMMON + FOG_V + `
attribute vec4 col;
varying vec3 vCol; varying vec3 vN;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb;
  float lightFlag = step(0.2, col.a) * (1.0 - step(0.3, col.a));
  vCol += lightFlag * vec3(1.0, 0.9, 0.6) * uNight * 2.0;
  ` + FOG_VCALC + `
}`,
        fragmentShader: COMMON + LIGHT + FOG_V + `
varying vec3 vCol; varying vec3 vN;
void main() {
  vec3 c = vCol * light(normalize(vN));
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`
    });
}

// Road: asphalt, lane lines and kerbs from (d = metres from the centre line, s = metres along the route).
export function roadMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: U,
        vertexShader: COMMON + FOG_V + `
attribute vec4 ds;   // x = d, y = s, z = half width left, w = half width right
varying vec4 vDs; varying vec3 vWp;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vDs = ds; vWp = wp.xyz;
  ` + FOG_VCALC + `
}`,
        fragmentShader: COMMON + FOG_V + `
varying vec4 vDs; varying vec3 vWp;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  float d = vDs.x, s = vDs.y, hl = vDs.z, hr = vDs.w;
  float n = hash(floor(vWp.xz * 12.0)) * 0.035 + (sin(vWp.x * 0.21 + sin(vWp.z * 0.13) * 2.0) * 0.5 + 0.5) * 0.03;
  vec3 c = vec3(0.24, 0.245, 0.26) + n;
  // tyre-worn racing line (darker) in each lane
  float hw = d >= 0.0 ? hl : hr;
  float ad = abs(d);
  // lane dashes: lanes ~3.6 m
  float lanes = max(1.0, floor(hw / 3.6 + 0.5));
  float lw = hw / lanes;
  float fw = fwidth(d) * 1.2 + 0.02;
  float lane = abs(fract(ad / lw + 0.5) - 0.5) * lw;            // distance to the nearest lane line
  float dash = step(0.45, fract(s / 9.0));
  float inner = step(lw * 0.5, ad) * (1.0 - step(hw - lw * 0.5, ad));
  c = mix(c, vec3(0.92), (1.0 - smoothstep(0.07, 0.07 + fw, lane)) * dash * inner);
  // centre double line
  float cl = abs(ad - 0.18);
  c = mix(c, vec3(0.95, 0.78, 0.2), 1.0 - smoothstep(0.07, 0.07 + fw, cl));
  // edge lines
  float el = abs(ad - (hw - 0.45));
  c = mix(c, vec3(0.93), 1.0 - smoothstep(0.1, 0.1 + fw, el));
  // kerb: red / white blocks
  float kerb = step(hw, ad) * (1.0 - step(hw + 0.45, ad));
  vec3 kc = mod(floor(s / 2.0), 2.0) < 1.0 ? vec3(0.8, 0.12, 0.1) : vec3(0.92);
  c = mix(c, kc, kerb);
  // pavement: light stone slabs
  float pav = step(hw + 0.45, ad);
  vec2 sl = fract(vec2(s, ad) / 1.2);
  float joint = step(0.94, max(sl.x, sl.y));
  vec3 pc = vec3(0.68, 0.64, 0.58) * (0.95 + hash(floor(vec2(s, ad) / 1.2)) * 0.1) * (1.0 - joint * 0.25);
  c = mix(c, pc, pav);
  float sunk = max(uSun.y, 0.0);
  vec3 lit = c * (mix(uGround, uSky, 0.8) * 0.55 + uSunCol * sunk * (1.0 - uNight * 0.85));
  // a soft sheen toward the sun (wet-looking asphalt at grazing angles), cheap
  vec3 v = normalize(cameraPosition - vWp);
  float sh = pow(max(dot(reflect(-v, vec3(0.0, 1.0, 0.0)), uSun), 0.0), 24.0) * 0.25 * (1.0 - pav);
  lit += sh * uSunCol;
  gl_FragColor = vec4(mix(lit, uFog, vFog), 1.0);
}`,
        extensions: { derivatives: true }
    });
}

// Buildings: walls with window rows (uv = metres along the wall, metres up), flat roofs.
export function buildingMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: U,
        vertexShader: COMMON + FOG_V + `
attribute vec4 col; attribute vec2 wuv;
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb; vUv = wuv;
  ` + FOG_VCALC + `
}`,
        fragmentShader: COMMON + LIGHT + FOG_V + `
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 n = normalize(vN);
  vec3 c = vCol;
  float wall = 1.0 - step(0.5, n.y);
  vec2 cell = vec2(vUv.x / 3.4, (vUv.y - 1.2) / 3.2);
  vec2 f = fract(cell);
  float win = step(0.22, f.x) * step(f.x, 0.78) * step(0.25, f.y) * step(f.y, 0.8) * step(0.0, cell.y) * step(0.6, vUv.y);
  float h = hash(floor(cell) + floor(vCol.rg * 50.0));
  vec3 glass = mix(vec3(0.16, 0.22, 0.3), vec3(0.3, 0.42, 0.55), h);
  c = mix(c, glass, win * wall);
  vec3 lit = c * light(n);
  // lit windows at night
  lit += win * wall * step(0.45, h) * uNight * vec3(1.0, 0.82, 0.5) * 0.9;
  gl_FragColor = vec4(mix(lit, uFog, vFog), 1.0);
}`
    });
}

// Cars: baked colours, livery paint (flag 255), glass (128), lights (64); a fake sky reflection and a sun highlight.
export function carMaterial(paint) {
    return new THREE.ShaderMaterial({
        uniforms: Object.assign({ uPaint: { value: new THREE.Color(paint || 0xd02020) }, uBrake: { value: 0 } }, U),
        vertexShader: COMMON + FOG_V + `
attribute vec4 col;
uniform vec3 uPaint; uniform float uBrake;
varying vec3 vCol; varying vec3 vN; varying vec3 vWp; varying float vKind;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vWp = wp.xyz;
  float a = col.a;
  vKind = a > 0.9 ? 3.0 : a > 0.45 ? 2.0 : a > 0.2 ? 1.0 : 0.0;
  vCol = a > 0.9 ? uPaint * col.r * 1.25 : col.rgb;
  if (vKind > 0.5 && vKind < 1.5) {     // lights: red at the back glow when braking
    bool rear = position.z < 0.0;
    vCol = rear ? vec3(0.8, 0.05, 0.03) * (1.0 + uBrake * 2.5) : vec3(1.0, 0.97, 0.85) * (1.0 + uNight * 1.5);
  }
  ` + FOG_VCALC + `
}`,
        fragmentShader: COMMON + LIGHT + FOG_V + `
varying vec3 vCol; varying vec3 vN; varying vec3 vWp; varying float vKind;
void main() {
  vec3 n = normalize(vN);
  vec3 v = normalize(cameraPosition - vWp);
  vec3 c = vCol * light(n);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  vec3 r = reflect(-v, n);
  vec3 env = mix(uGround * 0.6, uSky * 1.1, smoothstep(-0.15, 0.25, r.y));
  float spec = pow(max(dot(r, uSun), 0.0), 60.0);
  if (vKind > 2.5) {         // paint (varyings are not exact: compare with ranges): clear coat
    c = c + env * (0.12 + fres * 0.45) + uSunCol * spec * 1.2;
  } else if (vKind > 1.5) {  // glass
    c = vec3(0.05, 0.06, 0.08) + env * (0.35 + fres * 0.5) + uSunCol * spec * 1.5;
  } else if (vKind > 0.5) {
    c = vCol;
  } else {
    c += uSunCol * spec * 0.2;
  }
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`
    });
}

export function skyMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: U,
        depthWrite: false,
        side: THREE.BackSide,
        vertexShader: `varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
        fragmentShader: COMMON + `
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = max(d.y, 0.0);
  vec3 top = mix(vec3(0.22, 0.45, 0.85), vec3(0.02, 0.03, 0.08), uNight);
  vec3 c = mix(uFog, top, pow(h, 0.55));
  float s = max(dot(d, uSun), 0.0);
  c += uSunCol * (pow(s, 600.0) * 3.0 + pow(s, 12.0) * 0.25) * (1.0 - uNight);
  // a few far hills on the horizon (the other shore across the strait, to the north)
  gl_FragColor = vec4(c, 1.0);
}`
    });
}

export function seaMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: U,
        vertexShader: COMMON + FOG_V + `
varying vec3 vWp;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; gl_Position = projectionMatrix * mv; ` + FOG_VCALC + ` }`,
        fragmentShader: COMMON + FOG_V + `
varying vec3 vWp;
void main() {
  vec2 p = vWp.xz;
  float w = sin(p.x * 0.11 + uTime * 0.9) * 0.5 + sin(p.y * 0.07 - uTime * 0.7) * 0.5 + sin((p.x + p.y) * 0.23 + uTime * 1.6) * 0.25;
  vec3 n = normalize(vec3(w * 0.08, 1.0, cos(p.x * 0.09 + uTime) * 0.06));
  vec3 v = normalize(cameraPosition - vWp);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 4.0);
  vec3 deep = mix(vec3(0.02, 0.22, 0.36), vec3(0.0, 0.03, 0.06), uNight);
  vec3 c = mix(deep, uSky * 0.9, fres * 0.8);
  float spec = pow(max(dot(reflect(-v, n), uSun), 0.0), 120.0);
  c += uSunCol * spec * 2.0 * (1.0 - uNight);
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`
    });
}

// Additive effects (nitro flames, sparks): colour from the vertex, no lighting.
export function glowMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: { uAlpha: { value: 1 } },
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: `attribute vec4 col; varying vec4 vCol; void main() { vCol = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `uniform float uAlpha; varying vec4 vCol; void main() { gl_FragColor = vec4(vCol.rgb * vCol.a * uAlpha, 1.0); }`
    });
}

// Points: sparks (additive) and smoke (alpha), size in metres
export function pointsMaterial(additive) {
    return new THREE.ShaderMaterial({
        uniforms: { uScale: { value: 600 } },
        transparent: true, depthWrite: false,
        blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
        vertexShader: `attribute vec4 col; attribute float size; uniform float uScale; varying vec4 vCol;
void main() { vCol = col; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uScale / max(1.0, -mv.z); }`,
        fragmentShader: `varying vec4 vCol; void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float r = dot(p, p); if (r > 1.0) discard; float a = vCol.a * (1.0 - r); gl_FragColor = vec4(vCol.rgb, a); }`
    });
}

// Dark transparent quads: skid marks and the soft shadow under each car
export function shadeMaterial() {
    return new THREE.ShaderMaterial({
        transparent: true, depthWrite: false,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
        vertexShader: `attribute vec4 col; varying vec4 vCol; varying vec2 vUv; void main() { vCol = col; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `varying vec4 vCol; varying vec2 vUv; void main() { vec2 p = vUv * 2.0 - 1.0; float e = 1.0 - smoothstep(0.55, 1.0, max(abs(p.x), abs(p.y))); gl_FragColor = vec4(vCol.rgb, vCol.a * mix(1.0, e, step(0.5, vCol.b + 0.5) * 0.0 + 1.0)); }`
    });
}
