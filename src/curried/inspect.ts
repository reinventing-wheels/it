import { Callback } from '../types'
import { inspect as inspectʹ } from '../uncurried/inspect'

/**
 * @example
 * inspect(n => log(n))([1, 2, 3, 4, 5]) // (1 2 3 4 5)
 * inspect((c, i) => log(i, c))('foobar') // (f o …)
 */
export const inspect = <T>(fn: Callback<T, void>) => (it: Iterable<T>) =>
  inspectʹ(it, fn)
