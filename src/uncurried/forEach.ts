import { Callback } from '../types'

/**
 * @example
 * forEach([1, 2, 3, 4, 5], n => log(n))
 * forEach('foobar', (c, i) => log(i, c))
 */
export function forEach<T>(it: Iterable<T>, fn: Callback<T, void>) {
  let i = 0
  for (const value of it)
    fn(value, i++)
}
