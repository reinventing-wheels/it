import { loop as loopʹ } from '../uncurried/loop';
/**
 * @example
 * function* countTo3() { for (let i = 1; i <= 3; i++) yield i }
 * function* countTo(n) { for (let i = 1; i <= n; i++) yield i }
 * loop()(countTo3) // (1 2 3 1 2 3 1 2 3 …)
 * loop(3)(countTo3) // (1 2 3 1 2 3 1 2 3)
 * loop(4)(countTo) // (1 1 2 1 2 3 1 2 3 4)
 */
export const loop = (times) => (fn) => loopʹ(fn, times);
//# sourceMappingURL=loop.js.map