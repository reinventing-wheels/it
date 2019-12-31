import { Callback } from '../types';
/**
 * @example
 * map([1, 2, 3, 4, 5], n => 2*n) // (2, 4, 6, 8, 10)
 * map('foo', c => c.charCodeAt(0)) // (102, 111, 111)
 */
export declare function map<T, U>(it: Iterable<T>, fn: Callback<T, U>): Generator<U, void, unknown>;
//# sourceMappingURL=map.d.ts.map