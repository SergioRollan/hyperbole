<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from '../../composables/useI18n'
import LanguageSelector from '../i18n/LanguageSelector.vue'

const { tm } = useI18n()
</script>

<template>
  <nav class="app-nav">
    <div class="app-nav__inner">
      <div class="app-nav__links">
        <RouterLink class="app-nav__link" to="/">{{ tm('navClasses') }}</RouterLink>
        <RouterLink class="app-nav__link" to="/rules">{{ tm('navRules') }}</RouterLink>
      </div>
      <LanguageSelector />
    </div>
  </nav>
</template>

<style scoped>
.app-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.app-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  flex-wrap: wrap;
}

.app-nav__links {
  display: flex;
  gap: 0.5rem;
}

.app-nav__link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
  transition: color 0.15s ease, background-color 0.15s ease;
}

.app-nav__link:hover {
  color: var(--text);
  background: var(--surface-hover);
}

.app-nav__link.router-link-active {
  color: var(--accent);
  background: var(--accent-soft);
}
</style>
