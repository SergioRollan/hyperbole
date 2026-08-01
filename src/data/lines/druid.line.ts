import type { EvolutionLine } from '../../domain'

/**
 * DRUID -> Summoner / Scientist
 *   Summoner  -> Spiritualist / Necromancer
 *   Scientist -> Astromancer / Chronomancer
 *
 * Dark mage / astrologer / scientist theme — not nature-based.
 */
export const druidLine: EvolutionLine = {
  id: 'druid',
  name: { es: 'Druida', en: 'Druid' },
  icon: 'druid',
  root: {
    id: 'druid',
    name: { es: 'Druida', en: 'Druid' },
    attacks: [
      { attackId: 'bless_1O', level: 1 },
      { attackId: 'curse_1O', level: 1 },
      { attackId: 'summon_3', level: 4 },
      { attackId: 'summon_1', level: 6 },
      { attackId: 'summon_2', level: 8 },
      { attackId: 'psychic_1', level: 9 },
      { attackId: 'nuclear_1', level: 10 },
      { attackId: 'time_1', level: 13 },
      { attackId: 'time_2', level: 14 },
      { attackId: 'ailm_5', level: 15 },
    ],
    evolutions: [
      {
        id: 'summoner',
        name: { es: 'Invocador', en: 'Summoner' },
        attacks: [
          { attackId: 'summon_7', level: 1 },
          { attackId: 'bless_2O', level: 1 },
          { attackId: 'curse_2O', level: 1 },
          { attackId: 'summon_19', level: 5 },
          { attackId: 'summon_8', level: 10 },
          { attackId: 'passive_atr_6', level: 12 },
          { attackId: 'passive_up_45', level: 17 },
          { attackId: 'zombie_1', level: 18 },
          { attackId: 'summon_9', level: 19 },
          { attackId: 'summon_10', level: 20 },
        ],
        evolutions: [
          {
            id: 'spiritualist',
            name: { es: 'Espiritista', en: 'Spirit Master' },
            attacks: [
              { attackId: 'summon_4', level: 1 },
              { attackId: 'summon_5', level: 1 },
              { attackId: 'summon_6', level: 1 },
              { attackId: 'summon_11', level: 5 },
              { attackId: 'summon_19', level: 9 },
              { attackId: 'summon_12', level: 11 },
              { attackId: 'summon_13', level: 14 },
              { attackId: 'summon_14', level: 16 },
              { attackId: 'summon_15', level: 18 },
              { attackId: 'summon_16', level: 21 },
              { attackId: 'summon_17', level: 22 },
              { attackId: 'summon_18', level: 25 },
            ],
            evolutions: [],
          },
          {
            id: 'necromancer',
            name: { es: 'Necromante', en: 'Necromancer' },
            attacks: [
              { attackId: 'bless_3O', level: 1 },
              { attackId: 'curse_3O', level: 1 },
              { attackId: 'zombie_1', level: 1 },
              { attackId: 'passive_up_44', level: 5 },
              { attackId: 'passive_up_20', level: 10 },
              { attackId: 'curse_4O', level: 12 },
              { attackId: 'bless_4O', level: 12 },
              { attackId: 'almighty_9', level: 15 },
              { attackId: 'passive_up_46', level: 18 },
              { attackId: 'curse_5O', level: 20 },
              { attackId: 'bless_5O', level: 20 },
              { attackId: 'zombie_2', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'scientist',
        name: { es: 'Científico', en: 'Scientist' },
        attacks: [
          { attackId: 'nuclear_2', level: 1 },
          { attackId: 'psychic_2', level: 1 },
          { attackId: 'time_3', level: 4 },
          { attackId: 'space_6', level: 7 },
          { attackId: 'time_4', level: 10 },
          { attackId: 'space_7', level: 15 },
          { attackId: 'nuclear_3', level: 16 },
          { attackId: 'psychic_3', level: 17 },
          { attackId: 'space_8', level: 20 },
          { attackId: 'space_2', level: 20 },
        ],
        evolutions: [
          {
            id: 'astromancer',
            name: { es: 'Astromante', en: 'Astromancer' },
            attacks: [
              { attackId: 'space_9', level: 1 },
              { attackId: 'nuclear_4', level: 3 },
              { attackId: 'space_5', level: 7 },
              { attackId: 'nuclear_5', level: 10 },
              { attackId: 'ailm_6', level: 11 },
              { attackId: 'space_3', level: 12 },
              { attackId: 'space_4', level: 12 },
              { attackId: 'space_1', level: 15 },
              { attackId: 'space_10', level: 19 },
              { attackId: 'space_11', level: 19 },
              { attackId: 'space_12', level: 21 },
              { attackId: 'space_13', level: 25 },
            ],
            evolutions: [],
          },
          {
            id: 'chronomancer',
            name: { es: 'Cronomante', en: 'Chronomancer' },
            attacks: [
              { attackId: 'time_5', level: 1 },
              { attackId: 'time_6', level: 1 },
              { attackId: 'psychic_4', level: 3 },
              { attackId: 'passive_atr_8', level: 4 },
              { attackId: 'time_10', level: 7 },
              { attackId: 'psychic_5', level: 10 },
              { attackId: 'time_7', level: 11 },
              { attackId: 'time_8', level: 12 },
              { attackId: 'passive_spend_10', level: 15 },
              { attackId: 'time_11', level: 19 },
              { attackId: 'time_12', level: 21 },
              { attackId: 'time_13', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
