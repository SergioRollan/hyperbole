import type { EvolutionLine } from '../../domain'

/** HEALER -> Cleric -> Sacromancer / Sage / Heretic */
export const healerLine: EvolutionLine = {
  id: 'healer',
  name: { es: 'Sanador', en: 'Healer' },
  icon: 'healer',
  root: {
    id: 'healer',
    name: { es: 'Sanador', en: 'Healer' },
    attacks: [
      { attackId: 'healing_light', level: 1 },
      { attackId: 'blessing', level: 5 },
    ],
    evolutions: [
      {
        id: 'cleric',
        name: { es: 'Clérigo', en: 'Cleric' },
        attacks: [
          { attackId: 'great_heal', level: 14 },
          { attackId: 'holy_flash', level: 18 },
        ],
        evolutions: [
          {
            id: 'sacromancer',
            name: { es: 'Sacromante', en: 'Sacromancer' },
            attacks: [
              { attackId: 'holy_flash', level: 1 },
              { attackId: 'divine_judgment', level: 30 },
            ],
            evolutions: [],
          },
          {
            id: 'sage',
            name: { es: 'Sabio', en: 'Sage' },
            attacks: [
              { attackId: 'arcane_shield', level: 1 },
              { attackId: 'revive', level: 32 },
            ],
            evolutions: [],
          },
          {
            id: 'heretic',
            name: { es: 'Hereje', en: 'Heretic' },
            attacks: [
              { attackId: 'lethal_poison', level: 1 },
              { attackId: 'shadow_curse', level: 24 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
