import type { AttackElement } from '../attacks/attack.types'
import type { LocalizedText } from '../i18n/locale.types'

/** Physical damage dealt by a weapon's basic attack (subset of AttackElement). */
export type PhysicalDamageType = Extract<AttackElement, 'blunt' | 'slash' | 'pierce'>

export type WeaponId =
  | 'grimoire'
  | 'staff'
  | 'shield'
  | 'mace'
  | 'fist'
  | 'hammer'
  | 'axe'
  | 'sword'
  | 'katana'
  | 'dagger'
  | 'spear'
  | 'rapier'
  | 'bow'
  | 'crossbow'

/**
 * Weapons live in a central registry and are referenced by `id`,
 * fully decoupled from the classes that wield them.
 */
export interface Weapon {
  id: WeaponId
  name: LocalizedText
  /** Damage type of the weapon's basic attack. */
  damageType: PhysicalDamageType
  /** Weapons whose basic attacks deal the least damage (shown dimmed). */
  lowDamage: boolean
}

/** Weapon proficiency of a class. */
export interface ClassWeaponry {
  /** Weapons the class can use. */
  weapons: WeaponId[]
  /** The weapon that best defines the class (starred in the UI). */
  signature: WeaponId
}
