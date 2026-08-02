import type { AttributeKey, StatBonuses } from '../../domain'

/** Maximum core stat value; maps to 100% on the progress bar. */
export const STAT_BAR_MAX = 8

/** Vital pool range for HP/MP progress bars. */
export const VITAL_BAR_MIN = 30
export const VITAL_BAR_MAX = 999

/**
 * Builds core StatBonuses from spreadsheet order:
 * STR, INT, WIS, RES, CON, WILL, AGI, LCK (scale 0–8).
 */
export function sb(
  str = 0,
  int = 0,
  wis = 0,
  res = 0,
  con = 0,
  will = 0,
  agi = 0,
  lck = 0,
  hp = 200,
  mp = 200,
): StatBonuses {
  return {
    STR: str,
    INT: int,
    WIS: wis,
    RES: res,
    CON: con,
    WILL: will,
    AGI: agi,
    LCK: lck,
    HP: hp,
    MP: mp,
  }
}


export const EMPTY_STATS: StatBonuses = sb()

export function statValue(bonuses: StatBonuses, key: AttributeKey): number {
  return bonuses[key] ?? 0
}
