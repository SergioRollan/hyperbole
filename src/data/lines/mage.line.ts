import type { EvolutionLine } from '../../domain'

/**
 * MAGE line (full 3-phase example).
 *
 *  Phase 1: Mage
 *  Phase 2: Archmage / Shaman
 *  Phase 3: Pyromancer, Cryomancer (from Archmage)
 *          Electromancer, Aeromancer (from Shaman)
 */
export const mageLine: EvolutionLine = {
  id: 'mage',
  name: { es: 'Mago', en: 'Mage' },
  icon: 'mage',
  root: {
    id: 'mage',
    name: { es: 'Mago', en: 'Mage' },
    attacks: [
      { attackId: 'spark', level: 1 },
      { attackId: 'frost', level: 3 },
      { attackId: 'focus', level: 6 },
    ],
    evolutions: [
      {
        id: 'archmage',
        name: { es: 'Archimago', en: 'Archmage' },
        attacks: [
          { attackId: 'fireball', level: 12 },
          { attackId: 'blizzard', level: 16 },
          { attackId: 'lightning_bolt', level: 20 },
        ],
        evolutions: [
          {
            id: 'pyromancer',
            name: { es: 'Piromante', en: 'Pyromancer' },
            attacks: [
              { attackId: 'fireball', level: 1 },
              { attackId: 'inferno', level: 28 },
            ],
            evolutions: [],
          },
          {
            id: 'cryomancer',
            name: { es: 'Gelomante', en: 'Cryomancer' },
            attacks: [
              { attackId: 'blizzard', level: 1 },
              { attackId: 'deluge', level: 28 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'shaman',
        name: { es: 'Chamán', en: 'Shaman' },
        attacks: [
          { attackId: 'gust', level: 12 },
          { attackId: 'lightning_bolt', level: 16 },
          { attackId: 'focus', level: 18 },
        ],
        evolutions: [
          {
            id: 'electromancer',
            name: { es: 'Electromante', en: 'Electromancer' },
            attacks: [
              { attackId: 'lightning_bolt', level: 1 },
              { attackId: 'electric_storm', level: 28 },
            ],
            evolutions: [],
          },
          {
            id: 'aeromancer',
            name: { es: 'Aeromante', en: 'Aeromancer' },
            attacks: [
              { attackId: 'gust', level: 1 },
              { attackId: 'tornado', level: 28 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
