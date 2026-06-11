import type { LocalizedText } from '../i18n/locale.types'
import type { RpgClass } from './rpg-class.types'

/**
 * A full evolution line. The icon belongs to the entire line (all its
 * classes share it). A class phase is its depth within the tree under `root`.
 */
export interface EvolutionLine {
  id: string
  name: LocalizedText
  /** Semantic icon key (see iconRegistry). */
  icon: string
  root: RpgClass
}
