// The routes: ordered waypoints (lat, lon) on real Tangier roads. tools/build-routes.mjs follows the real
// OpenStreetMap road network between them (shortest drive, big roads preferred) and builds the race track.
// To move a route, change its waypoints and run `node tools/build-routes.mjs`.
export const ROUTES = [
    { id: 'corniche', name: 'Corniche Sprint', area: 'Corniche', laps: 0,
      way: [[35.78725, -5.80825], [35.7795, -5.8027], [35.7754, -5.7893], [35.7767, -5.7781], [35.7848, -5.7618]] },
    { id: 'marina', name: 'Marina Bay Dash', area: 'Marina Bay', laps: 0,
      way: [[35.7872, -5.8081], [35.7755, -5.7889], [35.7724, -5.7917], [35.7790, -5.8083], [35.7800, -5.8125]] },
    { id: 'harris', name: 'Villa Harris Hills', area: 'Villa Harris', laps: 0,
      way: [[35.7746, -5.7841], [35.7773, -5.7750], [35.7835, -5.7645], [35.7889, -5.7545], [35.7963, -5.7467], [35.8085, -5.7401]] },
    { id: 'rmilat', name: 'Rmilat Forest', area: 'Rmilat', laps: 0,
      way: [[35.7871, -5.8342], [35.7806, -5.8424], [35.7794, -5.8606], [35.7863, -5.8667], [35.7940, -5.8720]] },
    { id: 'achakar', name: 'Achakar Cliffs', area: 'Achakar', laps: 0,
      way: [[35.7890, -5.9220], [35.7755, -5.9283], [35.76639, -5.93403], [35.75861, -5.93022], [35.75619, -5.91958], [35.7468, -5.8894]] },
    { id: 'mesnana', name: 'Mesnana Golf', area: 'Mesnana', laps: 2,
      way: [[35.7760, -5.8557], [35.7681, -5.8591], [35.7535, -5.8510], [35.7580, -5.8453], [35.7653, -5.8353], [35.7721, -5.8300], [35.7760, -5.8557]] },
    { id: 'zonefranche', name: 'Zone Franche Run', area: 'Zone Franche', laps: 0,
      way: [[35.7530, -5.8510], [35.7407, -5.8694], [35.7294, -5.8833], [35.7270, -5.8960], [35.7230, -5.9080]] },
    { id: 'rabat', name: 'Route de Rabat', area: 'Route de Rabat', laps: 0,
      way: [[35.75985, -5.82095], [35.75212, -5.83367], [35.74467, -5.84376], [35.73772, -5.85594], [35.72868, -5.88278]] },
    { id: 'kawassim', name: 'Kawassim Night', area: 'Kawassim', laps: 2,
      way: [[35.7531, -5.8509], [35.7478, -5.8419], [35.7389, -5.8531], [35.7465, -5.8604], [35.7531, -5.8509]] },
    { id: 'dradeb', name: 'Dradeb Rush', area: 'Dradeb', laps: 0,
      way: [[35.7810, -5.8123], [35.7803, -5.8293], [35.7822, -5.8339], [35.7865, -5.8344], [35.7914, -5.8337], [35.7948, -5.8305]] }
];
