<script setup lang="ts">
import type { AffinityEntry } from '../../composables/useClassDetails'
import { useI18n } from '../../composables/useI18n'
import { attackElementColor, elementIcon } from '../icons/iconRegistry'
import AppIcon from '../icons/AppIcon.vue'

defineProps<{
  affinities: AffinityEntry[]
}>()

const { t } = useI18n()
</script>

<template>
  <div v-if="affinities.length > 0" class="affinity">

    <ul class="affinity__grid">
      <li
        v-for="entry in affinities"
        :key="entry.element"
        class="affinity__cell"
        :title="t(entry.elementLabel)"
      >
        <AppIcon
          :name="elementIcon(entry.element)"
          size="1.05em"
          class="affinity__icon"
          :style="{ color: attackElementColor(entry.element) }"
        />
        <span class="affinity__value" :class="`is-${entry.level}`">{{ t(entry.label) }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.affinity__title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin: 0 0 0.75rem;
}

.affinity__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 0.2rem;
}

.affinity__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.1rem 0.3rem;
  border-radius: 0.35rem;
  background: var(--surface-hover);
  min-width: 0;
}

.affinity__icon {
  flex: none;
}

.affinity__value {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  color: var(--text-muted);
}

.affinity__value.is-weak {
  color: var(--danger);
}

.affinity__value.is-resist {
  color: var(--money);
}

.affinity__value.is-null {
  color: var(--text);
}

.affinity__value.is-absorb {
  color: var(--accent);
}

.affinity__value.is-reflect {
  color: var(--mp);
}
</style>
