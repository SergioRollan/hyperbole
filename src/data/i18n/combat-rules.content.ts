import type { LocalizedText } from '../../domain'

export interface RuleSection {
  id: string
  title: LocalizedText
  paragraphs: readonly LocalizedText[]
  bullets?: readonly LocalizedText[]
}

export interface RuleDifference {
  topic: LocalizedText
  ours: LocalizedText
  inspired: LocalizedText
}

export interface CombatRulesContent {
  pageTitle: LocalizedText
  pageSubtitle: LocalizedText
  inspiredDisclaimer: LocalizedText
  sections: readonly RuleSection[]
  differencesTitle: LocalizedText
  differencesIntro: LocalizedText
  differences: readonly RuleDifference[]
}

export const COMBAT_RULES: CombatRulesContent = {
  pageTitle: { es: 'Reglas de combate', en: 'Combat rules' },
  pageSubtitle: {
    es: 'Fundamentos del sistema y en qué se parece (o no) a Metaphor: ReFantazio.',
    en: 'Core system basics and how they compare to Metaphor: ReFantazio.',
  },
  inspiredDisclaimer: {
    es: 'Hyperbole toma el menú de arquetipos y la progresión por líneas evolutivas como referencia visual, pero no pretende ser una copia mecánica del juego original.',
    en: 'Hyperbole uses the archetype menu and evolution-line progression as a visual reference, but it is not meant to be a mechanical clone of the original game.',
  },
  sections: [
    {
      id: 'turns',
      title: { es: 'Turnos y acciones', en: 'Turns and actions' },
      paragraphs: [
        {
          es: 'El combate es por turnos. En cada turno, cada personaje del grupo puede realizar una acción principal: atacar, usar una habilidad, curar, apoyar o defenderse.',
          en: 'Combat is turn-based. On each turn, every party member may take one main action: attack, use a skill, heal, support, or defend.',
        },
        {
          es: 'Algunas habilidades consumen MP, un porcentaje de HP o dinero. Si no puedes pagar el coste, no puedes usar la habilidad.',
          en: 'Some skills cost MP, a percentage of HP, or money. If you cannot pay the cost, you cannot use the skill.',
        },
      ],
    },
    {
      id: 'stats',
      title: { es: 'Atributos', en: 'Attributes' },
      paragraphs: [
        {
          es: 'Cada personaje tiene ocho atributos base: fuerza, inteligencia, sabiduría, resistencia, constitución, voluntad, agilidad y suerte.',
          en: 'Each character has eight base attributes: strength, intelligence, wisdom, resistance, constitution, will, agility, and luck.',
        },
        {
          es: 'Cada clase aporta bonus fijos a ciertos atributos. Solo cuentan los de la clase equipada en ese momento: no se acumulan al evolucionar por la línea. Esos bonus se suman a los valores base del personaje.',
          en: 'Each class grants fixed bonuses to certain attributes. Only the equipped class counts — bonuses do not stack as you evolve along the line. They are added to the character’s base stats.',
        },
      ],
    },
    {
      id: 'classes',
      title: { es: 'Clases y evolución', en: 'Classes and evolution' },
      paragraphs: [
        {
          es: 'Las clases se organizan en líneas evolutivas de hasta tres fases. Empiezas en la fase 1 y, al cumplir los requisitos, puedes evolucionar a una clase de fase superior dentro de la misma línea.',
          en: 'Classes are grouped into evolution lines of up to three phases. You start at phase 1 and, once requirements are met, you can evolve into a higher-phase class within the same line.',
        },
        {
          es: 'Al cambiar de clase conservas el progreso de la línea, pero solo las habilidades aprendidas por la clase actual (y las heredadas, si el sistema lo permite) estarán disponibles en combate.',
          en: 'When you change class you keep line progression, but only skills learned by your current class (and inherited ones, if the system allows it) are available in battle.',
        },
      ],
      bullets: [
        {
          es: 'Una misma habilidad puede ser compartida por varias clases.',
          en: 'The same skill can be shared by multiple classes.',
        },
        {
          es: 'Las habilidades se aprenden automáticamente al alcanzar el nivel indicado.',
          en: 'Skills are learned automatically when you reach the listed level.',
        },
      ],
    },
    {
      id: 'elements',
      title: { es: 'Elementos y daño', en: 'Elements and damage' },
      paragraphs: [
        {
          es: 'Cada habilidad tiene un elemento (contundente, fuego, psíquico, cura, apoyo, etc.) que determina su icono y, en combate, cómo interactúa con las resistencias del enemigo.',
          en: 'Each skill has an element (blunt, fire, psychic, heal, support, etc.) that sets its icon and, in battle, how it interacts with enemy resistances.',
        },
        {
          es: 'Golpear una debilidad puede conceder un turno extra o un bonus de daño; resistir el elemento reduce el daño recibido.',
          en: 'Hitting a weakness may grant a bonus turn or extra damage; resisting the element reduces damage taken.',
        },
      ],
    },
    {
      id: 'resources',
      title: { es: 'Recursos', en: 'Resources' },
      paragraphs: [
        {
          es: 'HP representa la vida. MP alimenta la mayoría de habilidades mágicas. El dinero puede gastarse en habilidades especiales de apoyo o utilidad fuera del daño directo.',
          en: 'HP is health. MP fuels most magic skills. Money can be spent on special support or utility skills outside direct damage.',
        },
      ],
      bullets: [
        {
          es: 'Coste en MP: cantidad fija de puntos mágicos.',
          en: 'MP cost: a fixed amount of magic points.',
        },
        {
          es: 'Coste en % HP: sacrificas vida actual para activar la habilidad.',
          en: 'HP % cost: you sacrifice current health to activate the skill.',
        },
        {
          es: 'Coste en dinero: se descuenta del oro del grupo.',
          en: 'Money cost: deducted from the party’s gold.',
        },
      ],
    },
  ],
  differencesTitle: {
    es: 'Diferencias con Metaphor: ReFantazio',
    en: 'Differences from Metaphor: ReFantazio',
  },
  differencesIntro: {
    es: 'La inspiración es clara en la presentación de arquetipos, pero Hyperbole simplifica o cambia varias mecánicas:',
    en: 'The inspiration is clear in how archetypes are presented, but Hyperbole simplifies or changes several mechanics:',
  },
  differences: [
    {
      topic: { es: 'Progresión de clase', en: 'Class progression' },
      ours: {
        es: 'Líneas evolutivas de hasta 3 fases con ramas fijas definidas en datos.',
        en: 'Evolution lines of up to 3 phases with fixed branches defined in data.',
      },
      inspired: {
        es: 'Maestría de arquetipo (AEXP) y desbloqueo gradual dentro de cada línea.',
        en: 'Archetype mastery (AEXP) and gradual unlocks within each line.',
      },
    },
    {
      topic: { es: 'Habilidades', en: 'Skills' },
      ours: {
        es: 'Pool central de ataques referenciados por id; varias clases comparten el mismo ataque.',
        en: 'Central attack pool referenced by id; multiple classes share the same attack.',
      },
      inspired: {
        es: 'Herencia, síntesis y personalización por personaje dentro del menú de arquetipo.',
        en: 'Inheritance, synthesis, and per-character customization in the archetype menu.',
      },
    },
    {
      topic: { es: 'Atributos', en: 'Attributes' },
      ours: {
        es: 'Ocho stats (STR, INT, WIS, RES, CON, WILL, AGI, LCK) con bonus planos por clase.',
        en: 'Eight stats (STR, INT, WIS, RES, CON, WILL, AGI, LCK) with flat per-class bonuses.',
      },
      inspired: {
        es: 'Atributos clásicos de Atlus (St, Ma, En, Ag, Lk) con crecimiento por nivel y equipo.',
        en: 'Classic Atlus stats (St, Ma, En, Ag, Lk) with growth from levels and gear.',
      },
    },
    {
      topic: { es: 'Combate por debilidades', en: 'Weakness combat' },
      ours: {
        es: 'Sistema de elementos amplio (15 tipos) orientado a resistencias y estados.',
        en: 'Broad element system (15 types) focused on resistances and status.',
      },
      inspired: {
        es: 'Turnos extra (Press Turn) al explotar debilidades y penalización al fallar.',
        en: 'Bonus turns (Press Turn) when exploiting weaknesses and penalties on misses.',
      },
    },
    {
      topic: { es: 'Alcance de esta app', en: 'Scope of this app' },
      ours: {
        es: 'Selector y planificador de clases: consulta bonus, habilidades y ramas evolutivas.',
        en: 'Class selector and planner: browse bonuses, skills, and evolution branches.',
      },
      inspired: {
        es: 'Menú completo dentro del juego con equipo, vínculos, virtudes y exploración.',
        en: 'Full in-game menu with gear, bonds, virtues, and exploration.',
      },
    },
  ],
}
