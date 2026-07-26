import type { Attack } from '../../domain'

/**
 * CENTRAL attack registry, indexed by id.
 *
 * Attacks are decoupled from classes: multiple classes can reference the same
 * id in their `attacks` list. To add an attack, create a new entry here and
 * reference it from an evolution line.
 *
 * Name and description are localized: provide every supported locale.
 *
 * Template:
 *   new_attack: {
 *     id: 'new_attack',
 *     name: { es: 'Nombre', en: 'Name' },
 *     description: { es: 'Qué hace.', en: 'What it does.' },
 *     element: 'fire', // see AttackElement
 *     cost: { kind: 'mp', amount: 10 }, // 'mp' | 'hp_percent' | 'money'
 *   },
 *
 * Grouped by element for easy icon coverage overview.
 */
export const ATTACKS: Record<string, Attack> = {

  
  // --- grimorio y bastón ---


  grimoire_1: {
    id: 'grimoire_1',
    name: { es: 'Lección introductoria', en: 'Introduction lecture' },
    description: {
      es: 'Con grimorio. Inflige daño físico contundente medio a un enemigo.',
      en: 'With grimoire. Deals medium blunt physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 4 },
  },
  grimoire_2: {
    id: 'grimoire_2',
    name: { es: 'Lección magistral', en: 'Master lecture' },
    description: {
      es: 'Con grimorio. Inflige daño físico contundente medio a todos los enemigos.',
      en: 'With grimoire. Deals medium blunt physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },
  grimoire_3: {
    id: 'grimoire_3',
    name: { es: 'Lección supervisada', en: 'Supervised lecture' },
    description: {
      es: 'Con grimorio. Inflige daño físico contundente grave a un enemigo.',
      en: 'With grimoire. Deals heavy blunt physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },
  staff_1: {
    id: 'staff_1',
    name: { es: 'Bastonazo', en: 'Staff blow' },
    description: {
      es: 'Con bastón. Inflige daño físico contundente medio a un enemigo.',
      en: 'With staff. Deals medium blunt physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 4 },
  },
  staff_2: {
    id: 'staff_2',
    name: { es: 'Bronca', en: 'Ruction' },
    description: {
      es: 'Con bastón. Inflige daño físico contundente medio a todos los enemigos.',
      en: 'With staff. Deals medium blunt physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },
  staff_3: {
    id: 'staff_3',
    name: { es: 'Gran bastonazo', en: 'Staff big blow' },
    description: {
      es: 'Con bastón. Inflige daño físico contundente grave a un enemigo.',
      en: 'With staff. Deals heavy blunt physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },

  // --- dagger ---
  
  dagger_1: {
    id: 'dagger_1',
    name: { es: 'Corte fugaz', en: 'Quick slash' },
    description: {
      es: 'Con daga. Inflige daño físico cortante leve a un enemigo.',
      en: 'With dagger. Deals light slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 4 },
  },
  dagger_2: {
    id: 'dagger_2',
    name: { es: 'Puñalada múltiple', en: 'Multistabs' },
    description: {
      es: 'Con daga. Inflige daño físico cortante leve a todos los enemigos.',
      en: 'With dagger. Deals light slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },
  dagger_3: {
    id: 'dagger_3',
    name: { es: 'Super corte', en: 'Super cut' },
    description: {
      es: 'Con daga. Inflige daño físico cortante medio a un enemigo.',
      en: 'With dagger. Deals medium slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 8 },
  },
  dagger_4: {
    id: 'dagger_4',
    name: { es: 'Remolino de acero', en: 'Steel whirlwind' },
    description: {
      es: 'Con daga. Inflige daño físico cortante medio a todos los enemigos.',
      en: 'With dagger. Deals medium slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 18 },
  },
  dagger_5: {
    id: 'dagger_5',
    name: { es: 'Danza sangrienta', en: 'Bloody dance' },
    description: {
      es: 'Con daga. Inflige daño físico cortante grave a un enemigo.',
      en: 'With dagger. Deals heavy slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 12 },
  },
  dagger_5nm: {
    id: 'dagger_5nm',
    name: { es: 'Rebanada mística', en: 'Mystic cut' },
    description: {
      es: 'Con daga. Inflige daño físico cortante grave a un enemigo. Inflige mucho más daño a enemigos no-muertos y zombis.',
      en: 'With dagger. Deals heavy slash physical damage to one enemy. Inflicts far greater damage to zombies and undead creatures.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 17 },
  },
  dagger_5h: {
    id: 'dagger_5h',
    name: { es: 'Rebanada perfecta', en: 'Perfect cut' },
    description: {
      es: 'Con daga. Inflige daño físico cortante grave a un enemigo. Inflige mucho más daño a bestias y animales.',
      en: 'With dagger. Deals heavy slash physical damage to one enemy. Inflicts far greater damage to beasts and animals.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 17 },
  },
  dagger_6: {
    id: 'dagger_6',
    name: { es: 'Lluvia de acero', en: 'Steel rain' },
    description: {
      es: 'Con daga. Inflige daño físico cortante grave a todos los enemigos.',
      en: 'With dagger. Deals heavy slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 28 },
  },
  dagger_7: {
    id: 'dagger_7',
    name: { es: 'Eclipse carmesí', en: 'Crimson eclipse' },
    description: {
      es: 'Con daga. Inflige daño físico cortante severo a un enemigo.',
      en: 'With dagger. Deals severe slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 20 },
  },
  dagger_8: {
    id: 'dagger_8',
    name: { es: 'Diluvio de dagas', en: 'Flood of daggers' },
    description: {
      es: 'Con daga. Después de terminar el turno del jugador, infligirá daño físico cortante grave a todos los enemigos, una vez por cada aliado que haya actuado después.',
      en: 'With dagger. After player turn is over, deals heavy slash physical damage to all enemies, once for every ally that has acted after.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 44 },
  },
  dagger_9: {
    id: 'dagger_9',
    name: { es: 'Cortos sueños', en: 'Swift dreams' },
    description: {
      es: 'Con daga. Inflige daño cortante extremo a un enemigo que se vuelve poderoso según la agilidad del atacante.',
      en: 'With dagger. Deals extreme slash damage to one enemy, more powerful the more agilty the attacker has.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 48 },
  },

  // --- sword ---
  
  sword_1: {
    id: 'sword_1',
    name: { es: 'Corte potente', en: 'Power slash' },
    description: {
      es: 'Con espada. Inflige daño físico cortante leve a un enemigo.',
      en: 'With sword. Deals light slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 4 },
  },
  sword_2: {
    id: 'sword_2',
    name: { es: 'Corte vacío', en: 'Vacuum slash' },
    description: {
      es: 'Con espada. Inflige daño físico cortante leve a todos los enemigos.',
      en: 'With sword. Deals light slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },
  sword_3: {
    id: 'sword_3',
    name: { es: 'Tajo cruzado', en: 'Cross slash' },
    description: {
      es: 'Con espada. Inflige daño físico cortante medio a un enemigo.',
      en: 'With sword. Deals medium slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 8 },
  },
  sword_4: {
    id: 'sword_4',
    name: { es: 'Tormento de espadas', en: 'Sword torment' },
    description: {
      es: 'Con espada. Inflige daño físico cortante medio a todos los enemigos.',
      en: 'With sword. Deals medium slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 18 },
  },
  sword_5: {
    id: 'sword_5',
    name: { es: 'Filo espiral', en: 'Spiral blade' },
    description: {
      es: 'Con espada. Inflige daño físico cortante grave a un enemigo. Tiene precisión muy alta.',
      en: 'With sword. Deals heavy slash physical damage to one enemy. Very low chance of miss.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 14 },
  },
  sword_6: {
    id: 'sword_6',
    name: { es: 'Miriada de cortes', en: 'Thousand cuts' },
    description: {
      es: 'Con espada y katana. Inflige daño físico cortante colosal a todos los enemigos.',
      en: 'With sword. Deals colossal slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 46 },
  },

  // --- katana ---
  
  katana_1: {
    id: 'katana_1',
    name: { es: 'Corte relámpago', en: 'Lightning draw' },
    description: {
      es: 'Con katana. Inflige daño físico cortante leve a un enemigo.',
      en: 'With katana. Deals light slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 4 },
  },
  katana_2: {
    id: 'katana_2',
    name: { es: 'Corte furioso', en: 'Blade of Fury' },
    description: {
      es: 'Con katana. Inflige daño físico cortante leve a todos los enemigos.',
      en: 'With katana. Deals light slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },
  katana_3: {
    id: 'katana_3',
    name: { es: 'Corte tempestad', en: 'Tempest slash' },
    description: {
      es: 'Con katana. Inflige daño físico cortante medio a un enemigo.',
      en: 'With katana. Deals medium slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 8 },
  },
  katana_4: {
    id: 'katana_4',
    name: { es: 'Corte gigante', en: 'Giant slice' },
    description: {
      es: 'Con katana. Inflige daño físico cortante medio a todos los enemigos.',
      en: 'With katana. Deals medium slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 18 },
  },
  katana_5: {
    id: 'katana_5',
    name: { es: 'Filo valiente', en: 'Brave blade' },
    description: {
      es: 'Con katana. Inflige daño físico cortante grave a un enemigo. Alta probabilidad de crítico.',
      en: 'With katana. Deals heavy slash physical damage to one enemy. High chance of critical hit.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 16 },
  },
  katana_6: {
    id: 'katana_6',
    name: { es: 'Katana vorpal', en: 'Vorpal blade' },
    description: {
      es: 'Con katana. Inflige daño físico cortante grave a todos los enemigos.',
      en: 'With katana. Deals heavy slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 28 },
  },
  katana_7: {
    id: 'katana_7',
    name: { es: 'Jugada infinita', en: 'Play of infinite' },
    description: {
      es: 'Con katana. Inflige daño leve cortante leve a un enemigo entre 11 y 14 veces.',
      en: 'With katana. Deals light slash physical damage to one enemy 11 to 14 times.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 33 },
  },

  // --- axe ---
  
  axe_1: {
    id: 'axe_1',
    name: { es: 'Hachazo lateral', en: 'Axe chop' },
    description: {
      es: 'Con hacha. Inflige daño físico cortante leve a un enemigo.',
      en: 'With axe. Deals light slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 4 },
  },
  axe_2: {
    id: 'axe_2',
    name: { es: 'Medialuna', en: 'Half moon' },
    description: {
      es: 'Con hacha. Inflige daño físico cortante leve a todos los enemigos.',
      en: 'With axe. Deals light slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },
  axe_3: {
    id: 'axe_3',
    name: { es: 'Luna creciente', en: 'Crescent moon' },
    description: {
      es: 'Con hacha. Inflige daño físico cortante medio a un enemigo. Nunca falla, pero nunca realiza golpe crítico.',
      en: 'With axe. Deals medium slash physical damage to one enemy. Always hits, but never crits.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 8 },
  },
  axe_4: {
    id: 'axe_4',
    name: { es: 'Luna nueva', en: 'New moon' },
    description: {
      es: 'Con hacha. Inflige daño físico cortante medio a todos los enemigos. Precisión baja pero probabilidad de crítico alta.',
      en: 'With axe. Deals medium slash physical damage to all enemies. Lower chance of hit but higher chance of crit.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 18 },
  },
  axe_5: {
    id: 'axe_5',
    name: { es: 'Luna menguante', en: 'Waning moon' },
    description: {
      es: 'Con hacha. Inflige daño físico cortante grave a un enemigo. Precisión baja pero probabilidad de crítico alta.',
      en: 'With axe. Deals heavy slash physical damage to one enemy. Lower chance of hit but higher chance of crit.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 12 },
  },
  axe_6: {
    id: 'axe_6',
    name: { es: 'Luna llena', en: 'Full moon' },
    description: {
      es: 'Con hacha. Inflige daño físico cortante grave a todos los enemigos. Nunca falla, pero nunca realiza golpe crítico.',
      en: 'With axe. Deals heavy slash physical damage to all enemies. Always hits, but never crits.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 28 },
  },
  axe_7: {
    id: 'axe_7',
    name: { es: 'Ragnarök', en: 'Ragnarök' },
    description: {
      es: 'Con hacha. Inflige daño físico cortante severo a un enemigo.',
      en: 'With axe. Deals severe slash physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 20 },
  },
  axe_8: {
    id: 'axe_8',
    name: { es: 'Valhalla', en: 'Valhalla' },
    description: {
      es: 'Con hacha. Inflige daño físico cortante severo a todos los enemigos.',
      en: 'With axe. Deals severe slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 40 },
  },

  // --- fists ---
  
  fists_1: {
    id: 'fists_1',
    name: { es: 'Demolición', en: 'Crushing jab' },
    description: {
      es: 'Con puños. Inflige daño físico contundente leve a un enemigo.',
      en: 'With fists. Deals light blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 6 },
  },
  fists_2: {
    id: 'fists_2',
    name: { es: 'Onda de golpes', en: 'Wave of blows' },
    description: {
      es: 'Con puños. Inflige daño físico contundente leve a enemigos aleatorios entre 3 y 5 veces.',
      en: 'With fists. Deals light blunt physical damage to random enemies 3 to 5 times.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 18 },
  },
  fists_3: {
    id: 'fists_3',
    name: { es: 'Gancho brutal', en: 'Brutal hook' },
    description: {
      es: 'Con puños. Inflige daño físico contundente medio a un enemigo.',
      en: 'With fists. Deals medium blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 11 },
  },
  fists_4: {
    id: 'fists_4',
    name: { es: 'Huracán de furia', en: 'Hurricane fury' },
    description: {
      es: 'Con puños. Inflige daño físico contundente medio a todos los enemigos.',
      en: 'With fists. Deals medium blunt physical damage to all enemies.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 19 },
  },
  fists_5: {
    id: 'fists_5',
    name: { es: 'Nudillo nocturno', en: 'Nightly knuckle' },
    description: {
      es: 'Con puños. Inflige daño físico contundente grave a un enemigo. Alta probabilidad de crítico.',
      en: 'With fists. Deals heavy blunt physical damage to one enemy. High chance of a critical hit.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 13 },
  },
  fists_6: {
    id: 'fists_6',
    name: { es: 'Impacto sísmico', en: 'Seismic impact' },
    description: {
      es: 'Con puños. Inflige daño físico contundente grave a todos los enemigos.',
      en: 'With fists. Deals heavy blunt physical damage to all enemies.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 22 },
  },
  fists_7: {
    id: 'fists_7',
    name: { es: 'Mano de Dios', en: 'God\'s hand' },
    description: {
      es: 'Con puños. Inflige daño físico contundente severo a un enemigo.',
      en: 'With fists. Deals severe blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 20 },
  },
  fists_8: {
    id: 'fists_8',
    name: { es: 'Avalancha de rabia', en: 'Avalanche of rage' },
    description: {
      es: 'Con puños. Inflige daño físico contundente medio a todos los enemigos entre 4 y 6 veces. Si se usa justo después de curarse del estado Furia, hace el doble de daño.',
      en: 'With fists. Deals medium blunt physical damage to all enemies 4 to 6 times. If used immediately after recovering from Rage, deals double the damage.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 25 },
  },
  fists_7s: {
    id: 'fists_7s',
    name: { es: 'Golpe anestésico', en: 'Anesthesic fist' },
    description: {
      es: 'Con puños. Inflige daño físico contundente severo a un enemigo. Probabilidad media de infligir sueño.',
      en: 'With fists. Deals severe blunt physical damage to one enemy. Medium chance of inflicting sleep.',
    },
    element: 'blunt',
    cost: { kind: 'hp_percent', amount: 28 },
  },

  // --- mace ---
  
    mace_1: {
    id: 'mace_1',
    name: { es: 'Golpe pesado', en: 'Heavy strike' },
    description: {
      es: 'Con maza. Inflige daño físico contundente leve a un enemigo.',
      en: 'With mace. Deals light blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 4 },
  },
  mace_2: {
    id: 'mace_2',
    name: { es: 'Barrido ferreo', en: 'Iron sweep' },
    description: {
      es: 'Con maza. Inflige daño físico contundente leve a todos los enemigos.',
      en: 'With mace. Deals light blunt physical damage to all enemies.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 10 },
  },
  mace_3: {
    id: 'mace_3',
    name: { es: 'Quebrantahuesos', en: 'Bone breaker' },
    description: {
      es: 'Con maza. Inflige daño físico contundente medio a un enemigo. Baja su ataque en un nivel durante un turno.',
      en: 'With mace. Deals medium blunt physical damage to one enemy. Lowers enemy\'s attack by one level for one turn.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 11 },
  },
  mace_4: {
    id: 'mace_4',
    name: { es: 'Temblor', en: 'Quake' },
    description: {
      es: 'Con maza. Inflige daño físico contundente medio a todos los enemigos.',
      en: 'With mace. Deals medium blunt physical damage to all enemies.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 18 },
  },
  mace_5: {
    id: 'mace_5',
    name: { es: 'Aplastamiento', en: 'Crushing blow' },
    description: {
      es: 'Con maza. Inflige daño físico contundente grave a un enemigo. Baja su precisión y evasión en un nivel durante un turno.',
      en: 'With mace. Deals heavy blunt physical damage to one enemy. Lowers enemy\'s hit/evasion by one level for one turn.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 15 },
  },
  mace_6: {
    id: 'mace_6',
    name: { es: 'Ola de calor', en: 'Heat wave' },
    description: {
      es: 'Con maza. Inflige daño físico contundente grave a todos los enemigos.',
      en: 'With mace. Deals heavy blunt physical damage to all enemies.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 28 },
  },
  mace_7: {
    id: 'mace_7',
    name: { es: 'Fractura craneal', en: 'Skull crack' },
    description: {
      es: 'Con maza. Inflige daño físico contundente colosal a un enemigo.',
      en: 'With mace. Deals colossal blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 39 },
  },
  mace_5h: {
    id: 'mace_5h',
    name: { es: 'Juicio maestro', en: 'Master judgement' },
    description: {
      es: 'Con maza. Inflige daño físico contundente grave a un enemigo. Inflige mucho más daño a enemigos humanos o humanoides.',
      en: 'With mace. Deals heavy blunt physical damage to one enemy. Inflicts far greater damage to human or humanoid enemies.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 17 },
  },
  mace_5m: {
    id: 'mace_5pva',
    name: { es: 'Juicio metálico', en: 'Metal judgement' },
    description: {
      es: 'Con maza. Inflige daño físico contundente grave a un enemigo. Inflige mucho más daño a enemigos equipados con armadura pesada.',
      en: 'With mace. Deals heavy blunt physical damage to one enemy. Inflicts far greater damage enemies equipped with heavy armor.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 17 },
  },
  mace_5ci: {
    id: 'mace_5pva',
    name: { es: 'Juicio de otro mundo', en: 'Out of world judgement' },
    description: {
      es: 'Con maza. Inflige daño físico contundente grave a un enemigo. Inflige mucho más daño a enemigos celestiales e infernales.',
      en: 'With mace. Deals heavy blunt physical damage to one enemy. Inflicts far greater damage to celestial and infernal creatures.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 17 },
  },


  // --- hammer ---
    
  hammer_1: {
    id: 'hammer_1',
    name: { es: 'Martillazo frontal', en: 'Hammer Strike' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente leve a un enemigo.',
      en: 'With hammer. Deals light blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 4 },
  },
  hammer_2: {
    id: 'hammer_2',
    name: { es: 'Giro espontáneo', en: 'Instant spin' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente leve a todos los enemigos.',
      en: 'With hammer. Deals light blunt physical damage to all enemies.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 10 },
  },
  hammer_3: {
    id: 'hammer_3',
    name: { es: 'Ofensiva', en: 'Bash' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente medio a un enemigo.',
      en: 'With hammer. Deals medium blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 8 },
  },
  hammer_4: {
    id: 'hammer_4',
    name: { es: 'Bola de demolición', en: 'Wrecking ball' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente medio a todos los enemigos.',
      en: 'With hammer. Deals medium blunt physical damage to all enemies.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 18 },
  },
  hammer_5: {
    id: 'hammer_5',
    name: { es: 'Home run', en: 'Home run' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente grave a un enemigo.',
      en: 'With hammer. Deals heavy blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 12 },
  },
  hammer_6: {
    id: 'hammer_6',
    name: { es: 'Artes akásicas', en: 'Akasha arts' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente grave a todos los enemigos. Probalidad ligeramente más alta de crítico.',
      en: 'With hammer. Deals heavy blunt physical damage to all enemies. Slightly higher chance of critical hit.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 28 },
  },
  hammer_7: {
    id: 'hammer_7',
    name: { es: 'Prensa de titán', en: 'Titan press' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente severo a un enemigo.',
      en: 'With hammer. Deals severe blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 20 },
  },
  hammer_8: {
    id: 'hammer_8',
    name: { es: 'Apocalipsis Real', en: 'Royal apocalypse' },
    description: {
      es: 'Con martillo y maza. Inflige daño físico contundente extremo a un enemigo.',
      en: 'With hammer and mace. Deals extreme blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 46 },
  },


  // --- shield ---
    
  shield_1: {
    id: 'shield_1',
    name: { es: 'Placaje escudero', en: 'Shield bash' },
    description: {
      es: 'Con escudo. Inflige daño físico contundente leve a un enemigo. El daño será mayor según la Resistencia del atacante.',
      en: 'With shield. Deals light blunt physical damage to one enemy. Deals larger damage depending on the attacker\'s Resistance.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 5 },
  },
  shield_2: {
    id: 'shield_2',
    name: { es: 'Muro de hierro', en: 'Iron wall' },
    description: {
      es: 'Con escudo. Inflige daño físico contundente leve a todos los enemigos. El daño será mayor según la Resistencia del atacante.',
      en: 'With shield. Deals light blunt physical damage to all enemies. Deals larger damage depending on the attacker\'s Resistance.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 12 },
  },
  shield_3: {
    id: 'shield_3',
    name: { es: 'Embestida escudera', en: 'Shield charge' },
    description: {
      es: 'Con escudo. Inflige daño físico contundente medio a un enemigo. El daño será mayor según la Resistencia del atacante.',
      en: 'With shield. Deals medium blunt physical damage to one enemy. Deals larger damage depending on the attacker\'s Resistance.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 10 },
  },
  shield_4: {
    id: 'shield_4',
    name: { es: 'Onda de choque', en: 'Shockwave' },
    description: {
      es: 'Con escudo. Inflige daño físico contundente medio a todos los enemigos. El daño será mayor según la Resistencia del atacante. Daño extra desde la fila de delante.',
      en: 'With shield. Deals medium blunt physical damage to all enemies. Deals larger damage depending on the attacker\'s Resistance. Extra damage if in front row.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 22 },
  },
  shield_5: {
    id: 'shield_5',
    name: { es: 'Bastión implacable', en: 'Bloody dance' },
    description: {
      es: 'Con escudo. Inflige daño físico contundente grave a un enemigo. El daño será mayor según la Resistencia del atacante y sus niveles de aumento de defensa. Daño extra desde la fila de delante.',
      en: 'With shield. Deals heavy blunt physical damage to one enemy. Deals larger damage depending on the attacker\'s Resistance and their defense buff level. Extra damage if in front row.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 18 },
  },
  shield_6: {
    id: 'shield_6',
    name: { es: 'Fortaleza viviente', en: 'Living fortress' },
    description: {
      es: 'Con escudo. Inflige daño físico contundente grave a todos los enemigos. El daño será mayor según la Resistencia del atacante.',
      en: 'With shield. Deals heavy blunt physical damage to all enemies. Deals larger damage depending on the attacker\'s Resistance.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 30 },
  },
  shield_7: {
    id: 'shield_7',
    name: { es: 'Barrido inexpugnable', en: 'Formidable sweep' },
    description: {
      es: 'Con escudo. Inflige daño físico contundente severo a un enemigo. El daño será mayor según la Resistencia del atacante.',
      en: 'With shield. Deals severe blunt physical damage to one enemy. Deals larger damage depending on the attacker\'s Resistance.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 22 },
  },
  shield_8: {
    id: 'shield_8',
    name: { es: 'Égida suprema', en: 'Supreme Aegis' },
    description: {
      es: 'Con escudo. Inflige daño físico contundente grave a todos los enemigos. El daño será mayor según la Resistencia del atacante y sus niveles de aumento de defensa. Daño extra desde la fila de delante. Aumenta en un grado la resistencia a todas las afinidades durante un turno. No acumulable.',
      en: 'With shield. Deals heavy blunt physical damage to all enemies. Deals larger damage depending on the attacker\'s Resistance and their defense buff level. Extra damage if in front row. Increase resistence of all affinities by one grade for one turn. Does not stack.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 51 },
  },


  // --- lance ---
    
  lance_1: {
    id: 'lance_1',
    name: { es: 'Pinchazo', en: 'Spike' },
    description: {
      es: 'Con lanza. Inflige daño físico perforante leve a un enemigo.',
      en: 'With lance. Deals light pierce physical damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 4 },
  },
  lance_2: {
    id: 'lance_2',
    name: { es: 'Barrido perforante', en: 'Piercing sweep' },
    description: {
      es: 'Con lanza. Inflige daño físico perforante leve a todos los enemigos.',
      en: 'With lance. Deals light pierce physical damage to all enemies.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 10 },
  },
  lance_3: {
    id: 'lance_3',
    name: { es: 'Perforación potente', en: 'Power pierce' },
    description: {
      es: 'Con lanza. Inflige daño físico perforante medio a un enemigo.',
      en: 'With lance. Deals medium pierce physical damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 8 },
  },
  lance_4: {
    id: 'lance_4',
    name: { es: 'Colmillo de dragón', en: 'Dragon fang' },
    description: {
      es: 'Con lanza. Inflige daño físico perforante medio a todos los enemigos.',
      en: 'With lance. Deals medium pierce physical damage to all enemies.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 18 },
  },
  lance_5: {
    id: 'lance_5',
    name: { es: 'Dragón ascendente', en: 'Ascending dragon' },
    description: {
      es: 'Con lanza. Inflige daño físico perforante grave a un enemigo.',
      en: 'With lance. Deals heavy pierce physical damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 12 },
  },
  lance_6: {
    id: 'lance_6',
    name: { es: 'Giro a reacción', en: 'Engine spinning' },
    description: {
      es: 'Con lanza. Inflige daño físico perforante grave a todos los enemigos.',
      en: 'With lance. Deals heavy pierce physical damage to all enemies.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 28 },
  },
  lance_7: {
    id: 'lance_7',
    name: { es: 'Fuerza primigenia', en: 'Primal force' },
    description: {
      es: 'Con lanza. Inflige daño físico perforante severo a un enemigo.',
      en: 'With lance. Deals severe pierce physical damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 20 },
  },
  lance_8: {
    id: 'lance_8',
    name: { es: 'Lanza de la justicia', en: 'Justice spear' },
    description: {
      es: 'Con lanza. Inflige daño físico perforante colosal a un enemigo.',
      en: 'With lance. Deals severe pierce physical damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 46 },
  },

  // --- rapier ---
    
  rapier_1: {
    id: 'rapier_1',
    name: { es: 'Estocada', en: 'Thrust' },
    description: {
      es: 'Con florete. Inflige daño físico perforante leve a un enemigo.',
      en: 'With rapier. Deals light pierce physical damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 4 },
  },
  rapier_2: {
    id: 'rapier_2',
    name: { es: 'Estrella esgrimista', en: 'Fencing star' },
    description: {
      es: 'Con florete. Inflige daño físico perforante leve a todos los enemigos.',
      en: 'With rapier. Deals light pierce physical damage to all enemies.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 10 },
  },
  rapier_3: {
    id: 'rapier_3',
    name: { es: 'Estocada doble', en: 'Double thrust' },
    description: {
      es: 'Con florete. Inflige daño físico perforante leve a un enemigo dos veces.',
      en: 'With rapier. Deals light pierce physical damage to one enemy twice.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 8 },
  },
  rapier_4: {
    id: 'rapier_4',
    name: { es: 'Rosa sangrienta', en: 'Bloody rose' },
    description: {
      es: 'Con florete. Inflige daño físico perforante medio a todos los enemigos.',
      en: 'With rapier. Deals medium pierce physical damage to all enemies.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 18 },
  },
  rapier_5: {
    id: 'rapier_5',
    name: { es: 'Estocadas concentradas', en: 'Focus thrusts' },
    description: {
      es: 'Con florete. Inflige daño físico perforante leve a enemigos aleatorios entre 3 y 6 veces.',
      en: 'With rapier. Deals heavy pierce physical damage to random enemies 3 to 6 times.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 12 },
  },
  rapier_6: {
    id: 'rapier_6',
    name: { es: 'Rapsodia mortal', en: 'Deadly Rhapsody' },
    description: {
      es: 'Con florete. Inflige daño físico perforante grave a todos los enemigos.',
      en: 'With rapier. Deals heavy pierce physical damage to all enemies.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 28 },
  },
  rapier_7: {
    id: 'rapier_7',
    name: { es: 'Centenar de estocadas', en: 'Hundred thrusts' },
    description: {
      es: 'Con florete. Inflige daño físico perforante muy leve a enemigos aleatorios entre 16 y 20 veces.',
      en: 'With rapier. Deals very light pierce physical damage to random enemies 16 to 20 times.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 20 },
  },
  rapier_8: {
    id: 'rapier_8',
    name: { es: 'Gimnasia exquisita', en: 'Exquisite gymnastics' },
    description: {
      es: 'Con florete. Inflige daño físico perforante colosal a un enemigo.',
      en: 'With rapier. Deals severe pierce physical damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 46 },
  },

  // --- bow ---
    
  bow_1: {
    id: 'bow_1',
    name: { es: 'Disparo único', en: 'Single shot' },
    description: {
      es: 'Con arco. Inflige daño físico perforante leve a un enemigo. Solo se puede usar desde la fila de atrás.',
      en: 'With bow. Deals light pierce physical damage to one enemy. Only from back row.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 4 },
  },
  bow_2: {
    id: 'bow_2',
    name: { es: 'Lluvia de flechas', en: 'Arrow rain' },
    description: {
      es: 'Con arco. Inflige daño físico perforante leve a todos los enemigos.',
      en: 'With bow. Deals light pierce physical damage to all enemies.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 10 },
  },
  bow_3: {
    id: 'bow_3',
    name: { es: 'Disparo maldito', en: 'Hex shot' },
    description: {
      es: 'Con arco. Inflige daño físico perforante leve a un enemigo. Reduce el ataque, la defensa o la precisión y evasión del enemigo durante 1 turno.',
      en: 'With bow. Deals light pierce physical damage to one enemy. Reduces enemy\'s attack, defense or hit and evasion for one turn.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 8 },
  },
  bow_4: {
    id: 'bow_4',
    name: { es: 'Salva salvaje', en: 'Wild salvo' },
    description: {
      es: 'Con arco. Inflige daño físico perforante leve a todos los enemigos 3 veces.',
      en: 'With bow. Deals light pierce physical damage to all enemies 3 times.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 18 },
  },
  bow_5: {
    id: 'bow_5',
    name: { es: 'Diana', en: 'Bull\'s eye' },
    description: {
      es: 'Con arco. Inflige daño físico perforante grave a un enemigo. Inflige mucho más daño a enemigos con algún estado alterado.',
      en: 'With bow. Deals heavy pierce physical damage to one enemy. Deals far greater damage to enemies with status ailments.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 17 },
  },
  bow_5f: {
    id: 'bow_5f',
    name: { es: 'Flecha antiflán', en: 'Flanbuster arrow' },
    description: {
      es: 'Con arco. Inflige daño físico perforante grave a un enemigo. Inflige mucho más daño a flanes e ignora sus resistencias.',
      en: 'With bow. Deals heavy pierce physical damage to one enemy. Inflicts far greater damage to flans and ignores resistance.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 15 },
  },
  bow_5d: {
    id: 'bow_5d',
    name: { es: 'Flecha matadragones', en: 'Dragonslayer arrow' },
    description: {
      es: 'Con arco. Inflige daño físico perforante grave a un enemigo. Inflige mucho más daño a dragones.',
      en: 'With bow. Deals heavy pierce physical damage to one enemy. Inflicts far greater damage to dragons.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 15 },
  },
  bow_6: {
    id: 'bow_6',
    name: { es: 'Millar de flechas', en: 'Myriad arrows' },
    description: {
      es: 'Con arco. Inflige daño físico perforante leve a todos los enemigos 12 veces.',
      en: 'With bow. Deals light pierce physical damage to all enemies 12 times.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 36 },
  },

  // --- crossbow ---
    
  crossbow_1: {
    id: 'crossbow_1',
    name: { es: 'Virote envenenado', en: 'Venomous Bolt' },
    description: {
      es: 'Con ballesta. Inflige daño físico perforante leve a un enemigo. Probabilidad baja de infligir veneno. Calcula el daño con la Constitución.',
      en: 'With crossbow. Deals light pierce physical damage to one enemy. Low chance of inflicting poison. Calculates damage with Constitution.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 5 },
  },
  crossbow_2: {
    id: 'crossbow_2',
    name: { es: 'Virote encantado', en: 'Enchanted bolt' },
    description: {
      es: 'Con ballesta. Inflige daño físico perforante leve a todos los enemigos. Probabilidad baja de infligir desesperación. Calcula el daño con la Voluntad.',
      en: 'With crossbow. Deals light pierce physical damage to all enemies. Low chance of inflicting despair. Calculates damage with Will.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 13 },
  },
  crossbow_3: {
    id: 'crossbow_3',
    name: { es: 'Ojo de halcón', en: 'Hawk shot' },
    description: {
      es: 'Con ballesta. Inflige daño físico perforante medio a un enemigo. Probabilidad baja de infligir parálisis. Calcula el daño con la Constitución.',
      en: 'With crossbow. Deals medium pierce physical damage to one enemy. Low chance of inflicting paralysis. Calculates damage with Constitution.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 11 },
  },
  crossbow_4: {
    id: 'crossbow_4',
    name: { es: 'Virote atronador', en: 'Thunderous bolt' },
    description: {
      es: 'Con ballesta. Inflige daño físico perforante medio a todos los enemigos. Probabilidad baja de infligir confusión.',
      en: 'With crossbow. Deals medium pierce physical damage to all enemies. Low chance of inflicting confusion.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 20 },
  },
  crossbow_5: {
    id: 'crossbow_5',
    name: { es: 'Virote explosivo', en: 'Explosive bolt' },
    description: {
      es: 'Con ballesta. Inflige daño físico perforante grave a un enemigo. Probabilidad baja de infligir quemadura. Calcula el daño con la Constitución.',
      en: 'With crossbow. Deals heavy pierce physical damage to one enemy. Low chance of inflicting burn. Calculates damage with Constitution.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 14 },
  },
  crossbow_6: {
    id: 'crossbow_6',
    name: { es: 'Lluvia de acero', en: 'Steel rain' },
    description: {
      es: 'Con ballesta. Inflige daño físico perforante grave a todos los enemigos. Probabilidad baja de infligir sueño. Calcula el daño con la Voluntad.',
      en: 'With crossbow. Deals heavy pierce physical damage to all enemies. Low chance of inflicting sleep. Calculates damage with Will.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 31 },
  },
  crossbow_7: {
    id: 'crossbow_7',
    name: { es: 'Milagro del ballestero', en: 'Crossbowman\'s miracle' },
    description: {
      es: 'Con ballesta. Inflige daño físico perforante severo a un enemigo. Calcula el daño con la Voluntad.',
      en: 'With crossbow. Deals severe pierce physical damage to one enemy. Calculates damage with Will.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 21 },
  },
  crossbow_8: {
    id: 'crossbow_8',
    name: { es: 'Pralaya', en: 'Pralaya' },
    description: {
      es: 'Con arco y ballesta. Inflige daño físico perforante colosal a un enemigo. Calcula el daño con el atributo del enemigo más bajo entre Resistencia, Constitución y Voluntad.',
      en: 'With bow and crossbow. Deals colossal pierce physical damage to one enemy. Calculates damage with enemy\'s lowest stat among Resistance, Constitution and Will.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 47 },
  },


  // --- fire ---
  fire_1: {
    id: 'fire_1',
    name: { es: 'Agi', en: 'Agi' },
    description: {
      es: 'Inflige daño mágico de fuego leve a un enemigo.',
      en: 'Deals light fire magic damage to one enemy.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 4 },
  },
  fire_2: {
    id: 'fire_2',
    name: { es: 'Maragi', en: 'Maragi' },
    description: {
      es: 'Inflige daño mágico de fuego leve a todos los enemigos.',
      en: 'Deals light fire magic damage to all enemies.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 10 },
  },
  fire_3: {
    id: 'fire_3',
    name: { es: 'Agilao', en: 'Agilao' },
    description: {
      es: 'Inflige daño mágico de fuego medio a un enemigo.',
      en: 'Deals medium fire magic damage to one enemy.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 8 },
  },
  fire_4: {
    id: 'fire_4',
    name: { es: 'Maragion', en: 'Maragion' },
    description: {
      es: 'Inflige daño mágico de fuego medio a todos los enemigos.',
      en: 'Deals medium fire magic damage to all enemies.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 18 },
  },
  fire_5: {
    id: 'fire_5',
    name: { es: 'Agidyne', en: 'Agidyne' },
    description: {
      es: 'Inflige daño mágico de fuego grave a un enemigo.',
      en: 'Deals heavy fire magic damage to one enemy.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 12 },
  },
  fire_6: {
    id: 'fire_6',
    name: { es: 'Maragidyne', en: 'Maragidyne' },
    description: {
      es: 'Inflige daño mágico de fuego grave a todos los enemigos.',
      en: 'Deals heavy fire magic damage to all enemies.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 28 },
  },
  fire_7: {
    id: 'fire_7',
    name: { es: 'Agibarion', en: 'Agibarion' },
    description: {
      es: 'Inflige daño mágico de fuego severo a un enemigo.',
      en: 'Deals severe fire magic damage to one enemy.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 20 },
  },
  fire_8: {
    id: 'fire_8',
    name: { es: 'Maragibarion', en: 'Maragibarion' },
    description: {
      es: 'Inflige daño mágico de fuego severo a todos los enemigos.',
      en: 'Deals severe fire magic damage to all enemies.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 45 },
  },
  fire_9: {
    id: 'fire_9',
    name: { es: 'Meteoro', en: 'Meteor' },
    description: {
      es: 'Inflige daño mágico de fuego colosal a todos los enemigos, con probabilidad baja de infligir quemadura.',
      en: 'Deals colossal fire magic damage to all enemies, with a low chance of inflicting burn.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 66 },
  },

  // --- ice ---
  ice_1: {
    id: 'ice_1',
    name: { es: 'Bufu', en: 'Bufu' },
    description: {
      es: 'Inflige daño mágico de hielo leve a un enemigo.',
      en: 'Deals light ice magic damage to one enemy.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 4 },
  },
  ice_2: {
    id: 'ice_2',
    name: { es: 'Mabufu', en: 'Mabufu' },
    description: {
      es: 'Inflige daño mágico de hielo leve a todos los enemigos.',
      en: 'Deals light ice magic damage to all enemies.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 10 },
  },
  ice_3: {
    id: 'ice_3',
    name: { es: 'Bufula', en: 'Bufula' },
    description: {
      es: 'Inflige daño mágico de hielo medio a un enemigo.',
      en: 'Deals medium ice magic damage to one enemy.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 8 },
  },
  ice_4: {
    id: 'ice_4',
    name: { es: 'Mabufula', en: 'Mabufula' },
    description: {
      es: 'Inflige daño mágico de hielo medio a todos los enemigos.',
      en: 'Deals medium ice magic damage to all enemies.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 18 },
  },
  ice_5: {
    id: 'ice_5',
    name: { es: 'Bufudyne', en: 'Bufudyne' },
    description: {
      es: 'Inflige daño mágico de hielo grave a un enemigo.',
      en: 'Deals heavy ice magic damage to one enemy.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 12 },
  },
  ice_6: {
    id: 'ice_6',
    name: { es: 'Mabufudyne', en: 'Mabufudyne' },
    description: {
      es: 'Inflige daño mágico de hielo grave a todos los enemigos.',
      en: 'Deals heavy ice magic damage to all enemies.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 28 },
  },
  ice_7: {
    id: 'ice_7',
    name: { es: 'Bufubarion', en: 'Bufubarion' },
    description: {
      es: 'Inflige daño mágico de hielo severo a un enemigo.',
      en: 'Deals severe ice magic damage to one enemy.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 20 },
  },
  ice_8: {
    id: 'ice_8',
    name: { es: 'Mabufubarion', en: 'Mabufubarion' },
    description: {
      es: 'Inflige daño mágico de hielo severo a todos los enemigos.',
      en: 'Deals severe ice magic damage to all enemies.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 45 },
  },
  ice_9: {
    id: 'ice_9',
    name: { es: 'Iceberg', en: 'Iceberg' },
    description: {
      es: 'Inflige daño mágico de hielo extremo a un enemigo, con probabilidad baja de infligir congelación.',
      en: 'Deals extreme ice magic damage to one enemy, with a low chance of inflicting freeze.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 66 },
  },

  // --- thunder ---
  thunder_1: {
    id: 'thunder_1',
    name: { es: 'Zio', en: 'Zio' },
    description: {
      es: 'Inflige daño mágico de trueno leve a un enemigo.',
      en: 'Deals light thunder magic damage to one enemy.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 4 },
  },
  thunder_2: {
    id: 'thunder_2',
    name: { es: 'Mazio', en: 'Mazio' },
    description: {
      es: 'Inflige daño mágico de trueno leve a todos los enemigos.',
      en: 'Deals light thunder magic damage to all enemies.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 10 },
  },
  thunder_3: {
    id: 'thunder_3',
    name: { es: 'Zionga', en: 'Zionga' },
    description: {
      es: 'Inflige daño mágico de trueno medio a un enemigo.',
      en: 'Deals medium thunder magic damage to one enemy.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 8 },
  },
  thunder_4: {
    id: 'thunder_4',
    name: { es: 'Mazionga', en: 'Mazionga' },
    description: {
      es: 'Inflige daño mágico de trueno medio a todos los enemigos.',
      en: 'Deals medium thunder magic damage to all enemies.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 18 },
  },
  thunder_5: {
    id: 'thunder_5',
    name: { es: 'Ziodyne', en: 'Ziodyne' },
    description: {
      es: 'Inflige daño mágico de trueno grave a un enemigo.',
      en: 'Deals heavy thunder magic damage to one enemy.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 12 },
  },
  thunder_6: {
    id: 'thunder_6',
    name: { es: 'Maziodyne', en: 'Maziodyne' },
    description: {
      es: 'Inflige daño mágico de trueno grave a todos los enemigos.',
      en: 'Deals heavy thunder magic damage to all enemies.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 28 },
  },
  thunder_7: {
    id: 'thunder_7',
    name: { es: 'Ziobarion', en: 'Ziobarion' },
    description: {
      es: 'Inflige daño mágico de trueno severo a un enemigo.',
      en: 'Deals severe thunder magic damage to one enemy.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 20 },
  },
  thunder_8: {
    id: 'thunder_8',
    name: { es: 'Maziobarion', en: 'Maziobarion' },
    description: {
      es: 'Inflige daño mágico de trueno severo a todos los enemigos.',
      en: 'Deals severe thunder magic damage to all enemies.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 45 },
  },
  thunder_9: {
    id: 'thunder_9',
    name: { es: 'Sobrecarga', en: 'Overcharge' },
    description: {
      es: 'Inflige daño mágico de trueno extremo a un enemigo, con probabilidad baja de infligir parálisis.',
      en: 'Deals extreme thunder magic damage to one enemy, with a low chance of inflicting paralysis.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 66 },
  },

  // --- wind ---
  wind_1: {
    id: 'wind_1',
    name: { es: 'Garu', en: 'Garu' },
    description: {
      es: 'Inflige daño mágico de viento leve a un enemigo.',
      en: 'Deals light wind magic damage to one enemy.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 4 },
  },
  wind_2: {
    id: 'wind_2',
    name: { es: 'Magaru', en: 'Magaru' },
    description: {
      es: 'Inflige daño mágico de viento leve a todos los enemigos.',
      en: 'Deals light wind magic damage to all enemies.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 10 },
  },
  wind_3: {
    id: 'wind_3',
    name: { es: 'Garula', en: 'Garula' },
    description: {
      es: 'Inflige daño mágico de viento medio a un enemigo.',
      en: 'Deals medium wind magic damage to one enemy.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 8 },
  },
  wind_4: {
    id: 'wind_4',
    name: { es: 'Magarula', en: 'Magarula' },
    description: {
      es: 'Inflige daño mágico de viento medio a todos los enemigos.',
      en: 'Deals medium wind magic damage to all enemies.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 18 },
  },
  wind_5: {
    id: 'wind_5',
    name: { es: 'Garudyne', en: 'Garudyne' },
    description: {
      es: 'Inflige daño mágico de viento grave a un enemigo.',
      en: 'Deals heavy wind magic damage to one enemy.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 12 },
  },
  wind_6: {
    id: 'wind_6',
    name: { es: 'Magarudyne', en: 'Magarudyne' },
    description: {
      es: 'Inflige daño mágico de viento grave a todos los enemigos.',
      en: 'Deals heavy wind magic damage to all enemies.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 28 },
  },
  wind_7: {
    id: 'wind_7',
    name: { es: 'Garubarion', en: 'Garubarion' },
    description: {
      es: 'Inflige daño mágico de viento severo a un enemigo.',
      en: 'Deals severe wind magic damage to one enemy.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 20 },
  },
  wind_8: {
    id: 'wind_8',
    name: { es: 'Magarubarion', en: 'Magarubarion' },
    description: {
      es: 'Inflige daño mágico de viento severo a todos los enemigos.',
      en: 'Deals severe wind magic damage to all enemies.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 45 },
  },
  wind_9: {
    id: 'wind_9',
    name: { es: 'Huracán', en: 'Hurricane' },
    description: {
      es: 'Inflige daño mágico de viento colosal a todos los enemigos, con probabilidad baja de infligir mareo.',
      en: 'Deals colossal wind magic damage to all enemies, with a low chance of inflicting dizzy.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 66 },
  },

  // --- nuclear ---
  nuclear_1: {
    id: 'nuclear_1',
    name: { es: 'Frei', en: 'Frei' },
    description: {
      es: 'Inflige daño mágico nuclear leve a un enemigo.',
      en: 'Deals light nuclear magic damage to one enemy.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 4 },
  },
  nuclear_2: {
    id: 'nuclear_2',
    name: { es: 'Mafrei', en: 'Mafrei' },
    description: {
      es: 'Inflige daño mágico nuclear leve a todos los enemigos.',
      en: 'Deals light nuclear magic damage to all enemies.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 10 },
  },
  nuclear_3: {
    id: 'nuclear_3',
    name: { es: 'Freila', en: 'Freila' },
    description: {
      es: 'Inflige daño mágico nuclear medio a un enemigo.',
      en: 'Deals medium nuclear magic damage to one enemy.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 8 },
  },
  nuclear_4: {
    id: 'nuclear_4',
    name: { es: 'Mafreila', en: 'Mafreila' },
    description: {
      es: 'Inflige daño mágico nuclear medio a todos los enemigos.',
      en: 'Deals medium nuclear magic damage to all enemies.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 18 },
  },
  nuclear_5: {
    id: 'nuclear_5',
    name: { es: 'Freidyne', en: 'Freidyne' },
    description: {
      es: 'Inflige daño mágico nuclear grave a un enemigo.',
      en: 'Deals heavy nuclear magic damage to one enemy.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 12 },
  },
  nuclear_6: {
    id: 'nuclear_6',
    name: { es: 'Mafreidyne', en: 'Mafreidyne' },
    description: {
      es: 'Inflige daño mágico nuclear grave a todos los enemigos.',
      en: 'Deals heavy nuclear magic damage to all enemies.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 28 },
  },
  nuclear_7: {
    id: 'nuclear_7',
    name: { es: 'Freibarion', en: 'Freibarion' },
    description: {
      es: 'Inflige daño mágico nuclear severo a un enemigo.',
      en: 'Deals severe nuclear magic damage to one enemy.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 20 },
  },
  nuclear_8: {
    id: 'nuclear_8',
    name: { es: 'Mafreibarion', en: 'Mafreibarion' },
    description: {
      es: 'Inflige daño mágico nuclear severo a todos los enemigos.',
      en: 'Deals severe nuclear magic damage to all enemies.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 45 },
  },
  nuclear_9: {
    id: 'nuclear_9',
    name: { es: 'Cataclismo de vacío', en: 'Vaccum Cataclysm' },
    description: {
      es: 'Inflige daño mágico nuclear colosal a todos los enemigos, con probabilidad baja de infligir veneno.',
      en: 'Deals colossal nuclear magic damage to all enemies, with a low chance of inflicting veneno.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 66 },
  },

  // --- psychic ---
  psychic_1: {
    id: 'psychic_1',
    name: { es: 'Psi', en: 'Psi' },
    description: {
      es: 'Inflige daño mágico psíquico leve a un enemigo.',
      en: 'Deals light psychic magic damage to one enemy.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 4 },
  },
  psychic_2: {
    id: 'psychic_2',
    name: { es: 'Mapsi', en: 'Mapsi' },
    description: {
      es: 'Inflige daño mágico psíquico leve a todos los enemigos.',
      en: 'Deals light psychic magic damage to all enemies.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 10 },
  },
  psychic_3: {
    id: 'psychic_3',
    name: { es: 'Psio', en: 'Psio' },
    description: {
      es: 'Inflige daño mágico psíquico medio a un enemigo.',
      en: 'Deals medium psychic magic damage to one enemy.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 8 },
  },
  psychic_4: {
    id: 'psychic_4',
    name: { es: 'Mapsio', en: 'Mapsio' },
    description: {
      es: 'Inflige daño mágico psíquico medio a todos los enemigos.',
      en: 'Deals medium psychic magic damage to all enemies.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 18 },
  },
  psychic_5: {
    id: 'psychic_5',
    name: { es: 'Psiodyne', en: 'Psiodyne' },
    description: {
      es: 'Inflige daño mágico psíquico grave a un enemigo.',
      en: 'Deals heavy psychic magic damage to one enemy.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 12 },
  },
  psychic_6: {
    id: 'psychic_6',
    name: { es: 'Mapsiodyne', en: 'Mapsiodyne' },
    description: {
      es: 'Inflige daño mágico psíquico grave a todos los enemigos.',
      en: 'Deals heavy psychic magic damage to all enemies.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 28 },
  },
  psychic_7: {
    id: 'psychic_7',
    name: { es: 'Psiobarion', en: 'Psiobarion' },
    description: {
      es: 'Inflige daño mágico psíquico severo a un enemigo.',
      en: 'Deals severe psychic magic damage to one enemy.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 20 },
  },
  psychic_8: {
    id: 'psychic_8',
    name: { es: 'Mapsiobarion', en: 'Mapsiobarion' },
    description: {
      es: 'Inflige daño mágico psíquico severo a todos los enemigos.',
      en: 'Deals severe psychic magic damage to all enemies.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 45 },
  },
  psychic_9: {
    id: 'psychic_9',
    name: { es: 'Psicorruptura', en: 'Psycho Break' },
    description: {
      es: 'Inflige daño mágico psíquico extremo a un enemigo, con probabilidad baja de infligir amnesia.',
      en: 'Deals extreme psychic magic damage to one enemy, with a low chance of inflicting forget.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 66 },
  },

  // --- bless ---
  bless_1O: {
    id: 'bless_1O',
    name: { es: 'Hama', en: 'Hama' },
    description: {
      es: 'Probabilidad baja de matar instantáneamente a un enemigo.',
      en: 'Low chance of insta-killing one enemy.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 6 },
  },
  bless_2O: {
    id: 'bless_2O',
    name: { es: 'Mahama', en: 'Mahama' },
    description: {
      es: 'Probabilidad baja de matar instantáneamente a todos los enemigos.',
      en: 'Low chance of insta-killing all enemies.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 16 },
  },
  bless_3O: {
    id: 'bless_3O',
    name: { es: 'Hamaon', en: 'Hamaon' },
    description: {
      es: 'Probabilidad media de matar instantáneamente a un enemigo.',
      en: 'Medium chance of insta-killing one enemy.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 12 },
  },
  bless_4O: {
    id: 'bless_4O',
    name: { es: 'Mahamaon', en: 'Mahamaon' },
    description: {
      es: 'Probabilidad media de matar instantáneamente a todos los enemigos.',
      en: 'Medium chance of insta-killin all enemies.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 26 },
  },
  bless_5O: {
    id: 'bless_5O',
    name: { es: 'Samsara', en: 'Samsara' },
    description: {
      es: 'Probabilidad alta de matar instantáneamente a todos los enemigos.',
      en: 'High chance of insta-killing all enemies.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 40 },
  },
  bless_1: {
    id: 'bless_1',
    name: { es: 'Kouha', en: 'Kouha' },
    description: {
      es: 'Inflige daño mágico de bendición leve a un enemigo.',
      en: 'Deals light bless magic damage to one enemy.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 4 },
  },
  bless_2: {
    id: 'bless_2',
    name: { es: 'Makouha', en: 'Makouha' },
    description: {
      es: 'Inflige daño mágico de bendición leve a todos los enemigos.',
      en: 'Deals light bless magic damage to all enemies.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 10 },
  },
  bless_3: {
    id: 'bless_3',
    name: { es: 'Kouga', en: 'Kouga' },
    description: {
      es: 'Inflige daño mágico de bendición medio a un enemigo.',
      en: 'Deals medium bless magic damage to one enemy.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 8 },
  },
  bless_4: {
    id: 'bless_4',
    name: { es: 'Makouga', en: 'Makouga' },
    description: {
      es: 'Inflige daño mágico de bendición medio a todos los enemigos.',
      en: 'Deals medium bless magic damage to all enemies.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 18 },
  },
  bless_5: {
    id: 'bless_5',
    name: { es: 'Kougaon', en: 'Kougaon' },
    description: {
      es: 'Inflige daño mágico de bendición grave a un enemigo.',
      en: 'Deals heavy bless magic damage to one enemy.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 12 },
  },
  bless_6: {
    id: 'bless_6',
    name: { es: 'Makougaon', en: 'Makougaon' },
    description: {
      es: 'Inflige daño mágico de bendición grave a todos los enemigos.',
      en: 'Deals heavy bless magic damage to all enemies.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 28 },
  },
  bless_7: {
    id: 'bless_7',
    name: { es: 'Juicio divino', en: 'Divine judgement' },
    description: {
      es: 'Inflige daño mágico de bendición severo a un enemigo. Probabilidad baja de muerte instantánea.',
      en: 'Deals severe bless magic damage to one enemy. Low chance of insta-kill.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 38 },
  },
  bless_8: {
    id: 'bless_8',
    name: { es: 'Flechas brillantes', en: 'Shining arrows' },
    description: {
      es: 'Inflige daño mágico de bendición leve a todos los enemigos de 5 a 9 veces. Probabilidad baja de muerte instantánea.',
      en: 'Deals light bless magic damage to all enemies 5 to 9 times. Low chance of insta-kill.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 48 },
  },

  // --- curse ---
  curse_1O: {
    id: 'curse_1O',
    name: { es: 'Mudo', en: 'Mudo' },
    description: {
      es: 'Probabilidad baja de matar instantáneamente a un enemigo.',
      en: 'Low chance of insta-killing one enemy.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 6 },
  },
  curse_2O: {
    id: 'curse_2O',
    name: { es: 'Mamudo', en: 'Mamudo' },
    description: {
      es: 'Probabilidad baja de matar instantáneamente a todos los enemigos.',
      en: 'Low chance of insta-killing all enemies.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 16 },
  },
  curse_3O: {
    id: 'curse_3O',
    name: { es: 'Mudoon', en: 'Mudoon' },
    description: {
      es: 'Probabilidad media de matar instantáneamente a un enemigo.',
      en: 'Medium chance of insta-killing one enemy.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 12 },
  },
  curse_4O: {
    id: 'curse_4O',
    name: { es: 'Mamudoon', en: 'Mamudoon' },
    description: {
      es: 'Probabilidad media de matar instantáneamente a todos los enemigos.',
      en: 'Medium chance of insta-killin all enemies.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 26 },
  },
  curse_5O: {
    id: 'curse_5O',
    name: { es: '¡Morid por mí!', en: 'Die for me!' },
    description: {
      es: 'Probabilidad alta de matar instantáneamente a todos los enemigos.',
      en: 'High chance of insta-killing all enemies.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 40 },
  },
  curse_1: {
    id: 'curse_1',
    name: { es: 'Eiha', en: 'Eiha' },
    description: {
      es: 'Inflige daño mágico de maldición leve a un enemigo.',
      en: 'Deals light curse magic damage to one enemy.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 4 },
  },
  curse_2: {
    id: 'curse_2',
    name: { es: 'Maeiha', en: 'Maeiha' },
    description: {
      es: 'Inflige daño mágico de maldición leve a todos los enemigos.',
      en: 'Deals light curse magic damage to all enemies.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 10 },
  },
  curse_3: {
    id: 'curse_3',
    name: { es: 'Eiga', en: 'Eiga' },
    description: {
      es: 'Inflige daño mágico de maldición medio a un enemigo.',
      en: 'Deals medium curse magic damage to one enemy.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 8 },
  },
  curse_4: {
    id: 'curse_4',
    name: { es: 'Maeiga', en: 'Maeiga' },
    description: {
      es: 'Inflige daño mágico de maldición medio a todos los enemigos.',
      en: 'Deals medium curse magic damage to all enemies.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 18 },
  },
  curse_5: {
    id: 'curse_5',
    name: { es: 'Eigaon', en: 'Eigaon' },
    description: {
      es: 'Inflige daño mágico de maldición grave a un enemigo.',
      en: 'Deals heavy curse magic damage to one enemy.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 12 },
  },
  curse_6: {
    id: 'curse_6',
    name: { es: 'Maeigaon', en: 'Maeigaon' },
    description: {
      es: 'Inflige daño mágico de maldición grave a todos los enemigos.',
      en: 'Deals heavy curse magic damage to all enemies.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 28 },
  },
  curse_7: {
    id: 'curse_7',
    name: { es: 'Decreto demoníaco', en: 'Demonic decree' },
    description: {
      es: 'Inflige daño mágico de maldición severo a un enemigo. Probabilidad baja de muerte instantánea.',
      en: 'Deals severe curse magic damage to one enemy. Low chance of insta-kill.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 38 },
  },
  curse_8: {
    id: 'curse_8',
    name: { es: 'Alas abisales', en: 'Abyssal wings' },
    description: {
      es: 'Inflige daño mágico de maldición severo a todos los enemigos. Probabilidad baja de muerte instantánea.',
      en: 'Deals severe curse magic damage to all enemies. Low chance of insta-kill.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 48 },
  },

  // --- almighty ---
  almighty_1: {
    id: 'almighty_1',
    name: { es: 'Megido', en: 'Megido' },
    description: {
      es: 'Inflige daño mágico de maldición medio a todos los enemigos.',
      en: 'Deals medium almighty magic damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 15 },
  },
  almighty_2: {
    id: 'almighty_2',
    name: { es: 'Gidola', en: 'Gidola' },
    description: {
      es: 'Inflige daño mágico de maldición grave a un enemigo.',
      en: 'Deals heavy almighty magic damage to one enemy.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 10 },
  },
  almighty_3: {
    id: 'almighty_3',
    name: { es: 'Megidola', en: 'Megidola' },
    description: {
      es: 'Inflige daño mágico de maldición grave a todos los enemigos.',
      en: 'Deals heavy almighty magic damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 25 },
  },
  almighty_4: {
    id: 'almighty_4',
    name: { es: 'Gidolaon', en: 'Gidolaon' },
    description: {
      es: 'Inflige daño mágico de maldición severo a un enemigo.',
      en: 'Deals severe almighty magic damage to one enemy.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 20 },
  },
  almighty_5: {
    id: 'almighty_5',
    name: { es: 'Megidolaon', en: 'Megidolaon' },
    description: {
      es: 'Inflige daño mágico de maldición severo a todos los enemigos.',
      en: 'Deals severe almighty magic damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 50 },
  },
  almighty_6: {
    id: 'almighty_6',
    name: { es: 'Omniburst', en: 'Omniburst' },
    description: {
      es: 'Inflige daño mágico muy leve de fuego, hielo, trueno, viento, nuclear y psíquico a todos los enemigos.',
      en: 'Deals very light fire, ice, thunder, wind, nuclear and psychic magic damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 66 },
  },

  // --- status ---
  ailment_burn: {
    id: 'ailment_burn',
    name: { es: 'Combustión', en: 'Combustion' },
    description: {
      es: 'Probabilidad alta de infligir quemadura a un enemigo.',
      en: 'High chance of inflicting burn to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_burn_a: {
    id: 'ailment_burn_a',
    name: { es: 'Flor calcinante', en: 'Scorching rose' },
    description: {
      es: 'Probabilidad media de infligir quemadura a todos los enemigos.',
      en: 'Medium chance of inflicting burn to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_freeze: {
    id: 'ailment_freeze',
    name: { es: 'Brisa ártica', en: 'Fridge breeze' },
    description: {
      es: 'Probabilidad alta de infligir congelación a un enemigo.',
      en: 'High chance of inflicting freeze to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_freeze_a: {
    id: 'ailment_freeze_a',
    name: { es: 'Brisa antártica', en: 'Antartic breeze' },
    description: {
      es: 'Probabilidad media de infligir congelación a todos los enemigos.',
      en: 'Medium chance of inflicting freeze to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_dizzy: {
    id: 'ailment_dizzy',
    name: { es: 'Remolino rápido', en: 'Quick swirl' },
    description: {
      es: 'Probabilidad alta de infligir mareo a un enemigo.',
      en: 'High chance of inflicting dizzy to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_dizzy_a: {
    id: 'ailment_dizzy_a',
    name: { es: 'Vendaval deslumbrante', en: 'Flashing gale' },
    description: {
      es: 'Probabilidad media de infligir mareo a todos los enemigos.',
      en: 'Medium chance of inflicting dizzy to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_paralysis: {
    id: 'ailment_paralysis',
    name: { es: 'Chispa', en: 'Thunder spark' },
    description: {
      es: 'Probabilidad alta de infligir parálisis a un enemigo.',
      en: 'High chance of inflicting paralysis to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_paralysis_a: {
    id: 'ailment_paralysis_a',
    name: { es: 'Electrorred', en: 'Electric web' },
    description: {
      es: 'Probabilidad media de infligir parálisis a todos los enemigos.',
      en: 'Medium chance of inflicting paralysis to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_poison: {
    id: 'ailment_poison',
    name: { es: 'Radiación', en: 'Radiation' },
    description: {
      es: 'Probabilidad alta de infligir veneno a un enemigo.',
      en: 'High chance of inflicting poison to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_poison_a: {
    id: 'ailment_poison_a',
    name: { es: 'Accidente de exposición', en: 'Exposure accident' },
    description: {
      es: 'Probabilidad media de infligir veneno a todos los enemigos.',
      en: 'Medium chance of inflicting poison to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_amnesia: {
    id: 'ailment_amnesia',
    name: { es: 'Makajama', en: 'Makajama' },
    description: {
      es: 'Probabilidad alta de infligir amnesia a un enemigo.',
      en: 'High chance of inflicting amnesia to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_amnesia_a: {
    id: 'ailment_amnesia_a',
    name: { es: 'Makajamaon', en: 'Makajamaon' },
    description: {
      es: 'Probabilidad media de infligir amnesia a todos los enemigos.',
      en: 'Medium chance of inflicting amnesia to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_brainwash: {
    id: 'ailment_brainwash',
    name: { es: 'Marin Karin', en: 'Marin Karin' },
    description: {
      es: 'Probabilidad alta de infligir lavado de cerebro a un enemigo.',
      en: 'High chance of inflicting brainwash to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_brainwash_a: {
    id: 'ailment_brainwash_a',
    name: { es: 'Brain Jack', en: 'Brain Jack' },
    description: {
      es: 'Probabilidad media de infligir lavado de cerebro a todos los enemigos.',
      en: 'Medium chance of inflicting brainwash to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_sleep: {
    id: 'ailment_sleep',
    name: { es: 'Dormina', en: 'Dormina' },
    description: {
      es: 'Probabilidad alta de infligir sueño a un enemigo.',
      en: 'High chance of inflicting sleep to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_sleep_a: {
    id: 'ailment_sleep_a',
    name: { es: 'Lullaby', en: 'Lullaby' },
    description: {
      es: 'Probabilidad media de infligir sueño a todos los enemigos.',
      en: 'Medium chance of inflicting sleep to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_confusion: {
    id: 'ailment_confusion',
    name: { es: 'Pulinpa', en: 'Pulinpa' },
    description: {
      es: 'Probabilidad alta de infligir confusión a un enemigo.',
      en: 'High chance of inflicting confusion to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_confusion_a: {
    id: 'ailment_confusion_a',
    name: { es: 'Tentarafoo', en: 'Tentarafoo' },
    description: {
      es: 'Probabilidad media de infligir confusión a todos los enemigos.',
      en: 'Medium chance of inflicting confusion to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_fear: {
    id: 'ailment_fear',
    name: { es: 'Roce siniestro', en: 'Evil touch' },
    description: {
      es: 'Probabilidad alta de infligir miedo a un enemigo.',
      en: 'High chance of inflicting fear to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_fear_a: {
    id: 'ailment_fear_a',
    name: { es: 'Sonrisa malvada', en: 'Evil smile' },
    description: {
      es: 'Probabilidad media de infligir miedo a todos los enemigos.',
      en: 'Medium chance of inflicting fear to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_despair: {
    id: 'ailment_despair',
    name: { es: 'Palabras ominosas', en: 'Ominous words' },
    description: {
      es: 'Probabilidad alta de infligir desesperación a un enemigo.',
      en: 'High chance of inflicting despair to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_despair_a: {
    id: 'ailment_despair_a',
    name: { es: 'Arranque abismal', en: 'Abysmal surge' },
    description: {
      es: 'Probabilidad media de infligir desesperación a todos los enemigos.',
      en: 'Medium chance of inflicting despair to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },
  ailment_rage: {
    id: 'ailment_rage',
    name: { es: 'Mofa', en: 'Taunt' },
    description: {
      es: 'Probabilidad alta de infligir furia a un enemigo.',
      en: 'High chance of inflicting rage to an enemy.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 3 },
  },
  ailment_rage_a: {
    id: 'ailment_rage_a',
    name: { es: 'Presupuesto ilimitado', en: 'Wage war' },
    description: {
      es: 'Probabilidad media de infligir furia a todos los enemigos.',
      en: 'Medium chance of inflicting rage to all enemies.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 8 },
  },

  // --- heal ---
  heal_1: {
    id: 'heal_1',
    name: { es: 'Dia', en: 'Dia' },
    description: {
      es: 'Restaura una pequeña cantidad de HP a un aliado.',
      en: "Slightly restore one ally's HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 3 },
  },
  heal_2: {
    id: 'heal_2',
    name: { es: 'Media', en: 'Media' },
    description: {
      es: 'Restaura una pequeña cantidad de HP a todos los aliados.',
      en: "Slightly restore all allies' HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 7 },
  },
  heal_3: {
    id: 'heal_3',
    name: { es: 'Diarama', en: 'Diarama' },
    description: {
      es: 'Restaura una cantidad moderada de HP a un aliado.',
      en: "Moderately restore one ally's HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 6 },
  },
  heal_4: {
    id: 'heal_4',
    name: { es: 'Mediarama', en: 'Mediarama' },
    description: {
      es: 'Restaura una cantidad moderada de HP a todos los aliados.',
      en: "Moderately restore all allies' HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 14 },
  },
  heal_5: {
    id: 'heal_5',
    name: { es: 'Diarahan', en: 'Diarahan' },
    description: {
      es: 'Restaura una cantidad grande de HP a un aliado.',
      en: "Greatly restore one ally's HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 16 },
  },
  heal_6: {
    id: 'heal_6',
    name: { es: 'Mediarahan', en: 'Mediarahan' },
    description: {
      es: 'Restaura una cantidad grande de HP a todos los aliados.',
      en: "Greatly restore all allies' HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 35 },
  },
  ailm_1: {
    id: 'ailm_1',
    name: { es: 'Baisudi', en: 'Baisudi' },
    description: {
      es: 'Cura la quemadura/congelación/parálisis/veneno de un aliado.',
      en: "Cure Burn/Freeze/Paralysis/Poison of one ally.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 4 },
  },
  ailm_2: {
    id: 'ailm_2',
    name: { es: 'Mabaisudi', en: 'Mabaisudi' },
    description: {
      es: 'Cura la quemadura/congelación/parálisis/veneno de todos los aliados.',
      en: "Cure Burn/Freeze/Paralysis/Poison of all allies.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 9 },
  },
  ailm_3: {
    id: 'ailm_3',
    name: { es: 'Patra', en: 'Patra' },
    description: {
      es: 'Cura el mareo/amnesia/lavado de cerebro/sueño de un aliado.',
      en: "Cure Dizzy/Forget/Brainwash/Sleep of one ally.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 4 },
  },
  ailm_4: {
    id: 'ailm_4',
    name: { es: 'Me patra', en: 'Me patra' },
    description: {
      es: 'Cura el mareo/amnesia/lavado de cerebro/sueño de todos los aliados.',
      en: "Cure Dizzy/Forget/Brainwash/Sleep of all allies.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 9 },
  },
  ailm_5: {
    id: 'ailm_5',
    name: { es: 'Energy drop', en: 'Energy drop' },
    description: {
      es: 'Cura la confusión/miedo/desesperación/furia de un aliado.',
      en: "Cure Confusion/Fear/Despair/Rage of one ally.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 4 },
  },
  ailm_6: {
    id: 'ailm_6',
    name: { es: 'Energy shower', en: 'Energy shower' },
    description: {
      es: 'Cura la confusión/miedo/desesperación/furia de todos los aliados.',
      en: "Cure Confusion/Fear/Despair/Rage of all allies.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 9 },
  },
  ailm_7: {
    id: 'ailm_7',
    name: { es: 'Amrita drop', en: 'Amrita drop' },
    description: {
      es: 'Cura todos los estados alterados de un aliado.',
      en: "Cure all ailments of one ally.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 8 },
  },
  ailm_8: {
    id: 'ailm_8',
    name: { es: 'Amrita shower', en: 'Amrita shower' },
    description: {
      es: 'Cura todos los estados alterados de todos los aliados.',
      en: "Cure all ailments of all allies.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 17 },
  },
  revive_1: {
    id: 'revive_1',
    name: { es: 'Recarm', en: 'Recarm' },
    description: {
      es: 'Revive a un aliado con 25-50% de HP.',
      en: "Revive one ally with 25-50% of HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 7 },
  },
  revive_2: {
    id: 'revive_2',
    name: { es: 'Samarecarm', en: 'Samarecarm' },
    description: {
      es: 'Revive a un aliado con 65-90% de HP.',
      en: "Revive one ally with 65-90% of HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 15 },
  },
  heal_ailm_1: {
    id: 'heal_ailm_1',
    name: { es: 'Diamrita', en: 'Diamrita' },
    description: {
      es: 'Restaura una cantidad enorme de HP y cura los estados alterados a un aliado.',
      en: "Hugely restore HP and cure all ailments of one ally.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 28 },
  },
  heal_ailm_2: {
    id: 'heal_ailm_2',
    name: { es: 'Salvación', en: 'Salvation' },
    description: {
      es: 'Restaura todos los HP y cura los estados alterados a todos los aliados.',
      en: "Restore all allies full HP and cure all ailments and debuffs.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 48 },
  },
  revive_heal_ailm: {
    id: 'revive_heal_ailm',
    name: { es: 'Benevolencia sagrada', en: 'Holy benevolence' },
    description: {
      es: 'Revive a todos los aliados con el 100% de HP.',
      en: "Revive all allies with full HP.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 15 },
  },

  // --- support ---
  taru_1: {
    id: 'taru_1',
    name: { es: 'Tarukaja', en: 'Tarukaja' },
    description: {
      es: 'Aumenta el ataque de un aliado en un nivel durante 3 turnos.',
      en: "Increases one ally's attack by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  taru_2: {
    id: 'taru_2',
    name: { es: 'Matarukaja', en: 'Matarukaja' },
    description: {
      es: 'Aumenta el ataque de todos los aliados en un nivel durante 3 turnos.',
      en: "Increases all allies attack by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  taru_3: {
    id: 'taru_3',
    name: { es: 'Tarunda', en: 'Tarunda' },
    description: {
      es: 'Disminuye el ataque de un enemigo en un nivel durante 3 turnos.',
      en: "Decreases one enemy's attack by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  taru_4: {
    id: 'taru_4',
    name: { es: 'Matarunda', en: 'Matarunda' },
    description: {
      es: 'Disminuye el ataque de todos los enemigos en un nivel durante 3 turnos.',
      en: "Decreases all enemies attack by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  raku_1: {
    id: 'raku_1',
    name: { es: 'Rakukaja', en: 'Rakukaja' },
    description: {
      es: 'Aumenta la defensa de un aliado en un nivel durante 3 turnos.',
      en: "Increases one ally's defense by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  raku_2: {
    id: 'raku_2',
    name: { es: 'Marakukaja', en: 'Marakukaja' },
    description: {
      es: 'Aumenta la defensa de todos los aliados en un nivel durante 3 turnos.',
      en: "Increases all allies defense by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  raku_3: {
    id: 'raku_3',
    name: { es: 'Rakunda', en: 'Rakunda' },
    description: {
      es: 'Disminuye la defensa de un enemigo en un nivel durante 3 turnos.',
      en: "Decreases one enemy's defense by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  raku_4: {
    id: 'raku_4',
    name: { es: 'Marakunda', en: 'Marakunda' },
    description: {
      es: 'Disminuye la defensa de todos los enemigos en un nivel durante 3 turnos.',
      en: "Decreases all enemies defense by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  suku_1: {
    id: 'suku_1',
    name: { es: 'Sukukaja', en: 'Sukukaja' },
    description: {
      es: 'Aumenta la precisión y la evasión de un aliado en un nivel durante 3 turnos.',
      en: "Increases one ally's hit/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  suku_2: {
    id: 'suku_2',
    name: { es: 'Masukukaja', en: 'Masukukaja' },
    description: {
      es: 'Aumenta la precisión y la evasión de todos los aliados en un nivel durante 3 turnos.',
      en: "Increases all allies hit/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  suku_3: {
    id: 'suku_3',
    name: { es: 'Sukunda', en: 'Sukunda' },
    description: {
      es: 'Disminuye la precisión y la evasión de un enemigo en un nivel durante 3 turnos.',
      en: "Decreases one enemy's hit/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  suku_4: {
    id: 'suku_4',
    name: { es: 'Masukunda', en: 'Masukunda' },
    description: {
      es: 'Disminuye la precisión y la evasión de todos los enemigos en un nivel durante 3 turnos.',
      en: "Decreases all enemies hit/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  support_1: {
    id: 'support_1',
    name: { es: 'Subidón', en: 'Heat riser' },
    description: {
      es: 'Aumenta el ataque, la defensa, la precisión y la evasión de un aliado en un nivel durante 3 turnos.',
      en: "Increases one ally's attack/defense/hit/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  support_2: {
    id: 'support_2',
    name: { es: 'Debilitar', en: 'Debilitate' },
    description: {
      es: 'Disminuye el ataque, la defensa, la precisión y la evasión de un enemigo en un nivel durante 3 turnos.',
      en: "Decreases one enemy's attack/defense/hit/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  support_3: {
    id: 'support_3',
    name: { es: 'Hyakka Ryouran', en: 'Hyakka Ryouran' },
    description: {
      es: 'Aumenta el ataque, la defensa, la precisión y la evasión de todos los aliados en un nivel durante 3 turnos.',
      en: "Increases all allies attack/defense/hit/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 90 },
  },
  support_4: {
    id: 'support_4',
    name: { es: 'Jaque mate', en: 'Checkmate' },
    description: {
      es: 'Disminuye el ataque, la defensa, la precisión y la evasión de todos los enemigos en un nivel durante 3 turnos.',
      en: "Decreases all enemies attack/defense/hit/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 90 },
  },
  double_1: {
    id: 'double_1',
    name: { es: 'Carga', en: 'Charge' },
    description: {
      es: 'El siguiente ataque físico inflige más del doble de daño.',
      en: "The next physical attack inflicts more than double the damage.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 15 },
  },
  double_2: {
    id: 'double_2',
    name: { es: 'Asistencia en carga', en: "Help charge" },
    description: {
      es: 'El siguiente ataque físico de un aliado inflige más del doble de daño.',
      en: "The next physical attack of one ally inflicts more than double the damage.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 20 },
  },
  double_3: {
    id: 'double_3',
    name: { es: 'Espíritu de lucha', en: "Fighting spirit" },
    description: {
      es: 'El siguiente ataque físico de cada aliado inflige más del doble de daño.',
      en: "The next physical attack of every ally inflicts more than double the damage.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 80 },
  },
  double_4: {
    id: 'double_4',
    name: { es: 'Concentrar', en: 'Concentrate' },
    description: {
      es: 'El siguiente ataque mágico elemental, espiritual o todopoderoso inflige más del doble de daño.',
      en: "The next elemental, spiritual or almighty magical attack inflicts more than double the damage.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 15 },
  },
  double_5: {
    id: 'double_5',
    name: { es: 'Asistencia a concentrar', en: 'Help concentrate' },
    description: {
      es: 'El siguiente ataque mágico elemental, espiritual o todopoderoso de un aliado inflige más del doble de daño.',
      en: "The next elemental, spiritual or almighty magical attack of one ally inflicts more than double the damage.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 20 },
  },
  double_6: {
    id: 'double_6',
    name: { es: 'Energía rebosante', en: "High energy" },
    description: {
      es: 'El siguiente ataque mágico elemental, espiritual o todopoderoso de cada aliado inflige más del doble de daño.',
      en: "The next elemental, spiritual or almighty magical attack of every ally inflicts more than double the damage.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 80 },
  },
  double_7: {
    id: 'double_7',
    name: { es: 'Preparación médica', en: 'Medic tool warmup' },
    description: {
      es: 'La siguiente curación o resurrección recuperará más del doble de HP.',
      en: "The next heal or revival will recover more than double the HP.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 10 },
  },
  double_8: {
    id: 'double_8',
    name: { es: 'Gran resurgimiento', en: 'Great resurface' },
    description: {
      es: 'La siguiente resurrección aumentará el ataque, la defensa, la precisión y la evasión del aliado en dos niveles durante 3 turnos.',
      en: "The next revival will increase the ally's attack/defense/hit/evasion by two levels for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 25 },
  },
  crit_1: {
    id: 'crit_1',
    name: { es: 'Rebelión', en: 'Rebellion' },
    description: {
      es: 'Aumenta un 7% la probabilidad de crítico de un aliado durante 3 turnos.',
      en: 'Increases crit rate by 7% for one ally for three turns',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  crit_2: {
    id: 'crit_2',
    name: { es: 'Revolución', en: 'Revolution' },
    description: {
      es: 'Aumenta un 15% la probabilidad de crítico de todos los aliados y todos los enemigos durante 3 turnos.',
      en: 'Increases crit rate by 15% for all allies and enemies for three turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  protect_1:{
    id: 'protect_1',
    name: { es: 'Muro físico', en: 'Physical wall' },
    description: {
      es: 'Levanta una protección sobre un aliado que reduce a la mitad todo el daño contundente, cortante y perforante recibido y cubre debilidades innatas a ambos durante 3 turnos.',
      en: 'Erects a shield on one ally to halve blunt, slash and pierce damage received and cover innate weaknesses to them for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 27 },
  },
  protect_2:{
    id: 'protect_2',
    name: { es: 'Muro de llama oscura', en: 'Dark fire wall' },
    description: {
      es: 'Levanta una protección sobre un aliado que reduce a la mitad todo el daño de fuego y de maldición recibido y cubre debilidades innatas a ambos durante 3 turnos.',
      en: 'Erects a shield on one ally to halve fire and curse damage received and cover innate weaknesses to them for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 21 },
  },
  protect_3:{
    id: 'protect_3',
    name: { es: 'Muro de destello', en: 'Lightning wall' },
    description: {
      es: 'Levanta una protección sobre un aliado que reduce a la mitad todo el daño de trueno y de bendición recibido y cubre debilidades innatas a ambos durante 3 turnos.',
      en: 'Erects a shield on one ally to halve thunder and bless damage received and cover innate weaknesses to them for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 21 },
  },
  protect_4:{
    id: 'protect_4',
    name: { es: 'Muro de explosión natural', en: 'Natural burst wall' },
    description: {
      es: 'Levanta una protección sobre un aliado que reduce a la mitad todo el daño de viento y nuclear recibido y cubre debilidades innatas a ambos durante 3 turnos.',
      en: 'Erects a shield on one ally to halve wind and nuclear damage received and cover innate weaknesses to them for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 21 },
  },
  protect_5:{
    id: 'protect_5',
    name: { es: 'Muro de congelación cerebral', en: 'Brain freeze wall' },
    description: {
      es: 'Levanta una protección sobre un aliado que reduce a la mitad todo el daño de hielo y psíquico recibido y cubre debilidades innatas a ambos durante 3 turnos.',
      en: 'Erects a shield on one ally to halve ice and psychic damage received and cover innate weaknesses to them for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 21 },
  },
  protect_6:{
    id: 'protect_6',
    name: { es: 'Guardia física', en: 'Physic guard' },
    description: {
      es: 'Levanta una protección sobre un aliado que reduce a la mitad todo el daño contundente, cortante y perforante recibido durante 1 turno.',
      en: 'Erects a shield on one ally to halve blunt, slash and pierce damage received for 1 turn.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 11 },
  },
  protect_7:{
    id: 'protect_7',
    name: { es: 'Guardia elemental', en: 'Elemental guard' },
    description: {
      es: 'Levanta una protección sobre un aliado que reduce a la mitad todo el daño de fuego, hielo, viento y trueno recibido durante 1 turno.',
      en: 'Erects a shield on one ally to halve fire, ice, wind and thunder damage received for 1 turn.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 11 },
  },
  protect_8:{
    id: 'protect_8',
    name: { es: 'Guardia espiritual', en: 'Spiritual guard' },
    description: {
      es: 'Levanta una protección sobre un aliado que reduce a la mitad todo el daño nuclear, psíquico, de bendición y de maldición recibido durante 1 turno.',
      en: 'Erects a shield on one ally to halve nuclear, psychic, bless and curse damage received for 1 turn.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 11 },
  },
  protect_9:{
    id: 'protect_9',
    name: { es: 'Tetrakarn', en: 'Tetrakarn' },
    description: {
      es: 'Levanta una protección sobre un aliado que repele un ataque físico de daño contundente, cortante o perforante una vez.',
      en: 'Erects a shield on one ally to repel a physical blunt, slash or pierce damage attack once.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 29 },
  },
  protect_10:{
    id: 'protect_10',
    name: { es: 'Makarakarn', en: 'Makarakarn' },
    description: {
      es: 'Levanta una protección sobre un aliado que repele un ataque mágico de daño de fuego, hielo, viento o trueno una vez.',
      en: 'Erects a shield on one ally to repel a magic fire, ice, wind or thunder damage attack once.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 29 },
  },
  protect_11:{
    id: 'protect_11',
    name: { es: 'Spirikarn', en: 'Spirikarn' },
    description: {
      es: 'Levanta una protección sobre un aliado que repele un ataque mágico de daño nuclear, psíquico, de bendición o de maldición una vez.',
      en: 'Erects a shield on one ally to repel a magic nuclear, psychic, bless or curse damage attack once.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 29 },
  },
  protect_12:{
    id: 'protect_12',
    name: { es: 'Muralla vital', en: 'Life wall' },
    description: {
      es: 'Levanta una protección sobre un aliado que repele un ataque (excepto todopoderoso) una vez.',
      en: 'Erects a shield on one ally to repel one single attack (except almighty).',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 95 },
  },
  protect_13:{
    id: 'protect_13',
    name: { es: 'Tetraja', en: 'Tetraja' },
    description: {
      es: 'Levanta una protección sobre un aliado que anula un efecto de muerte instantánea una vez.',
      en: 'Erects a shield on one ally to null an insta-kill effect once.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 23 },
  },
  break_1:{
    id: 'break_1',
    name: { es: 'Dekaja', en: 'Dekaja' },
    description: {
      es: 'Anula todos los efectos -kaja de todos los enemigos.',
      en: 'Negates all -kaja buffs of all enemies.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 9 },
  },
  break_2:{
    id: 'break_2',
    name: { es: 'Dekunda', en: 'Dekunda' },
    description: {
      es: 'Anula todos los efectos -nda de todos los aliados.',
      en: 'Negates all -nda debuffs of all allies.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 9 },
  },
  break_3:{
    id: 'break_3',
    name: { es: 'Fire Break', en: 'Fire Break' },
    description: {
      es: 'Elimina resistencias a fuego de todos los enemigos durante 3 turnos.',
      en: 'Suppresses innate Fire resistances of all foes for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  break_4:{
    id: 'break_4',
    name: { es: 'Ice Break', en: 'Ice Break' },
    description: {
      es: 'Elimina resistencias a hielo de todos los enemigos durante 3 turnos.',
      en: 'Suppresses innate Ice resistances of all foes for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  break_5:{
    id: 'break_5',
    name: { es: 'Wind Break', en: 'Wind Break' },
    description: {
      es: 'Elimina resistencias a viento de todos los enemigos durante 3 turnos.',
      en: 'Suppresses innate Wind resistances of all foes for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  break_6:{
    id: 'break_6',
    name: { es: 'Thunder Break', en: 'Thunder Break' },
    description: {
      es: 'Elimina resistencias a trueno de todos los enemigos durante 3 turnos.',
      en: 'Suppresses innate Thunder resistances of all foes for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  break_7:{
    id: 'break_7',
    name: { es: 'Nuke Break', en: 'Nuke Break' },
    description: {
      es: 'Elimina resistencias a nuclear de todos los enemigos durante 3 turnos.',
      en: 'Suppresses innate Nuclear resistances of all foes for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  break_8:{
    id: 'break_8',
    name: { es: 'Psy Break', en: 'Psy Break' },
    description: {
      es: 'Elimina resistencias a psíquico de todos los enemigos durante 3 turnos.',
      en: 'Suppresses innate Psy resistances of all foes for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  break_9:{
    id: 'break_9',
    name: { es: 'Tetra Break', en: 'Tetra Break' },
    description: {
      es: 'Elimina efectos de Tetrakarn activos de todos los enemigos.',
      en: 'Removes active Tetrakarn effects from all enemies.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 9 },
  },
  break_10:{
    id: 'break_10',
    name: { es: 'Makara Break', en: 'Makara Break' },
    description: {
      es: 'Elimina efectos de Makarakarn activos de todos los enemigos.',
      en: 'Removes active Makarakarn effects from all enemies.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 9 },
  },
  break_11:{
    id: 'break_11',
    name: { es: 'Spirik Break', en: 'Spirik Break' },
    description: {
      es: 'Elimina efectos de Spirikarn activos de todos los enemigos.',
      en: 'Removes active Spirikarn effects from all enemies.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 9 },
  },

  // --- overworld ---

  overworld_1:{
    id: 'overworld_1',
    name: { es: 'Embestida', en: 'Barge past' },
    description: {
      es: 'Al recibir un combo de golpes de un enemigo en combate de acción, no comienza con desventaja.',
      en: 'Getting hit in overworld combat doesn\'t result in battle disadvantage.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  overworld_2:{
    id: 'overworld_2',
    name: { es: 'Acción mejorada', en: 'Enhanced action' },
    description: {
      es: 'Los ataques realizados en combate de acción infligen más daño a los enemigos.',
      en: 'Striking in overworld combat causes more damage.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  overworld_3:{
    id: 'overworld_3',
    name: { es: 'Cambiar las tornas', en: 'Surprise upset' },
    description: {
      es: 'Reduce drásticamente la dificultad de aturdir a enemigos de nivel superior en combate de acción.',
      en: 'Drastically reduce difficulty to stun high level enemies in overworld combat.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  overworld_4:{
    id: 'overworld_4',
    name: { es: 'Cooperación mejorada', en: 'Enhanced cooperation' },
    description: {
      es: 'Aumenta mucho el daño de los compañeros en combates de acción.',
      en: 'Greatly increases allies\' damage in overworld combat.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  overworld_5:{
    id: 'overworld_5',
    name: { es: 'Autorreflejo', en: 'Auto repel' },
    description: {
      es: 'Probabilidad de reflejar un ataque enemigo en combate de acción.',
      en: 'Chance to reflect an enemy\'s attack in overworld combat.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  overworld_6:{
    id: 'overworld_6',
    name: { es: 'Baile elegante', en: 'Elegant dancing' },
    description: {
      es: 'Probabilidad de esquivar automáticamente un ataque enemigo en combate de acción.',
      en: 'Chance to automatically dodge an enemy\'s attack in overworld combat.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  overworld_7:{
    id: 'overworld_7',
    name: { es: 'Sangre adinerada', en: 'Money bleed' },
    description: {
      es: 'Si el protagonista recibe un golpe en combate de acción, pierde monedas en lugar de perder HP.',
      en: 'When the protagonist gets hit in overworld combat, they lose money instead of HP.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },

  

  // --- passive ---

  passive_atr_1:{
    id: 'passive_1',
    name: { es: 'Más ataque físico', en: 'Enhance physical attack' },
    description: {
      es: 'El daño de cualquier ataque calculado con Fuerza aumenta un +5%.',
      en: 'Any damage calculated with Strength increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_atr_2:{
    id: 'passive_2',
    name: { es: 'Más ataque elemental', en: 'Enhance elemental attack' },
    description: {
      es: 'El daño de cualquier ataque calculado con Inteligencia aumenta un +5%.',
      en: 'Any damage calculated with Intelligence increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_atr_3:{
    id: 'passive_3',
    name: { es: 'Más ataque espiritual', en: 'Enhance spiritual attack' },
    description: {
      es: 'El daño de cualquier ataque calculado con Sabiduría aumenta un +5%.',
      en: 'Any damage calculated with Wisdom increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_atr_4:{
    id: 'passive_4',
    name: { es: 'Más defensa física', en: 'Enhance physical defense' },
    description: {
      es: 'El daño de cualquier ataque recibido que se calcule con Resistencia disminuye un 5%.',
      en: 'Any damage received that is calculated with Resistance decreases by 5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_atr_5:{
    id: 'passive_5',
    name: { es: 'Más defensa elemental', en: 'Enhance elemental defense' },
    description: {
      es: 'El daño de cualquier ataque recibido que se calcule con Inteligencia disminuye un 5%.',
      en: 'Any damage received that is calculated with Intelligence decreases by 5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_atr_6:{
    id: 'passive_6',
    name: { es: 'Más defensa espiritual', en: 'Enhance spiritual defense' },
    description: {
      es: 'El daño de cualquier ataque recibido que se calcule con Sabiduría disminuye un 5%.',
      en: 'Any damage received that is calculated with Wisdom decreases by 5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_atr_7:{
    id: 'passive_7',
    name: { es: 'Más HP', en: 'Enhance HP' },
    description: {
      es: 'Aumenta los HP máximos en un +15%.',
      en: 'Increases max HP by +15%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_atr_8:{
    id: 'passive_8',
    name: { es: 'Más MP', en: 'Enhance MP' },
    description: {
      es: 'Aumenta los MP máximos en un +6%.',
      en: 'Increases max MP by +6%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_1:{
    id: 'passive_up_1',
    name: { es: 'Aumentar fuego', en: 'Fire boost' },
    description: {
      es: 'Cualquier daño de fuego infligido aumenta un +5%.',
      en: 'Any fire damage dealt increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_2:{
    id: 'passive_up_2',
    name: { es: 'Amplificar fuego', en: 'Fire amp' },
    description: {
      es: 'Cualquier daño de fuego infligido aumenta un +10%.',
      en: 'Any fire damage dealt increases by +10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_3:{
    id: 'passive_up_3',
    name: { es: 'Aumentar hielo', en: 'Ice boost' },
    description: {
      es: 'Cualquier daño de hielo infligido aumenta un +5%.',
      en: 'Any ice damage dealt increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_4:{
    id: 'passive_up_4',
    name: { es: 'Amplificar hielo', en: 'Ice amp' },
    description: {
      es: 'Cualquier daño de hielo infligido aumenta un +10%.',
      en: 'Any ice damage dealt increases by +10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_5:{
    id: 'passive_up_5',
    name: { es: 'Aumentar viento', en: 'Wind boost' },
    description: {
      es: 'Cualquier daño de viento infligido aumenta un +5%.',
      en: 'Any wind damage dealt increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_6:{
    id: 'passive_up_6',
    name: { es: 'Amplificar viento', en: 'Wind amp' },
    description: {
      es: 'Cualquier daño de viento infligido aumenta un +10%.',
      en: 'Any wind damage dealt increases by +10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_7:{
    id: 'passive_up_7',
    name: { es: 'Aumentar trueno', en: 'Elec boost' },
    description: {
      es: 'Cualquier daño de trueno infligido aumenta un +5%.',
      en: 'Any thunder damage dealt increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_8:{
    id: 'passive_up_8',
    name: { es: 'Amplificar trueno', en: 'Elec amp' },
    description: {
      es: 'Cualquier daño de trueno infligido aumenta un +10%.',
      en: 'Any thunder damage dealt increases by +10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_9:{
    id: 'passive_up_9',
    name: { es: 'Aumentar nuclear', en: 'Nuke boost' },
    description: {
      es: 'Cualquier daño nuclear infligido aumenta un +5%.',
      en: 'Any nuclear damage dealt increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_10:{
    id: 'passive_up_10',
    name: { es: 'Amplificar nuclear', en: 'Nuke amp' },
    description: {
      es: 'Cualquier daño nuclear infligido aumenta un +10%.',
      en: 'Any nuclear damage dealt increases by +10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_11:{
    id: 'passive_up_11',
    name: { es: 'Aumentar psíquico', en: 'Psi boost' },
    description: {
      es: 'Cualquier daño psíquico infligido aumenta un +5%.',
      en: 'Any psychic damage dealt increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_12:{
    id: 'passive_up_12',
    name: { es: 'Amplificar psíquico', en: 'Psi amp' },
    description: {
      es: 'Cualquier daño psíquico infligido aumenta un +10%.',
      en: 'Any psychic damage dealt increases by +10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_13:{
    id: 'passive_up_13',
    name: { es: 'Aumentar todopoderoso', en: 'Almighty boost' },
    description: {
      es: 'Cualquier daño todopoderoso infligido aumenta un +8%.',
      en: 'Any almighty damage dealt increases by +8%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_14:{
    id: 'passive_up_14',
    name: { es: 'Aumentar cortante', en: 'Slash boost' },
    description: {
      es: 'Cualquier daño cortante infligido aumenta un +8%.',
      en: 'Any slash damage dealt increases by +8%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_15:{
    id: 'passive_up_15',
    name: { es: 'Aumentar contundente', en: 'Blunt boost' },
    description: {
      es: 'Cualquier daño contundente infligido aumenta un +8%.',
      en: 'Any blunt damage dealt increases by +8%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_16:{
    id: 'passive_up_16',
    name: { es: 'Aumentar perforante', en: 'Pierce boost' },
    description: {
      es: 'Cualquier daño perforante infligido aumenta un +8%.',
      en: 'Any pierce damage dealt increases by +8%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_17:{
    id: 'passive_up_17',
    name: { es: 'Aumentar bendición', en: 'Bless boost' },
    description: {
      es: 'Cualquier daño de bendición infligido aumenta un +8%.',
      en: 'Any bless damage dealt increases by +8%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_18:{
    id: 'passive_up_18',
    name: { es: 'Aumentar maldición', en: 'Curse boost' },
    description: {
      es: 'Cualquier daño de maldición infligido aumenta un +8%.',
      en: 'Any curse damage dealt increases by +8%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_19:{
    id: 'passive_up_19',
    name: { es: 'Aumentar Hama', en: 'Hama boost' },
    description: {
      es: 'Aumenta la probabilidad de muerte instantánea cuando se utilizan habilidades de bendición.',
      en: 'Increases insta-kill chances when using bless skills.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_20:{
    id: 'passive_up_20',
    name: { es: 'Aumentar Mudo', en: 'Mudo boost' },
    description: {
      es: 'Aumenta la probabilidad de muerte instantánea cuando se utilizan habilidades de maldición.',
      en: 'Increases insta-kill chances when using curse skills.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_21:{
    id: 'passive_up_21',
    name: { es: 'Aumentar curación', en: 'Heal boost' },
    description: {
      es: 'Aumenta la cantidad de HP restaurados a aliados al utilizar habilidades de curación.',
      en: 'Increases HP restored to allies with healing skills.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_22:{
    id: 'passive_up_22',
    name: { es: 'Amplificar debilidad', en: 'Weakness boost' },
    description: {
      es: 'Cualquier daño infligido a una debilidad enemiga aumenta un +15%.',
      en: 'Any enemy weakness damage dealt increases by +15%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_23:{
    id: 'passive_up_23',
    name: { es: 'Aumentar daño básico', en: 'Normal boost' },
    description: {
      es: 'Cualquier daño infligido con un ataque básico con arma aumenta un +20%.',
      en: 'Any normal weapon attack damage dealt increases by +20%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_24:{
    id: 'passive_up_24',
    name: { es: 'Mejorar espada', en: 'Improve sword' },
    description: {
      es: 'Cualquier daño infligido con espada aumenta un +9%.',
      en: 'Any damage dealt with a sword increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_25:{
    id: 'passive_up_25',
    name: { es: 'Mejorar katana', en: 'Improve katana' },
    description: {
      es: 'Cualquier daño infligido con katana aumenta un +9%.',
      en: 'Any damage dealt with a katana increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_26:{
    id: 'passive_up_26',
    name: { es: 'Mejorar florete', en: 'Improve rapier' },
    description: {
      es: 'Cualquier daño infligido con florete aumenta un +9%.',
      en: 'Any damage dealt with a rapier increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_27:{
    id: 'passive_up_27',
    name: { es: 'Mejorar lanza', en: 'Improve spear' },
    description: {
      es: 'Cualquier daño infligido con lanza aumenta un +9%.',
      en: 'Any damage dealt with a spear increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_28:{
    id: 'passive_up_28',
    name: { es: 'Mejorar hacha', en: 'Improve axe' },
    description: {
      es: 'Cualquier daño infligido con hacha aumenta un +9%.',
      en: 'Any damage dealt with an axe increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_29:{
    id: 'passive_up_29',
    name: { es: 'Mejorar maza', en: 'Improve mace' },
    description: {
      es: 'Cualquier daño infligido con maza aumenta un +9%.',
      en: 'Any damage dealt with a mace increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_30:{
    id: 'passive_up_30',
    name: { es: 'Mejorar martillo', en: 'Improve hammer' },
    description: {
      es: 'Cualquier daño infligido con martillo aumenta un +9%.',
      en: 'Any damage dealt with a hammer increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_31:{
    id: 'passive_up_31',
    name: { es: 'Mejorar daga', en: 'Improve dagger' },
    description: {
      es: 'Cualquier daño infligido con daga aumenta un +9%.',
      en: 'Any damage dealt with dagger increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_32:{
    id: 'passive_up_32',
    name: { es: 'Mejorar arco', en: 'Improve bow' },
    description: {
      es: 'Cualquier daño infligido con arco aumenta un +9%.',
      en: 'Any damage dealt with bow increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_33:{
    id: 'passive_up_33',
    name: { es: 'Mejorar ballesta', en: 'Improve crossbow' },
    description: {
      es: 'Cualquier daño infligido con ballesta aumenta un +9%.',
      en: 'Any damage dealt with crossbow increases by +9%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_34:{
    id: 'passive_up_34',
    name: { es: 'Mejorar robo', en: 'Improve stealing' },
    description: {
      es: 'Aumenta muchísimo la probabilidad de éxito de la habilidad Robar.',
      en: 'Makes it extremely likely to Steal successfully.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_35:{
    id: 'passive_up_35',
    name: { es: 'Mejorar quemadura', en: 'Burn boost' },
    description: {
      es: 'Aumenta la probalidad de quemar en 25%.',
      en: 'Increases probability of inflicting burn by 25%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_36:{
    id: 'passive_up_36',
    name: { es: 'Mejorar congelación', en: 'Freeze boost' },
    description: {
      es: 'Aumenta la probalidad de congelar en 25%.',
      en: 'Increases probability of inflicting freeze by 25%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_37:{
    id: 'passive_up_37',
    name: { es: 'Mejorar parálisis', en: 'Paralysis boost' },
    description: {
      es: 'Aumenta la probalidad de palizar en 25%.',
      en: 'Increases probability of inflicting paralysis by 25%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_38:{
    id: 'passive_up_38',
    name: { es: 'Mejorar mareo', en: 'Dizzy boost' },
    description: {
      es: 'Aumenta la probalidad de provocar mareo en 25%.',
      en: 'Increases probability of inflicting dizzy by 25%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_39:{
    id: 'passive_up_39',
    name: { es: 'Mejorar veneno', en: 'Poison boost' },
    description: {
      es: 'Aumenta la probalidad de envenenar en 25%.',
      en: 'Increases probability of inflicting poison by 25%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_40:{
    id: 'passive_up_40',
    name: { es: 'Mejorar amnesia', en: 'Amnesia boost' },
    description: {
      es: 'Aumenta la probalidad de provocar amnesia en 25%.',
      en: 'Increases probability of inflicting amnesia by 25%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_41:{
    id: 'passive_up_41',
    name: { es: 'Mejorar furia', en: 'Rage boost' },
    description: {
      es: 'Aumenta la probalidad de provocar furia en 25%.',
      en: 'Increases probability of inflicting rage by 25%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_42:{
    id: 'passive_up_42',
    name: { es: 'Mejorar daño monetario', en: 'Money damage boost' },
    description: {
      es: 'Cualquier daño infligido con ataques que gastan dinero aumenta un +8%.',
      en: 'Any damage dealt with skills that cost money increases by +8%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_43:{
    id: 'passive_up_43',
    name: { es: 'Mejorar magia de armas', en: 'Weapon magic boost' },
    description: {
      es: 'Cualquier daño infligido con magia de armas aumenta un +8%.',
      en: 'Any damage dealt with weapon magic increases by +8%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_1:{
    id: 'passive_ev_1',
    name: { es: 'Evadir fuego', en: 'Dodge fire' },
    description: {
      es: 'Aumenta la evasión contra ataques de fuego en un 10%.',
      en: 'Increases dodge rate against fire attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_2:{
    id: 'passive_ev_2',
    name: { es: 'Evadir hielo', en: 'Dodge ice' },
    description: {
      es: 'Aumenta la evasión contra ataques de hielo en un 10%.',
      en: 'Increases dodge rate against ice attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_3:{
    id: 'passive_ev_3',
    name: { es: 'Evadir viento', en: 'Dodge wind' },
    description: {
      es: 'Aumenta la evasión contra ataques de hielo en un 10%.',
      en: 'Increases dodge rate against ice attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_4:{
    id: 'passive_ev_4',
    name: { es: 'Evadir trueno', en: 'Dodge elec' },
    description: {
      es: 'Aumenta la evasión contra ataques de trueno en un 10%.',
      en: 'Increases dodge rate against thunder attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_5:{
    id: 'passive_ev_5',
    name: { es: 'Evadir nuclear', en: 'Dodge nuke' },
    description: {
      es: 'Aumenta la evasión contra ataques nucleares en un 10%.',
      en: 'Increases dodge rate against nuclear attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_6:{
    id: 'passive_ev_6',
    name: { es: 'Evadir psíquico', en: 'Dodge psi' },
    description: {
      es: 'Aumenta la evasión contra ataques psíquicos en un 10%.',
      en: 'Increases dodge rate against psychic attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_7:{
    id: 'passive_ev_7',
    name: { es: 'Evadir bendición', en: 'Dodge bless' },
    description: {
      es: 'Aumenta la evasión contra ataques de bendición en un 10%.',
      en: 'Increases dodge rate against bless attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_8:{
    id: 'passive_ev_8',
    name: { es: 'Evadir maldición', en: 'Dodge curse' },
    description: {
      es: 'Aumenta la evasión contra ataques de maldición en un 10%.',
      en: 'Increases dodge rate against curse attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_9:{
    id: 'passive_ev_9',
    name: { es: 'Evadir cortante', en: 'Dodge slash' },
    description: {
      es: 'Aumenta la evasión contra ataques cortantes en un 10%.',
      en: 'Increases dodge rate against slash attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_10:{
    id: 'passive_ev_10',
    name: { es: 'Evadir contundente', en: 'Dodge blunt' },
    description: {
      es: 'Aumenta la evasión contra ataques contundentes en un 10%.',
      en: 'Increases dodge rate against blunt attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_ev_11:{
    id: 'passive_ev_11',
    name: { es: 'Evadir perforante', en: 'Dodge pierce' },
    description: {
      es: 'Aumenta la evasión contra ataques perforantes en un 10%.',
      en: 'Increases dodge rate against pierce attacks by 10%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_1:{
    id: 'passive_resist_1',
    name: { es: 'Resistir fuego', en: 'Resist fire' },
    description: {
      es: 'Sustituye afinidad a fuego Débil y Neutro por Resistente.',
      en: 'Changes fire Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_2:{
    id: 'passive_resist_2',
    name: { es: 'Resistir hielo', en: 'Resist ice' },
    description: {
      es: 'Sustituye afinidad a hielo Débil y Neutro por Resistente.',
      en: 'Changes ice Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_3:{
    id: 'passive_resist_3',
    name: { es: 'Resistir viento', en: 'Resist wind' },
    description: {
      es: 'Sustituye afinidad a viento Débil y Neutro por Resistente.',
      en: 'Changes wind Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_4:{
    id: 'passive_resist_4',
    name: { es: 'Resistir trueno', en: 'Resist elec' },
    description: {
      es: 'Sustituye afinidad a trueno Débil y Neutro por Resistente.',
      en: 'Changes thunder Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_5:{
    id: 'passive_resist_5',
    name: { es: 'Resistir nuclear', en: 'Resist nuke' },
    description: {
      es: 'Sustituye afinidad a nuclear Débil y Neutro por Resistente.',
      en: 'Changes nuclear Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_6:{
    id: 'passive_resist_6',
    name: { es: 'Resistir psíquico', en: 'Resist psi' },
    description: {
      es: 'Sustituye afinidad a psíquico Débil y Neutro por Resistente.',
      en: 'Changes psychic Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_7:{
    id: 'passive_resist_7',
    name: { es: 'Resistir bendición', en: 'Resist bless' },
    description: {
      es: 'Sustituye afinidad a bendición Débil y Neutro por Resistente.',
      en: 'Changes bless Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_8:{
    id: 'passive_resist_8',
    name: { es: 'Resistir maldición', en: 'Resist curse' },
    description: {
      es: 'Sustituye afinidad a maldición Débil y Neutro por Resistente.',
      en: 'Changes curse Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_9:{
    id: 'passive_resist_9',
    name: { es: 'Resistir cortante', en: 'Resist slash' },
    description: {
      es: 'Sustituye afinidad a cortante Débil y Neutro por Resistente.',
      en: 'Changes slash Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_10:{
    id: 'passive_resist_10',
    name: { es: 'Resistir contundente', en: 'Resist blunt' },
    description: {
      es: 'Sustituye afinidad a contundente Débil y Neutro por Resistente.',
      en: 'Changes blunt Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_11:{
    id: 'passive_resist_11',
    name: { es: 'Resistir perforante', en: 'Resist pierce' },
    description: {
      es: 'Sustituye afinidad a perforante Débil y Neutro por Resistente.',
      en: 'Changes pierce Weakness and Neutral affinity to Resist',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_reg_1:{
    id: 'passive_reg_1',
    name: { es: 'Regenerar 1', en: 'Regenerate 1' },
    description: {
      es: 'Recupera el 2% de sus HP máximos cada turno.',
      en: 'Recovers 2% of max HP every turn.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_reg_2:{
    id: 'passive_reg_2',
    name: { es: 'Regenerar 2', en: 'Regenerate 2' },
    description: {
      es: 'Recupera el 4% de sus HP máximos cada turno.',
      en: 'Recovers 4% of max HP every turn.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_reg_3:{
    id: 'passive_reg_3',
    name: { es: 'Regenerar 3', en: 'Regenerate 3' },
    description: {
      es: 'Recupera el 6% de sus HP máximos cada turno.',
      en: 'Recovers 6% of max HP every turn.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_reg_4:{
    id: 'passive_reg_4',
    name: { es: 'Vigorizar 1', en: 'Invigorate 1' },
    description: {
      es: 'Recupera el 1% de sus MP máximos cada turno.',
      en: 'Recovers 1% of max MP every turn.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_reg_5:{
    id: 'passive_reg_5',
    name: { es: 'Vigorizar 2', en: 'Invigorate 2' },
    description: {
      es: 'Recupera el 2% de sus MP máximos cada turno.',
      en: 'Recovers 2% of max MP every turn.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_reg_6:{
    id: 'passive_reg_6',
    name: { es: 'Vigorizar 3', en: 'Invigorate 3' },
    description: {
      es: 'Recupera el 3% de sus MP máximos cada turno.',
      en: 'Recovers 3% of max MP every turn.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_auto_1:{
    id: 'passive_auto_1',
    name: { es: 'Maestro del ataque', en: 'Attack Master' },
    description: {
      es: 'Lanza Tarukaja al comenzar el combate.',
      en: 'Casts Tarukaja at the start of the battle.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_auto_2:{
    id: 'passive_auto_2',
    name: { es: 'Maestro de la defensa', en: 'Defense Master' },
    description: {
      es: 'Lanza Rakukaja al comenzar el combate.',
      en: 'Casts Rakukaja at the start of the battle.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_auto_3:{
    id: 'passive_auto_3',
    name: { es: 'Maestro de la velocidad', en: 'Speed Master' },
    description: {
      es: 'Lanza Sukukaja al comenzar el combate.',
      en: 'Casts Sukukaja at the start of the battle.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_sturdy_1:{
    id: 'passive_sturdy_1',
    name: { es: 'Aguante', en: 'Endure' },
    description: {
      es: 'Sobrevive un ataque mortal con 1 HP (una vez por combate).',
      en: 'Survives one fatal blow with 1 HP remaining (once per battle).',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_sturdy_2:{
    id: 'passive_sturdy_2',
    name: { es: 'Alma inmortal', en: 'Enduring soul' },
    description: {
      es: 'Sobrevive un ataque mortal con vida completa (una vez por combate).',
      en: 'Survives one fatal blow with full HP (once per battle).',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_sturdy_3:{
    id: 'passive_sturdy_3',
    name: { es: 'Truco de supervivencia', en: 'Survival trick' },
    description: {
      es: 'Sobrevive un ataque de muerte instantánea con 1 HP (una vez por combate).',
      en: 'Survives one insta-kill attack with 1 HP remaining (once per battle).',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_1:{
    id: 'passive_spend_1',
    name: { es: 'Maestro de las armas', en: 'Arms master' },
    description: {
      es: 'Reduce el consumo de MP de las habilidades físicas en un 33%.',
      en: 'Reduces MP cost of physical skills by 33%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_2:{
    id: 'passive_spend_2',
    name: { es: 'Maestro de la mente', en: 'Mind master' },
    description: {
      es: 'Reduce el consumo de MP de las habilidades elementales en un 33%.',
      en: 'Reduces MP cost of elemental skills by 33%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_3:{
    id: 'passive_spend_3',
    name: { es: 'Maestro del alma', en: 'Soul master' },
    description: {
      es: 'Reduce el consumo de MP de las habilidades espirituales en un 33%.',
      en: 'Reduces MP cost of spiritual skills by 33%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_4:{
    id: 'passive_spend_4',
    name: { es: 'Maestro del poder', en: 'Power master' },
    description: {
      es: 'Reduce el consumo de MP de las habilidades todopoderosas en un 33%.',
      en: 'Reduces MP cost of spiritual skills by 33%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_5:{
    id: 'passive_spend_5',
    name: { es: 'Maestro de las heridas', en: 'Wound master' },
    description: {
      es: 'Reduce el consumo de MP de las habilidades de curación en un 33%.',
      en: 'Reduces MP cost of healing skills by 33%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_6:{
    id: 'passive_spend_6',
    name: { es: 'Maestro de la tumba', en: 'Grave master' },
    description: {
      es: 'Reduce el consumo de MP de las habilidades de resurrección en un 33%.',
      en: 'Reduces MP cost of revival skills by 33%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_7:{
    id: 'passive_spend_7',
    name: { es: 'Maestro de las artes', en: 'Arts master' },
    description: {
      es: 'Reduce el consumo de HP de las habilidades que consumen HP en un 50%.',
      en: 'Reduces HP cost of skills that cost HP by 50%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_8:{
    id: 'passive_spend_8',
    name: { es: 'Maestro de las gangas', en: 'Bargain master' },
    description: {
      es: 'Reduce el coste de dinero de las habilidades que consumen dinero en un 50%.',
      en: 'Reduces money cost of skills that cost money by 50%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_spend_9:{
    id: 'passive_spend_9',
    name: { es: 'Maestro de la miscelánea', en: 'Misc master' },
    description: {
      es: 'Reduce el consumo de MP de las habilidades de estados alterados y de apoyo en un 33%.',
      en: 'Reduces MP cost of status and support skills by 33%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },


  // --- line-exclusive ---

}
