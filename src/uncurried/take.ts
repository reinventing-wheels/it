import { lock } from '../util'

/**
 * @example
 * take([1, 2, 3, 4, 5], 3) // (1 2 3)
 * take('foobar', 3) // (f o o)
 */
export function* take<T>(it: Iterable<T>, amount = 1) {
  let i = 0
  for (const value of amount > 0 ? lock(it) : []) {
    yield value
    if (++i >= amount)
      return
  }
}
