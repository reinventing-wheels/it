/**
 * @example
 * // (['foo', 'f', 'oo', index: 0, input: 'foobarbaz'],
 * //  ['bar', 'b', 'ar', index: 3, input: 'foobarbaz'],
 * //  ['baz', 'b', 'az', index: 6, input: 'foobarbaz'])
 * match('foobarbaz', /(f|b)(..)/g)
 */
export declare function match(input: string, regexp: RegExp): IterableIterator<RegExpExecArray>;
//# sourceMappingURL=match.d.ts.map