import type { LocalizedText } from '../i18n/locale.types'

/**
 * Attack element/type. Determines the icon shown in the UI.
 * Decoupled from classes: many attacks can share the same element.
 */
export type AttackElement =
  | 'blunt'
  | 'slash'
  | 'pierce'
  | 'fire'
  | 'ice'
  | 'thunder'
  | 'wind'
  | 'nuclear'
  | 'psychic'
  | 'light'
  | 'dark'
  | 'almighty'
  | 'status'
  | 'heal'
  | 'support'

/** Resource consumed by an attack. */
export type AttackCostKind = 'mp' | 'hp_percent' | 'money'

export interface AttackCost {
  kind: AttackCostKind
  amount: number
}

/**
 * Attacks live in a central registry and are referenced by `id`.
 * Fully decoupled from the classes that learn them.
 */
export interface Attack {
  id: string
  name: LocalizedText
  description: LocalizedText
  element: AttackElement
  cost: AttackCost
}

export interface AttackElementMeta {
  key: AttackElement
  label: LocalizedText
}

export const ATTACK_ELEMENTS: readonly AttackElementMeta[] = [
  { key: 'blunt', label: { es: 'Contundente', en: 'Blunt' } },
  { key: 'slash', label: { es: 'Cortante', en: 'Slashing' } },
  { key: 'pierce', label: { es: 'Perforante', en: 'Piercing' } },
  { key: 'fire', label: { es: 'Fuego', en: 'Fire' } },
  { key: 'ice', label: { es: 'Hielo', en: 'Ice' } },
  { key: 'thunder', label: { es: 'Trueno', en: 'Thunder' } },
  { key: 'wind', label: { es: 'Viento', en: 'Wind' } },
  { key: 'nuclear', label: { es: 'Nuclear', en: 'Nuclear' } },
  { key: 'psychic', label: { es: 'Psíquico', en: 'Psychic' } },
  { key: 'light', label: { es: 'Luz', en: 'Light' } },
  { key: 'dark', label: { es: 'Oscuridad', en: 'Dark' } },
  { key: 'almighty', label: { es: 'Todopoderoso', en: 'Almighty' } },
  { key: 'status', label: { es: 'Estados alterados', en: 'Status' } },
  { key: 'heal', label: { es: 'Cura', en: 'Heal' } },
  { key: 'support', label: { es: 'Apoyo', en: 'Support' } },
] as const
