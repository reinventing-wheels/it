/**
 * @example
 * cycle(2)([1, 2, 3]) // (1, 2, 3, 1, 2, 3)
 * cycle()([1, 2, 3]) // (1, 2, 3, 1, 2, 3, …)
 * cycle()('foo') // ('f', 'o', 'o', 'f', 'o', …)
 */
export declare const cycle: (times?: number | undefined) => <T>(it: Iterable<T>) => IterableIterator<T>;
//# sourceMappingURL=cycle.d.ts.map