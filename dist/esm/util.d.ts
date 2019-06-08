import { Methods } from './types';
export declare const done: <T>() => IteratorResult<T>;
export declare const value: <T>(value: T) => IteratorResult<T>;
export declare const wrap: <T>(it: Iterator<T>) => Iterable<T>;
export declare const unwrap: <T>(it: Iterable<T>) => Iterator<T>;
export declare const lock: <T>(it: Iterable<T>) => Iterable<T>;
export declare const staticMethods: <C>(ctor: C) => Methods<C>;
//# sourceMappingURL=util.d.ts.map