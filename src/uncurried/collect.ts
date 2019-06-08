/**
 * @example
 * collect([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
 * collect('foobar') // ['f', 'o', 'o', 'b', 'a', 'r']
 */
export function collect<T>(it: Iterable<T>) {
  return [...it]
}
