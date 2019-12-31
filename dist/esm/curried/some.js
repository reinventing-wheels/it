import { some as someʹ } from '../uncurried/some';
/**
 * @example
 * some(n => n < 2)([1, 2, 3]) // true
 * some(n => n < 1)([1, 2, 3]) // false
 */
export const some = (fn) => (it) => someʹ(it, fn);
//# sourceMappingURL=some.js.map