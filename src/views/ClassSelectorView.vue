<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useEvolutionTree } from '../composables/useEvolutionTree'
import { useSelectionStore } from '../stores/useSelectionStore'
import { useI18n } from '../composables/useI18n'
import EvolutionLineCard from '../components/tree/EvolutionLineCard.vue'
import ClassDetailsPanel from '../components/details/ClassDetailsPanel.vue'
const { lines } = useEvolutionTree()
const selection = useSelectionStore()
const route = useRoute()
const { tm } = useI18n()

watch(
  () => route.params.classId,
  (classId) => {
    selection.select(typeof classId === 'string' ? classId : null)
  },
  { immediate: true },
)
</script>

<template>
  <div class="selector">
    <header class="selector__header">
      <h1 class="selector__title">{{ tm('appTitle') }}</h1>
      <p class="selector__subtitle">{{ tm('appSubtitle') }}</p>
    </header>

    <div class="selector__layout">
      <div class="selector__tree">
        <EvolutionLineCard
          v-for="line in lines"
          :key="line.id"
          :line="line"
        />
      </div>

      <ClassDetailsPanel class="selector__details" />
    </div>
  </div>
</template>

<style scoped>
.selector {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem;
}

.selector__header {
  margin-bottom: 1.5rem;
}

.selector__title {
  margin: 0;
  font-size: 1.8rem;
}

.selector__subtitle {
  margin: 0.35rem 0 0;
  color: var(--text-muted);
}

.selector__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.selector__tree {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (max-width: 820px) {
  .selector__layout {
    grid-template-columns: 1fr;
  }
}
</style>
