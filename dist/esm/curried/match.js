import { match as matchʹ } from '../uncurried/match';
/**
 * @example
 * // (['foo', 'f', 'oo', index: 0, input: 'foobarbaz'],
 * //  ['bar', 'b', 'ar', index: 3, input: 'foobarbaz'],
 * //  ['baz', 'b', 'az', index: 6, input: 'foobarbaz'])
 * match(/(f|b)(..)/g)('foobarbaz')
 */
export const match = (regexp) => (input) => matchʹ(input, regexp);
//# sourceMappingURL=match.js.map