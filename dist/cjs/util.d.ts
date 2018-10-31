/** Extracts an iterator from an iterable. */
export declare const unwrap: <T>(it: Iterable<T>) => Iterator<T>;
/** Creates an iterable from an iterator. */
export declare const wrap: <T>(it: Iterator<T>) => Iterable<T>;
/** Creates an iterable from a function. */
export declare const iter: <T>(next: () => IteratorResult<T>) => Iterable<T>;
/** Creates an iterator result with `done` set to true. */
export declare const done: <T>() => IteratorResult<T>;
/** Creates an iterator result with specified `value`. */
export declare const value: <T>(value: T) => IteratorResult<T>;
//# sourceMappingURL=util.d.ts.map