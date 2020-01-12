import { flatMap as flatMapʹ } from '../uncurried/flatMap';
/**
 * @example
 * flatMap(n => [-n, +n])([1, 2, 3]) // (-1 1 -2 2 -3 3)
 * flatMap(s => s)(['foo', 'bar']) // (f o o b a r)
 */
export const flatMap = (fn) => (it) => flatMapʹ(it, fn);
//# sourceMappingURL=flatMap.js.map