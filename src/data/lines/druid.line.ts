import type { EvolutionLine } from '../../domain'

/**
 * DRUID -> Summoner / Scientist
 *   Summoner  -> Spiritualist / Necromancer
 *   Scientist -> Astromancer / Chronomancer
 *
 * Dark mage / astrologer / scientist theme — not nature-based.
 */
export const druidLine: EvolutionLine = {
  id: 'druid',
  name: { es: 'Druida', en: 'Druid' },
  icon: 'druid',
  root: {
    id: 'druid',
    name: { es: 'Druida', en: 'Druid' },
    attacks: [
      { attackId: 'psychic_wave', level: 1 },
      { attackId: 'shadow_curse', level: 6 },
    ],
    evolutions: [
      {
        id: 'summoner',
        name: { es: 'Invocador', en: 'Summoner' },
        attacks: [
          { attackId: 'void', level: 14 },
          { attackId: 'annihilation', level: 22 },
        ],
        evolutions: [
          {
            id: 'spiritualist',
            name: { es: 'Espiritista', en: 'Spiritualist' },
            attacks: [
              { attackId: 'mind_domination', level: 1 },
              { attackId: 'revive', level: 30 },
            ],
            evolutions: [],
          },
          {
            id: 'necromancer',
            name: { es: 'Necromante', en: 'Necromancer' },
            attacks: [
              { attackId: 'shadow_curse', level: 1 },
              { attackId: 'lethal_poison', level: 28 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'scientist',
        name: { es: 'Científico', en: 'Scientist' },
        attacks: [
          { attackId: 'fission', level: 14 },
          { attackId: 'arcane_shield', level: 18 },
        ],
        evolutions: [
          {
            id: 'astromancer',
            name: { es: 'Astromante', en: 'Astromancer' },
            attacks: [
              { attackId: 'atomic_detonation', level: 1 },
              { attackId: 'divine_judgment', level: 32 },
            ],
            evolutions: [],
          },
          {
            id: 'chronomancer',
            name: { es: 'Cronomante', en: 'Chronomancer' },
            attacks: [
              { attackId: 'focus', level: 1 },
              { attackId: 'psychic_wave', level: 26 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
