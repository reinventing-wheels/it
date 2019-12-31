import { Callback } from '../types';
/**
 * @example
 * inspect(n => log(n))([1, 2, 3, 4, 5]) // (1, 2, 3, 4, 5)
 * inspect((c, i) => log(i, c))('foobar') // ('f', 'o', …)
 */
export declare const inspect: <T>(fn: Callback<T, void>) => (it: Iterable<T>) => Generator<T, void, unknown>;
//# sourceMappingURL=inspect.d.ts.map