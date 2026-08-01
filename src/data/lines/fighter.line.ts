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
      { attackId: 'fists_1', level: 1 },
      { attackId: 'fists_3', level: 4 },
      { attackId: 'overworld_3', level: 5 },
      { attackId: 'fists_1a', level: 6 },
      { attackId: 'monk_1', level: 7 },
      { attackId: 'passive_reg_2', level: 10 },
      { attackId: 'fists_2', level: 11 },
      { attackId: 'monk_2', level: 13 },
      { attackId: 'monk_3', level: 15 },
    ],
    evolutions: [
      {
        id: 'pugilist',
        name: { es: 'Púgil', en: 'Pugilist' },
        attacks: [
          { attackId: 'fists_3', level: 1 },
          { attackId: 'overworld_8', level: 2 },
          { attackId: 'fists_5', level: 8 },
          { attackId: 'fists_3m', level: 10 },
          { attackId: 'monk_4', level: 11 },
          { attackId: 'passive_atr_7', level: 15 },
          { attackId: 'monk_5', level: 16 },
          { attackId: 'fists_4', level: 17 },
          { attackId: 'monk_6', level: 20 },
        ],
        evolutions: [
          {
            id: 'monk',
            name: { es: 'Monje', en: 'Monk' },
            attacks: [
              { attackId: 'fists_5', level: 1 },
              { attackId: 'passive_reg_3', level: 5 },
              { attackId: 'fists_7', level: 6 },
              { attackId: 'passive_up_34', level: 7 },
              { attackId: 'monk_7', level: 8 },
              { attackId: 'fists_6', level: 10 },
              { attackId: 'passive_spend_7', level: 14 },
              { attackId: 'double_1', level: 15 },
              { attackId: 'fists_8', level: 17 },
              { attackId: 'monk_8', level: 23 },
              { attackId: 'passive_resist_10', level: 24 },
              { attackId: 'fists_7s', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
