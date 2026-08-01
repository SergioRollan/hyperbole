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
      { attackId: 'fire_1', level: 1 },
      { attackId: 'thunder_1', level: 2 },
      { attackId: 'ice_1', level: 3 },
      { attackId: 'wind_1', level: 4 },
      { attackId: 'grimoire_1', level: 8 },
      { attackId: 'ice_2', level: 11 },
      { attackId: 'fire_2', level: 12 },
      { attackId: 'wind_2', level: 13 },
      { attackId: 'thunder_2', level: 15 },
    ],
    evolutions: [
      {
        id: 'archmage',
        name: { es: 'Archimago', en: 'Archmage' },
        attacks: [
          { attackId: 'fire_3', level: 1 },
          { attackId: 'ice_3', level: 1 },
          { attackId: 'passive_up_1', level: 5 },
          { attackId: 'passive_up_3', level: 7 },
          { attackId: 'grimoire_2', level: 8 },
          { attackId: 'ice_4', level: 10 },
          { attackId: 'fire_4', level: 12 },
          { attackId: 'passive_atr_2', level: 16 },
          { attackId: 'fire_5', level: 19 },
          { attackId: 'ice_5', level: 20 },
        ],
        evolutions: [
          {
            id: 'pyromancer',
            name: { es: 'Piromante', en: 'Pyromancer' },
            attacks: [
              { attackId: 'fire_6', level: 1 },
              { attackId: 'ailment_burn', level: 2 },
              { attackId: 'passive_ev_1', level: 5 },
              { attackId: 'passive_up_35', level: 8 },
              { attackId: 'passive_up_2', level: 10 },
              { attackId: 'fire_7', level: 12 },
              { attackId: 'passive_spend_2', level: 14 },
              { attackId: 'fire_8', level: 15 },
              { attackId: 'break_3', level: 16 },
              { attackId: 'ailment_burn_a', level: 20 },
              { attackId: 'passive_resist_1', level: 23 },
              { attackId: 'fire_9', level: 25 },
            ],
            evolutions: [],
          },
          {
            id: 'cryomancer',
            name: { es: 'Gelomante', en: 'Cryomancer' },
            attacks: [
              { attackId: 'ice_6', level: 1 },
              { attackId: 'ailment_freeze', level: 2 },
              { attackId: 'passive_ev_2', level: 5 },
              { attackId: 'passive_up_36', level: 8 },
              { attackId: 'passive_up_4', level: 10 },
              { attackId: 'ice_7', level: 12 },
              { attackId: 'passive_spend_2', level: 14 },
              { attackId: 'ice_8', level: 15 },
              { attackId: 'break_4', level: 16 },
              { attackId: 'ailment_freeze_a', level: 20 },
              { attackId: 'passive_resist_2', level: 23 },
              { attackId: 'ice_9', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'shaman',
        name: { es: 'Chamán', en: 'Shaman' },
        attacks: [
          { attackId: 'thunder_3', level: 1 },
          { attackId: 'wind_3', level: 1 },
          { attackId: 'passive_up_5', level: 5 },
          { attackId: 'passive_up_7', level: 7 },
          { attackId: 'grimoire_3', level: 8 },
          { attackId: 'wind_4', level: 10 },
          { attackId: 'thunder_4', level: 12 },
          { attackId: 'passive_atr_2', level: 16 },
          { attackId: 'thunder_5', level: 19 },
          { attackId: 'wind_5', level: 20 },
        ],
        evolutions: [
          {
            id: 'electromancer',
            name: { es: 'Electromante', en: 'Electromancer' },
            attacks: [
              { attackId: 'thunder_6', level: 1 },
              { attackId: 'ailment_paralysis', level: 2 },
              { attackId: 'passive_ev_3', level: 5 },
              { attackId: 'passive_up_37', level: 8 },
              { attackId: 'passive_up_6', level: 10 },
              { attackId: 'thunder_7', level: 12 },
              { attackId: 'passive_spend_2', level: 14 },
              { attackId: 'thunder_8', level: 15 },
              { attackId: 'break_5', level: 16 },
              { attackId: 'ailment_paralysis_a', level: 20 },
              { attackId: 'passive_resist_3', level: 23 },
              { attackId: 'thunder_9', level: 25 },
            ],
            evolutions: [],
          },
          {
            id: 'aeromancer',
            name: { es: 'Aeromante', en: 'Aeromancer' },
            attacks: [
              { attackId: 'wind_6', level: 1 },
              { attackId: 'ailment_dizzy', level: 2 },
              { attackId: 'passive_ev_4', level: 5 },
              { attackId: 'passive_up_38', level: 8 },
              { attackId: 'passive_up_8', level: 10 },
              { attackId: 'wind_7', level: 12 },
              { attackId: 'passive_spend_2', level: 14 },
              { attackId: 'wind_8', level: 15 },
              { attackId: 'break_6', level: 16 },
              { attackId: 'ailment_dizzy_a', level: 20 },
              { attackId: 'passive_resist_4', level: 23 },
              { attackId: 'wind_9', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
