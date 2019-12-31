import { find as findʹ } from '../uncurried/find';
/**
 * @example
 * find(n => n%2 == 0)([1, 2, 3]) // 2
 * find(n => n%2 != 0)([1, 2, 3]) // 1
 * find(c => c != 'f')('foobar') // 'o'
 */
export const find = (fn) => (it) => findʹ(it, fn);
//# sourceMappingURL=find.js.map