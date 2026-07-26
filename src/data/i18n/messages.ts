import type { LocalizedText } from '../../domain'

/**
 * UI string catalog (chrome text not tied to game content).
 *
 * Each entry must provide every supported locale. When a new locale is added
 * to LocaleKey, the compiler flags every message missing that translation.
 */
export const MESSAGES = {
  appTitle: { es: 'Selector de clases', en: 'Class selector' },
  appSubtitle: {
    es: 'Despliega cada línea para ver sus evoluciones y elige una clase.',
    en: 'Expand each line to see its evolutions and pick a class.',
  },
  statBonuses: { es: 'Atributos', en: 'Stats' },
  noStatBonuses: {
    es: 'Esta clase aún no define bonus de atributos.',
    en: 'This class has no stat bonuses defined yet.',
  },
  weapons: { es: 'Armas', en: 'Weapons' },
  signatureWeapon: { es: 'Arma característica', en: 'Signature weapon' },
  attacks: { es: 'Ataques', en: 'Attacks' },
  noAttacks: {
    es: 'Esta clase aún no aprende ataques.',
    en: 'This class does not learn any attacks yet.',
  },
  levelAbbr: { es: 'Nv', en: 'Lv' },
  line: { es: 'Línea', en: 'Line' },
  selectPrompt: {
    es: 'Selecciona una clase para ver sus bonus y ataques.',
    en: 'Select a class to view its stat bonuses and attacks.',
  },
  expand: { es: 'Desplegar', en: 'Expand' },
  collapse: { es: 'Colapsar', en: 'Collapse' },
  language: { es: 'Idioma', en: 'Language' },
  navClasses: { es: 'Clases', en: 'Classes' },
  navRules: { es: 'Reglas', en: 'Rules' },
} satisfies Record<string, LocalizedText>

export type MessageKey = keyof typeof MESSAGES
