/**
 * @example
 * // (['foo', 'f', 'oo', index: 0, input: 'foobarbaz'],
 * //  ['bar', 'b', 'ar', index: 3, input: 'foobarbaz'],
 * //  ['baz', 'b', 'az', index: 6, input: 'foobarbaz'])
 * match('foobarbaz', /(f|b)(..)/g)
 */
export function* match(input, regexp) {
    for (let match; match = regexp.exec(input);)
        yield match;
}
