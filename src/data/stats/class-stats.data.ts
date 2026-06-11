import type { StatBonuses } from '../../domain'
import { EMPTY_STATS, sb } from './build-stat-bonuses'

/**
 * Stat bonuses per class id (from design spreadsheet).
 * Order: STR, INT, WIS, RES, CON, WILL, AGI, LCK — scale 0–8.
 */
export const CLASS_STATS: Record<string, StatBonuses> = {
  // --- Mage line ---
  mage: sb(0, 2, 0, 0, 1, 0, 0, 2),
  archmage: sb(0, 5, 1, 0, 2, 1, 0, 2),
  shaman: sb(1, 4, 0, 1, 2, 0, 0, 3),
  pyromancer: sb(8, 2, 0, 0, 3, 4, 0, 5),
  cryomancer: sb(8, 5, 0, 0, 4, 2, 0, 3),
  electromancer: sb(3, 8, 2, 0, 4, 0, 0, 5),
  aeromancer: sb(1, 8, 0, 1, 3, 3, 0, 6),

  // --- Warlock line ---
  warlock: sb(0, 0, 2, 0, 0, 2, 0, 1),
  sorcerer: sb(0, 2, 5, 0, 0, 3, 0, 1),
  nucleomancer: sb(0, 4, 8, 1, 0, 6, 0, 3),
  psychomancer: sb(0, 2, 8, 0, 0, 7, 0, 5),
  omnimancer: sb(6, 6, 0, 0, 0, 6, 0, 4),

  // --- Healer line ---
  healer: sb(0, 0, 2, 0, 0, 1, 0, 2),
  cleric: sb(0, 1, 5, 1, 1, 1, 0, 2),
  sacromancer: sb(4, 0, 7, 1, 2, 2, 0, 6),
  sage: sb(0, 4, 8, 1, 1, 1, 0, 7),
  heretic: sb(3, 0, 7, 2, 7, 2, 0, 1),

  // --- Thief line ---
  thief: sb(1, 0, 0, 1, 0, 0, 2, 1),
  assassin: sb(2, 0, 3, 0, 0, 0, 5, 1),
  umbramancer: sb(3, 3, 8, 0, 0, 0, 6, 2),
  ninja: sb(6, 0, 3, 0, 0, 0, 8, 5),

  // --- Warrior line ---
  warrior: sb(2, 0, 0, 1, 1, 0, 1, 0),
  samurai: sb(5, 0, 0, 1, 1, 0, 4, 0),
  master_samurai: sb(8, 0, 0, 5, 2, 0, 7, 0),
  barbarian: sb(5, 0, 0, 3, 1, 1, 1, 0),
  berserker: sb(8, 0, 0, 6, 5, 2, 1, 0),
  gunslinger: sb(4, 1, 1, 1, 1, 1, 1, 1),
  sniper: sb(8, 3, 1, 1, 1, 2, 1, 5),

  // --- Fighter line ---
  fighter: sb(2, 0, 0, 1, 0, 1, 1, 0),
  pugilist: sb(4, 0, 1, 2, 0, 2, 2, 0),
  monk: sb(8, 0, 1, 3, 0, 5, 5, 0),

  // --- Paladin line ---
  paladin: sb(1, 1, 1, 2, 0, 0, 0, 0),
  knight: sb(2, 1, 2, 4, 1, 1, 0, 0),
  squire: sb(3, 1, 2, 8, 4, 4, 0, 0),
  guardian: sb(2, 2, 2, 4, 8, 4, 0, 0),
  rider: sb(2, 2, 1, 2, 0, 4, 0, 0),
  valkyrie: sb(2, 2, 1, 4, 4, 8, 0, 1),
  dark_paladin: sb(3, 4, 3, 7, 0, 5, 0, 0),

  // --- Druid line ---
  druid: sb(0, 0, 2, 0, 0, 2, 0, 1),
  summoner: sb(0, 0, 4, 0, 0, 3, 0, 4),
  spiritualist: sb(0, 5, 5, 0, 0, 7, 1, 4),
  necromancer: sb(0, 0, 7, 0, 0, 3, 0, 4),
  scientist: sb(0, 0, 4, 0, 1, 5, 0, 1),
  astromancer: sb(0, 0, 5, 2, 1, 8, 0, 6),
  chronomancer: sb(0, 0, 4, 0, 7, 8, 2, 1),

  // --- Captain line ---
  captain: sb(2, 0, 0, 2, 1, 0, 0, 0),
  commander: sb(3, 0, 0, 5, 3, 0, 0, 0),
  general: sb(5, 3, 0, 8, 6, 0, 0, 0),

  // --- Artist line ---
  artist: sb(0, 0, 0, 1, 1, 1, 0, 2),
  jester: sb(0, 0, 2, 1, 4, 2, 0, 2),
  bard: sb(0, 0, 6, 1, 4, 6, 0, 5),
  dancer: sb(0, 0, 2, 4, 6, 4, 4, 2),
  charlatan: sb(0, 0, 0, 1, 1, 1, 3, 5),
  magnate: sb(2, 0, 0, 3, 3, 3, 3, 8),

  // --- Explorer line ---
  explorer: sb(1, 1, 0, 0, 2, 0, 1, 0),
  survivor: sb(2, 2, 0, 0, 5, 0, 2, 0),
  apothecary: sb(4, 7, 0, 1, 8, 0, 2, 0),
  hunter: sb(7, 2, 0, 3, 5, 0, 2, 3),
}

/** Returns a copy of that class's bonuses only — never merged with ancestors. */
export function statsFor(classId: string): StatBonuses {
  const stats = CLASS_STATS[classId]
  return stats ? { ...stats } : { ...EMPTY_STATS }
}
