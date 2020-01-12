/**
 * @example
 * repeat()(42) // (42 42 42 …)
 * repeat(5)(42) // (42 42 42 42 42)
 * repeat(3)('foo') // (foo foo foo)
 */
export declare const repeat: (times?: number | undefined) => <T>(value: T) => Generator<T, void, unknown>;
//# sourceMappingURL=repeat.d.ts.map