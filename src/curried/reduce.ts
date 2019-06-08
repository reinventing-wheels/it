import { Reducer } from '../types'
import { reduce as reduceʹ } from '../uncurried/reduce'

/**
 * @example
 * reduce((acc, n) => acc + n)(0)([1, 2, 3]) // 6
 * reduce((acc, n) => acc + n)('')([1, 2, 3]) // '123'
 * reduce((map, c, i) => map.set(i, c))(new Map)('foo') // Map
 */
export const reduce = <T, U>(fn: Reducer<T, U>) => (first: U) => (it: Iterable<T>) =>
  reduceʹ(it, fn, first)
