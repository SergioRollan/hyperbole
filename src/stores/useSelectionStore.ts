import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { EvolutionLine, RpgClass } from '../domain'
import { classRepository } from '../services/ClassRepository'

/** Currently selected class state. */
export const useSelectionStore = defineStore('selection', () => {
  const selectedId = ref<string | null>(null)

  const selectedClass = computed<RpgClass | undefined>(() =>
    selectedId.value ? classRepository.findClass(selectedId.value) : undefined,
  )

  const selectedLine = computed<EvolutionLine | undefined>(() =>
    selectedId.value ? classRepository.findLineOfClass(selectedId.value) : undefined,
  )

  function select(classId: string | null): void {
    selectedId.value = classId
  }

  return { selectedId, selectedClass, selectedLine, select }
})
