import type { EvolutionLine, RpgClass } from '../domain'
import { EVOLUTION_LINES } from '../data/lines'

/** Evolution line and class access contract. */
export interface ClassRepository {
  getLines(): EvolutionLine[]
  /** Finds a class by id across all trees. */
  findClass(id: string): RpgClass | undefined
  /** Returns the evolution line a class belongs to. */
  findLineOfClass(id: string): EvolutionLine | undefined
}

function findInTree(node: RpgClass, id: string): RpgClass | undefined {
  if (node.id === id) return node
  for (const child of node.evolutions) {
    const found = findInTree(child, id)
    if (found) return found
  }
  return undefined
}

/** In-memory implementation over static lines. */
export class InMemoryClassRepository implements ClassRepository {
  private readonly lines: readonly EvolutionLine[]

  constructor(lines: readonly EvolutionLine[] = EVOLUTION_LINES) {
    this.lines = lines
  }

  getLines(): EvolutionLine[] {
    return [...this.lines]
  }

  findClass(id: string): RpgClass | undefined {
    for (const line of this.lines) {
      const found = findInTree(line.root, id)
      if (found) return found
    }
    return undefined
  }

  findLineOfClass(id: string): EvolutionLine | undefined {
    for (const line of this.lines) {
      if (findInTree(line.root, id)) return line
    }
    return undefined
  }
}

/** Default app-wide instance. */
export const classRepository: ClassRepository = new InMemoryClassRepository()
