<script setup lang="ts">
import type { StatBonusEntry } from '../../composables/useClassDetails'
import { STAT_BAR_MAX } from '../../data/stats/build-stat-bonuses'
import { useI18n } from '../../composables/useI18n'

defineProps<{
  bonuses: StatBonusEntry[]
}>()

const { t, tm } = useI18n()

/** Fixed scale: 8 = 100%, 0 = 0%. */
function widthPercent(value: number): string {
  const clamped = Math.min(Math.max(value, 0), STAT_BAR_MAX)
  return `${(clamped / STAT_BAR_MAX) * 100}%`
}
</script>

<template>
  <div class="stat-bonus">
    <h3 class="stat-bonus__title">{{ tm('statBonuses') }}</h3>

    <ul v-if="bonuses.length > 0" class="stat-bonus__list">
      <li v-for="bonus in bonuses" :key="bonus.key" class="stat-bonus__row">
        <span class="stat-bonus__key" :title="t(bonus.label)">{{ t(bonus.abbr) }}</span>
        <span class="stat-bonus__track">
          <span
            class="stat-bonus__fill"
            :class="bonus.value > 0 ? 'is-positive' : 'is-zero'"
            :style="{ width: widthPercent(bonus.value) }"
          />
        </span>
        <span class="stat-bonus__value" :class="bonus.value > 0 ? 'is-positive' : 'is-zero'">
          {{ bonus.value }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.stat-bonus__title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin: 0 0 0.75rem;
}

.stat-bonus__empty {
  color: var(--text-muted);
  font-style: italic;
}

.stat-bonus__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-bonus__row {
  display: grid;
  grid-template-columns: 2.6rem 1fr 3rem;
  align-items: center;
  gap: 0.6rem;
}

.stat-bonus__key {
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--text);
}

.stat-bonus__track {
  height: 0.55rem;
  background: var(--surface-hover);
  border-radius: 999px;
  overflow: hidden;
}

.stat-bonus__fill {
  display: block;
  height: 100%;
  border-radius: 999px;
}

.stat-bonus__fill.is-positive {
  background: var(--accent);
}

.stat-bonus__fill.is-zero {
  background: transparent;
}

.stat-bonus__value {
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
}

.stat-bonus__value.is-positive {
  color: var(--accent);
}

.stat-bonus__value.is-zero {
  color: var(--text-muted);
}
</style>
