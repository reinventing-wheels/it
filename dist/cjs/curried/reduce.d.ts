import { Reducer } from '../types';
/**
 * @example
 * reduce((acc, n) => acc + n)(0)([1, 2, 3]) // 6
 * reduce((acc, n) => acc + n)('')([1, 2, 3]) // '123'
 * reduce((map, c, i) => map.set(i, c))(new Map)('foo') // Map
 */
export declare const reduce: <T, U>(fn: Reducer<T, U>) => (first: U) => (it: Iterable<T>) => U;
//# sourceMappingURL=reduce.d.ts.map