import { Callback } from '../types';
/**
 * @example
 * every([1, 2, 3], n => n > 0) // true
 * every([1, 2, 3], n => n > 1) // false
 */
export declare function every<T>(it: Iterable<T>, fn: Callback<T, boolean>): boolean;
//# sourceMappingURL=every.d.ts.map