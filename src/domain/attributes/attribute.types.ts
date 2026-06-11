import type { LocalizedText } from '../i18n/locale.types'

export type AttributeKey =
  | 'STR'
  | 'INT'
  | 'WIS'
  | 'RES'
  | 'CON'
  | 'WILL'
  | 'AGI'
  | 'LCK'

export interface AttributeMeta {
  key: AttributeKey
  /** Long display name for the UI (localized). */
  label: LocalizedText
  /** Short abbreviation shown in the stat list (localized). */
  abbr: LocalizedText
}

export const ATTRIBUTES: readonly AttributeMeta[] = [
  { key: 'STR', label: { es: 'Fuerza', en: 'Strength' }, abbr: { es: 'FUE', en: 'STR' } },
  { key: 'INT', label: { es: 'Inteligencia', en: 'Intelligence' }, abbr: { es: 'INT', en: 'INT' } },
  { key: 'WIS', label: { es: 'Sabiduría', en: 'Wisdom' }, abbr: { es: 'SAB', en: 'WIS' } },
  { key: 'RES', label: { es: 'Resistencia', en: 'Resistance' }, abbr: { es: 'RES', en: 'RES' } },
  { key: 'CON', label: { es: 'Constitución', en: 'Constitution' }, abbr: { es: 'CON', en: 'CON' } },
  { key: 'WILL', label: { es: 'Voluntad', en: 'Will' }, abbr: { es: 'VOL', en: 'WILL' } },
  { key: 'AGI', label: { es: 'Agilidad', en: 'Agility' }, abbr: { es: 'AG', en: 'AGI' } },
  { key: 'LCK', label: { es: 'Suerte', en: 'Luck' }, abbr: { es: 'SUE', en: 'LCK' } },
] as const

/** Stat bonuses granted by a class (all eight attributes, scale 0–8). */
export type StatBonuses = Record<AttributeKey, number>
