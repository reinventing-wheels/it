import { Callback } from '../types';
/**
 * @example
 * dropWhile(n => n < 3)([1, 2, 3, 4, 5]) // (3, 4, 5)
 * dropWhile(c => c != 'b')('foobar') // ('b', 'a', 'r')
 */
export declare const dropWhile: <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) => IterableIterator<T>;
//# sourceMappingURL=dropWhile.d.ts.map