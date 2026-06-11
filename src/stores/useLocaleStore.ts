import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  DEFAULT_LOCALE,
  isLocaleKey,
  type LocaleKey,
} from '../domain'

const STORAGE_KEY = 'locale'

function readStored(): LocaleKey | undefined {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return isLocaleKey(stored) ? stored : undefined
  } catch {
    return undefined
  }
}

function detectFromNavigator(): LocaleKey | undefined {
  const lang = navigator.language?.slice(0, 2)
  return isLocaleKey(lang) ? lang : undefined
}

function detectInitialLocale(): LocaleKey {
  return readStored() ?? detectFromNavigator() ?? DEFAULT_LOCALE
}

/** Global locale state, persisted across reloads. */
export const useLocaleStore = defineStore('locale', () => {
  const locale = ref<LocaleKey>(detectInitialLocale())

  function setLocale(next: LocaleKey): void {
    locale.value = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore persistence errors (e.g. storage disabled).
    }
  }

  return { locale, setLocale }
})
