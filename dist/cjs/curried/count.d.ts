/**
 * @example
 * count()() // (0 1 2 3 4 …)
 * count()(5) // (5 6 7 8 9 …)
 * count(-1)(5) // (5 4 3 2 1 …)
 * count(-2)(0) // (0 -2 -4 -6 …)
 */
export declare const count: (start?: number | undefined) => (step?: number | undefined) => Generator<number, void, unknown>;
//# sourceMappingURL=count.d.ts.map