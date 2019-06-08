/**
 * @example
 * cast([1, 2, 3], it => new Uint8Array(it)) // Uint8Array
 * cast([1, 2, 3], it => new Set(it)) // Set<number>
 * cast('foobar', it => new Set(it)) // Set<string>
 */
export function cast<T, U>(it: Iterable<T>, fn: (it: Iterable<T>) => U) {
  return fn(it)
}
