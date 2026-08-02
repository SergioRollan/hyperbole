import type { EvolutionLine } from '../../domain'

/** Standalone final-tier class — no evolutions, no branches. */
export const protagonistLine: EvolutionLine = {
  id: 'protagonist',
  name: { es: 'Protagonista', en: 'Protagonist' },
  icon: 'protagonist',
  root: {
    id: 'protagonist',
    name: { es: 'Protagonista', en: 'Protagonist' },
    phase: 3,
    attacks: [
      { attackId: 'protagonist_1', level: 1 },
      { attackId: 'protagonist_2', level: 3 },
      { attackId: 'protagonist_3', level: 5 },
      { attackId: 'protagonist_4', level: 7 },
      { attackId: 'protagonist_5', level: 9 },
      { attackId: 'protagonist_6', level: 11 },
      { attackId: 'protagonist_7', level: 13 },
      { attackId: 'protagonist_8', level: 15 },
      { attackId: 'protagonist_9', level: 17 },
      { attackId: 'protagonist_10', level: 19 },
      { attackId: 'protagonist_11', level: 22 },
      { attackId: 'protagonist_12', level: 25 },
    ],
    evolutions: [],
  },
}
