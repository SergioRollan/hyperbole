import type { Weapon, WeaponId } from '../../domain'

/**
 * Central weapon registry (from design spreadsheet).
 * Grimoire, staff, and shield deal the least basic-attack damage (lowDamage).
 */
export const WEAPONS: Record<WeaponId, Weapon> = {
  // --- Blunt, low damage ---
  grimoire: {
    id: 'grimoire',
    name: { es: 'Grimorio', en: 'Grimoire' },
    damageType: 'blunt',
    lowDamage: true,
  },
  staff: {
    id: 'staff',
    name: { es: 'Bastón', en: 'Staff' },
    damageType: 'blunt',
    lowDamage: true,
  },
  shield: {
    id: 'shield',
    name: { es: 'Escudo', en: 'Shield' },
    damageType: 'blunt',
    lowDamage: true,
  },

  // --- Blunt ---
  mace: {
    id: 'mace',
    name: { es: 'Maza', en: 'Mace' },
    damageType: 'blunt',
    lowDamage: false,
  },
  fist: {
    id: 'fist',
    name: { es: 'Puño', en: 'Fist' },
    damageType: 'blunt',
    lowDamage: false,
  },
  hammer: {
    id: 'hammer',
    name: { es: 'Martillo', en: 'Hammer' },
    damageType: 'blunt',
    lowDamage: false,
  },

  // --- Slash ---
  axe: {
    id: 'axe',
    name: { es: 'Hacha', en: 'Axe' },
    damageType: 'slash',
    lowDamage: false,
  },
  sword: {
    id: 'sword',
    name: { es: 'Espada', en: 'Sword' },
    damageType: 'slash',
    lowDamage: false,
  },
  katana: {
    id: 'katana',
    name: { es: 'Katana', en: 'Katana' },
    damageType: 'slash',
    lowDamage: false,
  },
  dagger: {
    id: 'dagger',
    name: { es: 'Daga', en: 'Dagger' },
    damageType: 'slash',
    lowDamage: false,
  },

  // --- Pierce ---
  spear: {
    id: 'spear',
    name: { es: 'Lanza', en: 'Spear' },
    damageType: 'pierce',
    lowDamage: false,
  },
  rapier: {
    id: 'rapier',
    name: { es: 'Florete', en: 'Rapier' },
    damageType: 'pierce',
    lowDamage: false,
  },
  bow: {
    id: 'bow',
    name: { es: 'Arco', en: 'Bow' },
    damageType: 'pierce',
    lowDamage: false,
  },
  crossbow: {
    id: 'crossbow',
    name: { es: 'Ballesta', en: 'Crossbow' },
    damageType: 'pierce',
    lowDamage: false,
  },
}

export function weaponById(id: WeaponId): Weapon {
  return WEAPONS[id]
}
