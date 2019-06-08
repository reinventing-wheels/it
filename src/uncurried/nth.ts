/**
 * @example
 * nth([1, 2, 3], 1) // 2
 * nth('foobar', 0) // 'f'
 * nth('foobar', 3) // 'b'
 */
export function nth<T>(it: Iterable<T>, n: number) {
  let i = 0
  for (const value of it)
    if (i++ >= n)
      return value
}
