<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useSelectionStore } from '../../stores/useSelectionStore'
import { useClassDetails } from '../../composables/useClassDetails'
import { useI18n } from '../../composables/useI18n'
import { lineIcon } from '../icons/iconRegistry'
import AppIcon from '../icons/AppIcon.vue'
import StatBonusList from './StatBonusList.vue'
import WeaponList from './WeaponList.vue'
import AttackList from './AttackList.vue'

const selection = useSelectionStore()
const selectedClass = toRef(selection, 'selectedClass')
const { attacks, statBonuses, weapons } = useClassDetails(selectedClass)
const { t, tm } = useI18n()

const iconKey = computed(() => selection.selectedLine?.icon ?? '')
</script>

<template>
  <aside class="details">
    <div v-if="selectedClass" class="details__content">
      <header class="details__header">
        <AppIcon :name="lineIcon(iconKey)" size="2.4em" class="details__icon" />
        <div>
          <h2 class="details__name">{{ t(selectedClass.name) }}</h2>
          <p v-if="selection.selectedLine" class="details__line">
            {{ tm('line') }} {{ t(selection.selectedLine.name) }}
          </p>
        </div>
      </header>

      <StatBonusList :bonuses="statBonuses" />
      <WeaponList :weapons="weapons" />
      <AttackList :attacks="attacks" />
    </div>

    <div v-else class="details__placeholder">
      <AppIcon name="game-icons:rune-stone" size="3em" />
      <p>{{ tm('selectPrompt') }}</p>
    </div>
  </aside>
</template>

<style scoped>
.details {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.9rem;
  padding: 1.25rem;
  position: sticky;
  top: 1.5rem;
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
}

.details__header {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.details__icon {
  color: var(--accent);
}

.details__name {
  margin: 0;
  font-size: 1.5rem;
}

.details__line {
  margin: 0.1rem 0 0;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.details__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.details__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 14rem;
  color: var(--text-muted);
  text-align: center;
}
</style>
