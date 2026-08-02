import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import {
  LOCALES,
  resolveLocalized,
  type LocaleKey,
  type LocalizedText,
} from '../domain'
import { MESSAGES, type MessageKey } from '../data/i18n/messages'
import { useLocaleStore } from '../stores/useLocaleStore'

/**
 * Translation API. Single point the UI uses to render localized content,
 * keeping components decoupled from the locale source and message catalog.
 */
export function useI18n() {
  const store = useLocaleStore()
  const { locale } = storeToRefs(store)

  /** Resolve a piece of game content (class/attack name, description...). */
  const t = (text: LocalizedText | string): string =>
    resolveLocalized(text, locale.value)

  /** Resolve a UI message by key. */
  const tm = (key: MessageKey): string => resolveLocalized(MESSAGES[key], locale.value)

  /** "Línea Paladín" (es) / "Paladin line" (en). */
  const formatLineLabel = (lineName: LocalizedText): string => {
    const name = resolveLocalized(lineName, locale.value)
    if (locale.value === 'en') return `${name} ${resolveLocalized(MESSAGES.line, locale.value)}`
    return `${resolveLocalized(MESSAGES.line, locale.value)} ${name}`
  }

  return {
    locale,
    locales: LOCALES,
    setLocale: (next: LocaleKey) => store.setLocale(next),
    t,
    tm,
    formatLineLabel,
    isActive: computed(() => (key: LocaleKey) => key === locale.value),
  }
}
