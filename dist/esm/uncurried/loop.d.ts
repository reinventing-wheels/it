/**
 * @example
 * function* countTo3() { for (let i = 1; i <= 3; i++) yield i }
 * function* countTo(n) { for (let i = 1; i <= n; i++) yield i }
 * loop(countTo3) // (1, 2, 3, 1, 2, 3, 1, 2, 3, …)
 * loop(countTo3, 3) // (1, 2, 3, 1, 2, 3, 1, 2, 3)
 * loop(countTo, 4) // (1, 1, 2, 1, 2, 3, 1, 2, 3, 4)
 */
export declare function loop<T>(fn: (index: number) => Iterable<T>, times?: number): IterableIterator<T>;
//# sourceMappingURL=loop.d.ts.map