/**
 * @example
 * // ([foo f oo] [bar b ar] [baz b az])
 * match(/(f|b)(..)/g)('foobarbaz')
 */
export declare const match: (regexp: RegExp) => (input: string) => Generator<RegExpExecArray, void, unknown>;
//# sourceMappingURL=match.d.ts.map