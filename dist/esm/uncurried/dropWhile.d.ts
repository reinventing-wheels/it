import { Callback } from '../types';
/**
 * @example
 * dropWhile([1, 2, 3, 4, 5], n => n < 3) // (3, 4, 5)
 * dropWhile('foobar', c => c != 'b') // ('b', 'a', 'r')
 */
export declare function dropWhile<T>(it: Iterable<T>, fn: Callback<T, boolean>): IterableIterator<T>;
//# sourceMappingURL=dropWhile.d.ts.map