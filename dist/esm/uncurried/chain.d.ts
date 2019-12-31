/**
 * @example
 * chain([1, 2], [3, 4], [5]) // (1, 2, 3, 4, 5)
 * chain('foo', 'bar') // ('f', 'o', 'o', 'b', 'a', 'r')
 */
export declare function chain<T>(...its: Iterable<T>[]): Generator<T, void, undefined>;
//# sourceMappingURL=chain.d.ts.map