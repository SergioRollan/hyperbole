<script setup lang="ts">
import { computed } from 'vue'
import type { Attack } from '../../domain'
import { useI18n } from '../../composables/useI18n'
import { attackElementColor, elementIcon } from '../icons/iconRegistry'
import AppIcon from '../icons/AppIcon.vue'

const props = defineProps<{
  attack: Attack
  level: number
}>()

const { t, tm } = useI18n()

interface CostView {
  text: string
  modifier: string
}

const cost = computed<CostView>(() => {
  const { kind, amount } = props.attack.cost
  switch (kind) {
    case 'mp':
      return { text: `${amount} MP`, modifier: 'is-mp' }
    case 'hp_percent':
      return { text: `${amount}% HP`, modifier: 'is-hp' }
    case 'money':
      return { text: `$${amount}`, modifier: 'is-money' }
  }
})
</script>

<template>
  <li class="attack-item">
    <span class="attack-item__level">{{ tm('levelAbbr') }} {{ level }}</span>

    <AppIcon
      :name="elementIcon(attack.element)"
      size="1.5em"
      class="attack-item__icon"
      :style="{ color: attackElementColor(attack.element) }"
    />

    <div class="attack-item__body">
      <div class="attack-item__head">
        <span class="attack-item__name">{{ t(attack.name) }}</span>
        <span class="attack-item__cost" :class="cost.modifier">{{ cost.text }}</span>
      </div>
      <p class="attack-item__desc">{{ t(attack.description) }}</p>
    </div>
  </li>
</template>

<style scoped>
.attack-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.7rem 0.5rem;
  border-bottom: 1px solid var(--border);
}

.attack-item:last-child {
  border-bottom: none;
}

.attack-item__level {
  flex: none;
  min-width: 3rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  padding-top: 0.15rem;
}

.attack-item__icon {
  flex: none;
  padding-top: 0.1rem;
}

.attack-item__body {
  flex: 1;
  min-width: 0;
}

.attack-item__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
}

.attack-item__name {
  font-weight: 600;
}

.attack-item__cost {
  flex: none;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  font-size: 0.85rem;
}

.attack-item__cost.is-mp {
  color: var(--mp);
}

.attack-item__cost.is-hp {
  color: var(--danger);
}

.attack-item__cost.is-money {
  color: var(--money);
}

.attack-item__desc {
  margin: 0.2rem 0 0;
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.4;
}
</style>
