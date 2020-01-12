import { Callback } from '../types';
/**
 * @example
 * find(n => n%2 == 0)([1, 2, 3]) // 2
 * find(n => n%2 != 0)([1, 2, 3]) // 1
 * find(c => c != 'f')('foobar') // o
 */
export declare const find: <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) => T | undefined;
//# sourceMappingURL=find.d.ts.map