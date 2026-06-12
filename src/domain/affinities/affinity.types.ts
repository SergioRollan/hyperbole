import type { AttackElement } from '../attacks/attack.types'
import type { LocalizedText } from '../i18n/locale.types'

/**
 * Damage elements a class can have an affinity to.
 * Excludes non-damage elements (status/heal/support) and almighty
 * (which by design cannot be resisted).
 */
export type DamageElement = Exclude<AttackElement, 'status' | 'heal' | 'support' | 'almighty'>

/** Canonical column order for the affinity table. */
export const DAMAGE_ELEMENTS: readonly DamageElement[] = [
  'blunt',
  'slash',
  'pierce',
  'fire',
  'ice',
  'thunder',
  'wind',
  'nuclear',
  'psychic',
  'light',
  'dark',
] as const

/** How a class reacts to incoming damage of an element. */
export type AffinityLevel = 'normal' | 'weak' | 'resist' | 'null' | 'absorb' | 'reflect'

/** Short labels shown in the affinity table. */
export const AFFINITY_LABELS: Record<AffinityLevel, LocalizedText> = {
  normal: { es: '·', en: '·' },
  weak: { es: 'Deb', en: 'Wk' },
  resist: { es: 'Res', en: 'Res' },
  null: { es: 'Nul', en: 'Null' },
  absorb: { es: 'Abs', en: 'Abs' },
  reflect: { es: 'Ref', en: 'Ref' },
}

/** Affinities of a class. Missing elements mean normal damage. */
export type ClassAffinities = Partial<Record<DamageElement, AffinityLevel>>
