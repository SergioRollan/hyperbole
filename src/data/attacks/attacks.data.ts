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
  // --- blunt ---
  crushing_blow: {
    id: 'crushing_blow',
    name: { es: 'Golpe aplastante', en: 'Crushing blow' },
    description: {
      es: 'Inflige daño físico contundente a un enemigo.',
      en: 'Deals blunt physical damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 8 },
  },
  mace_smash: {
    id: 'mace_smash',
    name: { es: 'Mazazo', en: 'Mace smash' },
    description: {
      es: 'Inflige daño contundente medio y puede aturdir.',
      en: 'Deals medium blunt damage and may stun.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 14 },
  },
  shattering_fist: {
    id: 'shattering_fist',
    name: { es: 'Puño demoledor', en: 'Shattering fist' },
    description: {
      es: 'Inflige daño contundente severo a un enemigo.',
      en: 'Deals heavy blunt damage to one enemy.',
    },
    element: 'blunt',
    cost: { kind: 'mp', amount: 22 },
  },

  // --- slash ---
  slash_strike: {
    id: 'slash_strike',
    name: { es: 'Tajo', en: 'Slash' },
    description: {
      es: 'Inflige daño físico cortante a un enemigo.',
      en: 'Deals slashing physical damage to one enemy.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 6 },
  },
  swift_cut: {
    id: 'swift_cut',
    name: { es: 'Corte veloz', en: 'Swift cut' },
    description: {
      es: 'Inflige daño cortante a un enemigo con alta prioridad.',
      en: 'Deals slashing damage to one enemy with high priority.',
    },
    element: 'slash',
    cost: { kind: 'mp', amount: 10 },
  },
  bloody_edge: {
    id: 'bloody_edge',
    name: { es: 'Filo sangriento', en: 'Bloody edge' },
    description: {
      es: 'Sacrifica vida propia para infligir daño cortante severo.',
      en: 'Sacrifices own HP to deal heavy slashing damage.',
    },
    element: 'slash',
    cost: { kind: 'hp_percent', amount: 15 },
  },

  // --- pierce ---
  thrust: {
    id: 'thrust',
    name: { es: 'Estocada', en: 'Thrust' },
    description: {
      es: 'Inflige daño físico perforante a un enemigo.',
      en: 'Deals piercing physical damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 8 },
  },
  precise_shot: {
    id: 'precise_shot',
    name: { es: 'Disparo certero', en: 'Precise shot' },
    description: {
      es: 'Inflige daño perforante con probabilidad de crítico.',
      en: 'Deals piercing damage with a high critical chance.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 12 },
  },
  piercing_arrow: {
    id: 'piercing_arrow',
    name: { es: 'Flecha perforante', en: 'Piercing arrow' },
    description: {
      es: 'Inflige daño perforante severo a un enemigo.',
      en: 'Deals heavy piercing damage to one enemy.',
    },
    element: 'pierce',
    cost: { kind: 'mp', amount: 20 },
  },

  // --- fire ---
  spark: {
    id: 'spark',
    name: { es: 'Chispa', en: 'Spark' },
    description: {
      es: 'Inflige daño mágico de fuego leve a un enemigo.',
      en: 'Deals light fire magic damage to one enemy.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 4 },
  },
  fireball: {
    id: 'fireball',
    name: { es: 'Bola de fuego', en: 'Fireball' },
    description: {
      es: 'Inflige daño mágico de fuego medio a un enemigo.',
      en: 'Deals medium fire magic damage to one enemy.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 12 },
  },
  inferno: {
    id: 'inferno',
    name: { es: 'Infierno', en: 'Inferno' },
    description: {
      es: 'Inflige daño mágico de fuego severo a todos los enemigos.',
      en: 'Deals heavy fire magic damage to all enemies.',
    },
    element: 'fire',
    cost: { kind: 'mp', amount: 38 },
  },

  // --- ice ---
  frost: {
    id: 'frost',
    name: { es: 'Escarcha', en: 'Frost' },
    description: {
      es: 'Inflige daño mágico de hielo leve a un enemigo.',
      en: 'Deals light ice magic damage to one enemy.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 4 },
  },
  blizzard: {
    id: 'blizzard',
    name: { es: 'Ventisca', en: 'Blizzard' },
    description: {
      es: 'Inflige daño mágico de hielo medio a todos los enemigos.',
      en: 'Deals medium ice magic damage to all enemies.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 18 },
  },
  deluge: {
    id: 'deluge',
    name: { es: 'Diluvio', en: 'Deluge' },
    description: {
      es: 'Inflige daño mágico de hielo severo a todos los enemigos.',
      en: 'Deals heavy ice magic damage to all enemies.',
    },
    element: 'ice',
    cost: { kind: 'mp', amount: 38 },
  },

  // --- thunder ---
  lightning_bolt: {
    id: 'lightning_bolt',
    name: { es: 'Rayo', en: 'Lightning bolt' },
    description: {
      es: 'Inflige daño mágico de trueno medio a un enemigo.',
      en: 'Deals medium thunder magic damage to one enemy.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 14 },
  },
  electric_storm: {
    id: 'electric_storm',
    name: { es: 'Tormenta eléctrica', en: 'Electric storm' },
    description: {
      es: 'Inflige daño mágico de trueno severo a todos los enemigos.',
      en: 'Deals heavy thunder magic damage to all enemies.',
    },
    element: 'thunder',
    cost: { kind: 'mp', amount: 40 },
  },

  // --- wind ---
  gust: {
    id: 'gust',
    name: { es: 'Ráfaga', en: 'Gust' },
    description: {
      es: 'Inflige daño mágico de viento leve a todos los enemigos.',
      en: 'Deals light wind magic damage to all enemies.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 10 },
  },
  tornado: {
    id: 'tornado',
    name: { es: 'Tornado', en: 'Tornado' },
    description: {
      es: 'Inflige daño mágico de viento severo a un enemigo.',
      en: 'Deals heavy wind magic damage to one enemy.',
    },
    element: 'wind',
    cost: { kind: 'mp', amount: 36 },
  },

  // --- nuclear ---
  fission: {
    id: 'fission',
    name: { es: 'Fisión', en: 'Fission' },
    description: {
      es: 'Inflige daño nuclear medio a todos los enemigos.',
      en: 'Deals medium nuclear damage to all enemies.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 30 },
  },
  atomic_detonation: {
    id: 'atomic_detonation',
    name: { es: 'Detonación atómica', en: 'Atomic detonation' },
    description: {
      es: 'Inflige daño nuclear severo a todos los enemigos.',
      en: 'Deals heavy nuclear damage to all enemies.',
    },
    element: 'nuclear',
    cost: { kind: 'mp', amount: 44 },
  },

  // --- psychic ---
  psychic_wave: {
    id: 'psychic_wave',
    name: { es: 'Onda psíquica', en: 'Psychic wave' },
    description: {
      es: 'Inflige daño psíquico a un enemigo.',
      en: 'Deals psychic damage to one enemy.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 12 },
  },
  mind_domination: {
    id: 'mind_domination',
    name: { es: 'Dominación mental', en: 'Mind domination' },
    description: {
      es: 'Inflige daño psíquico severo y puede confundir.',
      en: 'Deals heavy psychic damage and may confuse.',
    },
    element: 'psychic',
    cost: { kind: 'mp', amount: 24 },
  },

  // --- light ---
  holy_flash: {
    id: 'holy_flash',
    name: { es: 'Destello sagrado', en: 'Holy flash' },
    description: {
      es: 'Inflige daño de luz a un enemigo.',
      en: 'Deals light damage to one enemy.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 10 },
  },
  divine_judgment: {
    id: 'divine_judgment',
    name: { es: 'Juicio divino', en: 'Divine judgment' },
    description: {
      es: 'Inflige daño de luz severo a todos los enemigos.',
      en: 'Deals heavy light damage to all enemies.',
    },
    element: 'light',
    cost: { kind: 'mp', amount: 34 },
  },

  // --- dark ---
  dark_blood: {
    id: 'dark_blood',
    name: { es: 'Sangre oscura', en: 'Dark blood' },
    description: {
      es: 'Sacrifica vida propia para infligir daño oscuro severo.',
      en: 'Sacrifices own HP to deal heavy dark damage.',
    },
    element: 'dark',
    cost: { kind: 'hp_percent', amount: 20 },
  },
  shadow_curse: {
    id: 'shadow_curse',
    name: { es: 'Maldición umbría', en: 'Shadow curse' },
    description: {
      es: 'Inflige daño de oscuridad a un enemigo.',
      en: 'Deals dark damage to one enemy.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 14 },
  },
  void: {
    id: 'void',
    name: { es: 'Vacío', en: 'Void' },
    description: {
      es: 'Inflige daño de oscuridad severo a todos los enemigos.',
      en: 'Deals heavy dark damage to all enemies.',
    },
    element: 'dark',
    cost: { kind: 'mp', amount: 32 },
  },

  // --- almighty ---
  annihilation: {
    id: 'annihilation',
    name: { es: 'Aniquilación', en: 'Annihilation' },
    description: {
      es: 'Inflige daño todopoderoso que ignora resistencias.',
      en: 'Deals almighty damage that ignores resistances.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 48 },
  },
  final_judgment: {
    id: 'final_judgment',
    name: { es: 'Juicio final', en: 'Final judgment' },
    description: {
      es: 'Inflige daño todopoderoso masivo a todos los enemigos.',
      en: 'Deals massive almighty damage to all enemies.',
    },
    element: 'almighty',
    cost: { kind: 'mp', amount: 60 },
  },

  // --- status ---
  lethal_poison: {
    id: 'lethal_poison',
    name: { es: 'Veneno letal', en: 'Lethal poison' },
    description: {
      es: 'Envenena a un enemigo, infligiendo daño cada turno.',
      en: 'Poisons one enemy, dealing damage each turn.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 12 },
  },
  petrify: {
    id: 'petrify',
    name: { es: 'Petrificar', en: 'Petrify' },
    description: {
      es: 'Puede convertir en piedra a un enemigo.',
      en: 'May turn one enemy to stone.',
    },
    element: 'status',
    cost: { kind: 'mp', amount: 18 },
  },

  // --- heal ---
  healing_light: {
    id: 'healing_light',
    name: { es: 'Curación', en: 'Healing' },
    description: {
      es: 'Restaura una cantidad moderada de HP a un aliado.',
      en: 'Restores a moderate amount of HP to one ally.',
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 8 },
  },
  great_heal: {
    id: 'great_heal',
    name: { es: 'Gran curación', en: 'Great heal' },
    description: {
      es: 'Restaura mucha HP a todos los aliados.',
      en: 'Restores a large amount of HP to all allies.',
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 20 },
  },
  revive: {
    id: 'revive',
    name: { es: 'Revivir', en: 'Revive' },
    description: {
      es: 'Revive a un aliado caído con parte de su HP.',
      en: 'Revives a fallen ally with part of their HP.',
    },
    element: 'heal',
    cost: { kind: 'mp', amount: 40 },
  },

  // --- support ---
  focus: {
    id: 'focus',
    name: { es: 'Concentrar', en: 'Focus' },
    description: {
      es: 'Aumenta el daño mágico del lanzador en el próximo turno.',
      en: "Increases the caster's magic damage next turn.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 6 },
  },
  arcane_shield: {
    id: 'arcane_shield',
    name: { es: 'Escudo arcano', en: 'Arcane shield' },
    description: {
      es: 'Crea una barrera que reduce el daño recibido.',
      en: 'Creates a barrier that reduces damage taken.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 12 },
  },
  blessing: {
    id: 'blessing',
    name: { es: 'Bendición', en: 'Blessing' },
    description: {
      es: 'Aumenta los atributos de todos los aliados.',
      en: 'Raises the stats of all allies.',
    },
    element: 'support',
    cost: { kind: 'mp', amount: 10 },
  },
  bribe: {
    id: 'bribe',
    name: { es: 'Soborno', en: 'Bribe' },
    description: {
      es: 'Gasta dinero para evitar el combate contra un enemigo.',
      en: 'Spends money to avoid fighting one enemy.',
    },
    element: 'support',
    cost: { kind: 'money', amount: 500 },
  },
  hire_mercenary: {
    id: 'hire_mercenary',
    name: { es: 'Contratar mercenario', en: 'Hire mercenary' },
    description: {
      es: 'Paga para invocar a un aliado temporal en combate.',
      en: 'Pays to summon a temporary ally in battle.',
    },
    element: 'support',
    cost: { kind: 'money', amount: 1000 },
  },
}
