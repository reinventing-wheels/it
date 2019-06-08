/**
 * @example
 * flatten([[1, 2], [3, 4], [5]]) // (1, 2, 3, 4, 5)
 * flatten(['foo', 'bar']) // ('f', 'o', 'o', 'b', 'a', 'r')
 */
export function* flatten<T>(it: Iterable<Iterable<T>>) {
  for (const value of it)
    yield* value
}
