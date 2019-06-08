import { Callback } from '../types'
import { some as someʹ } from '../uncurried/some'

/**
 * @example
 * some(n => n < 2)([1, 2, 3]) // true
 * some(n => n < 1)([1, 2, 3]) // false
 */
export const some = <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) =>
  someʹ(it, fn)
