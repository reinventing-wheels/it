import { Callback } from '../types'

/**
 * @example
 * some([1, 2, 3], n => n < 2) // true
 * some([1, 2, 3], n => n < 1) // false
 */
export function some<T>(it: Iterable<T>, fn: Callback<T, boolean>) {
  let i = 0
  for (const value of it)
    if (fn(value, i++))
      return true
  return false
}
