/**
 * @example
 * range()()() // (0 1 2 3 4 …)
 * range(0)(5)() // (0 1 2 3 4)
 * range(1)(10)(2) // (1 3 5 7 9)
 */
export declare const range: (start?: number | undefined) => (stop?: number | undefined) => (step?: number | undefined) => Generator<number, void, unknown>;
//# sourceMappingURL=range.d.ts.map