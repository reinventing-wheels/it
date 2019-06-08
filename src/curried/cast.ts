import { cast as castʹ } from '../uncurried/cast'

/**
 * @example
 * cast(it => new Uint8Array(it))([1, 2, 3]) // Uint8Array
 * cast(it => new Set(it))([1, 2, 3]) // Set<number>
 * cast(it => new Set(it))('foobar') // Set<string>
 */
export const cast = <T, U>(fn: (it: Iterable<T>) => U) => (it: Iterable<T>) =>
  castʹ(it, fn)
