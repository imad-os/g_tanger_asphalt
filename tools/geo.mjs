// The game's flat frame: x = east (m), z = SOUTH (m) so that -z is north, y = up.  Origin: Tangier centre.
export const GEO = { lat0: 35.765, lon0: -5.84, bbox: [35.700, -5.960, 35.815, -5.735], terrainStep: 20 };
const R = 6371008.8;
const kx = R * Math.cos(GEO.lat0 * Math.PI / 180) * Math.PI / 180, kz = R * Math.PI / 180;
export function toXY(lat, lon) { return { x: (lon - GEO.lon0) * kx, z: -(lat - GEO.lat0) * kz }; }
GEO.toLL = (x, z) => ({ lat: GEO.lat0 - z / kz, lon: GEO.lon0 + x / kx });
