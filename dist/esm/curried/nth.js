import { nth as nthʹ } from '../uncurried/nth';
/**
 * @example
 * nth(1)([1, 2, 3]) // 2
 * nth(0)('foobar') // f
 * nth(3)('foobar') // b
 */
export const nth = (n) => (it) => nthʹ(it, n);
//# sourceMappingURL=nth.js.map