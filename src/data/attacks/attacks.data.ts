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
    name: { es: 'Gran corte aciago', en: 'Large fateful cut' },
    description: {
      es: 'Con espada. Inflige daño físico cortante grave a todos los enemigos.',
      en: 'With sword. Deals heavy slash physical damage to all enemies.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 30 },
  },
  sword_7: {
    id: 'sword_7',
    name: { es: 'Sello de las sombras', en: 'Seal of shadows' },
    description: {
      es: 'Con espada. Inflige daño físico grave cortante, perforante y de maldición a un enemigo.',
      en: 'With sword. Deals heavy slash, pierce and curse physical damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 30 },
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
    cost: { kind: 'mp', amount: 32 },
  },
  katana_8: {
    id: 'katana_8',
    name: { es: 'Hassou Tobi', en: 'Hassou Tobi' },
    description: {
      es: 'Con espada y katana. Inflige daño físico cortante medio a todos los enemigos entre 5 y 9 veces. El número de golpes dependerá de la Agilidad y la Precisión.',
      en: 'With sword and katana. Deals medium slash physical damage to all enemies 5 to 9 times. More hits depending on user\'s Agility and Precision.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 46 },
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
      es: 'Con martillo. Inflige daño físico contundente medio a un enemigo. Baja el ataque del usuario en un nivel durante 3 turnos.',
      en: 'With hammer. Deals medium blunt physical damage to one enemy. Lowers user attack by one level for 3 turns.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 5 },
  },
  hammer_4: {
    id: 'hammer_4',
    name: { es: 'Bola de demolición', en: 'Wrecking ball' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente medio a todos los enemigos. Baja la precisión y evasión del usuario en un nivel durante 3 turnos.',
      en: 'With hammer. Deals medium blunt physical damage to all enemies. Lowers user hit/evasion by one level for 3 turns.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 12 },
  },
  hammer_5: {
    id: 'hammer_5',
    name: { es: 'Home run', en: 'Home run' },
    description: {
      es: 'Con martillo. Inflige daño físico contundente grave a un enemigo. Baja la defensa del usuario en un nivel durante 3 turnos.',
      en: 'With hammer. Deals heavy blunt physical damage to one enemy. Lowers user defense by one level for 3 turns.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 9 },
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
      es: 'Con martillo y maza. Inflige daño físico contundente extremo a un enemigo. Baja el ataque, defensa, precisión y evasión del usuario en un nivel durante 3 turnos.',
      en: 'With hammer and mace. Deals extreme blunt physical damage to one enemy. Lowers user attack, defense and hit/evasion by one level for 3 turns.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 34 },
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
    name: { es: 'Millar de flechas', en: 'Thousand arrows' },
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
      es: 'Con arco y ballesta. Inflige daño físico perforante colosal a un enemigo. Calcula el daño con la Precisión del atacante y con el atributo del enemigo más bajo entre Resistencia, Constitución y Voluntad del enemigo.',
      en: 'With bow and crossbow. Deals colossal pierce physical damage to one enemy. Calculates damage with user\'s Hit and with enemy\'s lowest stat among Resistance, Constitution and Will.',
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
      es: 'Inflige daño mágico todopoderoso medio a todos los enemigos.',
      en: 'Deals medium almighty magic damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 15 },
  },
  almighty_2: {
    id: 'almighty_2',
    name: { es: 'Gidola', en: 'Gidola' },
    description: {
      es: 'Inflige daño mágico todopoderoso grave a un enemigo.',
      en: 'Deals heavy almighty magic damage to one enemy.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 10 },
  },
  almighty_3: {
    id: 'almighty_3',
    name: { es: 'Megidola', en: 'Megidola' },
    description: {
      es: 'Inflige daño mágico todopoderoso grave a todos los enemigos.',
      en: 'Deals heavy almighty magic damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 25 },
  },
  almighty_4: {
    id: 'almighty_4',
    name: { es: 'Gidolaon', en: 'Gidolaon' },
    description: {
      es: 'Inflige daño mágico todopoderoso severo a un enemigo.',
      en: 'Deals severe almighty magic damage to one enemy.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 20 },
  },
  almighty_5: {
    id: 'almighty_5',
    name: { es: 'Megidolaon', en: 'Megidolaon' },
    description: {
      es: 'Inflige daño mágico todopoderoso severo a todos los enemigos.',
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
  almighty_7: {
    id: 'almighty_7',
    name: { es: 'Drenar HP', en: 'Life drain' },
    description: {
      es: 'Inflige daño mágico leve todopoderoso a un enemigo y se cura los HP arrebatados.',
      en: 'Deals light almighty magic damage to one enemy and heals the HP taken.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 3 },
  },
  almighty_8: {
    id: 'almighty_8',
    name: { es: 'Drenar MP', en: 'Spirit drain' },
    description: {
      es: 'Inflige daño mágico leve todopoderoso a un enemigo a sus MP, y se cura los MP arrebatados.',
      en: 'Deals light almighty magic damage to one enemy\'s MP, and heals the MP taken.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 3 },
  },
  almighty_9: {
    id: 'almighty_9',
    name: { es: 'Drenar esencia', en: 'Essence drain' },
    description: {
      es: 'Inflige daño mágico medio todopoderoso a un enemigo a sus HP y sus MP, y se cura todo lo arrebatado.',
      en: 'Deals medium almighty magic damage to one enemy\'s HP and MP, and heals both.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 12 },
  },
  almighty_10: {
    id: 'almighty_10',
    name: { es: 'Aliento fétido', en: 'Foul Breath' },
    description: {
      es: 'Duplica la probabilidad de un enemigo de recibir estados alterados durante 4 turnos.',
      en: 'Doubles susceptibility to all ailments of one enemy for 4 turns.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 8 },
  },
  almighty_11: {
    id: 'almighty_11',
    name: { es: 'Aire estancado', en: 'Stagnant air' },
    description: {
      es: 'Duplica la probabilidad de todos los enemigos y todos los aliados de recibir estados alterados durante 4 turnos.',
      en: 'Doubles susceptibility to all ailments of all enemies and all allies for 4 turns.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 8 },
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
    name: { es: 'Gota de energía', en: 'Energy drop' },
    description: {
      es: 'Cura la confusión/miedo/desesperación/furia de un aliado.',
      en: "Cure Confusion/Fear/Despair/Rage of one ally.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 4 },
  },
  ailm_6: {
    id: 'ailm_6',
    name: { es: 'Lluvia de energía', en: 'Energy shower' },
    description: {
      es: 'Cura la confusión/miedo/desesperación/furia de todos los aliados.',
      en: "Cure Confusion/Fear/Despair/Rage of all allies.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 9 },
  },
  ailm_7: {
    id: 'ailm_7',
    name: { es: 'Gota de amrita', en: 'Amrita drop' },
    description: {
      es: 'Cura todos los estados alterados de un aliado.',
      en: "Cure all ailments of one ally.",
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 8 },
  },
  ailm_8: {
    id: 'ailm_8',
    name: { es: 'Lluvia de amrita', en: 'Amrita shower' },
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
  passive_up_44:{
    id: 'passive_up_44',
    name: { es: 'Mejorar absorción', en: 'Drain boost' },
    description: {
      es: 'Cualquier daño infligido con magia de absorción aumenta un +20%.',
      en: 'Any damage dealt with drain magic increases by +20%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_45:{
    id: 'passive_up_45',
    name: { es: 'Mejorar invocaciones', en: 'Summon boost' },
    description: {
      es: 'Cualquier daño infligido con magia de invocación aumenta un +5%.',
      en: 'Any damage dealt with summon magic increases by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_up_46:{
    id: 'passive_up_46',
    name: { es: 'Mejorar nigromancia', en: 'Nigromance boost' },
    description: {
      es: 'Cualquier daño infligido con nigromancia aumenta un +20%.',
      en: 'Any damage dealt with nigromance magic increases by +20%.',
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
  passive_resist_12:{
    id: 'passive_resist_12',
    name: { es: 'Resistir quemadura/mareo', en: 'Resist burn/dizzy' },
    description: {
      es: 'Disminuye enormemente la probabilidad de ser afligido con quemadura o con mareo.',
      en: 'Hugely decreases chance of being inflicted burn or dizzy.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_13:{
    id: 'passive_resist_13',
    name: { es: 'Resistir veneno/furia', en: 'Resist poison/rage' },
    description: {
      es: 'Disminuye enormemente la probabilidad de ser afligido con veneno o con furia.',
      en: 'Hugely decreases chance of being inflicted poison or rage.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_14:{
    id: 'passive_resist_14',
    name: { es: 'Resistir congelación/parálisis', en: 'Resist freeze/paralysis' },
    description: {
      es: 'Disminuye enormemente la probabilidad de ser afligido con congelación o con parálisis.',
      en: 'Hugely decreases chance of being inflicted freeze or paralysis.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_15:{
    id: 'passive_resist_15',
    name: { es: 'Resistir lavado de cerebro/amnesia', en: 'Resist brainwash/amnesia' },
    description: {
      es: 'Disminuye enormemente la probabilidad de ser afligido con lavado de cerebro o con amnesia.',
      en: 'Hugely decreases chance of being inflicted brainwash or amnesia.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_resist_16:{
    id: 'passive_resist_16',
    name: { es: 'Resistir miedo/desesperación/sueño', en: 'Resist fear/despair/sleep' },
    description: {
      es: 'Disminuye enormemente la probabilidad de ser afligido con miedo, con desesperación o con sueño.',
      en: 'Hugely decreases chance of being inflicted fear, despair or sleep.',
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
  passive_reg_7:{
    id: 'passive_reg_7',
    name: { es: 'Sanación rápida', en: 'Fast-heal' },
    description: {
      es: 'Los estados alterados terminan en la mitad de turnos de lo normal.',
      en: 'Status ailments get healed in half the number of turns.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  passive_reg_8:{
    id: 'passive_reg_8',
    name: { es: 'Sanación instantánea', en: 'Insta-heal' },
    description: {
      es: 'Los estados alterados siempre se desvanecen al siguiente turno.',
      en: 'Status ailments get healed in one turn.',
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
    name: { es: 'Último aliento', en: 'Endure' },
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
      es: 'Sobrevive un ataque de muerte instantánea con 1 HP (una vez por combate). Sobrevive cualquier ataque con 1 HP si tiene los HP al máximo.',
      en: 'Survives one insta-kill attack with 1 HP remaining (once per battle). Survives any attack with 1 HP if HP bar is full.',
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
  passive_spend_10:{
    id: 'passive_spend_10',
    name: { es: 'Maestro del tiempo', en: 'Time master' },
    description: {
      es: 'Reduce el consumo de MP de las habilidades de slow, haste y time en un 33%.',
      en: 'Reduces MP cost of slow, haste and time skills by 33%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },


  // --- line-exclusive ---

  // --- summon ---
  passive_summon_1:{
    id: 'passive_summon_1',
    name: { es: 'Invocar tauro', en: 'Summon tauros' },
    description: {
      es: 'Inflige daño mágico contundente leve a un enemigo. Ignora resistencias.',
      en: 'Deals light blunt magical damage to one enemy. Ignores resistances.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 8 },
  },
  passive_summon_2:{
    id: 'passive_summon_2',
    name: { es: 'Invocar soldado esquelético', en: 'Summon duskbone soldier' },
    description: {
      es: 'Inflige daño mágico cortante leve a un enemigo. Ignora resistencias.',
      en: 'Deals light slash magical damage to one enemy. Ignores resistances.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 8 },
  },
  passive_summon_3:{
    id: 'passive_summon_3',
    name: { es: 'Invocar goblin', en: 'Summon goblin' },
    description: {
      es: 'Inflige daño mágico perforante leve a un enemigo. Ignora resistencias.',
      en: 'Deals light pierce magical damage to one enemy. Ignores resistances.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 8 },
  },
  passive_summon_4:{
    id: 'passive_summon_4',
    name: { es: 'Invocar rey guptauro', en: 'Summon guptauros king' },
    description: {
      es: 'Inflige daño mágico contundente grave a todos los enemigos. Ignora resistencias.',
      en: 'Deals heavy blunt magical damage to all enemies. Ignores resistances.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 42 },
  },
  passive_summon_5:{
    id: 'passive_summon_5',
    name: { es: 'Invocar caballero esquelético', en: 'Summon duskbone knight' },
    description: {
      es: 'Inflige daño mágico cortante grave a todos los enemigos. Ignora resistencias.',
      en: 'Deals heavy slash magical damage to all enemies. Ignores resistances.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 42 },
  },
  passive_summon_6:{
    id: 'passive_summon_6',
    name: { es: 'Invocar rey goblin', en: 'Summon king goblin' },
    description: {
      es: 'Inflige daño mágico perforante grave a todos los enemigos. Ignora resistencias.',
      en: 'Deals heavy pierce magical damage to all enemies. Ignores resistances.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 42 },
  },
  passive_summon_7:{
    id: 'passive_summon_7',
    name: { es: 'Invocar hada', en: 'Summon fairy' },
    description: {
      es: 'Inflige daño mágico de hielo leve dos veces y mágico nuclear leve dos veces a un enemigo. Ignora resistencias.',
      en: 'Deals light ice magic damage twice and light nuclear magic damage twice to one enemy. Ignores resistances.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 22 },
  },
  passive_summon_8:{
    id: 'passive_summon_8',
    name: { es: 'Invocar cocatriz', en: 'Summon cocatrice' },
    description: {
      es: 'Inflige daño mágico de trueno medio una vez y mágico de maldición medio una vez a todos los enemigos. Ignora resistencias.',
      en: 'Deals medium thunder magic damage once and medium curse magic damage once to all enemies. Ignores resistances.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 28 },
  },
  passive_summon_9:{
    id: 'passive_summon_9',
    name: { es: 'Invocar bestia de lava', en: 'Summon lava beast' },
    description: {
      es: 'Inflige daño mágico grave todopoderoso a todos los enemigos y baja su precisión y evasión en un nivel durante 3 turnos. Ignora resistencias.',
      en: 'Deals heavy almighty magic damage to all enemies, and decreases their hit/evasion in one level for three turns. Ignores resistances.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 52 },
  },
  passive_summon_10:{
    id: 'passive_summon_10',
    name: { es: 'Invocar León Águila', en: 'Summon Eagle Lion' },
    description: {
      es: 'Inflige daño mágico leve de viento a todos los enemigos entre 10 y 15 veces. Ignora resistencias.',
      en: 'Deals light wind magic damage to all enemies 10 to 15 times. Ignores resistances.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 55 },
  },
  passive_summon_11:{
    id: 'passive_summon_11',
    name: { es: 'Invocar azotamentes', en: 'Summon illithid' },
    description: {
      es: 'Inflige daño mágico grave psíquico a todos los enemigos 2 veces. Ignora resistencias.',
      en: 'Deals heavy psychic magic damage to all enemies twice. Ignores resistances.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 55 },
  },
  passive_summon_12:{
    id: 'passive_summon_12',
    name: { es: 'Invocar arcángel', en: 'Summon archangel' },
    description: {
      es: 'Inflige daño mágico grave de bendición a un enemigo 3 veces. Probabilidad baja de infligir miedo. Ignora resistencias.',
      en: 'Deals heavy bless magic damage to one enemy 3 times. Low chance of inflicting fear. Ignores resistances.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 55 },
  },
  passive_summon_13:{
    id: 'passive_summon_13',
    name: { es: 'Invocar hombre lagarto', en: 'Summon lizardman' },
    description: {
      es: 'Inflige daño mágico severo de trueno a todos los enemigos. Probabilidad baja de infligir lavado de cerebro. Ignora resistencias.',
      en: 'Deals heavy thunder magic damage to all enemies. Low chance of inflicting brainwash. Ignores resistances.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 55 },
  },
  passive_summon_14:{
    id: 'passive_summon_14',
    name: { es: 'Invocar gárgola', en: 'Summon gargoyle' },
    description: {
      es: 'Inflige daño mágico severo de fuego a un enemigo. Probabilidad baja de infligir sueño. Ignora resistencias.',
      en: 'Deals severe fire magic damage to one enemy. Low chance of inflicting sleep. Ignores resistances.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 65 },
  },
  passive_summon_15:{
    id: 'passive_summon_15',
    name: { es: 'Invocar rey del cementerio', en: 'Summon undead king' },
    description: {
      es: 'Inflige daño mágico grave de maldición a todos los enemigos entre 2 y 3 veces. Probabilidad baja de infligir desesperación. Ignora resistencias.',
      en: 'Deals heavy psychic magic damage to all enemies 2 to 3 times. Low chance of inflicting despair. Ignores resistances.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 65 },
  },
  passive_summon_16:{
    id: 'passive_summon_16',
    name: { es: 'Invocar yeti', en: 'Summon yeti' },
    description: {
      es: 'Inflige daño mágico medio de hielo a todos los enemigos entre 4 y 5 veces. Probabilidad baja de infligir mareo. Ignora resistencias.',
      en: 'Deals medium ice magic damage to all enemies 4 to 5 times. Low chance of inflicting dizzy. Ignores resistances.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 65 },
  },
  passive_summon_17:{
    id: 'passive_summon_17',
    name: { es: 'Invocar minotauro', en: 'Summon minotaur' },
    description: {
      es: 'Inflige daño mágico severo nuclear a un enemigo. Probabilidad baja de infligir quemadura. Ignora resistencias.',
      en: 'Deals severe nuclear magic damage to one enemy. Low chance of inflicting burn. Ignores resistances.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 65 },
  },
  passive_summon_18:{
    id: 'passive_summon_18',
    name: { es: 'Invocar dios caído', en: 'Summon fallen god' },
    description: {
      es: 'Inflige daño mágico severo cortante, contundente y perforante a un enemigo y disminuye su ataque y su defensa en un nivel durante 3 turnos. Ignora resistencias.',
      en: 'Deals severe blunt, slash and pierce magic damage to one enemy and decreases their attack and defense by one level for 3 turns. Ignores resistances.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 85 },
  },
  passive_summon_19:{
    id: 'passive_summon_19',
    name: { es: 'Invocar noctiluca', en: 'Summon noctiluca' },
    description: {
      es: 'Cura cualquier estado alterado de un aliado y le hace recuperar un 20% de los HP durante los siguientes 4 turnos.',
      en: 'Cures status ailments of one ally and grants them 20% HP recovery for the next 4 turns.',
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 25 },
  },
  passive_summon_20:{
    id: 'passive_summon_19',
    name: { es: 'Invocar amor fraternal', en: 'Summon family grace' },
    description: {
      es: 'Cura una cantidad grande HP de todos los aliados y cura sus estados alterados.',
      en: 'Greatly restores HP and cures status ailments of all allies.',
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 45 },
  },

  // --- death ---

  zombie_1:{
    id: 'zombie_1',
    name: { es: 'Animar cadáver', en: 'Animate corpse' },
    description: {
      es: 'El último enemigo derrotado por el atacante utilizará su habilidad contra el enemigo.',
      en: 'Last enemy defeated by the attacker will use a skill against the enemy.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 4 },
  },
  zombie_2:{
    id: 'zombie_2',
    name: { es: 'Animar cadáver mejorado', en: 'Animate enhanced corpse' },
    description: {
      es: 'Los dos últimos enemigos derrotados por el atacante utilizarán sus habilidades contra el enemigo durante tres turnos. No acumulable.',
      en: 'Last two enemies defeated by the attacker will use their respective skills against the enemy for three turns. Does not stack.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 15 },
  },


  // --- space ---

  space_1:{
    id: 'space_1',
    name: { es: 'Teletransporte', en: 'Teleport' },
    description: {
      es: 'Permite a un aliado actuar justo después del usuario, cambiando el orden del grupo.',
      en: 'Allows and ally to act immediately after the user, changing the group order.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 19 },
  },
  space_2:{
    id: 'space_2',
    name: { es: 'Ursa Fuerza', en: 'Ursa Strength' },
    description: {
      es: 'Aumenta un 5% la Fuerza de todo el equipo aliado durante 5 turnos. Solo puede haber dos Ursas activas al mismo tiempo.',
      en: 'Increases all allie\'s Strength by 5% for 5 turns. Only two Ursas can be active at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  space_3:{
    id: 'space_3',
    name: { es: 'Ursa Inteligencia', en: 'Ursa Intelligence' },
    description: {
      es: 'Aumenta un 5% la Inteligencia de todo el equipo aliado durante 5 turnos. Solo puede haber dos Ursas activas al mismo tiempo.',
      en: 'Increases all allie\'s Intelligence by 5% for 5 turns. Only two Ursas can be active at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  space_4:{
    id: 'space_4',
    name: { es: 'Ursa Sabiduría', en: 'Ursa Wisdom' },
    description: {
      es: 'Aumenta un 5% la Sabiduría de todo el equipo aliado durante 5 turnos. Solo puede haber dos Ursas activas al mismo tiempo.',
      en: 'Increases all allie\'s Wisdom by 5% for 5 turns. Only two Ursas can be active at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  space_5:{
    id: 'space_5',
    name: { es: 'Ursa Resistencia', en: 'Ursa Resistance' },
    description: {
      es: 'Aumenta un 5% la Resistencia de todo el equipo aliado durante 5 turnos. Solo puede haber dos Ursas activas al mismo tiempo.',
      en: 'Increases all allie\'s Resistance by 5% for 5 turns. Only two Ursas can be active at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  space_6:{
    id: 'space_6',
    name: { es: 'Ursa Constitución', en: 'Ursa Constitution' },
    description: {
      es: 'Aumenta un 5% la Constitución de todo el equipo aliado durante 5 turnos. Solo puede haber dos Ursas activas al mismo tiempo.',
      en: 'Increases all allie\'s Constitution by 5% for 5 turns. Only two Ursas can be active at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  space_7:{
    id: 'space_7',
    name: { es: 'Ursa Voluntad', en: 'Ursa Will' },
    description: {
      es: 'Aumenta un 5% la Voluntad de todo el equipo aliado durante 5 turnos. Solo puede haber dos Ursas activas al mismo tiempo.',
      en: 'Increases all allie\'s Will by 5% for 5 turns. Only two Ursas can be active at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  space_8:{
    id: 'space_8',
    name: { es: 'Ursa Agilidad', en: 'Ursa Agility' },
    description: {
      es: 'Aumenta un 5% la Agilidad de todo el equipo aliado durante 5 turnos. Solo puede haber dos Ursas activas al mismo tiempo.',
      en: 'Increases all allie\'s Agility by 5% for 5 turns. Only two Ursas can be active at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  space_9:{
    id: 'space_9',
    name: { es: 'Ursa Suerte', en: 'Ursa Luck' },
    description: {
      es: 'Aumenta un 10% la Suerte de todo el equipo aliado durante 5 turnos. Solo puede haber dos Ursas activas al mismo tiempo.',
      en: 'Increases all allie\'s Luck by 10% for 5 turns. Only two Ursas can be active at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  space_10:{
    id: 'space_10',
    name: { es: 'Cassiopea', en: 'Cassiopeia' },
    description: {
      es: 'Aumenta un 5% la Inteligencia de todos los aliados durante 4 turnos. Durante este tiempo, todos los ataques mágicos y curaciones se calculan con Inteligencia, nunca con Sabiduría. No puede solaparse con Pleyades.',
      en: 'Increases all allies Intelligence by 5% for 4 turns. During that time, all magic attacks and healings are calculated with Intelligence, never with Wisdom. Cannot be active at the same time as Pleiades.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  space_11:{
    id: 'space_11',
    name: { es: 'Pleyades', en: 'Pleiades' },
    description: {
      es: 'Aumenta un 5% la Sabiduría de todos los aliados durante 4 turnos. Durante este tiempo, todos los ataques mágicos y curaciones se calculan con Sabiduría, nunca con Inteligencia. No puede solaparse con Casiopea.',
      en: 'Increases all allies Wisdom by 5% for 4 turns. During that time, all magic attacks and healings are calculated with Wisdom, never with Intelligence. Cannot be active at the same time as Cassiopeia.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  space_12:{
    id: 'space_12',
    name: { es: 'Aura espacial', en: 'Space aura' },
    description: {
      es: 'Aumenta la efectividad de Ursa, Pleyades y Casiopea en un 40%. Permite activar tres Ursas.',
      en: 'Increases Ursa, Pleiades and Cassiopeia effects by 40%. Allow to activate three Ursas.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  space_13:{
    id: 'space_13',
    name: { es: 'Singularidad', en: 'Singularity' },
    description: {
      es: 'Inflige daño mágico grave todopoderoso y de bendición a todos los enemigos. El daño aumenta en un 25% por cada Ursa, Casiopea o Pleyades activa.',
      en: 'Deals heavy magic almighty and bless damage to all enemies. Damage increases by +25% for every Ursa, Cassiopeia or Pleiades currently in field.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 59 },
  },

  // --- time ---

  time_1:{
    id: 'time_1',
    name: { es: 'Slow', en: 'Slow' },
    description: {
      es: 'Probabilidad media de decelerar a un enemigo durante 2 turnos. Un enemigo decelerado, cuando actúe, perderá un icono de turno extra aunque no falle, excepto si golpea una debilidad o con un golpe crítico, que solo gastaría un icono entero.',
      en: 'Medium chances of decelerating an enemy for 2 turns. When a decelerated enemy acts, they will lose an extra press turn even if they don\'t miss, except when striking a weakness or a critical hit, where only one full press turn would be spent.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  time_2:{
    id: 'time_2',
    name: { es: 'Haste', en: 'Haste' },
    description: {
      es: 'Probabilidad media de acelerar a un aliado durante 2 turnos. Un aliado acelerado, cuando actúe, gastará medio icono de turno siempre, salvo que falle, que solo pierde un icono entero, o salvo que golpee una debilidad o un golpe crítico, que no gastaría nada.',
      en: 'Medium chances of accelerating an ally for 2 turns. When an accelerated ally acts, they will spend only half a press turn, except attack is missed, in which case only one full press turn, o unless they strike a weakness or a critical hit, spending nothing at all.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  time_3:{
    id: 'time_3',
    name: { es: 'Slowga', en: 'Slowga' },
    description: {
      es: 'Probabilidad alta de decelerar a un enemigo durante 3 turnos. Un enemigo decelerado, cuando actúe, perderá un icono de turno extra aunque no falle, excepto si golpea una debilidad o con un golpe crítico, que solo gastaría un icono entero.',
      en: 'High chances of decelerating an enemy for 3 turns. When a decelerated enemy acts, they will lose an extra press turn even if they don\'t miss, except when striking a weakness or a critical hit, where only one full press turn would be spent.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 11 },
  },
  time_4:{
    id: 'time_4',
    name: { es: 'Hastega', en: 'Hastega' },
    description: {
      es: 'Probabilidad alta de acelerar a un aliado durante 3 turnos. Un aliado acelerado, cuando actúe, gastará medio icono de turno siempre, salvo que falle, que solo pierde un icono entero, o salvo que golpee una debilidad o un golpe crítico, que no gastaría nada.',
      en: 'High chances of accelerating an ally for 3 turns. When an accelerated ally acts, they will spend only half a press turn, except attack is missed, in which case only one full press turn, o unless they strike a weakness or a critical hit, spending nothing at all.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 11 },
  },
  time_5:{
    id: 'time_5',
    name: { es: 'Maslowga', en: 'Maslowga' },
    description: {
      es: 'Probabilidad media de decelerar a todos los enemigos durante 2 turnos. Un enemigo decelerado, cuando actúe, perderá un icono de turno extra aunque no falle, excepto si golpea una debilidad o con un golpe crítico, que solo gastaría un icono entero.',
      en: 'Medium chances of decelerating all enemies for 2 turns. When a decelerated enemy acts, they will lose an extra press turn even if they don\'t miss, except when striking a weakness or a critical hit, where only one full press turn would be spent.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  time_6:{
    id: 'time_6',
    name: { es: 'Mahastega', en: 'Mahastega' },
    description: {
      es: 'Probabilidad media de acelerar a todos los aliados durante 2 turnos. Un aliado acelerado, cuando actúe, gastará medio icono de turno siempre, salvo que falle, que solo pierde un icono entero, o salvo que golpee una debilidad o un golpe crítico, que no gastaría nada.',
      en: 'Medium chances of accelerating all allies for 2 turns. When an accelerated ally acts, they will spend only half a press turn, except attack is missed, in which case only one full press turn, o unless they strike a weakness or a critical hit, spending nothing at all.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  time_7:{
    id: 'time_7',
    name: { es: 'Slowdyne', en: 'Slowdyne' },
    description: {
      es: 'Decelera a un enemigo durante 3 turnos. Un enemigo decelerado, cuando actúe, perderá un icono de turno extra aunque no falle, excepto si golpea una debilidad o con un golpe crítico, que solo gastaría un icono entero.',
      en: 'Decelerates an enemy for 3 turns. When a decelerated enemy acts, they will lose an extra press turn even if they don\'t miss, except when striking a weakness or a critical hit, where only one full press turn would be spent.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  time_8:{
    id: 'time_8',
    name: { es: 'Hastedyne', en: 'Hastedyne' },
    description: {
      es: 'Acelera a un aliado durante 3 turnos. Un aliado acelerado, cuando actúe, gastará medio icono de turno siempre, salvo que falle, que solo pierde un icono entero, o salvo que golpee una debilidad o un golpe crítico, que no gastaría nada.',
      en: 'Accelerates an ally for 3 turns. When an accelerated ally acts, they will spend only half a press turn, except attack is missed, in which case only one full press turn, o unless they strike a weakness or a critical hit, spending nothing at all.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  time_9:{
    id: 'time_9',
    name: { es: 'Hastedyne', en: 'Hastedyne' },
    description: {
      es: 'Acelera a un aliado durante 3 turnos. Un aliado acelerado, cuando actúe, gastará medio icono de turno siempre, salvo que falle, que solo pierde un icono entero, o salvo que golpee una debilidad o un golpe crítico, que no gastaría nada.',
      en: 'Accelerates an ally for 3 turns. When an accelerated ally acts, they will spend only half a press turn, except attack is missed, in which case only one full press turn, o unless they strike a weakness or a critical hit, spending nothing at all.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  time_10:{
    id: 'time_10',
    name: { es: 'Viaje al pasado', en: 'Time rewind' },
    description: {
      es: 'Devuelve a todos los aliados o a todos los enemigos a su estado del turno anterior. No revierte las muertes.',
      en: 'Returns all allies or all enemies to the state they were in last turn. Does not undo deaths.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  time_11:{
    id: 'time_11',
    name: { es: 'Viaje al futuro', en: 'Time travel' },
    description: {
      es: 'El usuario volverá al estado en el que se encuentra justo después de lanzar esta habilidad cuando el enemigo haya actuado dos veces.',
      en: 'User will return to their current state after using this skill when the enemy has acted twice.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 75 },
  },
  time_12:{
    id: 'time_12',
    name: { es: 'Aura temporal', en: 'Time aura' },
    description: {
      es: 'Aumenta la probabilidad de acierto de las habilidades Slow y Haste en un 35%. El viaje al futuro y el paro del tiempo aumentan su efecto un turno más.',
      en: 'Increases chance of Slow and Haste skills hit by 35%. Time travel and time stop increase their effect by one more turn.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  time_13:{
    id: 'time_13',
    name: { es: 'Paro del tiempo', en: 'Time stop' },
    description: {
      es: 'El usuario detiene el tiempo y puede atacar dos veces más sin gastar ningún icono de turno. Durante el tiempo parado, aumenta la probabilidad de realizar golpes críticos en un +50%.',
      en: 'User stops time and can attack twice further without spending any press turn icons. During stopped time, critical hit rate increases by +50%',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 95 },
  },


  // --- weapon magic ---

  weaponm_1:{
    id: 'weaponm_1',
    name: { es: 'Golpe agi', en: 'Agi strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño leve físico de fuego a un enemigo.',
      en: 'With sword, rapier or spear. Deals light physical fire damage to one enemy.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 4 },
  },
  weaponm_2:{
    id: 'weaponm_2',
    name: { es: 'Golpe bufu', en: 'Bufu strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño leve físico de hielo a un enemigo.',
      en: 'With sword, rapier or spear. Deals light physical ice damage to one enemy.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 4 },
  },
  weaponm_3:{
    id: 'weaponm_3',
    name: { es: 'Golpe garu', en: 'Garu strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño leve físico de viento a un enemigo.',
      en: 'With sword, rapier or spear. Deals light physical wind damage to one enemy.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 4 },
  },
  weaponm_4:{
    id: 'weaponm_4',
    name: { es: 'Golpe zio', en: 'Zio strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño leve físico de trueno a un enemigo.',
      en: 'With sword, rapier or spear. Deals light physical thunder damage to one enemy.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 4 },
  },
  weaponm_5:{
    id: 'weaponm_5',
    name: { es: 'Golpe agidyne', en: 'Agidyne strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño grave físico de fuego a un enemigo.',
      en: 'With sword, rapier or spear. Deals heavy physical fire damage to one enemy.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 13 },
  },
  weaponm_6:{
    id: 'weaponm_6',
    name: { es: 'Golpe bufudyne', en: 'Bufudyne strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño grave físico de hielo a un enemigo.',
      en: 'With sword, rapier or spear. Deals heavy physical ice damage to one enemy.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 13 },
  },
  weaponm_7:{
    id: 'weaponm_7',
    name: { es: 'Golpe garudyne', en: 'Garudyne strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño grave físico de viento a un enemigo.',
      en: 'With sword, rapier or spear. Deals heavy physical wind damage to one enemy.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 13 },
  },
  weaponm_8:{
    id: 'weaponm_8',
    name: { es: 'Golpe ziodyne', en: 'Ziodyne strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño grave físico de trueno a un enemigo.',
      en: 'With sword, rapier or spear. Deals heavy physical thunder damage to one enemy.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 13 },
  },
  weaponm_9:{
    id: 'weaponm_9',
    name: { es: 'Golpe hama', en: 'Hama strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño medio físico de bendición a un enemigo.',
      en: 'With sword, rapier or spear. Deals medium physical bless damage to one enemy.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 9 },
  },
  weaponm_10:{
    id: 'weaponm_10',
    name: { es: 'Golpe mudo', en: 'Mudo strike' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño medio físico de maldición a un enemigo.',
      en: 'With sword, rapier or spear. Deals medium physical curse damage to one enemy.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 9 },
  },
  weaponm_11:{
    id: 'weaponm_11',
    name: { es: 'Aramasa', en: 'Aramasa' },
    description: {
      es: 'Con espada, florete o lanza. Inflige daño colosal físico todopoderoso a un enemigo.',
      en: 'With sword, rapier or spear. Deals colossal physical almighty damage to one enemy.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 49 },
  },


  // --- counter ---

  counter_1:{
    id: 'counter_1',
    name: { es: 'Contraataque', en: 'Counter' },
    description: {
      es: 'Probabilidad de 35% de repeler los ataques físicos recibidos durante el próximo turno del enemigo.',
      en: '35% chance of repelling physical damages taken during next enemy turn.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 3 },
  },
  counter_2:{
    id: 'counter_2',
    name: { es: 'Contraataque mágico', en: 'Magic counter' },
    description: {
      es: 'Probabilidad de 35% de repeler los ataques mágicos recibidos durante el próximo turno del enemigo.',
      en: '35% chance of repelling magic damages taken during next enemy turn.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  counter_3:{
    id: 'counter_3',
    name: { es: 'Contraataque maestro', en: 'Master counter' },
    description: {
      es: 'Probabilidad de 70% de repeler todos los ataques recibidos durante el próximo turno del enemigo.',
      en: '70% chance of repelling all damages taken during next enemy turn.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 10 },
  },


  // --- protection ---

  protection_1:{
    id: 'protection_1',
    name: { es: 'Resolución noble', en: 'Noble resolve' },
    description: {
      es: 'Reduce a la mitad todo el daño sufrido si el combate comenzó con emboscada en desventaja.',
      en: 'Halves all damage taken when party is ambushed.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protection_2:{
    id: 'protection_2',
    name: { es: 'Proclamación de caballero', en: 'Knight\'s proclamation' },
    description: {
      es: 'Atrae la atención de los enemigos y recibe los ataques individuales dirigidos a otros compañeros durante 1 turno (algunas habilidades ignoran este efecto).',
      en: 'Draws enemy attention and takes attacks for allies for 1 turn (certain skills ignore this effect).',
    },
    element: 'support',
    cost: { kind: 'hp_percent', amount: 2 },
  },
  protection_3:{
    id: 'protection_3',
    name: { es: 'Proclamación de caballero sagrado', en: 'Holy knight\'s proclamation' },
    description: {
      es: 'Entra en guardia y atrae la atención de los enemigos y recibe los ataques individuales dirigidos a otros compañeros durante 1 turno (algunas habilidades ignoran este efecto).',
      en: 'Guards and draws enemy attention and takes attacks for allies for 1 turn (certain skills ignore this effect).',
    },
    element: 'support',
    cost: { kind: 'hp_percent', amount: 4 },
  },
  protection_4:{
    id: 'protection_4',
    name: { es: 'Protección divina', en: 'Holy protection' },
    description: {
      es: 'El usuario puede equipar dos escudos. Con dos escudos equipados, reduce a la mitad todo el daño recibido durante toda la batalla.',
      en: 'User can equip two shields. With two shields equipped, halves all damage taken during the whole battle.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protection_5:{
    id: 'protection_5',
    name: { es: 'Protección contra la muerte', en: 'Death protection' },
    description: {
      es: 'El usuario otorga a un aliado un efecto de "Aguante".',
      en: 'User grants an ally one "Endure" effect.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 50 },
  },


  // --- leadership ---

  leadership_1:{
    id: 'leadership_1',
    name: { es: 'Formación de vigor 1', en: 'Formation of vigor 1' },
    description: {
      es: 'Mueve a todos los aliados a la fila delantera y sube su ataque 1 nivel durante 3 turnos.',
      en: 'Moves all allies to the front row and raises their attack 1 level for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 21 },
  },
  leadership_2:{
    id: 'leadership_2',
    name: { es: 'Formación de coraza 1', en: 'Formation of shelter 1' },
    description: {
      es: 'Mueve a todos los aliados a la fila trasera y sube su defensa 1 nivel durante 3 turnos.',
      en: 'Moves all allies to the back row and raises their defense 1 level for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 21 },
  },
  leadership_3:{
    id: 'leadership_3',
    name: { es: 'Formación de vigor 2', en: 'Formation of vigor 2' },
    description: {
      es: 'Mueve a todos los aliados a la fila delantera y sube su ataque 2 niveles durante 3 turnos.',
      en: 'Moves all allies to the front row and raises their attack 2 levels for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 37 },
  },
  leadership_4:{
    id: 'leadership_4',
    name: { es: 'Formación de coraza 2', en: 'Formation of shelter 2' },
    description: {
      es: 'Mueve a todos los aliados a la fila trasera y sube su defensa 2 niveles durante 3 turnos.',
      en: 'Moves all allies to the back row and raises their defense 2 levels for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 37 },
  },
  leadership_5:{
    id: 'leadership_5',
    name: { es: 'Formación de vigor 3', en: 'Formation of vigor 3' },
    description: {
      es: 'Mueve a todos los aliados a la fila delantera y sube su ataque 3 niveles durante 3 turnos.',
      en: 'Moves all allies to the front row and raises their attack 3 levels for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 53 },
  },
  leadership_6:{
    id: 'leadership_6',
    name: { es: 'Formación de coraza 3', en: 'Formation of shelter 3' },
    description: {
      es: 'Mueve a todos los aliados a la fila trasera y sube su defensa 3 niveles durante 3 turnos.',
      en: 'Moves all allies to the back row and raises their defense 3 levels for 3 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 53 },
  },
  leadership_7:{
    id: 'leadership_7',
    name: { es: 'Espíritu de liderazgo', en: 'Leadership spirit' },
    description: {
      es: 'Aumenta su propio ataque, defensa, precisión y evasión en 2 niveles durante 3 turnos.',
      en: 'Raises own attack, defense, hit and evasion by 2 levels for three turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 43 },
  },


  // --- music ---

  music_1:{
    id: 'music_1',
    name: { es: 'Canción aterradora', en: 'Fearful song' },
    description: {
      es: 'Solo artista, bardo o bailarín. Inflige daño todopoderoso muy leve a todos los enemigos.',
      en: 'Only artist, bardo or dancer. Deals very light almighty damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 0 },
  },
  music_2:{
    id: 'music_2',
    name: { es: 'Último baile', en: 'Last dance' },
    description: {
      es: 'Solo artista, bardo o bailarín. Inflige daño físico cortante a un enemigo, mayor cuantos menos HP restantes se tenga al atacar.',
      en: 'Only artist, bardo or dancer. Deals slash physical damage, greater the lower HP remaining when used.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 7 },
  },
  music_3:{
    id: 'music_3',
    name: { es: 'Mimético', en: 'Mimick' },
    description: {
      es: 'Solo artista, bardo o bailarín. Inflige daño físico cortante a un enemigo, mayor cuantos menos HP restantes se tenga al atacar.',
      en: 'Only artist, bardo or dancer. Deals slash physical damage, greater the lower HP remaining when used.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 12 },
  },
  music_4:{
    id: 'music_4',
    name: { es: 'Coreografía olímpica', en: 'Olympic choreography' },
    description: {
      es: 'Solo artista, bardo o bailarín. Inflige daño físico cortante a un enemigo, mayor cuantos más HP restantes se tenga al atacar.',
      en: 'Only artist, bardo or dancer. Deals slash physical damage, greater the higher HP remaining when used.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 30 },
  },
  music_5:{
    id: 'music_5',
    name: { es: 'Perfect inspiration', en: 'Olympic choreography' },
    description: {
      es: 'Aumenta el ataque, la defensa, la precisión y la evasión de todos los aliados en un nivel durante 3 turnos al principio del combate.',
      en: "Increases all allies attack/defense/hit/evasion by one level for 3 turns at the start of battle.",
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  music_6:{
    id: 'music_6',
    name: { es: 'Canción de turno extra', en: 'Extra turn song' },
    description: {
      es: 'Añade tres medios iconos de acción y salta el turno a un aliado elegido.',
      en: "Adds two half press turns and skip the turn to a selected ally.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 77 },
  },


  // --- tricks ---

  tricks_1:{
    id: 'tricks_1',
    name: { es: 'Entregar MP', en: 'Gift MP' },
    description: {
      es: 'Otorga a un aliado el 20% de sus propios MP máximos (o todos si se queda a cero).',
      en: 'Gives one ally 20% of own max MP (or all if not that many remaining).',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 0 },
  },
  tricks_2:{
    id: 'tricks_2',
    name: { es: 'Truco del embaucador', en: 'Faker\'s roguery' },
    description: {
      es: 'Coste: 20% MP. Probabilidad baja de infligir, en orden, lavado de cerebro, amnesia o miedo a un enemigo. Probabilidad de eliminar un icono de turno, eliminar dos, añadir uno, añadir dos o no hacer nada.',
      en: 'Cost: 20% MP. Low chance of inflicting, ir order, brainwash, amnesia or fear to one enemy. Chance of erasing one press turn, erasing two, adding one, adding two or doing nothing.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 0 },
  },
  tricks_3:{
    id: 'tricks_3',
    name: { es: 'Truco maestro del embaucador', en: 'Faker\'s master roguery' },
    description: {
      es: 'Coste: 25% MP. Probabilidad baja de infligir, en orden, sueño, lavado de cerebro, amnesia, desesperación o miedo a un enemigo. Probabilidad de eliminar un icono de turno, eliminar dos, añadir uno, añadir dos o no hacer nada. La probabilidad de añadir es el doble que la de quitar.',
      en: 'Cost: 25% MP. Low chance of inflicting, ir order, sleep, brainwash, amnesia, despair or fear to one enemy. Chance of erasing one press turn, erasing two, adding one, adding two or doing nothing. Chance of adding is double the chance of erasing.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 0 },
  },
  tricks_4:{
    id: 'tricks_4',
    name: { es: 'Maestro de los trucos', en: 'Roguery Master' },
    description: {
      es: 'Aumenta ligeramente la probabilidad de los estados alterados y disminuye enormemente la probabilidad de perder iconos de turno al utilizar trucos de embaucador, y reduce su coste a la mitad.',
      en: 'Slightly increases chance of inflicting status ailments and greatly decreases chance of losing press turn icons when using faker rogueries, and halves the MP cost.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },


  // --- money ---

  money_1:{
    id: 'money_1',
    name: { es: 'Ataque monetario', en: 'Gold attack' },
    description: {
      es: 'Inflige daño leve físico todopoderoso a un enemigo.',
      en: 'Deals weak physical Almighty damage to one enemy.',
    },
    element: 'almighty',
    cost: { kind: 'money', amount: 500 },
  },
  money_2:{
    id: 'money_2',
    name: { es: 'Compra de libertad', en: 'Freedom purchase' },
    description: {
      es: 'Huye de cualquier batalla convencional. El coste se duplica si el grupo sufre una emboscada.',
      en: 'Flees out of any conventional battle. Cost doubles when group is ambushed.',
    },
    element: 'support',
    cost: { kind: 'money', amount: 100 },
  },
  money_3:{
    id: 'money_3',
    name: { es: 'Tragaperras', en: 'Fortune slots' },
    description: {
      es: 'Baja precisión, pero todos los golpes realizan golpes críticos de daño físico todopoderoso leve a un enemigo.',
      en: 'Low hit rate, but all hits deal critical physical light Almighty damage to one enemy.',
    },
    element: 'almighty',
    cost: { kind: 'money', amount: 777 },
  },
  money_4:{
    id: 'money_4',
    name: { es: 'Estela de oro', en: 'Gold rush' },
    description: {
      es: 'Inflige daño físico todopoderoso grave a todos los enemigos.',
      en: 'Deals heavy physical almighty damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'money', amount: 2500 },
  },
  money_5:{
    id: 'money_5',
    name: { es: 'Soldadito de oro', en: 'Golden soldier' },
    description: {
      es: 'Inflige daño físico todopoderoso severo a un enemigo, con alta probabilidad de golpe crítico.',
      en: 'Deals severe physical almighty damage to one enemy, with high crit rate.',
    },
    element: 'almighty',
    cost: { kind: 'money', amount: 9999 },
  },
  money_6:{
    id: 'money_6',
    name: { es: 'Alcance del dinero', en: 'Money reach' },
    description: {
      es: 'Otorga a un aliado el efecto de aumentar el alcance de todos sus ataques a todos los enemigos durante un turno.',
      en: 'Grants an ally the effect of allowing all attacks to hit all enemies for one turn.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 25 },
  },
  money_7:{
    id: 'money_7',
    name: { es: 'Poder del dinero', en: 'Money power' },
    description: {
      es: 'Otorga a un aliado el efecto de que sus ataques a todos los enemigos solo golpeen a un enemigo, pero con el doble de potencia.',
      en: 'Grants an ally the effect of making all attacks targeting all enemies target one enemy instead, but with double the power.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 55 },
  },


  // --- objects ---

  objects_1:{
    id: 'objects_1',
    name: { es: 'Eficiencia química', en: 'Chemical efficiency' },
    description: {
      es: 'Utiliza un objeto ofensivo que multiplica su daño por 1\'5.',
      en: 'Uses one damage item that multiplies its damage times 1\'5.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 3 },
  },
  objects_2:{
    id: 'objects_2',
    name: { es: 'Remedio rápido', en: 'Quick remedy' },
    description: {
      es: 'Utiliza un objeto de curar estados alterados sin gastar ningún icono de turno.',
      en: 'Uses one status ailment healing item without spending any press turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 12 },
  },
  objects_3:{
    id: 'objects_3',
    name: { es: 'Eficiencia médica', en: 'Medical efficiency' },
    description: {
      es: 'Utiliza un objeto curativo que duplica los HP que recupera.',
      en: 'Uses one healing item that doubles the number of HP it recovers.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 5 },
  },
  objects_4:{
    id: 'objects_4',
    name: { es: 'Objecto doble', en: 'Double item' },
    description: {
      es: 'Utiliza dos objetos.',
      en: 'Uses two items.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  objects_5:{
    id: 'objects_5',
    name: { es: 'Tratamiento rápido', en: 'Quick treatment' },
    description: {
      es: 'Utiliza un objeto de curación sin gastar ningún icono de turno y triplica los HP que recupera.',
      en: 'Uses one healing item without spending any press turns and recover three times as much HP.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  objects_6:{
    id: 'objects_6',
    name: { es: 'Experimento perfecto', en: 'Perfect experiment' },
    description: {
      es: 'Utiliza un objeto ofensivo sin gastar ningún icono de turno y cuadruplica los HP que daña.',
      en: 'Uses one damage item without spending any press turns and deals for times as much damage.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 28 },
  },


  // --- survival ---

  survival_1:{
    id: 'survival_1',
    name: { es: 'Investigar', en: 'Research' },
    description: {
      es: 'Revela una afinidad aleatoria de un enemigo que no haya sido revelada hasta el momento.',
      en: 'Reveals one enemy\'s affinity that has not been revealed yet.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 3 },
  },
  survival_2:{
    id: 'survival_2',
    name: { es: 'Investigación profunda', en: 'Thorough investigation' },
    description: {
      es: 'Revela todas las afinidades de un enemigo.',
      en: 'Reveals all of one enemy\'s affinities.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 18 },
  },
  survival_3:{
    id: 'survival_3',
    name: { es: 'Marca del cazador', en: 'Hunter\'s mark' },
    description: {
      es: 'Coloca un blanco en un enemigo. La próxima vez que ese enemigo reciba daño, recibirá más del doble de lo normal. No puede haber dos blancos al mismo tiempo.',
      en: 'Places a target in one enemy. Next time that enemy receives damage, it will be more than doubled. Cannot place two targets at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 15 },
  },
  survival_4:{
    id: 'survival_4',
    name: { es: 'Insight', en: 'Perspicacia' },
    description: {
      es: 'Coloca un blanco en un enemigo. La próxima vez que ese enemigo reciba daño físico, recibirá un golpe crítico garantizado. No puede haber dos blancos al mismo tiempo.',
      en: 'Places a target in one enemy. Next time that enemy receives physical damage, it will be a guaranteed critical hit. Cannot place two targets at the same time.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 22 },
  },

  // --- weakness injection ---

  weakness_1:{
    id: 'weakness_1',
    name: { es: 'Hipnosis física 1', en: 'Physical hypnosis 1' },
    description: {
      es: 'Crea una debilidad puntual a una afinidad aleatoria entre cortante, contundente y perforante a un enemigo.',
      en: 'Creates a one-time weakness to one random affinity among slash, blunt and pierce to one enemy.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 33 },
  },
  weakness_2:{
    id: 'weakness_2',
    name: { es: 'Hipnosis elemental 1', en: 'Elemental hypnosis 1' },
    description: {
      es: 'Crea una debilidad puntual a una afinidad aleatoria entre fuego, hielo, trueno y viento a un enemigo.',
      en: 'Creates a one-time weakness to one random affinity among fire, ice, thunder and wind to one enemy.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 33 },
  },
  weakness_3:{
    id: 'weakness_3',
    name: { es: 'Hipnosis espiritual 1', en: 'Spirit hypnosis 1' },
    description: {
      es: 'Crea una debilidad puntual a una afinidad aleatoria entre nuclear, psíquico, bendición y maldición a un enemigo.',
      en: 'Creates a one-time weakness to one random affinity among nuclear, psychic, bless and curse to one enemy.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 33 },
  },
  weakness_4:{
    id: 'weakness_4',
    name: { es: 'Hipnosis general', en: 'General hypnosis 1' },
    description: {
      es: 'Crea una debilidad puntual a una afinidad aleatoria a un enemigo.',
      en: 'Creates a one-time weakness to one random affinity to one enemy.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  weakness_5:{
    id: 'weakness_5',
    name: { es: 'Hipnosis física 2', en: 'Physical hypnosis 2' },
    description: {
      es: 'Crea una debilidad puntual a cortante, contundente y perforante a un enemigo. Cuando una de ellas desaparezca, el resto lo harán también.',
      en: 'Creates a one-time weakness to slash, blunt and pierce to one enemy. When one wears out, the others will as well.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 54 },
  },
  weakness_6:{
    id: 'weakness_6',
    name: { es: 'Hipnosis elemental 2', en: 'Elemental hypnosis 2' },
    description: {
      es: 'Crea una debilidad puntual a fuego, hielo, trueno y viento a un enemigo. Cuando una de ellas desaparezca, el resto lo harán también.',
      en: 'Creates a one-time weakness to fire, ice, thunder and wind to one enemy. When one wears out, the others will as well.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 54 },
  },
  weakness_7:{
    id: 'weakness_7',
    name: { es: 'Hipnosis espiritual 2', en: 'Spirit hypnosis 2' },
    description: {
      es: 'Crea una debilidad puntual a nuclear, psíquico, bendición y maldición a un enemigo. Cuando una de ellas desaparezca, el resto lo harán también.',
      en: 'Creates a one-time weakness to nuclear, psychic, bless and curse to one enemy. When one wears out, the others will as well.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 54 },
  },


  // --- monk ---
  
  monk_1:{
    id: 'monk_1',
    name: { es: 'Grito de guerra', en: 'Battle cry' },
    description: {
      es: 'Aumenta su propio ataque y su propia defensa en un nivel durante 2 turnos.',
      en: 'Raises own attack and defense by one level for 2 turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 4 },
  },
  monk_2:{
    id: 'monk_2',
    name: { es: 'Discípulo diligente', en: 'Diligent disciple' },
    description: {
      es: 'Incrementa la probabilidad de infligir golpes críticos en un +5%.',
      en: 'Increases chance of inflicting critical hits by +5%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  monk_3:{
    id: 'monk_3',
    name: { es: 'Meditación', en: 'Meditation' },
    description: {
      es: 'Cura una cantidad moderada HP propios y cura confusión, quemadura, veneno, mareo y furia.',
      en: 'Moderately heals own HP and cures confusion, burn, poison, dizzy and rage.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  monk_4:{
    id: 'monk_4',
    name: { es: 'Espíritu de adversidad', en: 'Spirit of adversity' },
    description: {
      es: 'Con baja vida aumenta en un +20% la probabilidad de infligir golpes críticos.',
      en: 'When low in HP, +20% chance of dealing critical hits.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  monk_5:{
    id: 'monk_5',
    name: { es: 'Maestro de la evasión', en: 'Dodge master' },
    description: {
      es: 'Inmunidad a golpes críticos.',
      en: 'Cannot be dealt critical hits.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  monk_6:{
    id: 'monk_6',
    name: { es: 'Puños mágicos', en: 'Magical fists' },
    description: {
      es: 'Los golpes básicos con puños o habilidades de puños no calculan el daño con la Resistencia sino con el valor más bajo entre Resistencia, Constitución y Voluntad.',
      en: 'Normal attacks with fists and fist skills don\'t calculate damage with Resistance but with the lowest of Resistance, Constitution and Will.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  monk_7:{
    id: 'monk_7',
    name: { es: 'Defensa innata', en: 'Innate defense' },
    description: {
      es: 'Defensa +15% sin tener armadura pesada equipada.',
      en: 'While not wearing heavy armor, defense +15%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  monk_8:{
    id: 'monk_8',
    name: { es: 'Maestro de la batalla', en: 'Battle Master' },
    description: {
      es: 'Inmunidad a todos los estados alterados.',
      en: 'Immunity to all status ailments.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },

  
  // --- warrior ---

  warrior_1:{
    id: 'warrior_1',
    name: { es: 'Doble golpe', en: 'Double hit' },
    description: {
      es: 'Los ataques básicos golpean dos veces',
      en: 'Normal attacks hit twice.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  warrior_2:{
    id: 'warrior_2',
    name: { es: 'Postura dura', en: 'Sturdy stance' },
    description: {
      es: 'No puede esquivar, pero siempre recibe daño reducido a la mitad.',
      en: 'Cannot dodge, but all damage is reduced to half.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  warrior_3:{
    id: 'warrior_3',
    name: { es: 'Remontada victoriosa', en: 'Comeback victory' },
    description: {
      es: 'Recupera 20% de HP al derrotar a un enemigo.',
      en: 'Recovers 20% HP after defeating an enemy.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  warrior_4:{
    id: 'warrior_4',
    name: { es: 'Confianza ciega', en: 'Blind trust' },
    description: {
      es: 'Cuando transcurre un turno entero sin infligir daño, al siguiente turno las habilidades con espada y katana infligirán el doble de daño e ignorarán aumentos y penalizaciones en precisión y evasión.',
      en: 'When user spends one full turn without attacking, the next turn all sword and katana attacks will inflict double the damage, and ignore buffs and debuffs in hit and evasion.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  warrior_5:{
    id: 'warrior_5',
    name: { es: 'Todo o nada', en: 'All-in' },
    description: {
      es: 'Reduce ligeramente la precisión de todas las habilidades de maza y martillo, pero incrementa considerablemente su daño.',
      en: 'Slightly reduces hit rate of all mace and hammer skills, but makes them considerably stronger.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  warrior_6:{
    id: 'warrior_6',
    name: { es: 'Dejarse la piel', en: 'Giving it all' },
    description: {
      es: 'Aumenta en un 5% el daño de todas las habilidades físicas, pero pierde un 4% de HP cada vez que inflige daño a un enemigo.',
      en: 'Increases all physical skills damage by 5%, but loses 4% HP for every damage inflicted.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  warrior_7:{
    id: 'warrior_7',
    name: { es: 'Maestro de la puntería', en: 'Aim Master' },
    description: {
      es: 'Si durante un turno entero no cambia de fila, en el siguiente ataque aumenta su precisión un +15%.',
      en: 'If stays in the same row for one whole turn, next attack increases hit rate by +15%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  
  // --- protagonist --- [Passive] Increases likelihood of receiving rare items after battles by 20%.

  protagonist_1:{
    id: 'protagonist_1',
    name: { es: 'Persecución grupal', en: 'Cooperative chase' },
    description: {
      es: 'Los compañeros atacan de forma muchísimo más frecuente a los enemigos en combate de acción.',
      en: 'Partners attack much more frequently in overworld combat.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protagonist_2:{
    id: 'protagonist_2',
    name: { es: 'Cazatesoros', en: 'Treasure hunter' },
    description: {
      es: 'Aumenta la probabilidad de recibir objetos raros tras la batalla en 20%.',
      en: 'Increases likelihood of receiving rare items after battles by 20%.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protagonist_3:{
    id: 'protagonist_3',
    name: { es: 'Líder supremo', en: 'Supreme leader' },
    description: {
      es: 'Aumenta los HP máximos en +15%, los MP máximos +6% y todos los demás atributos en +4%. Acumulable con otros efectos.',
      en: 'Increases max HP by +15%, max MP by +6% and all other characteristics by 4%. Stacks.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protagonist_4:{
    id: 'protagonist_4',
    name: { es: 'Ejecución noble', en: 'Noble defeat' },
    description: {
      es: 'Si un ataque mata a al menos un enemigo, no pierde ningún icono de turno.',
      en: 'No press turns are lost when an attack defeat an enemy.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protagonist_5:{
    id: 'protagonist_5',
    name: { es: 'Esquiva noble', en: 'Noble dodge' },
    description: {
      es: 'Cuando esquiva o anula un ataque enemigo, este pierde un icono de turno más de lo normal.',
      en: 'Makes enemies lose one more press turn when dodging or nullifying an attack.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protagonist_6:{
    id: 'protagonist_6',
    name: { es: 'Prueba de valor', en: 'Hero\'s proving' },
    description: {
      es: 'Aumenta su propio ataque, defensa, precisión y evasión en 3 niveles durante 3 turnos.',
      en: 'Raises own attack, defense, hit and evasion by 3 levels for three turns.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 69 },
  },
  protagonist_7:{
    id: 'protagonist_7',
    name: { es: 'Infinite morale', en: 'Moral infinita' },
    description: {
      es: 'Recupera el 4% de los HP y el 2% de los MP cada turno.',
      en: 'Recovers 4% HP and 2% MP every turn.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protagonist_8:{
    id: 'protagonist_8',
    name: { es: 'Grito heroico', en: 'Hero\'s cry' },
    description: {
      es: 'Añade 4 medios iconos de turno (una vez por combate).',
      en: 'Adds 4 half press turn icons (once per battle).',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 1 },
  },
  protagonist_9:{
    id: 'protagonist_9',
    name: { es: 'Espada de armagedón', en: 'Armaggedon blade' },
    description: {
      es: 'Inflige daño leve mágico todopoderoso a un enemigo. Siempre golpea debilidad del enemigo.',
      en: 'Deals light magic almighty damage to an enemy. Always strikes as weakness.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 60 },
  },
  protagonist_10:{
    id: 'protagonist_10',
    name: { es: 'Resistir todo', en: 'Resist all' },
    description: {
      es: 'Cambia todas las afinidades con debilidad o neutras a resistencias.',
      en: 'Changes all weakness and neutral affinities to resist.',
    },
    element: 'passive',
    cost: { kind: 'none', amount: 0 },
  },
  protagonist_11:{
    id: 'protagonist_11',
    name: { es: 'Mil verdades', en: 'Myriad truths' },
    description: {
      es: 'Inflige daño grave mágico todopoderoso a todos los enemigos 4 veces.',
      en: 'Deals heavy magic almighty damage to all enemies 4 times.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 99 },
  },
  protagonist_12:{
    id: 'protagonist_12',
    name: { es: 'Espada de la rebelión', en: 'Rebellion blade' },
    description: {
      es: 'Inflige daño extremo físico todopoderoso a un enemigo. Inflige el doble de daño si está aturdido.',
      en: 'Deals extreme physical almighty damage to one enemy. Doubles damage if enemy is down.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 99 },
  },

}
