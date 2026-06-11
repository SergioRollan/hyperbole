import type { Attack } from '../domain'
import { ATTACKS } from '../data/attacks/attacks.data'

/** Attack access contract. Consumers depend on this, not on raw data. */
export interface AttackRepository {
  getById(id: string): Attack | undefined
  getMany(ids: readonly string[]): Attack[]
  getAll(): Attack[]
}

/** In-memory implementation over the static attack registry. */
export class InMemoryAttackRepository implements AttackRepository {
  private readonly source: Record<string, Attack>

  constructor(source: Record<string, Attack> = ATTACKS) {
    this.source = source
  }

  getById(id: string): Attack | undefined {
    return this.source[id]
  }

  getMany(ids: readonly string[]): Attack[] {
    return ids
      .map((id) => this.source[id])
      .filter((attack): attack is Attack => attack !== undefined)
  }

  getAll(): Attack[] {
    return Object.values(this.source)
  }
}

/** Default app-wide instance. */
export const attackRepository: AttackRepository = new InMemoryAttackRepository()
