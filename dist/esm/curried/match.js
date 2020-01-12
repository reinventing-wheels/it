import { match as matchʹ } from '../uncurried/match';
/**
 * @example
 * // ([foo f oo] [bar b ar] [baz b az])
 * match(/(f|b)(..)/g)('foobarbaz')
 */
export const match = (regexp) => (input) => matchʹ(input, regexp);
//# sourceMappingURL=match.js.map