import { inspect as inspectʹ } from '../uncurried/inspect';
/**
 * @example
 * inspect(n => log(n))([1, 2, 3, 4, 5]) // (1, 2, 3, 4, 5)
 * inspect((c, i) => log(i, c))('foobar') // ('f', 'o', …)
 */
export const inspect = (fn) => (it) => inspectʹ(it, fn);
//# sourceMappingURL=inspect.js.map