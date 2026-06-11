import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { classRepository } from '../services/ClassRepository'

/** Evolution tree state: available lines and expanded nodes. */
export const useClassTreeStore = defineStore('classTree', () => {
  // Always read from the repository so HMR / data edits are picked up.
  const lines = computed(() => classRepository.getLines())
  const expanded = ref<Set<string>>(new Set())

  function isExpanded(classId: string): boolean {
    return expanded.value.has(classId)
  }

  function toggle(classId: string): void {
    const next = new Set(expanded.value)
    if (next.has(classId)) next.delete(classId)
    else next.add(classId)
    expanded.value = next
  }

  function expand(classId: string): void {
    if (expanded.value.has(classId)) return
    const next = new Set(expanded.value)
    next.add(classId)
    expanded.value = next
  }

  function collapseAll(): void {
    expanded.value = new Set()
  }

  return { lines, expanded, isExpanded, toggle, expand, collapseAll }
})
