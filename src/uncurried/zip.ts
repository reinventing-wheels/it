import { Iterables } from '../types'
import { unwrap } from '../util'

/**
 * @example
 * zip([1, 2, 3], [4, 5, 6]) // ([1 4] [2 5] [3 6])
 * zip([1, 2, 3], 'foobar') // ([1 f] [2 o] [3 o])
 */
export function* zip<T extends any[]>(...its: Iterables<T>) {
  for (const itsʹ = its.map(unwrap); ;) {
    const values = []
    for (const it of itsʹ) {
      const { done, value } = it.next()
      if (done)
        return
      values.push(value)
    }
    yield values as T
  }
}
