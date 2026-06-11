import type { EvolutionLine } from '../../domain'

/** WARLOCK -> Sorcerer -> Nucleomancer / Psychomancer / Omnimancer */
export const warlockLine: EvolutionLine = {
  id: 'warlock',
  name: { es: 'Brujo', en: 'Warlock' },
  icon: 'warlock',
  root: {
    id: 'warlock',
    name: { es: 'Brujo', en: 'Warlock' },
    attacks: [
      { attackId: 'shadow_curse', level: 1 },
      { attackId: 'psychic_wave', level: 5 },
    ],
    evolutions: [
      {
        id: 'sorcerer',
        name: { es: 'Hechicero', en: 'Sorcerer' },
        attacks: [
          { attackId: 'void', level: 14 },
          { attackId: 'mind_domination', level: 18 },
        ],
        evolutions: [
          {
            id: 'nucleomancer',
            name: { es: 'Nucleomante', en: 'Nucleomancer' },
            attacks: [
              { attackId: 'fission', level: 1 },
              { attackId: 'atomic_detonation', level: 30 },
            ],
            evolutions: [],
          },
          {
            id: 'psychomancer',
            name: { es: 'Psicomante', en: 'Psychomancer' },
            attacks: [
              { attackId: 'psychic_wave', level: 1 },
              { attackId: 'mind_domination', level: 26 },
            ],
            evolutions: [],
          },
          {
            id: 'omnimancer',
            name: { es: 'Omnimante', en: 'Omnimancer' },
            attacks: [
              { attackId: 'annihilation', level: 1 },
              { attackId: 'final_judgment', level: 40 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
