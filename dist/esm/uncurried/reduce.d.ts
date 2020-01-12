import { Reducer } from '../types';
/**
 * @example
 * reduce([1, 2, 3], (acc, n) => acc + n, 0) // 6
 * reduce([1, 2, 3], (acc, n) => acc + n, '') // 123
 * reduce('foo', (map, c, i) => map.set(i, c), new Map) // Map
 */
export declare function reduce<T, U>(it: Iterable<T>, fn: Reducer<T, U>, first: U): U;
//# sourceMappingURL=reduce.d.ts.map