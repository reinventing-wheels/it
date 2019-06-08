import { drop as dropʹ } from '../uncurried/drop'

/**
 * @example
 * drop(2)([1, 2, 3, 4, 5]) // (3, 4, 5)
 * drop(3)('foobar') // ('b', 'a', 'r')
 */
export const drop = (amount?: number) => <T>(it: Iterable<T>) =>
  dropʹ(it, amount)
