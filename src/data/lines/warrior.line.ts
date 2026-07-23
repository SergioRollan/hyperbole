import type { EvolutionLine } from '../../domain'

/**
 * WARRIOR -> Samurai / Barbarian / Gunslinger
 *   Samurai    -> Master samurai  (slash)
 *   Barbarian  -> Berserker      (blunt)
 *   Gunslinger -> Sniper         (pierce)
 */
export const warriorLine: EvolutionLine = {
  id: 'warrior',
  name: { es: 'Guerrero', en: 'Warrior' },
  icon: 'warrior',
  root: {
    id: 'warrior',
    name: { es: 'Guerrero', en: 'Warrior' },
    attacks: [
      { attackId: 'slash_strike', level: 1 },
      { attackId: 'overworld_1', level: 2 },
      { attackId: 'crushing_blow', level: 5 },
    ],
    evolutions: [
      {
        id: 'samurai',
        name: { es: 'Samurái', en: 'Samurai' },
        attacks: [
          { attackId: 'swift_cut', level: 14 },
          { attackId: 'bloody_edge', level: 20 },
        ],
        evolutions: [
          {
            id: 'master_samurai',
            name: { es: 'Maestro samurái', en: 'Master samurai' },
            attacks: [
              { attackId: 'swift_cut', level: 1 },
              { attackId: 'bloody_edge', level: 30 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'barbarian',
        name: { es: 'Bárbaro', en: 'Barbarian' },
        attacks: [
          { attackId: 'mace_smash', level: 14 },
          { attackId: 'shattering_fist', level: 20 },
        ],
        evolutions: [
          {
            id: 'berserker',
            name: { es: 'Berserker', en: 'Berserker' },
            attacks: [
              { attackId: 'shattering_fist', level: 1 },
              { attackId: 'bloody_edge', level: 28 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'gunslinger',
        name: { es: 'Pistolero', en: 'Gunslinger' },
        attacks: [
          { attackId: 'precise_shot', level: 14 },
          { attackId: 'thrust', level: 18 },
        ],
        evolutions: [
          {
            id: 'sniper',
            name: { es: 'Francotirador', en: 'Sniper' },
            attacks: [
              { attackId: 'precise_shot', level: 1 },
              { attackId: 'piercing_arrow', level: 30 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
