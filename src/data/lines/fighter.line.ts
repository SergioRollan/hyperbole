import type { EvolutionLine } from '../../domain'

/** FIGHTER -> Pugilist -> Monk */
export const fighterLine: EvolutionLine = {
  id: 'fighter',
  name: { es: 'Luchador', en: 'Fighter' },
  icon: 'fighter',
  root: {
    id: 'fighter',
    name: { es: 'Luchador', en: 'Fighter' },
    attacks: [
      { attackId: 'shattering_fist', level: 1 },
      { attackId: 'crushing_blow', level: 4 },
    ],
    evolutions: [
      {
        id: 'pugilist',
        name: { es: 'Púgil', en: 'Pugilist' },
        attacks: [
          { attackId: 'mace_smash', level: 14 },
          { attackId: 'shattering_fist', level: 18 },
        ],
        evolutions: [
          {
            id: 'monk',
            name: { es: 'Monje', en: 'Monk' },
            attacks: [
              { attackId: 'shattering_fist', level: 1 },
              { attackId: 'holy_flash', level: 26 },
              { attackId: 'healing_light', level: 30 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
