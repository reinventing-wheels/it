import { drop as dropʹ } from '../uncurried/drop';
/**
 * @example
 * drop(2)([1, 2, 3, 4, 5]) // (3, 4, 5)
 * drop(3)('foobar') // ('b', 'a', 'r')
 */
export const drop = (amount) => (it) => dropʹ(it, amount);
