import type { ClassWeaponry } from '../../domain'

/**
 * Weapon proficiency per class id (from design spreadsheet).
 * `signature` is the weapon that best defines the class (starred in the UI);
 * deduced where the sheet doesn't say — tweak freely here.
 */
export const CLASS_WEAPONS: Record<string, ClassWeaponry> = {
  // --- Mage line ---
  mage: { weapons: ['grimoire'], signature: 'grimoire' },
  archmage: { weapons: ['grimoire'], signature: 'grimoire' },
  shaman: { weapons: ['grimoire'], signature: 'grimoire' },
  pyromancer: { weapons: ['grimoire', 'dagger'], signature: 'grimoire' },
  cryomancer: { weapons: ['grimoire', 'dagger'], signature: 'grimoire' },
  electromancer: { weapons: ['grimoire', 'dagger'], signature: 'grimoire' },
  aeromancer: { weapons: ['grimoire', 'dagger'], signature: 'grimoire' },

  // --- Warlock line ---
  warlock: { weapons: ['grimoire'], signature: 'grimoire' },
  sorcerer: { weapons: ['grimoire'], signature: 'grimoire' },
  nucleomancer: { weapons: ['grimoire', 'dagger'], signature: 'grimoire' },
  psychomancer: { weapons: ['grimoire', 'dagger'], signature: 'grimoire' },
  omnimancer: { weapons: ['grimoire', 'dagger'], signature: 'grimoire' },

  // --- Healer line ---
  healer: { weapons: ['staff'], signature: 'staff' },
  cleric: { weapons: ['staff'], signature: 'staff' },
  sacromancer: { weapons: ['staff', 'grimoire'], signature: 'staff' },
  sage: { weapons: ['staff'], signature: 'staff' },
  heretic: { weapons: ['staff'], signature: 'staff' },

  // --- Thief line ---
  thief: { weapons: ['dagger'], signature: 'dagger' },
  assassin: { weapons: ['dagger'], signature: 'dagger' },
  umbramancer: { weapons: ['dagger', 'grimoire'], signature: 'grimoire' },
  ninja: { weapons: ['dagger', 'katana'], signature: 'dagger' },

  // --- Warrior line ---
  warrior: { weapons: ['sword', 'mace', 'bow'], signature: 'sword' },
  samurai: { weapons: ['sword'], signature: 'sword' },
  master_samurai: { weapons: ['sword', 'katana'], signature: 'katana' },
  barbarian: { weapons: ['mace'], signature: 'mace' },
  berserker: { weapons: ['mace', 'hammer'], signature: 'hammer' },
  gunslinger: { weapons: ['bow'], signature: 'bow' },
  sniper: { weapons: ['bow', 'crossbow'], signature: 'crossbow' },

  // --- Fighter line ---
  fighter: { weapons: ['fist'], signature: 'fist' },
  pugilist: { weapons: ['fist'], signature: 'fist' },
  monk: { weapons: ['fist'], signature: 'fist' },

  // --- Paladin line ---
  paladin: { weapons: ['spear'], signature: 'spear' },
  knight: { weapons: ['spear', 'shield'], signature: 'spear' },
  squire: { weapons: ['spear', 'shield'], signature: 'shield' },
  guardian: { weapons: ['spear', 'axe', 'shield'], signature: 'shield' },
  rider: { weapons: ['spear', 'sword'], signature: 'spear' },
  valkyrie: { weapons: ['spear', 'sword', 'staff'], signature: 'spear' },
  dark_paladin: { weapons: ['sword', 'rapier', 'shield'], signature: 'sword' },

  // --- Druid line ---
  druid: { weapons: ['grimoire', 'staff'], signature: 'grimoire' },
  summoner: { weapons: ['grimoire', 'staff', 'dagger'], signature: 'grimoire' },
  spiritualist: { weapons: ['grimoire', 'staff', 'dagger'], signature: 'grimoire' },
  necromancer: { weapons: ['grimoire', 'staff', 'dagger'], signature: 'grimoire' },
  scientist: { weapons: ['grimoire', 'staff', 'rapier'], signature: 'grimoire' },
  astromancer: { weapons: ['grimoire', 'staff', 'rapier'], signature: 'grimoire' },
  chronomancer: { weapons: ['grimoire', 'staff', 'rapier'], signature: 'grimoire' },

  // --- Captain line ---
  captain: { weapons: ['axe'], signature: 'axe' },
  commander: { weapons: ['axe', 'shield'], signature: 'axe' },
  general: { weapons: ['axe', 'hammer', 'shield'], signature: 'axe' },

  // --- Artist line ---
  artist: { weapons: ['rapier'], signature: 'rapier' },
  jester: { weapons: ['dagger', 'rapier'], signature: 'rapier' },
  bard: { weapons: ['dagger', 'rapier', 'mace'], signature: 'mace' },
  dancer: { weapons: ['dagger', 'katana', 'rapier'], signature: 'rapier' },
  charlatan: { weapons: ['rapier', 'mace'], signature: 'rapier' },
  magnate: { weapons: ['rapier', 'mace', 'crossbow'], signature: 'rapier' },

  // --- Explorer line ---
  explorer: { weapons: ['dagger', 'mace', 'bow'], signature: 'bow' },
  survivor: { weapons: ['dagger', 'mace', 'bow'], signature: 'bow' },
  apothecary: { weapons: ['dagger', 'mace', 'staff'], signature: 'mace' },
  hunter: { weapons: ['dagger', 'fist', 'bow'], signature: 'bow' },
}

/** Returns the weaponry of that class only — never merged with ancestors. */
export function weaponryFor(classId: string): ClassWeaponry | undefined {
  const entry = CLASS_WEAPONS[classId]
  return entry ? { ...entry, weapons: [...entry.weapons] } : undefined
}
