import { Callback } from '../types'
import { map as mapʹ } from '../uncurried/map'

/**
 * @example
 * map(n => 2*n)([1, 2, 3, 4, 5]) // (2, 4, 6, 8, 10)
 * map(c => c.charCodeAt(0))('foo') // (102, 111, 111)
 */
export const map = <T, U>(fn: Callback<T, U>) => (it: Iterable<T>) =>
  mapʹ(it, fn)
