import { computed, type Ref } from 'vue'
import type {
  AffinityLevel,
  Attack,
  AttributeKey,
  DamageElement,
  LocalizedText,
  RpgClass,
  Weapon,
} from '../domain'
import { AFFINITY_LABELS, ATTACK_ELEMENTS, CORE_ATTRIBUTES, DAMAGE_ELEMENTS, VITAL_ATTRIBUTES } from '../domain'
import { affinitiesFor } from '../data/affinities/class-affinities.data'
import { statValue } from '../data/stats/build-stat-bonuses'
import { statsFor } from '../data/stats/class-stats.data'
import { weaponryFor } from '../data/weapons/class-weapons.data'
import { weaponById } from '../data/weapons/weapons.data'
import { attackRepository } from '../services/AttackRepository'

/** Resolved attack paired with the level at which the class learns it. */
export interface ResolvedAttack {
  attack: Attack
  level: number
}

export interface StatBonusEntry {
  key: AttributeKey
  label: LocalizedText
  abbr: LocalizedText
  value: number
  kind: 'core' | 'vital'
}

/** Weapon resolved for the UI, flagged when it best defines the class. */
export interface WeaponEntry {
  weapon: Weapon
  isSignature: boolean
}

/** One cell of the affinity table. */
export interface AffinityEntry {
  element: DamageElement
  elementLabel: LocalizedText
  level: AffinityLevel
  label: LocalizedText
}

/**
 * Resolves class details for the UI:
 *  - attacks resolved by id, sorted ascending by level (earliest first)
 *  - all eight stat bonuses for the selected class only (0–8 scale, not cumulative)
 *  - usable weapons, with the class-defining one flagged as signature
 *  - damage affinities for every damage element (missing = normal)
 */
export function useClassDetails(rpgClass: Ref<RpgClass | undefined>) {
  const attacks = computed<ResolvedAttack[]>(() => {
    const current = rpgClass.value
    if (!current) return []
    return current.attacks
      .map((learned) => {
        const attack = attackRepository.getById(learned.attackId)
        return attack ? { attack, level: learned.level } : undefined
      })
      .filter((entry): entry is ResolvedAttack => entry !== undefined)
      .sort((a, b) => a.level - b.level)
  })

  const statBonuses = computed<StatBonusEntry[]>(() => {
    const current = rpgClass.value
    if (!current) return []
    const bonuses = statsFor(current.id)
    return CORE_ATTRIBUTES.map((meta) => ({
      key: meta.key,
      label: meta.label,
      abbr: meta.abbr,
      value: statValue(bonuses, meta.key),
      kind: 'core' as const,
    }))
  })

  const vitalBonuses = computed<StatBonusEntry[]>(() => {
    const current = rpgClass.value
    if (!current) return []
    const bonuses = statsFor(current.id)
    return VITAL_ATTRIBUTES.map((meta) => ({
      key: meta.key,
      label: meta.label,
      abbr: meta.abbr,
      value: statValue(bonuses, meta.key),
      kind: 'vital' as const,
    }))
  })

  const weapons = computed<WeaponEntry[]>(() => {
    const current = rpgClass.value
    if (!current) return []
    const weaponry = weaponryFor(current.id)
    if (!weaponry) return []
    return weaponry.weapons.map((id) => ({
      weapon: weaponById(id),
      isSignature: id === weaponry.signature,
    }))
  })

  const affinities = computed<AffinityEntry[]>(() => {
    const current = rpgClass.value
    if (!current) return []
    const classAffinities = affinitiesFor(current.id)
    return DAMAGE_ELEMENTS.map((element) => {
      const level = classAffinities[element] ?? 'normal'
      return {
        element,
        elementLabel:
          ATTACK_ELEMENTS.find((meta) => meta.key === element)?.label ?? { es: '', en: '' },
        level,
        label: AFFINITY_LABELS[level],
      }
    })
  })

  return { attacks, statBonuses, vitalBonuses, weapons, affinities }
}
