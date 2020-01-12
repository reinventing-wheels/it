import { cycle as cycleʹ } from '../uncurried/cycle';
/**
 * @example
 * cycle(2)([1, 2, 3]) // (1 2 3 1 2 3)
 * cycle()([1, 2, 3]) // (1 2 3 1 2 3 …)
 * cycle()('foo') // (f o o f o …)
 */
export const cycle = (times) => (it) => cycleʹ(it, times);
//# sourceMappingURL=cycle.js.map