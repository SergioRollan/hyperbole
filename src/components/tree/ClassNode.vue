<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { RpgClass } from '../../domain'
import { useClassTreeStore } from '../../stores/useClassTreeStore'
import { useSelectionStore } from '../../stores/useSelectionStore'
import { useI18n } from '../../composables/useI18n'
import { lineIcon } from '../icons/iconRegistry'
import AppIcon from '../icons/AppIcon.vue'

const props = defineProps<{
  node: RpgClass
  /** Line icon key (shared by all classes in the line). */
  iconKey: string
  depth: number
}>()

const tree = useClassTreeStore()
const selection = useSelectionStore()
const router = useRouter()
const { t, tm } = useI18n()

const hasEvolutions = computed(() => props.node.evolutions.length > 0)
const isExpanded = computed(() => tree.isExpanded(props.node.id))
const isSelected = computed(() => selection.selectedId === props.node.id)

function select(): void {
  router.push({ name: 'class', params: { classId: props.node.id } })
}

function toggle(): void {
  tree.toggle(props.node.id)
}
</script>

<template>
  <div class="class-node" :class="`class-node--phase-${phase}`">
    <div
      class="class-node__row"
      :class="{ 'is-selected': isSelected }"
      role="button"
      tabindex="0"
      @click="select"
      @keydown.enter.prevent="select"
      @keydown.space.prevent="select"
    >
      <button
        v-if="hasEvolutions"
        class="class-node__chevron"
        :class="{ 'is-open': isExpanded }"
        :aria-label="isExpanded ? tm('collapse') : tm('expand')"
        @click.stop="toggle"
      >
        ▶
      </button>
      <span v-else class="class-node__chevron class-node__chevron--placeholder" />

      <AppIcon :name="lineIcon(iconKey)" size="1.6em" class="class-node__icon" />

      <span class="class-node__name">{{ t(node.name) }}</span>
      <span class="class-node__phase">{{ tm('phase') }} {{ phase }}</span>
    </div>

    <div v-if="hasEvolutions && isExpanded" class="class-node__children">
      <ClassNode
        v-for="child in node.evolutions"
        :key="child.id"
        :node="child"
        :icon-key="iconKey"
        :depth="depth + 1"
      />
    </div>
  </div>
</template>

<style scoped>
.class-node__row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.class-node__row:hover {
  background: var(--surface-hover);
}

.class-node__row.is-selected {
  background: var(--accent-soft);
  border-color: var(--accent);
}

.class-node__chevron {
  width: 1.3rem;
  height: 1.3rem;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 0.7rem;
  transition: transform 0.15s ease;
}

.class-node__chevron.is-open {
  transform: rotate(90deg);
  color: var(--accent);
}

.class-node__chevron--placeholder {
  cursor: default;
}

.class-node__icon {
  color: var(--accent);
  flex: none;
}

.class-node__name {
  font-weight: 600;
  flex: 1;
}

.class-node__phase {
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.class-node__children {
  margin-left: 1.2rem;
  padding-left: 0.6rem;
  border-left: 1px dashed var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
</style>
