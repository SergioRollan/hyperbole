import type { EvolutionLine } from '../../domain'

/**
 * PALADIN -> Knight / Rider
 *   Knight -> Squire / Guardian
 *   Rider  -> Valkyrie / Dark paladin
 */
export const paladinLine: EvolutionLine = {
  id: 'paladin',
  name: { es: 'Paladín', en: 'Paladin' },
  icon: 'paladin',
  root: {
    id: 'paladin',
    name: { es: 'Paladín', en: 'Paladin' },
    attacks: [
      { attackId: 'crushing_blow', level: 1 },
      { attackId: 'blessing', level: 6 },
    ],
    evolutions: [
      {
        id: 'knight',
        name: { es: 'Caballero', en: 'Knight' },
        attacks: [
          { attackId: 'arcane_shield', level: 14 },
          { attackId: 'slash_strike', level: 18 },
        ],
        evolutions: [
          {
            id: 'squire',
            name: { es: 'Escudero', en: 'Squire' },
            attacks: [
              { attackId: 'crushing_blow', level: 1 },
              { attackId: 'arcane_shield', level: 24 },
            ],
            evolutions: [],
          },
          {
            id: 'guardian',
            name: { es: 'Guardián', en: 'Guardian' },
            attacks: [
              { attackId: 'arcane_shield', level: 1 },
              { attackId: 'blessing', level: 28 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'rider',
        name: { es: 'Jinete', en: 'Rider' },
        attacks: [
          { attackId: 'thrust', level: 14 },
          { attackId: 'holy_flash', level: 18 },
        ],
        evolutions: [
          {
            id: 'valkyrie',
            name: { es: 'Valkiria', en: 'Valkyrie' },
            attacks: [
              { attackId: 'thrust', level: 1 },
              { attackId: 'divine_judgment', level: 30 },
            ],
            evolutions: [],
          },
          {
            id: 'dark_paladin',
            name: { es: 'Paladín funesto', en: 'Dark paladin' },
            attacks: [
              { attackId: 'shadow_curse', level: 1 },
              { attackId: 'bloody_edge', level: 30 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
