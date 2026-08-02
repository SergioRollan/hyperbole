import type { StatBonuses } from '../../domain'
import { EMPTY_STATS, sb } from './build-stat-bonuses'

/**
 * Stat bonuses per class id (from design spreadsheet).
 * Order: STR, INT, WIS, RES, CON, WILL, AGI, LCK — scale 0–8.
 */
export const CLASS_STATS: Record<string, StatBonuses> = {
  // --- Mage line ---
  mage: sb(0, 2, 0, 0, 1, 0, 0, 2, 132, 192),
  archmage: sb(0, 5, 1, 0, 2, 1, 0, 2, 314, 473),
  shaman: sb(1, 4, 0, 1, 2, 0, 0, 3, 321, 465),
  pyromancer: sb(0, 8, 2, 0, 3, 4, 0, 5, 467, 940),
  cryomancer: sb(0, 8, 5, 0, 4, 2, 0, 3, 483, 920),
  electromancer: sb(3, 8, 2, 0, 4, 0, 0, 5, 500, 900),
  aeromancer: sb(1, 8, 0, 1, 3, 3, 0, 6, 496, 905),

  // --- Warlock line ---
  warlock: sb(0, 0, 2, 0, 0, 2, 0, 1, 139, 183),
  sorcerer: sb(0, 2, 5, 0, 0, 3, 0, 1, 333, 450),
  nucleomancer: sb(0, 4, 8, 1, 0, 6, 0, 3, 516, 881),
  psychomancer: sb(0, 2, 8, 0, 0, 7, 0, 5, 508, 890),
  omnimancer: sb(0, 6, 6, 0, 0, 6, 0, 4, 461, 947),

  // --- Healer line ---
  healer: sb(0, 0, 2, 0, 0, 1, 0, 2, 150, 170),
  cleric: sb(0, 1, 5, 1, 1, 1, 0, 2, 346, 435),
  sacromancer: sb(0, 4, 7, 1, 2, 2, 0, 6, 521, 875),
  sage: sb(0, 4, 8, 1, 1, 1, 0, 7, 542, 850),
  heretic: sb(0, 3, 7, 2, 7, 2, 0, 1, 555, 834),

  // --- Thief line ---
  thief: sb(1, 0, 0, 1, 0, 0, 2, 1, 181, 133),
  assassin: sb(2, 0, 3, 0, 0, 0, 5, 1, 422, 344),
  umbramancer: sb(3, 3, 8, 0, 0, 0, 6, 2, 549, 841),
  ninja: sb(6, 0, 3, 0, 0, 0, 8, 5, 766, 581),

  // --- Warrior line ---
  warrior: sb(2, 0, 0, 1, 1, 0, 1, 0, 236, 67),
  samurai: sb(5, 0, 0, 1, 1, 0, 4, 0, 458, 300),
  master_samurai: sb(8, 0, 0, 5, 2, 0, 7, 0, 857, 472),
  barbarian: sb(5, 0, 0, 3, 1, 1, 1, 0, 499, 251),
  berserker: sb(8, 0, 0, 6, 5, 2, 1, 0, 915, 402),
  gunslinger: sb(4, 1, 1, 1, 1, 1, 1, 1, 415, 352),
  sniper: sb(8, 3, 1, 1, 1, 2, 1, 5, 820, 516),

  // --- Fighter line ---
  fighter: sb(2, 0, 0, 1, 0, 1, 1, 0, 252, 48),
  pugilist: sb(4, 0, 1, 2, 0, 2, 2, 0, 555, 184),
  monk: sb(8, 0, 1, 3, 0, 5, 5, 0, 990, 312),

  // --- Paladin line ---
  paladin: sb(1, 1, 1, 2, 0, 0, 0, 0, 225, 80),
  knight: sb(2, 1, 2, 4, 1, 1, 0, 0, 484, 269),
  squire: sb(3, 1, 2, 8, 4, 4, 0, 0, 943, 368),
  guardian: sb(2, 2, 2, 4, 8, 4, 0, 0, 905, 414),
  rider: sb(2, 2, 1, 2, 0, 4, 0, 0, 467, 290),
  valkyrie: sb(2, 2, 1, 4, 4, 8, 0, 1, 828, 506),
  dark_paladin: sb(3, 4, 3, 7, 0, 5, 0, 0, 792, 550),

  // --- Druid line ---
  druid: sb(0, 0, 2, 0, 0, 2, 0, 1, 128, 196),
  summoner: sb(0, 0, 4, 0, 0, 3, 0, 4, 340, 442),
  spiritualist: sb(0, 5, 5, 1, 0, 5, 1, 5, 444, 967),
  necromancer: sb(0, 0, 7, 0, 0, 3, 0, 4, 546, 845),
  scientist: sb(0, 0, 4, 0, 1, 5, 0, 1, 301, 489),
  astromancer: sb(0, 0, 5, 2, 1, 8, 0, 6, 471, 935),
  chronomancer: sb(0, 0, 4, 0, 7, 8, 2, 1, 430, 984),

  // --- Captain line ---
  captain: sb(2, 0, 0, 2, 1, 0, 0, 0, 170, 146),
  commander: sb(3, 0, 0, 5, 3, 0, 0, 0, 404, 365),
  general: sb(5, 3, 0, 8, 6, 0, 0, 0, 808, 530),

  // --- Artist line ---
  artist: sb(0, 0, 0, 1, 1, 1, 0, 2, 164, 153),
  jester: sb(0, 0, 2, 1, 4, 2, 0, 2, 399, 371),
  bard: sb(0, 0, 6, 1, 4, 6, 0, 5, 666, 701),
  dancer: sb(0, 0, 2, 4, 6, 4, 4, 2, 693, 668),
  charlatan: sb(0, 0, 0, 1, 1, 1, 3, 5, 415, 352),
  trickster: sb(2, 2, 1, 2, 2, 2, 4, 8, 724, 631),
  magnate: sb(5, 0, 0, 1, 3, 3, 3, 7, 777, 568),

  // --- Explorer line ---
  explorer: sb(1, 1, 0, 0, 2, 0, 1, 0, 210, 98),
  survivor: sb(2, 2, 0, 0, 5, 0, 2, 0, 513, 234),
  apothecary: sb(4, 7, 0, 1, 8, 0, 2, 0, 643, 728),
  hunter: sb(7, 2, 0, 3, 5, 0, 2, 3, 689, 673),

  // --- Protagonist line ---
  protagonist: sb(7, 7, 7, 6, 6, 6, 6, 5, 930, 820),
}

/** Returns a copy of that class's bonuses only — never merged with ancestors. */
export function statsFor(classId: string): StatBonuses {
  const stats = CLASS_STATS[classId]
  return stats ? { ...stats } : { ...EMPTY_STATS }
}
