import { Callback } from '../types'

/**
 * @example
 * flatMap([1, 2, 3], n => [-n, +n]) // (-1 1 -2 2 -3 3)
 * flatMap(['foo', 'bar'], s => s) // (f o o b a r)
 */
export function* flatMap<T, U>(it: Iterable<T>, fn: Callback<T, U[]>) {
  let i = 0
  for (const value of it)
    yield* fn(value, i++)
}
