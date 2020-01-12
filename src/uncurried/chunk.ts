/**
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // ([1 2] [3 4] [5])
 * chunk('foobar', 3) // ([f o o] [b a r])
 */
export function* chunk<T>(it: Iterable<T>, size: number) {
  const chunk = []
  for (const value of it)
    if (chunk.push(value) >= size)
      yield chunk.splice(0)
  if (chunk.length)
    yield chunk
}
