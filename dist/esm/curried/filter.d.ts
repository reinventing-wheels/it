import { Callback } from '../types';
/**
 * @example
 * filter(n => n%2 == 0)([1, 2, 3, 4, 5]) // (2 4)
 * filter(n => n%2 != 0)([1, 2, 3, 4, 5]) // (1 3 5)
 * filter(c => c != 'o')('foobar') // (f b a r)
 */
export declare const filter: <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) => Generator<T, void, unknown>;
//# sourceMappingURL=filter.d.ts.map