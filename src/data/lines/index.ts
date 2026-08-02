import type { EvolutionLine } from '../../domain'
import { mageLine } from './mage.line'
import { warlockLine } from './warlock.line'
import { druidLine } from './druid.line'
import { healerLine } from './healer.line'
import { thiefLine } from './thief.line'
import { warriorLine } from './warrior.line'
import { fighterLine } from './fighter.line'
import { paladinLine } from './paladin.line'
import { explorerLine } from './explorer.line'
import { captainLine } from './captain.line'
import { artistLine } from './artist.line'
import { protagonistLine } from './protagonist.line'

/** All evolution lines in screen display order. */
export const EVOLUTION_LINES: readonly EvolutionLine[] = [
  mageLine,
  warlockLine,
  healerLine,
  thiefLine,
  warriorLine,
  fighterLine,
  paladinLine,
  druidLine,
  captainLine,
  explorerLine,
  artistLine,
  protagonistLine,
]
