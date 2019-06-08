import { every as everyʹ } from '../uncurried/every';
/**
 * @example
 * every(n => n > 0)([1, 2, 3]) // true
 * every(n => n > 1)([1, 2, 3]) // false
 */
export const every = (fn) => (it) => everyʹ(it, fn);
