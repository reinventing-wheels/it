import { range as rangeʹ } from '../uncurried/range';
/**
 * @example
 * range()()() // (0, 1, 2, 3, 4, …)
 * range(0)(5)() // (0, 1, 2, 3, 4)
 * range(1)(10)(2) // (1, 3, 5, 7, 9)
 */
export const range = (start) => (stop) => (step) => rangeʹ(start, stop, step);
