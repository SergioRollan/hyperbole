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
      { attackId: 'blessing', level: 1 },
      { attackId: 'hire_mercenary', level: 8 },
    ],
    evolutions: [
      {
        id: 'commander',
        name: { es: 'Comandante', en: 'Commander' },
        attacks: [
          { attackId: 'arcane_shield', level: 14 },
          { attackId: 'crushing_blow', level: 18 },
        ],
        evolutions: [
          {
            id: 'general',
            name: { es: 'General', en: 'General' },
            attacks: [
              { attackId: 'thrust', level: 1 },
              { attackId: 'blessing', level: 26 },
              { attackId: 'hire_mercenary', level: 30 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
