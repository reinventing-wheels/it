import { Callback } from '../types';
/**
 * @example
 * filter([1, 2, 3, 4, 5], n => n%2 == 0) // (2, 4)
 * filter([1, 2, 3, 4, 5], n => n%2 != 0) // (1, 3, 5)
 * filter('foobar', c => c != 'o') // ('f', 'b', 'a', 'r')
 */
export declare function filter<T>(it: Iterable<T>, fn: Callback<T, boolean>): IterableIterator<T>;
//# sourceMappingURL=filter.d.ts.map