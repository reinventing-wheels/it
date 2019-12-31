import { forEach as forEachʹ } from '../uncurried/forEach';
/**
 * @example
 * forEach(n => log(n))([1, 2, 3, 4, 5])
 * forEach((c, i) => log(i, c))('foobar')
 */
export const forEach = (fn) => (it) => forEachʹ(it, fn);
//# sourceMappingURL=forEach.js.map