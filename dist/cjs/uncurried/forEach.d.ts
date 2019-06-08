import { Callback } from '../types';
/**
 * @example
 * forEach([1, 2, 3, 4, 5], n => log(n))
 * forEach('foobar', (c, i) => log(i, c))
 */
export declare function forEach<T>(it: Iterable<T>, fn: Callback<T, void>): void;
//# sourceMappingURL=forEach.d.ts.map