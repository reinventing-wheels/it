/**
 * @example
 * enumerate(['foo', 'bar']) // ([0 foo] [1 bar])
 * enumerate('foo') // ([0 f] [1 o] [2 o])
 */
export function* enumerate<T>(it: Iterable<T>) {
  let i = 0
  for (const value of it)
    yield [i++, value] as [number, T]
}
