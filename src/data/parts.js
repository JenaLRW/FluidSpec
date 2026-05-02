/**
 * FluidSpec Parts Database
 *
 * Schema per part:
 *   id          — unique string key
 *   mfr         — manufacturer name
 *   model       — model number (display)
 *   description — short human-readable description
 *   ways        — '2-Way' | '3-Way' | '4-Way'
 *   defaultState — 'Normally Open' | 'Normally Closed' | 'All ports blocked' | ''
 *   actuation   — 'Manual Rotary' | 'Manual Lever' | 'Manual Push' | 'Manual Pull' | 'Hydraulic Pilot'
 *   element     — 'Spool' | 'Poppet'
 *   maxPsi      — number (max rated pressure in PSI)
 *   maxGpm      — number | null (max rated flow in US GPM)
 *   cavity      — string (cavity designation)
 *   price       — number | null (distributor price — populate later)
 *   leadTimeDays — number | null (typical lead time — populate later)
 *   notes       — string (any extra info)
 */

export const MANUFACTURERS = {
  Danfoss: { label: 'Danfoss Power Solutions', color: '#e63329' },
  Bucher:  { label: 'Bucher Hydraulics',       color: '#003f7f' },
  Sun:     { label: 'Sun Hydraulics',           color: '#f7941d' },
  HAWE:    { label: 'HAWE Hydraulik',           color: '#005baa' },
  Argo:    { label: 'Argo-Hytos',              color: '#e2001a' },
  Deltrol: { label: 'Deltrol Fluid Products',  color: '#444444' },
  NACHI:   { label: 'NACHI America',           color: '#c8102e' },
};

const PARTS = [
  // ── DANFOSS — Manual Rotary ──────────────────────────────────────────────
  { id: 'dan-mrv2-10',   mfr: 'Danfoss', model: 'MRV2-10',   description: 'Manual Rotary Restrictor, 2-Way',         ways: '2-Way', defaultState: '',               actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 15,  cavity: 'SDC10-2', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv2-16',   mfr: 'Danfoss', model: 'MRV2-16',   description: 'Manual Rotary Restrictor, 2-Way',         ways: '2-Way', defaultState: '',               actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 45,  cavity: 'SDC16-2', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv3-10',   mfr: 'Danfoss', model: 'MRV3-10',   description: 'Manual Rotary Valve, 3-Way',              ways: '3-Way', defaultState: '',               actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 6,   cavity: 'SDC10-3', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv13-10',  mfr: 'Danfoss', model: 'MRV13-10',  description: 'Manual Rotary Valve, 3-Way',              ways: '3-Way', defaultState: '',               actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 5000, maxGpm: 6,   cavity: 'SDC10-3', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv13-12',  mfr: 'Danfoss', model: 'MRV13-12',  description: 'Manual Rotary Valve, 3-Way',              ways: '3-Way', defaultState: '',               actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 5000, maxGpm: 12,  cavity: 'C-12-3',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv3-16',   mfr: 'Danfoss', model: 'MRV3-16',   description: 'Manual Rotary Valve, 3-Way',              ways: '3-Way', defaultState: '',               actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 17,  cavity: 'SDC16-3', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv13-16',  mfr: 'Danfoss', model: 'MRV13-16',  description: 'Manual Rotary Valve, 3-Way',              ways: '3-Way', defaultState: '',               actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 5000, maxGpm: 17,  cavity: 'SDC16-3', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv4-10',   mfr: 'Danfoss', model: 'MRV4-10',   description: 'Manual Rotary Valve, 4-Way, tandem center', ways: '4-Way', defaultState: '',             actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 3,   cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv14-10',  mfr: 'Danfoss', model: 'MRV14-10',  description: 'Manual Rotary Valve, 4-Way, tandem center', ways: '4-Way', defaultState: '',             actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 5000, maxGpm: 3,   cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv14-12',  mfr: 'Danfoss', model: 'MRV14-12',  description: 'Manual Rotary Valve, 4-Way, tandem center', ways: '4-Way', defaultState: '',             actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 5000, maxGpm: 6,   cavity: 'C-12-4',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv4-16',   mfr: 'Danfoss', model: 'MRV4-16',   description: 'Manual Rotary Valve, 4-Way, tandem center', ways: '4-Way', defaultState: '',             actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 12,  cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv14-16',  mfr: 'Danfoss', model: 'MRV14-16',  description: 'Manual Rotary Valve, 4-Way, tandem center', ways: '4-Way', defaultState: '',             actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 5000, maxGpm: 12,  cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv5-10',   mfr: 'Danfoss', model: 'MRV5-10',   description: 'Manual Rotary Valve, 4-Way, all blocked center', ways: '4-Way', defaultState: 'All ports blocked', actuation: 'Manual Rotary', element: 'Spool', maxPsi: 3000, maxGpm: 3, cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv15-10',  mfr: 'Danfoss', model: 'MRV15-10',  description: 'Manual Rotary Valve, 4-Way, all blocked center', ways: '4-Way', defaultState: 'All ports blocked', actuation: 'Manual Rotary', element: 'Spool', maxPsi: 5000, maxGpm: 3, cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv15-12',  mfr: 'Danfoss', model: 'MRV15-12',  description: 'Manual Rotary Valve, 4-Way, all blocked center', ways: '4-Way', defaultState: 'All ports blocked', actuation: 'Manual Rotary', element: 'Spool', maxPsi: 5000, maxGpm: 6, cavity: 'C-12-4',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv15-16',  mfr: 'Danfoss', model: 'MRV15-16',  description: 'Manual Rotary Valve, 4-Way, all blocked center', ways: '4-Way', defaultState: 'All ports blocked', actuation: 'Manual Rotary', element: 'Spool', maxPsi: 5000, maxGpm: 12, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv6-10',   mfr: 'Danfoss', model: 'MRV6-10',   description: 'Manual Rotary Valve, 4-Way, float center',     ways: '4-Way', defaultState: '',          actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 3,   cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv6-16',   mfr: 'Danfoss', model: 'MRV6-16',   description: 'Manual Rotary Valve, 4-Way, float center',     ways: '4-Way', defaultState: '',          actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 12,  cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mrv7-10',   mfr: 'Danfoss', model: 'MRV7-10',   description: 'Manual Rotary Valve, 4-Way, all connected center', ways: '4-Way', defaultState: '',      actuation: 'Manual Rotary',  element: 'Spool',  maxPsi: 3000, maxGpm: 3,   cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },

  // ── DANFOSS — Manual Lever ───────────────────────────────────────────────
  { id: 'dan-mlv9-12-a', mfr: 'Danfoss', model: 'MLV9-12-A', description: 'Manual Lever Valve, 4-Way, tandem center',      ways: '4-Way', defaultState: 'Normally Open',    actuation: 'Manual Lever', element: 'Spool', maxPsi: 3000, maxGpm: 16, cavity: 'C-12-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mlv9-12-b', mfr: 'Danfoss', model: 'MLV9-12-B', description: 'Manual Lever Valve, 4-Way, float center',       ways: '4-Way', defaultState: '',               actuation: 'Manual Lever', element: 'Spool', maxPsi: 3000, maxGpm: 16, cavity: 'C-12-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mlv9-12-e', mfr: 'Danfoss', model: 'MLV9-12-E', description: 'Manual Lever Valve, 4-Way, all blocked center', ways: '4-Way', defaultState: 'All ports blocked', actuation: 'Manual Lever', element: 'Spool', maxPsi: 3000, maxGpm: 16, cavity: 'C-12-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-mlv9-12-f', mfr: 'Danfoss', model: 'MLV9-12-F', description: 'Manual Lever Valve, 4-Way, motor spool center', ways: '4-Way', defaultState: '',               actuation: 'Manual Lever', element: 'Spool', maxPsi: 3000, maxGpm: 16, cavity: 'C-12-4', price: null, leadTimeDays: null, notes: '' },

  // ── DANFOSS — Manual Pull / Push ─────────────────────────────────────────
  { id: 'dan-mpv1-10',   mfr: 'Danfoss', model: 'MPV1-10',   description: 'Manual Pull Valve, 2-Way, NC Poppet',            ways: '2-Way', defaultState: 'Normally Closed', actuation: 'Manual Pull',  element: 'Poppet', maxPsi: 3000, maxGpm: 12, cavity: 'SDC10-2', price: null, leadTimeDays: null, notes: 'Emergency lowering' },
  { id: 'dan-mpv3-10',   mfr: 'Danfoss', model: 'MPV3-10',   description: 'Manual Pull Valve with Detent, 2-Way, NC Poppet', ways: '2-Way', defaultState: 'Normally Closed', actuation: 'Manual Pull', element: 'Poppet', maxPsi: 3000, maxGpm: 12, cavity: 'SDC10-2', price: null, leadTimeDays: null, notes: 'Emergency lowering' },
  { id: 'dan-3cp2',      mfr: 'Danfoss', model: '3CP2',       description: 'Manual Push Valve, 2-Way, NC Poppet with Check', ways: '2-Way', defaultState: 'Normally Closed', actuation: 'Manual Push', element: 'Poppet', maxPsi: 3000, maxGpm: 4,  cavity: 'SDC08-2', price: null, leadTimeDays: null, notes: 'Emergency lowering' },
  { id: 'dan-ce06',      mfr: 'Danfoss', model: 'CE 06',      description: 'Manual Push Valve, 2-Way, Double Blocking',      ways: '2-Way', defaultState: 'Normally Closed', actuation: 'Manual Push', element: 'Poppet', maxPsi: 4600, maxGpm: 5,  cavity: 'NCS06/2', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-msv11-10',  mfr: 'Danfoss', model: 'MSV11-10',  description: 'Manual Push with Detent, 3-Way',                 ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Manual Push', element: 'Spool',  maxPsi: 5000, maxGpm: 6,  cavity: 'SDC10-3', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-msv1-12',   mfr: 'Danfoss', model: 'MSV1-12',   description: 'Manual Push with Detent, 3-Way',                 ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Manual Push', element: 'Spool',  maxPsi: 3000, maxGpm: 11, cavity: 'C-12-3',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-msv2-12',   mfr: 'Danfoss', model: 'MSV2-12',   description: 'Manual Push with Detent, 3-Way',                 ways: '3-Way', defaultState: '',               actuation: 'Manual Push', element: 'Spool',  maxPsi: 3000, maxGpm: 10, cavity: 'C-12-3',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-msv3-12',   mfr: 'Danfoss', model: 'MSV3-12',   description: 'Manual Push with Detent, 4-Way, all blocked normal', ways: '4-Way', defaultState: 'All ports blocked', actuation: 'Manual Push', element: 'Spool', maxPsi: 3000, maxGpm: 14, cavity: 'C-12-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-msv17-10',  mfr: 'Danfoss', model: 'MSV17-10',  description: 'Manual Push with Detent, 4-Way',                 ways: '4-Way', defaultState: '',               actuation: 'Manual Push', element: 'Spool',  maxPsi: 5000, maxGpm: 5,  cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-msv7-12',   mfr: 'Danfoss', model: 'MSV7-12',   description: 'Manual Push with Detent, 4-Way',                 ways: '4-Way', defaultState: '',               actuation: 'Manual Push', element: 'Spool',  maxPsi: 3000, maxGpm: 12, cavity: 'C-12-4',  price: null, leadTimeDays: null, notes: '' },

  // ── DANFOSS — Hydraulic Pilot ────────────────────────────────────────────
  { id: 'dan-cp710-1',   mfr: 'Danfoss', model: 'CP710-1',   description: 'Hyd Pilot 2-Way, Atmospheric Vent',    ways: '2-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 11, cavity: 'SDC10-3', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-cp710-3',   mfr: 'Danfoss', model: 'CP710-3',   description: 'Hyd Pilot 2-Way, Internal Drain',      ways: '2-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 11, cavity: 'SDC10-3', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-cp710-8',   mfr: 'Danfoss', model: 'CP710-8',   description: 'Hyd Pilot 2-Way, External Drain',      ways: '2-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 11, cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-cp712-8',   mfr: 'Danfoss', model: 'CP712-8',   description: 'Hyd Pilot 2-Way, External Drain',      ways: '2-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 34, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-cp712-11',  mfr: 'Danfoss', model: 'CP712-11',  description: 'Hyd Pilot 2-Way, External Drain, High P', ways: '2-Way', defaultState: 'Normally Open', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 6500, maxGpm: 34, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-cp712-7',   mfr: 'Danfoss', model: 'CP712-7',   description: 'Hyd Pilot 2-Way, Proportional Flow',   ways: '2-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 58, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts17-10',  mfr: 'Danfoss', model: 'PTS17-10',  description: 'Hyd Pilot 2-Way NO, Atmospheric Vent', ways: '2-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 8,  cavity: 'SDC10-3', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts17-12',  mfr: 'Danfoss', model: 'PTS17-12',  description: 'Hyd Pilot 2-Way NO, Atmospheric Vent', ways: '2-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 30, cavity: 'C-12-3',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts1-10',   mfr: 'Danfoss', model: 'PTS1-10',   description: 'Hyd Pilot 3-Way, Atmospheric Vent',    ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 8,  cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts11-10',  mfr: 'Danfoss', model: 'PTS11-10',  description: 'Hyd Pilot 3-Way, Atmospheric Vent',    ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 8,  cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts11-12',  mfr: 'Danfoss', model: 'PTS11-12',  description: 'Hyd Pilot 3-Way, Atmospheric Vent',    ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 20, cavity: 'C-12-4',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts1-16',   mfr: 'Danfoss', model: 'PTS1-16',   description: 'Hyd Pilot 3-Way, Atmospheric Vent',    ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 35, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts11-16',  mfr: 'Danfoss', model: 'PTS11-16',  description: 'Hyd Pilot 3-Way, Atmospheric Vent',    ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 35, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts1-20',   mfr: 'Danfoss', model: 'PTS1-20',   description: 'Hyd Pilot 3-Way, Atmospheric Vent',    ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 70, cavity: 'SDC20-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts12-10',  mfr: 'Danfoss', model: 'PTS12-10',  description: 'Hyd Pilot 3-Way, Internal Drain',      ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 8,  cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts12-12',  mfr: 'Danfoss', model: 'PTS12-12',  description: 'Hyd Pilot 3-Way, Internal Drain',      ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 30, cavity: 'C-12-4',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts2-16',   mfr: 'Danfoss', model: 'PTS2-16',   description: 'Hyd Pilot 3-Way, Internal Drain',      ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 35, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts12-16',  mfr: 'Danfoss', model: 'PTS12-16',  description: 'Hyd Pilot 3-Way, Internal Drain',      ways: '3-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 35, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts3-10',   mfr: 'Danfoss', model: 'PTS3-10',   description: 'Hyd Pilot 3-Way NC, Internal Drain',   ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 8,  cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts13-10',  mfr: 'Danfoss', model: 'PTS13-10',  description: 'Hyd Pilot 3-Way NC, Internal Drain',   ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 8,  cavity: 'SDC10-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts13-12',  mfr: 'Danfoss', model: 'PTS13-12',  description: 'Hyd Pilot 3-Way NC, Internal Drain',   ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 30, cavity: 'C-12-4',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts3-16',   mfr: 'Danfoss', model: 'PTS3-16',   description: 'Hyd Pilot 3-Way NC, Internal Drain',   ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3000, maxGpm: 35, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts13-16',  mfr: 'Danfoss', model: 'PTS13-16',  description: 'Hyd Pilot 3-Way NC, Internal Drain',   ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 35, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-cp722-11',  mfr: 'Danfoss', model: 'CP722-11',  description: 'Hyd Pilot 3-Way NC, High Pressure',    ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 6500, maxGpm: 33, cavity: 'SDC16-4', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts9-8',    mfr: 'Danfoss', model: 'PTS9-8',    description: 'Hyd Pilot 3-Way, External Drain',      ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 4000, maxGpm: 5,  cavity: 'C-8-5S',  price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts9-10',   mfr: 'Danfoss', model: 'PTS9-10',   description: 'Hyd Pilot 3-Way, External Drain',      ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 4000, maxGpm: 10, cavity: 'SDC10-5', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts9-12',   mfr: 'Danfoss', model: 'PTS9-12',   description: 'Hyd Pilot 3-Way, External Drain',      ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 4000, maxGpm: 20, cavity: 'C-12-5S', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts9-16',   mfr: 'Danfoss', model: 'PTS9-16',   description: 'Hyd Pilot 3-Way, External Drain',      ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 4000, maxGpm: 40, cavity: 'C-16-5S', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-pts9-20',   mfr: 'Danfoss', model: 'PTS9-20',   description: 'Hyd Pilot 3-Way, External Drain',      ways: '3-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 4000, maxGpm: 60, cavity: 'C-20-5S', price: null, leadTimeDays: null, notes: '' },
  { id: 'dan-dv15',      mfr: 'Danfoss', model: 'DV15-P5-24-FD', description: 'Hyd Pilot 4-Way, Fan Drive Reverse', ways: '4-Way', defaultState: '', actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 3300, maxGpm: 18, cavity: 'NCS12/5', price: null, leadTimeDays: null, notes: 'Fan drive reversing circuit' },
  { id: 'dan-1sb10',     mfr: 'Danfoss', model: '1SB10',     description: 'Brake Sequence Valve, 3-Way',          ways: '3-Way', defaultState: '',               actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 2.6, cavity: 'A893',   price: null, leadTimeDays: null, notes: 'Brake release circuit' },
  { id: 'dan-1sb304',    mfr: 'Danfoss', model: '1SB304',    description: 'Brake Sequence Valve, 3-Way, Ext Drain', ways: '3-Way', defaultState: '',             actuation: 'Hydraulic Pilot', element: 'Spool', maxPsi: 5000, maxGpm: 8,  cavity: 'A5302',  price: null, leadTimeDays: null, notes: 'Brake release circuit' },

  // ── BUCHER — starter parts (expand from catalog) ─────────────────────────
  { id: 'buc-dcps-10g',  mfr: 'Bucher',  model: 'DCPS-10_G', description: 'Directional Cartridge Poppet, 2-Way NC', ways: '2-Way', defaultState: 'Normally Closed', actuation: 'Hydraulic Pilot', element: 'Poppet', maxPsi: 5000, maxGpm: null, cavity: 'SDC10', price: null, leadTimeDays: null, notes: 'Add specs from Bucher catalog' },
  { id: 'buc-dcps-10h',  mfr: 'Bucher',  model: 'DCPS-10_H', description: 'Directional Cartridge Poppet, 2-Way NO', ways: '2-Way', defaultState: 'Normally Open',   actuation: 'Hydraulic Pilot', element: 'Poppet', maxPsi: 5000, maxGpm: null, cavity: 'SDC10', price: null, leadTimeDays: null, notes: 'Add specs from Bucher catalog' },

  // ── PLACEHOLDER MANUFACTURERS — add parts as catalogs are reviewed ────────
  // Sun Hydraulics — TODO
  // HAWE Hydraulik — TODO
  // Argo-Hytos — TODO
  // Deltrol Fluid Products — TODO
  // NACHI America — TODO
];

export default PARTS;
