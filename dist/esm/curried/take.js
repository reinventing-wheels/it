import { take as takeʹ } from '../uncurried/take';
/**
 * @example
 * take(3)([1, 2, 3, 4, 5]) // (1, 2, 3)
 * take(3)('foobar') // ('f', 'o', 'o')
 */
export const take = (amount) => (it) => takeʹ(it, amount);
//# sourceMappingURL=take.js.map