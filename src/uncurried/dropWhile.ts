import { Callback } from '../types'
import { lock } from '../util'

/**
 * @example
 * dropWhile([1, 2, 3, 4, 5], n => n < 3) // (3, 4, 5)
 * dropWhile('foobar', c => c != 'b') // ('b', 'a', 'r')
 */
export function* dropWhile<T>(it: Iterable<T>, fn: Callback<T, boolean>) {
  const itʹ = lock(it)
  let i = 0
  for (const value of itʹ) {
    if (!fn(value, i++)) {
      yield value
      yield* itʹ
    }
  }
}
