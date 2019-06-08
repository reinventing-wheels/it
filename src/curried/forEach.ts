import { Callback } from '../types'
import { forEach as forEachʹ } from '../uncurried/forEach'

/**
 * @example
 * forEach(n => log(n))([1, 2, 3, 4, 5])
 * forEach((c, i) => log(i, c))('foobar')
 */
export const forEach = <T>(fn: Callback<T, void>) => (it: Iterable<T>) =>
  forEachʹ(it, fn)
