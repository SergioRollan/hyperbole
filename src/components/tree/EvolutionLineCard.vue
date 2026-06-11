<script setup lang="ts">
import type { EvolutionLine } from '../../domain'
import ClassNode from './ClassNode.vue'

defineProps<{
  line: EvolutionLine
}>()
</script>

<template>
  <section class="line-card">
    <ClassNode :node="line.root" :icon-key="line.icon" :depth="0" />
  </section>
</template>

<style scoped>
.line-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 0.4rem;
}
</style>
