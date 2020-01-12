/**
 * @example
 * enumerate(['foo', 'bar']) // ([0 foo] [1 bar])
 * enumerate('foo') // ([0 f] [1 o] [2 o])
 */
export declare function enumerate<T>(it: Iterable<T>): Generator<[number, T], void, unknown>;
//# sourceMappingURL=enumerate.d.ts.map