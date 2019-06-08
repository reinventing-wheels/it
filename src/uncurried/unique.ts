import { Callback } from '../types'

/**
 * @example
 * unique([1, 3, 3, 7]) // (1, 3, 7)
 * unique('foobar') // ('f', 'o', 'b', 'a', 'r')
 */
export function* unique<T>(it: Iterable<T>) {
  const set = new Set<T>()
  for (const value of it) {
    if (!set.has(value)) {
      set.add(value)
      yield value
    }
  }
}
