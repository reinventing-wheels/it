import { Callback } from '../types';
/**
 * @example
 * every(n => n > 0)([1, 2, 3]) // true
 * every(n => n > 1)([1, 2, 3]) // false
 */
export declare const every: <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) => boolean;
//# sourceMappingURL=every.d.ts.map