<script setup lang="ts">
import { useI18n } from '../../composables/useI18n'

/**
 * Decoupled language selector: it only talks to the i18n composable (locale
 * state + available locales). It knows nothing about classes or attacks, so it
 * can be dropped anywhere in the app.
 */
const { locale, locales, setLocale, tm } = useI18n()
</script>

<template>
  <div class="lang" role="group" :aria-label="tm('language')">
    <button
      v-for="option in locales"
      :key="option.key"
      type="button"
      class="lang__option"
      :class="{ 'is-active': option.key === locale }"
      :aria-pressed="option.key === locale"
      @click="setLocale(option.key)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style scoped>
.lang {
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.lang__option {
  border: none;
  background: transparent;
  color: var(--text-muted);
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.lang__option:hover {
  color: var(--text);
}

.lang__option.is-active {
  background: var(--accent-soft);
  color: var(--accent);
}
</style>
