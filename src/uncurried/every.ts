import { Callback } from '../types'

/**
 * @example
 * every([1, 2, 3], n => n > 0) // true
 * every([1, 2, 3], n => n > 1) // false
 */
export function every<T>(it: Iterable<T>, fn: Callback<T, boolean>) {
  let i = 0
  for (const value of it)
    if (!fn(value, i++))
      return false
  return true
}
