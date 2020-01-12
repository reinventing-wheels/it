/**
 * @example
 * generate(5)(Math.random) // 5 random numbers
 * generate(5)(i => i) // (0 1 2 3 4)
 * generate()(i => i) // (0 1 2 3 4 …)
 */
export declare const generate: (times?: number | undefined) => <T>(fn: (index: number) => T) => Generator<T, void, unknown>;
//# sourceMappingURL=generate.d.ts.map