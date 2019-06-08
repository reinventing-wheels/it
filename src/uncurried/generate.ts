/**
 * @example
 * generate(Math.random, 5) // 5 random numbers
 * generate(i => i, 5) // (0, 1, 2, 3, 4)
 * generate(i => i) // (0, 1, 2, 3, 4, …)
 */
export function* generate<T>(fn: (index: number) => T, times = Infinity) {
  for (let i = 0; i < times; i++)
    yield fn(i)
}
