/**
 * @example
 * take(3)([1, 2, 3, 4, 5]) // (1 2 3)
 * take(3)('foobar') // (f o o)
 */
export declare const take: (amount?: number | undefined) => <T>(it: Iterable<T>) => Generator<T, void, unknown>;
//# sourceMappingURL=take.d.ts.map