/**
 * @example
 * // (['foo', 'f', 'oo', index: 0, input: 'foobarbaz'],
 * //  ['bar', 'b', 'ar', index: 3, input: 'foobarbaz'],
 * //  ['baz', 'b', 'az', index: 6, input: 'foobarbaz'])
 * match(/(f|b)(..)/g)('foobarbaz')
 */
export declare const match: (regexp: RegExp) => (input: string) => Generator<RegExpExecArray, void, unknown>;
//# sourceMappingURL=match.d.ts.map