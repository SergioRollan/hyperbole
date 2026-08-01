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
      { attackId: 'sword_1', level: 1 },
      { attackId: 'mace_1', level: 3 },
      { attackId: 'bow_1', level: 4 },
      { attackId: 'passive_up_23', level: 6 },
      { attackId: 'passive_reg_1', level: 8 },
      { attackId: 'sword_2', level: 11 },
      { attackId: 'mace_2', level: 12 },
      { attackId: 'bow_2', level: 13 },
      { attackId: 'ailm_3', level: 14 },
      { attackId: 'passive_auto_3', level: 15 },
    ],
    evolutions: [
      {
        id: 'samurai',
        name: { es: 'Samurái', en: 'Samurai' },
        attacks: [
          { attackId: 'sword_1', level: 1 },
          { attackId: 'sword_2', level: 1 },
          { attackId: 'katana_1', level: 2 },
          { attackId: 'passive_up_14', level: 7 },
          { attackId: 'overworld_1', level: 10 },
          { attackId: 'katana_2', level: 12 },
          { attackId: 'sword_3', level: 15 },
          { attackId: 'passive_ev_9', level: 18 },
          { attackId: 'warrior_1', level: 19 },
          { attackId: 'katana_3', level: 20 },
        ],
        evolutions: [
          {
            id: 'master_samurai',
            name: { es: 'Maestro samurái', en: 'Master samurai' },
            attacks: [
              { attackId: 'katana_3', level: 1 },
              { attackId: 'ailm_4', level: 4 },
              { attackId: 'sword_4', level: 6 },
              { attackId: 'katana_4', level: 8 },
              { attackId: 'passive_spend_1', level: 9 },
              { attackId: 'sword_5', level: 12 },
              { attackId: 'katana_7', level: 14 },
              { attackId: 'warrior_4', level: 15 },
              { attackId: 'passive_up_24', level: 17 },
              { attackId: 'sword_6', level: 21 },
              { attackId: 'passive_up_25', level: 22 },
              { attackId: 'katana_8', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'barbarian',
        name: { es: 'Bárbaro', en: 'Barbarian' },
        attacks: [
          { attackId: 'mace_1', level: 1 },
          { attackId: 'mace_2', level: 1 },
          { attackId: 'hammer_1', level: 2 },
          { attackId: 'passive_up_15', level: 7 },
          { attackId: 'overworld_2', level: 10 },
          { attackId: 'hammer_2', level: 12 },
          { attackId: 'mace_3', level: 15 },
          { attackId: 'passive_ev_10', level: 18 },
          { attackId: 'warrior_2', level: 19 },
          { attackId: 'hammer_3', level: 20 },
        ],
        evolutions: [
          {
            id: 'berserker',
            name: { es: 'Berserker', en: 'Berserker' },
            attacks: [
              { attackId: 'hammer_3', level: 1 },
              { attackId: 'warrior_5', level: 4 },
              { attackId: 'mace_4', level: 6 },
              { attackId: 'hammer_4', level: 8 },
              { attackId: 'passive_spend_1', level: 9 },
              { attackId: 'mace_5', level: 12 },
              { attackId: 'hammer_7', level: 14 },
              { attackId: 'warrior_6', level: 15 },
              { attackId: 'passive_up_29', level: 17 },
              { attackId: 'mace_6', level: 21 },
              { attackId: 'passive_up_30', level: 22 },
              { attackId: 'hammer_8', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
      {
        id: 'gunslinger',
        name: { es: 'Pistolero', en: 'Gunslinger' },
        attacks: [
          { attackId: 'bow_1', level: 1 },
          { attackId: 'bow_2', level: 1 },
          { attackId: 'crossbow_1', level: 2 },
          { attackId: 'passive_up_16', level: 7 },
          { attackId: 'taru_1', level: 10 },
          { attackId: 'crossbow_2', level: 12 },
          { attackId: 'bow_3', level: 15 },
          { attackId: 'passive_ev_11', level: 18 },
          { attackId: 'warrior_3', level: 19 },
          { attackId: 'crossbow_3', level: 20 },
        ],
        evolutions: [
          {
            id: 'sniper',
            name: { es: 'Francotirador', en: 'Sniper' },
            attacks: [
              { attackId: 'crossbow_3', level: 1 },
              { attackId: 'warrior_7', level: 4 },
              { attackId: 'bow_4', level: 6 },
              { attackId: 'crossbow_4', level: 8 },
              { attackId: 'passive_spend_1', level: 9 },
              { attackId: 'crossbow_5', level: 12 },
              { attackId: 'crossbow_7', level: 14 },
              { attackId: 'bow_6', level: 15 },
              { attackId: 'passive_up_32', level: 17 },
              { attackId: 'crossbow_6', level: 21 },
              { attackId: 'passive_up_33', level: 22 },
              { attackId: 'crossbow_8', level: 25 },
            ],
            evolutions: [],
          },
        ],
      },
    ],
  },
}
