import { Callback } from '../types';
/**
 * @example
 * flatMap([1, 2, 3], n => [-n, +n]) // (-1 1 -2 2 -3 3)
 * flatMap(['foo', 'bar'], s => s) // (f o o b a r)
 */
export declare function flatMap<T, U>(it: Iterable<T>, fn: Callback<T, U[]>): Generator<U, void, undefined>;
//# sourceMappingURL=flatMap.d.ts.map