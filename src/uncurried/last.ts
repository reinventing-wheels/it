/**
 * @example
 * last([1, 2, 3]) // 3
 * last('foobar') // 'r'
 */
export function last<T>(it: Iterable<T>) {
  let value
  for (value of it)
    ; // noop
  return value
}
