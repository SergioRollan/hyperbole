import { storeToRefs } from 'pinia'
import { useClassTreeStore } from '../stores/useClassTreeStore'

/** Presentation logic for the evolution tree (lines + expand/collapse). */
export function useEvolutionTree() {
  const store = useClassTreeStore()
  const { lines } = storeToRefs(store)

  return {
    lines,
    isExpanded: store.isExpanded,
    toggle: store.toggle,
    collapseAll: store.collapseAll,
  }
}
