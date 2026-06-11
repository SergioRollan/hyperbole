import { DEFAULT_LOCALE, type LocaleKey, type LocalizedText } from './locale.types'

function isLocalizedText(value: unknown): value is LocalizedText {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Resolves a LocalizedText to a concrete string for the given locale.
 * Falls back to the default locale, then to any available translation.
 *
 * Plain strings are returned as-is (legacy / HMR-safe) — never iterate them
 * with Object.values, which would split into individual characters.
 */
export function resolveLocalized(text: LocalizedText | string, locale: LocaleKey): string {
  if (typeof text === 'string') return text

  if (!isLocalizedText(text)) return ''

  return (
    text[locale] ??
    text[DEFAULT_LOCALE] ??
    Object.values(text).find((value): value is string => typeof value === 'string') ??
    ''
  )
}
