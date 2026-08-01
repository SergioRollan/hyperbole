import type { EvolutionLine } from '../../domain'

/**
 * ARTIST -> Jester / Charlatan
 *   Jester    -> Bard / Dancer
 *   Charlatan -> Trickster / Magnate
 */
export const artistLine: EvolutionLine = {
  id: 'artist',
  name: { es: 'Artista', en: 'Artist' },
  icon: 'artist',
  root: {
    id: 'artist',
    name: { es: 'Artista', en: 'Artist' },
    attacks: [
      { attackId: 'rapier_1', level: 1 },
      { attackId: 'overworld_6', level: 3 },
      { attackId: 'ailment_despair', level: 5 },
      { attackId: 'tricks_1', level: 6 },
      { attackId: 'rapier_2', level: 8 },
      { attackId: 'ailment_confusion', level: 10 },
      { attackId: 'rapier_3', level: 12 },
      { attackId: 'overworld_7', level: 13 },
      { attackId: 'music_1', level: 15 },
    ],
    evolutions: [
      {
        id: 'jester',
        name: { es: 'Bufón', en: 'Jester' },
        attacks: [
          { attackId: 'dagger_3', level: 1 },
          { attackId: 'rapier_3', level: 1 },
          { attackId: 'dagger_2', level: 4 },
          { attackId: 'ailment_sleep', level: 6 },
          { attackId: 'rapier_4', level: 8 },
          { attackId: 'music_2', level: 11 },
          { attackId: 'crit_1', level: 14 },
          { attackId: 'dagger_4', level: 16 },
          { attackId: 'ailment_confusion_a', level: 18 },
          { attackId: 'rapier_5', level: 20 },
        ],
        evolutions: [
          {
            id: 'bard',
            name: { es: 'Bardo', en: 'Bard' },
            attacks: [
              { attackId: 'double_2', level: 1 },
              { attackId: 'double_5', level: 1 },
              { attackId: 'thunder_3', level: 5 },
              { attackId: 'ailment_sleep_a', level: 8 },
              { attackId: 'thunder_4', level: 10 },
              { attackId: 'support_1', level: 12 },
              { attackId: 'crit_2', level: 14 },
              { attackId: 'thunder_5', level: 15 },
              { attackId: 'double_3', level: 20 },
              { attackId: 'double_6', level: 20 },
              { attackId: 'support_3', level: 24 },
              { attackId: 'music_6', level: 25 },
            ],
            evolutions: [],
          },
          {
            id: 'dancer',
            name: { es: 'Bailarín', en: 'Dancer' },
            attacks: [
              { attackId: 'music_3', level: 1 },
              { attackId: 'katana_4', level: 1 },
              { attackId: 'wind_3', level: 5 },
              { attackId: 'rapier_6', level: 8 },
              { attackId: 'wind_4', level: 10 },
              { attackId: 'break_2', level: 12 },
              { attackId: 'passive_up_26', level: 14 },
              { attackId: 'wind_5', level: 15 },
              { attackId: 'rapier_7', level: 16 },
              { attackId: 'music_4', level: 20 },
              { attackId: 'rapier_8', level: 23 },
              { attackId: 'music_5', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'charlatan',
        name: { es: 'Farsante', en: 'Faker' },
        attacks: [
          { attackId: 'tricks_2', level: 1 },
          { attackId: 'money_1', level: 1 },
          { attackId: 'dagger_3', level: 4 },
          { attackId: 'taru_4', level: 5 },
          { attackId: 'mace_4', level: 7 },
          { attackId: 'raku_2', level: 8 },
          { attackId: 'money_2', level: 9 },
          { attackId: 'suku_4', level: 11 },
          { attackId: 'ailment_rage', level: 16 },
          { attackId: 'dagger_5', level: 20 },
        ],
        evolutions: [
          {
            id: 'trickster',
            name: { es: 'Estafador', en: 'Trickster' },
            attacks: [
              { attackId: 'tricks_3', level: 1 },
              { attackId: 'almighty_10', level: 3 },
              { attackId: 'suku_2', level: 5 },
              { attackId: 'raku_4', level: 8 },
              { attackId: 'taru_2', level: 10 },
              { attackId: 'break_1', level: 12 },
              { attackId: 'passive_spend_9', level: 14 },
              { attackId: 'support_2', level: 15 },
              { attackId: 'tricks_4', level: 16 },
              { attackId: 'almighty_11', level: 20 },
              { attackId: 'support_4', level: 24 },
              { attackId: 'tricks_5', level: 25 },
            ],
            evolutions: [],
          },
          {
            id: 'magnate',
            name: { es: 'Magnate', en: 'Magnate' },
            attacks: [
              { attackId: 'money_3', level: 1 },
              { attackId: 'ailment_brainwash', level: 2 },
              { attackId: 'ailment_rage_a', level: 3 },
              { attackId: 'money_6', level: 6 },
              { attackId: 'money_4', level: 7 },
              { attackId: 'ailment_despair_a', level: 8 },
              { attackId: 'passive_up_41', level: 9 },
              { attackId: 'passive_spend_8', level: 14 },
              { attackId: 'passive_up_42', level: 17 },
              { attackId: 'ailment_brainwash_a', level: 20 },
              { attackId: 'money_7', level: 24 },
              { attackId: 'money_5', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
/*
 


              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },
              { attackId: 'missingno', level: 11 },


 */