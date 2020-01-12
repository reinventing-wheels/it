/**
 * @example
 * drop(2)([1, 2, 3, 4, 5]) // (3 4 5)
 * drop(3)('foobar') // (b a r)
 */
export declare const drop: (amount?: number | undefined) => <T>(it: Iterable<T>) => Generator<T, void, undefined>;
//# sourceMappingURL=drop.d.ts.map