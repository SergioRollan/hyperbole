<script setup lang="ts">
import { COMBAT_RULES } from '../data/i18n/combat-rules.content'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <article class="rules">
    <header class="rules__header">
      <h1 class="rules__title">{{ t(COMBAT_RULES.pageTitle) }}</h1>
      <p class="rules__subtitle">{{ t(COMBAT_RULES.pageSubtitle) }}</p>
      <p class="rules__disclaimer">{{ t(COMBAT_RULES.inspiredDisclaimer) }}</p>
    </header>

    <section
      v-for="section in COMBAT_RULES.sections"
      :key="section.id"
      class="rules__section"
    >
      <h2 class="rules__section-title">{{ t(section.title) }}</h2>
      <p
        v-for="(paragraph, index) in section.paragraphs"
        :key="`${section.id}-p-${index}`"
        class="rules__paragraph"
      >
        {{ t(paragraph) }}
      </p>
      <ul v-if="section.bullets?.length" class="rules__list">
        <li v-for="(bullet, index) in section.bullets" :key="`${section.id}-b-${index}`">
          {{ t(bullet) }}
        </li>
      </ul>
    </section>

    <section class="rules__section rules__section--diff">
      <h2 class="rules__section-title">{{ t(COMBAT_RULES.differencesTitle) }}</h2>
      <p class="rules__paragraph">{{ t(COMBAT_RULES.differencesIntro) }}</p>

      <div class="rules__diff-grid">
        <article
          v-for="(diff, index) in COMBAT_RULES.differences"
          :key="index"
          class="rules__diff-card"
        >
          <h3 class="rules__diff-topic">{{ t(diff.topic) }}</h3>
          <div class="rules__diff-row">
            <span class="rules__diff-label">Hyperbole</span>
            <p>{{ t(diff.ours) }}</p>
          </div>
          <div class="rules__diff-row rules__diff-row--inspired">
            <span class="rules__diff-label">Metaphor: ReFantazio</span>
            <p>{{ t(diff.inspired) }}</p>
          </div>
        </article>
      </div>
    </section>
  </article>
</template>

<style scoped>
.rules {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
}

.rules__header {
  margin-bottom: 2rem;
}

.rules__title {
  margin: 0;
  font-size: 1.8rem;
}

.rules__subtitle {
  margin: 0.35rem 0 0;
  color: var(--text-muted);
}

.rules__disclaimer {
  margin: 1rem 0 0;
  padding: 0.75rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.6rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.rules__section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.rules__section:last-child {
  border-bottom: none;
}

.rules__section-title {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
  color: var(--accent);
}

.rules__paragraph {
  margin: 0 0 0.65rem;
  line-height: 1.6;
  color: var(--text);
}

.rules__list {
  margin: 0.5rem 0 0;
  padding-left: 1.25rem;
  line-height: 1.6;
}

.rules__list li + li {
  margin-top: 0.35rem;
}

.rules__diff-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.rules__diff-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1rem 1.1rem;
}

.rules__diff-topic {
  margin: 0 0 0.75rem;
  font-size: 1rem;
}

.rules__diff-row {
  margin-bottom: 0.65rem;
}

.rules__diff-row:last-child {
  margin-bottom: 0;
}

.rules__diff-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin-bottom: 0.2rem;
}

.rules__diff-row--inspired .rules__diff-label {
  color: var(--text-muted);
}

.rules__diff-row p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text);
}
</style>
