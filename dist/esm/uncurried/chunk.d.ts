/**
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // ([1 2] [3 4] [5])
 * chunk('foobar', 3) // ([f o o] [b a r])
 */
export declare function chunk<T>(it: Iterable<T>, size: number): Generator<T[], void, unknown>;
//# sourceMappingURL=chunk.d.ts.map