<script setup lang="ts">
import { Icon } from '@iconify/vue'

/**
 * Thin wrapper over Iconify. The ONLY component that knows the icon library,
 * keeping the rest of the app decoupled from it.
 * `name` is an Iconify name (resolved from iconRegistry).
 */
withDefaults(
  defineProps<{
    name: string
    size?: number | string
  }>(),
  { size: '1em' },
)
</script>

<template>
  <Icon
    :icon="name"
    :width="size"
    :height="size"
    aria-hidden="true"
    class="app-icon"
  />
</template>

<style scoped>
.app-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
