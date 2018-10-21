export declare const unwrap: <T>(it: Iterable<T>) => Iterator<T>;
export declare const wrap: <T>(it: Iterator<T>) => Iterable<T>;
export declare const next: <T>(next: () => IteratorResult<T>) => Iterable<T>;
