import { Callback } from '../types'

/**
 * @example
 * inspect([1, 2, 3, 4, 5], n => log(n)) // (1, 2, 3, 4, 5)
 * inspect('foobar', (c, i) => log(i, c)) // ('f', 'o', …)
 */
export function* inspect<T>(it: Iterable<T>, fn: Callback<T, void>) {
  let i = 0
  for (const value of it) {
    fn(value, i++)
    yield value
  }
}
