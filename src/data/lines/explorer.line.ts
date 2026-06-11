import type { EvolutionLine } from '../../domain'

/** EXPLORER -> Survivor -> Apothecary / Hunter */
export const explorerLine: EvolutionLine = {
  id: 'explorer',
  name: { es: 'Explorador', en: 'Explorer' },
  icon: 'explorer',
  root: {
    id: 'explorer',
    name: { es: 'Explorador', en: 'Explorer' },
    attacks: [
      { attackId: 'precise_shot', level: 1 },
      { attackId: 'healing_light', level: 6 },
    ],
    evolutions: [
      {
        id: 'survivor',
        name: { es: 'Superviviente', en: 'Survivor' },
        attacks: [
          { attackId: 'lethal_poison', level: 14 },
          { attackId: 'great_heal', level: 18 },
        ],
        evolutions: [
          {
            id: 'apothecary',
            name: { es: 'Boticario', en: 'Apothecary' },
            attacks: [
              { attackId: 'great_heal', level: 1 },
              { attackId: 'lethal_poison', level: 24 },
            ],
            evolutions: [],
          },
          {
            id: 'hunter',
            name: { es: 'Cazador', en: 'Hunter' },
            attacks: [
              { attackId: 'piercing_arrow', level: 1 },
              { attackId: 'precise_shot', level: 26 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
