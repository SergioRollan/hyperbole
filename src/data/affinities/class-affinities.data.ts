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
  mage: { slash: 'weak', ice: 'resist' },
  archmage: { slash: 'weak', fire: 'resist', ice: 'resist' },
  shaman: { slash: 'weak', thunder: 'resist', wind: 'resist' },
  pyromancer: { ice: 'weak', fire: 'absorb', nuclear: 'resist' },
  cryomancer: { fire: 'weak', ice: 'absorb', psychic: 'resist' },
  electromancer: { wind: 'weak', thunder: 'absorb', nuclear: 'resist' },
  aeromancer: { thunder: 'weak', wind: 'absorb', psychic: 'resist' },

  // --- Warlock line: light hurts; dark/psychic/nuclear protect ---
  warlock: { light: 'weak', dark: 'resist' },
  sorcerer: { light: 'weak', nuclear: 'resist', psychic: 'resist' },
  nucleomancer: { light: 'weak', nuclear: 'absorb', dark: 'resist' },
  psychomancer: { light: 'weak', psychic: 'absorb', dark: 'resist' },
  omnimancer: { light: 'weak', pierce: 'resist', nuclear: 'resist', psychic: 'resist' },

  // --- Healer line: vulnerable to darkness; light and faith protect ---
  healer: { dark: 'weak', light: 'resist' },
  cleric: { dark: 'weak', light: 'resist', fire: 'resist' },
  sacromancer: { dark: 'weak', light: 'absorb', fire: 'resist' },
  sage: { dark: 'weak', light: 'null', fire: 'resist' },
  heretic: { slash: 'weak', light: 'resist', dark: 'resist', fire: 'resist' },

  // --- Thief line: blunt hits hard; agility and shadow help ---
  thief: { light: 'weak', wind: 'resist' },
  assassin: { light: 'weak', wind: 'resist', dark: 'resist' },
  umbramancer: { light: 'weak', dark: 'absorb', wind: 'resist' },
  ninja: { light: 'weak', wind: 'reflect', dark: 'resist' },

  // --- Warrior line: mind magic hurts; physical weapons resist ---
  warrior: { psychic: 'weak', slash: 'resist' },
  samurai: { psychic: 'weak', slash: 'null' },
  master_samurai: { psychic: 'weak', slash: 'reflect', wind: 'resist' },
  barbarian: { psychic: 'weak', blunt: 'null' },
  berserker: { psychic: 'weak', blunt: 'reflect', fire: 'resist' },
  gunslinger: { psychic: 'weak', pierce: 'null' },
  sniper: { psychic: 'weak', pierce: 'reflect', light: 'resist' },

  // --- Fighter line: piercing breaks guard; fists endure ---
  fighter: { pierce: 'weak', blunt: 'resist' },
  pugilist: { pierce: 'weak', blunt: 'resist', slash: 'resist' },
  monk: { pierce: 'weak', blunt: 'resist', slash: 'null', thunder: 'resist' },

  // --- Paladin line: darkness is the foe; blades and holy wards ---
  paladin: { dark: 'weak', blunt: 'resist' },
  knight: { dark: 'weak', blunt: 'resist', pierce: 'resist' },
  squire: { dark: 'weak', pierce: 'null', blunt: 'null' },
  guardian: { dark: 'weak', slash: 'resist', pierce: 'resist', blunt: 'resist' },
  rider: { dark: 'weak', blunt: 'resist', light: 'resist' },
  valkyrie: { dark: 'weak', light: 'reflect', blunt: 'resist' },
  dark_paladin: { light: 'weak', dark: 'reflect', blunt: 'resist' },

  // --- Druid line: fire burns nature; occult forces shield ---
  druid: { nuclear: 'weak', psychic: 'resist' },
  summoner: { nuclear: 'weak', psychic: 'resist', dark: 'resist' },
  spiritualist: { nuclear: 'weak', fire: 'null', wind: 'null' },
  necromancer: { nuclear: 'weak', dark: 'null', psychic: 'null' },
  scientist: { ice: 'weak', psychic: 'resist', nuclear: 'resist' },
  astromancer: { ice: 'weak', psychic: 'resist', nuclear: 'reflect' },
  chronomancer: { ice: 'weak', psychic: 'reflect', nuclear: 'resist' },

  // --- Captain line: ice slows the march; heavy weapons endure ---
  captain: { thunder: 'weak', ice: 'resist' },
  commander: { thunder: 'weak', ice: 'resist', slash: 'resist' },
  general: { thunder: 'weak', ice: 'null', slash: 'resist' },

  // --- Artist line: blunt staggers performers; wit and charm shield ---
  artist: { blunt: 'weak', slash: 'resist' },
  jester: { blunt: 'weak', slash: 'resist', dark: 'resist' },
  bard: { blunt: 'weak', thunder: 'reflect', slash: 'resist'},
  dancer: { blunt: 'weak', slash: 'reflect', wind: 'resist' },
  charlatan: { wind: 'weak', fire: 'resist', slash: 'resist' },
  trickster: { wind: 'weak', thunder: 'resist', fire: 'resist', dark: 'resist' },
  magnate: { wind: 'weak', slash: 'resist', fire: 'reflect' },

  // --- Explorer line: darkness in the wild; elements of survival ---
  explorer: { fire: 'weak', thunder: 'resist' },
  survivor: { fire: 'weak', thunder: 'resist' },
  apothecary: { fire: 'weak', nuclear: 'null', thunder: 'null' },
  hunter: { fire: 'weak', ice: 'reflect', thunder: 'resist' },

  protagonist: {
    blunt: 'resist',
    slash: 'resist',
    pierce: 'resist',
    light: 'null',
    dark: 'null',
  },
}

/** Returns the affinities of that class only — never merged with ancestors. */
export function affinitiesFor(classId: string): ClassAffinities {
  const entry = CLASS_AFFINITIES[classId]
  return entry ? { ...entry } : {}
}
