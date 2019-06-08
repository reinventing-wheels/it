/**
 * @example
 * chain([1, 2], [3, 4], [5]) // (1, 2, 3, 4, 5)
 * chain('foo', 'bar') // ('f', 'o', 'o', 'b', 'a', 'r')
 */
export function* chain<T>(...its: Iterable<T>[]) {
  for (const it of its)
    yield* it
}
