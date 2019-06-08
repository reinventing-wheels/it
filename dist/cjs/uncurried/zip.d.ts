import { Iterables } from '../types';
/**
 * @example
 * zip([1, 2, 3], [4, 5, 6]) // ([1, 4], [2, 5], [3, 6])
 * zip([1, 2, 3], 'foobar') // ([1, 'f'], [2, 'o'], [3, 'o'])
 */
export declare function zip<T extends any[]>(...its: Iterables<T>): IterableIterator<T>;
//# sourceMappingURL=zip.d.ts.map