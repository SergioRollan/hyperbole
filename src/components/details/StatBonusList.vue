<script setup lang="ts">
import type { StatBonusEntry } from '../../composables/useClassDetails'
import { STAT_BAR_MAX, VITAL_BAR_MAX, VITAL_BAR_MIN } from '../../data/stats/build-stat-bonuses'
import { useI18n } from '../../composables/useI18n'

defineProps<{
  bonuses: StatBonusEntry[]
  vitals: StatBonusEntry[]
}>()

const { t, tm } = useI18n()

function coreWidthPercent(value: number): string {
  const clamped = Math.min(Math.max(value, 0), STAT_BAR_MAX)
  return `${(clamped / STAT_BAR_MAX) * 100}%`
}

function vitalWidthPercent(value: number): string {
  const clamped = Math.min(Math.max(value, VITAL_BAR_MIN), VITAL_BAR_MAX)
  const span = VITAL_BAR_MAX - VITAL_BAR_MIN
  return `${((clamped - VITAL_BAR_MIN) / span) * 100}%`
}
</script>

<template>
  <div class="stat-bonus">
    <h3 class="stat-bonus__title">{{ tm('statBonuses') }}</h3>

    <ul v-if="vitals.length > 0" class="stat-bonus__list stat-bonus__list--vitals">
      <li v-for="bonus in vitals" :key="bonus.key" class="stat-bonus__row">
        <span class="stat-bonus__key" :title="t(bonus.label)">{{ t(bonus.abbr) }}</span>
        <span class="stat-bonus__track">
          <span
            class="stat-bonus__fill"
            :class="bonus.key === 'HP' ? 'is-hp' : 'is-mp'"
            :style="{ width: vitalWidthPercent(bonus.value) }"
          />
        </span>
        <span
          class="stat-bonus__value"
          :class="bonus.key === 'HP' ? 'is-hp' : 'is-mp'"
        >
          {{ bonus.value }}
        </span>
      </li>
    </ul>

    <ul v-if="bonuses.length > 0" class="stat-bonus__list stat-bonus__list--core">
      <li v-for="bonus in bonuses" :key="bonus.key" class="stat-bonus__row">
        <span class="stat-bonus__key" :title="t(bonus.label)">{{ t(bonus.abbr) }}</span>
        <span class="stat-bonus__track">
          <span
            class="stat-bonus__fill"
            :class="bonus.value > 0 ? 'is-positive' : 'is-zero'"
            :style="{ width: coreWidthPercent(bonus.value) }"
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

.stat-bonus__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-bonus__list--core {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border);
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

.stat-bonus__fill.is-hp {
  background: #4caf7a;
}

.stat-bonus__fill.is-mp {
  background: #9b6bd4;
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

.stat-bonus__value.is-hp {
  color: #4caf7a;
}

.stat-bonus__value.is-mp {
  color: #9b6bd4;
}
</style>
