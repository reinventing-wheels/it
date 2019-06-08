import { cycle as cycleʹ } from '../uncurried/cycle'

/**
 * @example
 * cycle(2)([1, 2, 3]) // (1, 2, 3, 1, 2, 3)
 * cycle()([1, 2, 3]) // (1, 2, 3, 1, 2, 3, …)
 * cycle()('foo') // ('f', 'o', 'o', 'f', 'o', …)
 */
export const cycle = (times?: number) => <T>(it: Iterable<T>) =>
  cycleʹ(it, times)
