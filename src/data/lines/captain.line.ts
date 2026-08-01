import type { EvolutionLine } from '../../domain'

/** CAPTAIN -> Commander -> General */
export const captainLine: EvolutionLine = {
  id: 'captain',
  name: { es: 'Capitán', en: 'Captain' },
  icon: 'captain',
  root: {
    id: 'captain',
    name: { es: 'Capitán', en: 'Captain' },
    attacks: [
      { attackId: 'axe_1', level: 1 },
      { attackId: 'overworld_4', level: 2 },
      { attackId: 'raku_1', level: 5 },
      { attackId: 'axe_2', level: 7 },
      { attackId: 'suku_1', level: 9 },
      { attackId: 'leadership_1', level: 10 },
      { attackId: 'leadership_2', level: 10 },
      { attackId: 'taru_1', level: 12 },
      { attackId: 'axe_3', level: 15 },
    ],
    evolutions: [
      {
        id: 'commander',
        name: { es: 'Comandante', en: 'Commander' },
        attacks: [
          { attackId: 'axe_3', level: 1 },
          { attackId: 'shield_2', level: 1 },
          { attackId: 'axe_4', level: 3 },
          { attackId: 'leadership_3', level: 6 },
          { attackId: 'leadership_4', level: 6 },
          { attackId: 'shield_3', level: 8 },
          { attackId: 'leadership_7', level: 11 },
          { attackId: 'shield_4', level: 14 },
          { attackId: 'leadership_8', level: 19 },
          { attackId: 'axe_5', level: 20 },
        ],
        evolutions: [
          {
            id: 'general',
            name: { es: 'General', en: 'General' },
            attacks: [
              { attackId: 'axe_5', level: 1 },
              { attackId: 'protect_9', level: 4 },
              { attackId: 'axe_6', level: 7 },
              { attackId: 'spear_5', level: 8 },
              { attackId: 'leadership_9', level: 11 },
              { attackId: 'shield_5', level: 12 },
              { attackId: 'passive_up_28', level: 14 },
              { attackId: 'break_9', level: 15 },
              { attackId: 'axe_7', level: 16 },
              { attackId: 'leadership_5', level: 20 },
              { attackId: 'leadership_6', level: 20 },
              { attackId: 'axe_8', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
