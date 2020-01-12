import { match as matchʹ } from '../uncurried/match'

/**
 * @example
 * // ([foo f oo] [bar b ar] [baz b az])
 * match(/(f|b)(..)/g)('foobarbaz')
 */
export const match = (regexp: RegExp) => (input: string) =>
  matchʹ(input, regexp)
