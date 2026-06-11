<script setup lang="ts">
import type { WeaponEntry } from '../../composables/useClassDetails'
import { useI18n } from '../../composables/useI18n'
import { weaponIcon } from '../icons/iconRegistry'
import AppIcon from '../icons/AppIcon.vue'

defineProps<{
  weapons: WeaponEntry[]
}>()

const { t, tm } = useI18n()
</script>

<template>
  <div v-if="weapons.length > 0" class="weapon-list">
    <h3 class="weapon-list__title">{{ tm('weapons') }}</h3>

    <ul class="weapon-list__items">
      <li
        v-for="entry in weapons"
        :key="entry.weapon.id"
        class="weapon-list__item"
        :class="entry.weapon.lowDamage ? 'is-low' : `is-${entry.weapon.damageType}`"
        :title="
          t(entry.weapon.name) + (entry.isSignature ? ` — ${tm('signatureWeapon')}` : '')
        "
      >
        <AppIcon :name="weaponIcon(entry.weapon.id)" size="1.7em" />
        <span
          v-if="entry.isSignature"
          class="weapon-list__star"
          :aria-label="tm('signatureWeapon')"
        >
          ★
        </span>
        <span class="weapon-list__name">{{ t(entry.weapon.name) }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.weapon-list__title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin: 0 0 0.75rem;
}

.weapon-list__items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.weapon-list__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.6rem 0.4rem;
  border-radius: 0.5rem;
  background: var(--surface-hover);
  min-width: 3.4rem;
}

.weapon-list__name {
  font-size: 0.62rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.weapon-list__star {
  position: absolute;
  top: 0.15rem;
  right: 0.25rem;
  font-size: 0.6rem;
  color: var(--money);
  line-height: 1;
}

/* Low-damage weapons (grimoire, staff, shield): dimmed. */
.weapon-list__item.is-low {
  color: var(--text-muted);
  opacity: 0.65;
}

/* Damage-type colors. */
.weapon-list__item.is-blunt {
  color: var(--dmg-blunt);
}

.weapon-list__item.is-slash {
  color: var(--dmg-slash);
}

.weapon-list__item.is-pierce {
  color: var(--dmg-pierce);
}
</style>
