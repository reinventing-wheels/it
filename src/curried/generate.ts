import { generate as generateʹ } from '../uncurried/generate'

/**
 * @example
 * generate(5)(Math.random) // 5 random numbers
 * generate(5)(i => i) // (0 1 2 3 4)
 * generate()(i => i) // (0 1 2 3 4 …)
 */
export const generate = (times?: number) => <T>(fn: (index: number) => T) =>
  generateʹ(fn, times)
