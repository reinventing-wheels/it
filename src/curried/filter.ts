import { Callback } from '../types'
import { filter as filterʹ } from '../uncurried/filter'

/**
 * @example
 * filter(n => n%2 == 0)([1, 2, 3, 4, 5]) // (2 4)
 * filter(n => n%2 != 0)([1, 2, 3, 4, 5]) // (1 3 5)
 * filter(c => c != 'o')('foobar') // (f b a r)
 */
export const filter = <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) =>
  filterʹ(it, fn)
