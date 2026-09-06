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
    es: 'Hyperbole toma el menú de arquetipos y la progresión por líneas evolutivas como referencia visual, pero no pretende ser una copia mecánica del juego original sino una mejoría.',
    en: 'Hyperbole uses the archetype menu and evolution-line progression as a visual reference, but it is not meant to be a mechanical clone of the original game but an improvement.',
  },
  sections: [
    {
      id: 'turns',
      title: { es: 'Turnos y acciones', en: 'Turns and actions' },
      paragraphs: [
        {
          es: 'El combate ese mantiene igual, por turnos con sistema de iconos. En cada turno, cada personaje del grupo puede realizar una acción principal: atacar, usar una habilidad, usar un objeto, relevar en un compañero o defenderse.',
          en: 'Combat is kept the same, turn-based with press turn icons. On each turn, every party member may take one main action: attack, use a skill, use an item, baton pass on a partner or defend.',
        },
        {
          es: 'Cada acción gasta un icono de turno. Si se utiliza un relevo, si se defiende, o si una habilidad o ataque aciertan una debilidad o realizan un golpe crítico, el icono no se gasta sino que se queda parpadeante. Cuando se gasta un icono que ya está parpadeando, se aplica solo ese icono independientemente de la acción tomada. Al fallar un ataque o al utilizar un elemento al que al menos un enemigo objetivo es inmune, se pierde el icono actual y el siguiente completos',
          en: 'Every action spends one press turn. If either baton pass is used, player defends, or a skill or normal attack hit a weakness or a critical hit, press turn is not spent but stays flashing. When a flashing press turn is spent, it will only apply to that one regardless of the action taken. If an attack is missed, or if using an element to which at least one targeted enemy is immune against, the curren press turn and the whole following one are lost.',
        },
        {
          es: 'Al utilizar habilidades, se consumirán MP en la mayoría de los casos, pero hay excepciones, como algunas habilidades de monje que gastan HP, o algunas del artista que gastan dinero. Si no puedes pagar el coste, no puedes usar la habilidad.',
          en: 'When using skills, in most cases MP will be spent, but there\'s some exceptions, such as some monk skills that use HP or some artist skills that use money. When cost cannot be covered, the skill cannot be used.',
        },
      ],
    },
    {
      id: 'stats',
      title: { es: 'Atributos', en: 'Attributes' },
      paragraphs: [
        {
          es: 'A pesar de ser uno de los elementos más característicos de los juegos de la compañía, se propone un modelo diferente de tipos y de atributos. Se combinan los tres tipos físicos de unos juegos (Persona 3, Metaphor Re:Fantazio) junto a los ocho tipos mágicos de otros (Persona 5). No obstante, en lugar de tener una estadística para los 3 tipos físicos y otra para los 8 tipos mágicos, más el todopoderoso y más la curación, se separan en dos mitades (parecido a Persona 5 X), una con los 4 primeros tipos mágicos y el todopoderoso, y otra con los 4 últimos y la curación.',
          en: 'Although attributes are one of the most iconic elements of the company\'s games, a different model of damage types and stats is proposed here. The system combines the three physical damage types from games such as Persona 3 and Metaphor: ReFantazio with the eight magical damage types from Persona 5. However, instead of using one stat for the three physical types and another for all eight magical types plus Almighty and healing, the magical side is divided into two halves (similar to Persona 5 X): one covering the first four elemental types and Almighty, and the other covering the last four spiritual types and healing.',
        },
        {
          es: 'Cada clase aporta bonus fijos a algunos de estos atributos. Solo cuentan los de la clase equipada en ese momento: no se acumulan al evolucionar por la línea. Esos bonus se suman a los valores base del personaje. La excepción son los HP y los MP, que direcatamente reflejarán progresiones graduales y límites del propio personaje al equipar cada arquetipo.',
          en: 'Each class grants fixed bonuses to some of these attributes. Only the bonuses from the currently equipped class apply; they do not stack as you evolve through the line. These bonuses are added to the character’s base values. The exception is HP and MP, which directly reflect the character’s own gradual growth and limits when equipping each archetype.',
        },
        {
          es: 'De esta forma distinguiremos 10 estadísticas en total.',
          en: 'This results in a total of 10 different statistics.',
        },
      ],
      bullets:[
        {
          es: 'Los HP que reflejarán los puntos de vida del personaje. Si se reducen a cero, el personaje muere.',
          en: 'HP, which represent the character’s health points. If they are reduced to zero, the character dies.',
        },
        {
          es: 'Los MP que reflejarán el poder restante para poder utilizar habilidades.',
          en: 'MP, which represent the remaining power available to use skills.',
        },
        {
          es: 'La fuerza, que reflejará el daño causado con ataques cortantes, contundentes y perforantes, salvo que una habilidad especifique lo contrario.',
          en: 'Strength, which determines the damage dealt by Slash, Strike, and Pierce attacks unless a skill specifies otherwise.',
        },
        {
          es: 'La inteligencia, que reflejará el daño causado con ataques de fuego, hielo, trueno, viento y todopoderosos, salvo que una habilidad especifique lo contrario.',
          en: 'Intelligence, which determines the damage dealt by Fire, Ice, Electric, Wind, and Almighty attacks unless a skill specifies otherwise.',
        },
        {
          es: 'La sabiduría, que reflejará el daño causado con ataques nucleares, psíquicos, de bendición y de maldición, así como la potencia de las curaciones, salvo que una habilidad especifique lo contrario.',
          en: 'Wisdom, which determines the damage dealt by Nuclear, Psychic, Bless, and Curse attacks, as well as the effectiveness of healing skills, unless a skill specifies otherwise.',
        },
        {
          es: 'La resistencia, que reflejará el daño recibido por ataques cortantes, contundentes y perforantes, salvo que una habilidad especifique lo contrario.',
          en: 'Resistance, which determines the damage received from Slash, Blunt and Pierce attacks unless a skill specifies otherwise.',
        },
        {
          es: 'La constitución, que reflejará el daño recibido por ataques de fuego, hielo, trueno, viento y todopoderosos, salvo que una habilidad especifique lo contrario.',
          en: 'Constitution, which determines the damage received from Fire, Ice, Electric, Wind, and Almighty attacks unless a skill specifies otherwise.',
        },
        {
          es: 'La voluntad, que reflejará el daño recibido por ataques nucleares, psíquicos, de bendición y de maldición, salvo que una habilidad especifique lo contrario.',
          en: 'Will, which determines the damage received from Nuclear, Psychic, Bless, and Curse attacks unless a skill specifies otherwise.',
        },
        {
          es: 'La agilidad, que inflirá en el orden de actuación y también en esquivar ataques enemigos.',
          en: 'Agility, which influences turn order and the chance to evade enemy attacks.',
        },
        {
          es: 'La suerte, que influirá en la probabilidad de causar y recibir golpes críticos y en causar y recibir estados alterados.',
          en: 'Luck, which influences the chance to deal and receive critical hits, as well as inflict and suffer status ailments.',
        },
      ]
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
          es: 'Golpear una debilidad aumenta el daño y gasta medio icono de turno. Una resistencia reduce a la mitad el daño sufrido. Un nulo, absorber o reflejar, provoca gastar un icono de turno extra.',
          en: 'Hitting a weakness increases damage and consumes only half a press turn. A resistance halves the damage dealt. Null, Drain, or Repel causes an additional full press turn to be lost.',
        },
      ],
    },
    {
      id: 'classes',
      title: { es: 'Clases y evolución', en: 'Classes and evolution' },
      paragraphs: [
        {
          es: 'Las clases se organizan en líneas evolutivas de hasta tres fases. Al contrario que en Metaphor Re:Fantazio, la idea sería que todos los arquetipos de fase 1 estuvieran disponibles desde el principio del juego, y los confidentes desbloqueasen las fases 2 y 3 (con el sistema propuesto caben un total de 17 confidentes).',
          en: 'Classes are organized into evolution lines of up to three stages. Unlike Metaphor: ReFantazio, the idea is that all stage-1 archetypes would be available from the start of the game, while Confidants would unlock stages 2 and 3 (the proposed system supports a total of 17 Confidants).',
        },
        {
          es: 'Al cambiar de arquetipo conservas el progreso de la línea, pero solo las habilidades aprendidas por el arquetipo actual (y hasta un máximo de 4 habilidades heredadas) estarán disponibles en combate.',
          en: 'When changing archetypes, you keep the progress of that evolution line, but only the skills learned by the currently equipped archetype (plus up to four inherited skills) are available in battle.',
        },
      ],
    },
  ],
  differencesTitle: {
    es: 'Diferencias con Metaphor: ReFantazio',
    en: 'Differences from Metaphor: ReFantazio',
  },
  differencesIntro: {
    es: 'Hyperbole se inspira en Metaphor Re:Fantazio, pero simplifica, cambia o mejora varios aspectos de este, y pretende conformar una propuesta alternativa con arquetipos más equilibrados.',
    en: 'Hyperbole is inspired by Metaphor: ReFantazio, but it simplifies, changes, or improves several of its systems, aiming to create an alternative proposal with more balanced archetypes.',
  },
  differences: [
    {
      topic: { es: 'Tipos y atributos', en: 'Class progression' },
      ours: {
        es: 'Tres tipos físicos, ocho mágicos, diviendo los mágicos en elementales y espirituales, 10 estadísticas',
        en: 'Three physical types, eight magical types split into elemental and spiritual categories, and 10 statistics.',
      },
      inspired: {
        es: 'Tres tipos físicos, seis mágicos, 7 estadísticas.',
        en: 'Three physical types, six magical types, and 7 statistics.',
      },
    },
    {
      topic: { es: 'Habilidades', en: 'Skills' },
      ours: {
        es: 'Pool central de ataques referenciados, sin síntesis para no restringir combinaciones de arquetipos. Varias clases comparten el mismo ataque. Herencia más directa.',
        en: 'A shared central pool of referenced attacks, with no synthesis system so archetype combinations are not restricted. Multiple classes can share the same attack. More straightforward inheritance.',
      },
      inspired: {
        es: 'Herencia, síntesis y personalización por personaje dentro del menú de arquetipo.',
        en: 'Inheritance, synthesis, and per-character customization in the archetype menu.',
      },
    },
    {
      topic: { es: 'Uso de armas', en: 'Weapons' },
      ours: {
        es: 'Conjunto definido de armas, cada línea usará una o más, y podrá tener equipada una en cada mano. Ningún tipo de arma es mejor que el resto, diferenciándose solo en los bonus que puedan recibir en el juego dando lugar a posibles combinaciones, y en el tipo de daño físico que infligen con los ataques básicos y con sus habilidades.',
        en: 'Set of weapon types, each line may use one or more, and equip one per hand. No type is necessarily better than the others, the only differences are the possible bonus they may receive in-game allowing for combinations, and the type of damage they inflict with normal attack and skills.',
      },
      inspired: {
        es: 'Cada linea tiene un arma que solo pueden utilizar sus arquetipos',
        en: 'Every line has one weapon type which can be used only by its archetypes.',
      },
    },
    {
      topic: { es: 'Disposición inicial', en: 'Initial availability' },
      ours: {
        es: '11 arquetipos a elegir al comienzo del juego. Los 17 confidentes desbloquean las evoluciones.',
        en: '11 archetypes at the start of the game. 17 confidants unlock their evolutions.',
      },
      inspired: {
        es: 'Un solo arquetipo a elegir al comienzo del juego, los confidentes desbloquean las líneas completas.',
        en: 'One unique archetype at the start of the same, confidants unlock the full lineages.',
      },
    },
  ],
}
