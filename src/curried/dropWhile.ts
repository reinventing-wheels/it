import { Callback } from '../types'
import { dropWhile as dropWhileʹ } from '../uncurried/dropWhile'

/**
 * @example
 * dropWhile(n => n < 3)([1, 2, 3, 4, 5]) // (3 4 5)
 * dropWhile(c => c != 'b')('foobar') // (b a r)
 */
export const dropWhile = <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) =>
  dropWhileʹ(it, fn)
