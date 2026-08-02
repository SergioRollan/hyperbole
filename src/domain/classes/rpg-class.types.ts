import type { LocalizedText } from '../i18n/locale.types'

/**
 * Class-to-attack link. The ONLY way a class references an attack (by id),
 * keeping attacks fully decoupled.
 */
export interface LearnedAttack {
  attackId: string
  /** Level at which the class learns the attack. */
  level: number
}

/**
 * Evolution tree node. A class may evolve into 0..n classes, so lines can
 * have 1, 2, or 3 phases (variable depth).
 */
export interface RpgClass {
  id: string
  name: LocalizedText
  attacks: LearnedAttack[]
  evolutions: RpgClass[]
  phase?: number
}
