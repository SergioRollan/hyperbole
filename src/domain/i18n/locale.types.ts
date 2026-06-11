/**
 * Supported locale keys.
 *
 * To add a new language:
 *   1. Add its key to this union (e.g. 'fr').
 *   2. Add an entry to LOCALES below.
 *   3. The compiler will then force you to provide that language for every
 *      LocalizedText in the data (class/attack names, descriptions, labels)
 *      and in the UI message catalog (src/data/i18n/messages.ts).
 */
export type LocaleKey = 'es' | 'en'

/** A piece of text translated into every supported locale. */
export type LocalizedText = Record<LocaleKey, string>

export interface LocaleMeta {
  key: LocaleKey
  /** Native display name shown in the language selector. */
  label: string
}

export const LOCALES: readonly LocaleMeta[] = [
  { key: 'es', label: 'Español' },
  { key: 'en', label: 'English' },
] as const

/** Locale used as fallback when a translation is missing. */
export const DEFAULT_LOCALE: LocaleKey = 'es'

export function isLocaleKey(value: unknown): value is LocaleKey {
  return (
    typeof value === 'string' && LOCALES.some((locale) => locale.key === value)
  )
}
