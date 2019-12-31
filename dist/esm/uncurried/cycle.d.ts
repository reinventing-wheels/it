/**
 * @example
 * cycle([1, 2, 3], 2) // (1, 2, 3, 1, 2, 3)
 * cycle([1, 2, 3]) // (1, 2, 3, 1, 2, 3, …)
 * cycle('foo') // ('f', 'o', 'o', 'f', 'o', …)
 */
export declare function cycle<T>(it: Iterable<T>, times?: number): Generator<T, void, undefined>;
//# sourceMappingURL=cycle.d.ts.map