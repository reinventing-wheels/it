import { Callback } from '../types';
/**
 * @example
 * find([1, 2, 3], n => n%2 == 0) // 2
 * find([1, 2, 3], n => n%2 != 0) // 1
 * find('foobar', c => c != 'f') // 'o'
 */
export declare function find<T>(it: Iterable<T>, fn: Callback<T, boolean>): T | undefined;
//# sourceMappingURL=find.d.ts.map