import type { EvolutionLine } from '../../domain'

/**
 * ARTIST -> Jester / Charlatan
 *   Jester    -> Bard / Dancer
 *   Charlatan -> Trickster / Magnate
 */
export const artistLine: EvolutionLine = {
  id: 'artist',
  name: { es: 'Artista', en: 'Artist' },
  icon: 'artist',
  root: {
    id: 'artist',
    name: { es: 'Artista', en: 'Artist' },
    attacks: [
      { attackId: 'focus', level: 1 },
      { attackId: 'bribe', level: 6 },
    ],
    evolutions: [
      {
        id: 'jester',
        name: { es: 'Bufón', en: 'Jester' },
        attacks: [
          { attackId: 'petrify', level: 14 },
          { attackId: 'blessing', level: 18 },
        ],
        evolutions: [
          {
            id: 'bard',
            name: { es: 'Bardo', en: 'Bard' },
            attacks: [
              { attackId: 'blessing', level: 1 },
              { attackId: 'healing_light', level: 24 },
            ],
            evolutions: [],
          },
          {
            id: 'dancer',
            name: { es: 'Bailarín', en: 'Dancer' },
            attacks: [
              { attackId: 'gust', level: 1 },
              { attackId: 'arcane_shield', level: 26 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'charlatan',
        name: { es: 'Farsante', en: 'Faker' },
        attacks: [
          { attackId: 'bribe', level: 14 },
          { attackId: 'mind_domination', level: 20 },
        ],
        evolutions: [
          {
            id: 'trickster',
            name: { es: 'Estafador', en: 'Trickster' },
            attacks: [
              { attackId: 'hire_mercenary', level: 1 },
              { attackId: 'bribe', level: 28 },
            ],
            evolutions: [],
          },
          {
            id: 'magnate',
            name: { es: 'Magnate', en: 'Magnate' },
            attacks: [
              { attackId: 'precise_shot', level: 1 },
              { attackId: 'mind_domination', level: 28 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
