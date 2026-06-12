import type { ClassAffinities } from '../../domain'

/**
 * Damage affinities per class id (placeholder design, tweak freely).
 * Missing elements mean normal damage.
 *
 * Per-phase rules:
 *  - Phase 1: 1 weak + 1 resist
 *  - Phase 2: 1 weak + 2 resists
 *  - Phase 3: 1 weak + 2 nulls, or 1 weak + 1 resist + 1 absorb/reflect
 *
 * Within each evolution line, affinities share a common theme that escalates
 * with phase (same weakness family, resistances that branch together).
 */
export const CLASS_AFFINITIES: Record<string, ClassAffinities> = {
  // --- Mage line: fragile to blades; elemental mastery grows with phase ---
  mage: { slash: 'weak', fire: 'resist' },
  archmage: { slash: 'weak', fire: 'resist', ice: 'resist' },
  shaman: { slash: 'weak', thunder: 'resist', wind: 'resist' },
  pyromancer: { ice: 'weak', fire: 'absorb', slash: 'resist' },
  cryomancer: { fire: 'weak', ice: 'absorb', slash: 'resist' },
  electromancer: { slash: 'weak', thunder: 'null', wind: 'null' },
  aeromancer: { slash: 'weak', wind: 'absorb', thunder: 'resist' },

  // --- Warlock line: light hurts; dark/psychic/nuclear protect ---
  warlock: { light: 'weak', dark: 'resist' },
  sorcerer: { light: 'weak', dark: 'resist', psychic: 'resist' },
  nucleomancer: { light: 'weak', nuclear: 'null', dark: 'null' },
  psychomancer: { light: 'weak', psychic: 'reflect', dark: 'resist' },
  omnimancer: { light: 'weak', dark: 'reflect', psychic: 'resist' },

  // --- Healer line: vulnerable to darkness; light and faith protect ---
  healer: { dark: 'weak', light: 'resist' },
  cleric: { dark: 'weak', light: 'resist', blunt: 'resist' },
  sacromancer: { dark: 'weak', light: 'absorb', blunt: 'resist' },
  sage: { dark: 'weak', light: 'null', psychic: 'null' },
  heretic: { light: 'weak', dark: 'absorb', psychic: 'resist' },

  // --- Thief line: blunt hits hard; agility and shadow help ---
  thief: { blunt: 'weak', pierce: 'resist' },
  assassin: { blunt: 'weak', slash: 'resist', dark: 'resist' },
  umbramancer: { light: 'weak', dark: 'null', psychic: 'null' },
  ninja: { blunt: 'weak', pierce: 'reflect', slash: 'resist' },

  // --- Warrior line: mind magic hurts; physical weapons resist ---
  warrior: { psychic: 'weak', slash: 'resist' },
  samurai: { psychic: 'weak', slash: 'resist', pierce: 'resist' },
  master_samurai: { psychic: 'weak', slash: 'reflect', pierce: 'resist' },
  barbarian: { psychic: 'weak', blunt: 'resist', fire: 'resist' },
  berserker: { psychic: 'weak', blunt: 'null', fire: 'null' },
  gunslinger: { psychic: 'weak', pierce: 'resist', wind: 'resist' },
  sniper: { psychic: 'weak', pierce: 'null', wind: 'null' },

  // --- Fighter line: piercing breaks guard; fists endure ---
  fighter: { pierce: 'weak', blunt: 'resist' },
  pugilist: { pierce: 'weak', blunt: 'resist', thunder: 'resist' },
  monk: { dark: 'weak', blunt: 'reflect', light: 'resist' },

  // --- Paladin line: darkness is the foe; blades and holy wards ---
  paladin: { dark: 'weak', slash: 'resist' },
  knight: { dark: 'weak', slash: 'resist', pierce: 'resist' },
  squire: { dark: 'weak', pierce: 'null', blunt: 'null' },
  guardian: { dark: 'weak', slash: 'null', pierce: 'null' },
  rider: { dark: 'weak', pierce: 'resist', wind: 'resist' },
  valkyrie: { dark: 'weak', light: 'null', pierce: 'null' },
  dark_paladin: { light: 'weak', dark: 'absorb', slash: 'resist' },

  // --- Druid line: fire burns nature; occult forces shield ---
  druid: { fire: 'weak', psychic: 'resist' },
  summoner: { fire: 'weak', psychic: 'resist', dark: 'resist' },
  spiritualist: { fire: 'weak', psychic: 'null', dark: 'null' },
  necromancer: { light: 'weak', dark: 'null', ice: 'null' },
  scientist: { fire: 'weak', nuclear: 'resist', thunder: 'resist' },
  astromancer: { fire: 'weak', nuclear: 'reflect', psychic: 'resist' },
  chronomancer: { fire: 'weak', psychic: 'absorb', nuclear: 'resist' },

  // --- Captain line: ice slows the march; heavy weapons endure ---
  captain: { ice: 'weak', blunt: 'resist' },
  commander: { ice: 'weak', blunt: 'resist', slash: 'resist' },
  general: { ice: 'weak', blunt: 'null', slash: 'null' },

  // --- Artist line: blunt staggers performers; wit and charm shield ---
  artist: { blunt: 'weak', psychic: 'resist' },
  jester: { blunt: 'weak', psychic: 'resist', dark: 'resist' },
  bard: { blunt: 'weak', psychic: 'reflect', light: 'resist' },
  dancer: { blunt: 'weak', wind: 'null', pierce: 'null' },
  charlatan: { blunt: 'weak', psychic: 'resist', thunder: 'resist' },
  magnate: { blunt: 'weak', dark: 'absorb', pierce: 'resist' },

  // --- Explorer line: darkness in the wild; elements of survival ---
  explorer: { dark: 'weak', wind: 'resist' },
  survivor: { dark: 'weak', fire: 'resist', ice: 'resist' },
  apothecary: { dark: 'weak', nuclear: 'absorb', fire: 'resist' },
  hunter: { dark: 'weak', pierce: 'null', wind: 'null' },
}

/** Returns the affinities of that class only — never merged with ancestors. */
export function affinitiesFor(classId: string): ClassAffinities {
  const entry = CLASS_AFFINITIES[classId]
  return entry ? { ...entry } : {}
}
