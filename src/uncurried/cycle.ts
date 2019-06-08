/**
 * @example
 * cycle([1, 2, 3], 2) // (1, 2, 3, 1, 2, 3)
 * cycle([1, 2, 3]) // (1, 2, 3, 1, 2, 3, …)
 * cycle('foo') // ('f', 'o', 'o', 'f', 'o', …)
 */
export function* cycle<T>(it: Iterable<T>, times = Infinity) {
  for (let i = 0; i < times; i++)
    yield* it
}
