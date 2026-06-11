<script setup lang="ts">
import type { ResolvedAttack } from '../../composables/useClassDetails'
import { useI18n } from '../../composables/useI18n'
import AttackItem from './AttackItem.vue'

defineProps<{
  attacks: ResolvedAttack[]
}>()

const { tm } = useI18n()
</script>

<template>
  <div class="attack-list">
    <h3 class="attack-list__title">{{ tm('attacks') }}</h3>

    <p v-if="attacks.length === 0" class="attack-list__empty">
      {{ tm('noAttacks') }}
    </p>

    <ul v-else class="attack-list__items">
      <AttackItem
        v-for="entry in attacks"
        :key="`${entry.attack.id}-${entry.level}`"
        :attack="entry.attack"
        :level="entry.level"
      />
    </ul>
  </div>
</template>

<style scoped>
.attack-list__title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin: 0 0 0.5rem;
}

.attack-list__empty {
  color: var(--text-muted);
  font-style: italic;
}

.attack-list__items {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
