/**
 * @example
 * repeat()(42) // (42, 42, 42, …)
 * repeat(5)(42) // (42, 42, 42, 42, 42)
 * repeat(3)('foo') // ('foo', 'foo', 'foo')
 */
export declare const repeat: (times?: number | undefined) => <T>(value: T) => IterableIterator<T>;
//# sourceMappingURL=repeat.d.ts.map