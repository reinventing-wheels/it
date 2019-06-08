import { map as mapʹ } from '../uncurried/map';
/**
 * @example
 * map(n => 2*n)([1, 2, 3, 4, 5]) // (2, 4, 6, 8, 10)
 * map(c => c.charCodeAt(0))('foo') // (102, 111, 111)
 */
export const map = (fn) => (it) => mapʹ(it, fn);
