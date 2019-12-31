import { takeWhile as takeWhileʹ } from '../uncurried/takeWhile';
/**
 * @example
 * takeWhile(n => n < 4)([1, 2, 3, 4, 5]) // (1, 2, 3)
 * takeWhile(c => c != 'b')('foobar') // ('f', 'o', 'o')
 */
export const takeWhile = (fn) => (it) => takeWhileʹ(it, fn);
//# sourceMappingURL=takeWhile.js.map