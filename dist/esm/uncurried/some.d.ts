import { Callback } from '../types';
/**
 * @example
 * some([1, 2, 3], n => n < 2) // true
 * some([1, 2, 3], n => n < 1) // false
 */
export declare function some<T>(it: Iterable<T>, fn: Callback<T, boolean>): boolean;
//# sourceMappingURL=some.d.ts.map