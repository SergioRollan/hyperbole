import type { AttackElement, WeaponId } from '../../domain'

/**
 * Single place where each concept maps to a concrete icon.
 * Maps semantic keys (evolution line / attack element) to `game-icons`
 * names in Iconify.
 *
 * To swap icon sets, edit only this file.
 * If a name is missing from game-icons, the icon won't render — fix it here
 * (see https://icon-sets.iconify.design/game-icons/).
 */

const FALLBACK_ICON = 'game-icons:rune-stone'

/** Icons per evolution line (key = EvolutionLine.icon). */
const LINE_ICONS: Record<string, string> = {
  mage: 'game-icons:wizard-face',
  warlock: 'game-icons:pointy-hat',
  druid: 'game-icons:ringed-planet',
  healer: 'game-icons:health-normal',
  thief: 'game-icons:domino-mask',
  warrior: 'game-icons:sword-wound',
  fighter: 'game-icons:boxing-glove',
  paladin: 'game-icons:templar-shield',
  explorer: 'game-icons:compass',
  captain: 'game-icons:captain-hat-profile',
  artist: 'game-icons:paint-brush',
}

/** Icons per attack element. */
const ELEMENT_ICONS: Record<AttackElement, string> = {
  blunt: 'game-icons:flat-hammer',
  slash: 'game-icons:saber-slash',
  pierce: 'game-icons:barbed-spear',
  fire: 'game-icons:flame',
  ice: 'game-icons:frozen-orb',
  thunder: 'game-icons:lightning-arc',
  wind: 'game-icons:tornado',
  nuclear: 'game-icons:radioactive',
  psychic: 'game-icons:echo-ripples',
  light: 'game-icons:sunbeams',
  dark: 'game-icons:hades-symbol',
  almighty: 'game-icons:galaxy',
  status: 'game-icons:poison-bottle',
  heal: 'game-icons:hearts',
  support: 'game-icons:encirclement',
  passive: 'game-icons:cycle',
}

/** Icons per weapon. */
const WEAPON_ICONS: Record<WeaponId, string> = {
  grimoire: 'game-icons:spell-book',
  staff: 'game-icons:wizard-staff',
  shield: 'game-icons:shield',
  mace: 'game-icons:flanged-mace',
  fist: 'game-icons:fist',
  hammer: 'game-icons:warhammer',
  axe: 'game-icons:battle-axe',
  sword: 'game-icons:broadsword',
  katana: 'game-icons:katana',
  dagger: 'game-icons:plain-dagger',
  spear: 'game-icons:arrowhead',
  rapier: 'game-icons:stiletto',
  bow: 'game-icons:pocket-bow',
  crossbow: 'game-icons:crossbow',
}

export function lineIcon(key: string): string {
  return LINE_ICONS[key] ?? FALLBACK_ICON
}

export function weaponIcon(weapon: WeaponId): string {
  return WEAPON_ICONS[weapon] ?? FALLBACK_ICON
}

export function elementIcon(element: AttackElement): string {
  return ELEMENT_ICONS[element] ?? FALLBACK_ICON
}

/** CSS color variable for any attack element icon. */
export function attackElementColor(element: AttackElement): string {
  return `var(--elem-${element})`
}

