import type { EvolutionLine } from '../../domain'

/** THIEF -> Assassin -> Umbramancer / Ninja */
export const thiefLine: EvolutionLine = {
  id: 'thief',
  name: { es: 'Ladrón', en: 'Thief' },
  icon: 'thief',
  root: {
    id: 'thief',
    name: { es: 'Ladrón', en: 'Thief' },
    attacks: [
      { attackId: 'swift_cut', level: 1 },
      { attackId: 'bribe', level: 6 },
    ],
    evolutions: [
      {
        id: 'assassin',
        name: { es: 'Asesino', en: 'Assassin' },
        attacks: [
          { attackId: 'bloody_edge', level: 14 },
          { attackId: 'lethal_poison', level: 18 },
        ],
        evolutions: [
          {
            id: 'umbramancer',
            name: { es: 'Umbromante', en: 'Umbramancer' },
            attacks: [
              { attackId: 'shadow_curse', level: 1 },
              { attackId: 'void', level: 30 },
            ],
            evolutions: [],
          },
          {
            id: 'ninja',
            name: { es: 'Ninja', en: 'Ninja' },
            attacks: [
              { attackId: 'slash_strike', level: 1 },
              { attackId: 'petrify', level: 28 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
