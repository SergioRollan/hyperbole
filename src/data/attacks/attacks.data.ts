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
      en: "Increases one ally's precision/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  suku_2: {
    id: 'suku_2',
    name: { es: 'Masukukaja', en: 'Masukukaja' },
    description: {
      es: 'Aumenta la precisión y la evasión de todos los aliados en un nivel durante 3 turnos.',
      en: "Increases all allies precision/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  suku_3: {
    id: 'suku_3',
    name: { es: 'Sukunda', en: 'Sukunda' },
    description: {
      es: 'Disminuye la precisión y la evasión de un enemigo en un nivel durante 3 turnos.',
      en: "Decreases one enemy's precision/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 8 },
  },
  suku_4: {
    id: 'suku_4',
    name: { es: 'Masukunda', en: 'Masukunda' },
    description: {
      es: 'Disminuye la precisión y la evasión de todos los enemigos en un nivel durante 3 turnos.',
      en: "Decreases all enemies precision/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 24 },
  },
  support_1: {
    id: 'support_1',
    name: { es: 'Subidón', en: 'Heat riser' },
    description: {
      es: 'Aumenta el ataque, la defensa, la precisión y la evasión de un aliado en un nivel durante 3 turnos.',
      en: "Increases one ally's attack/defense/precision/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  support_2: {
    id: 'support_2',
    name: { es: 'Debilitar', en: 'Debilitate' },
    description: {
      es: 'Disminuye el ataque, la defensa, la precisión y la evasión de un enemigo en un nivel durante 3 turnos.',
      en: "Decreases one enemy's attack/defense/precision/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 30 },
  },
  support_3: {
    id: 'support_3',
    name: { es: 'Hyakka Ryouran', en: 'Hyakka Ryouran' },
    description: {
      es: 'Aumenta el ataque, la defensa, la precisión y la evasión de todos los aliados en un nivel durante 3 turnos.',
      en: "Increases all allies attack/defense/precision/evasion by one level for 3 turns.",
    },
    element: 'support',
    cost: { kind: 'mp', amount: 90 },
  },
  support_4: {
    id: 'support_4',
    name: { es: 'Jaque mate', en: 'Checkmate' },
    description: {
      es: 'Disminuye el ataque, la defensa, la precisión y la evasión de todos los enemigos en un nivel durante 3 turnos.',
      en: "Decreases all enemies attack/defense/precision/evasion by one level for 3 turns.",
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
      en: "The next revival will increase the ally's attack/defense/precision/evasion by two levels for 3 turns.",
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

  

  // --- passive ---


  // --- line-exclusive ---

}
