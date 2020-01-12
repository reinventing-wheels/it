import { Callback } from '../types';
/**
 * @example
 * inspect([1, 2, 3, 4, 5], n => log(n)) // (1 2 3 4 5)
 * inspect('foobar', (c, i) => log(i, c)) // (f o …)
 */
export declare function inspect<T>(it: Iterable<T>, fn: Callback<T, void>): Generator<T, void, unknown>;
//# sourceMappingURL=inspect.d.ts.map