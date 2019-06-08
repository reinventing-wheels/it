import { Callback } from '../types';
/**
 * @example
 * some(n => n < 2)([1, 2, 3]) // true
 * some(n => n < 1)([1, 2, 3]) // false
 */
export declare const some: <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) => boolean;
//# sourceMappingURL=some.d.ts.map