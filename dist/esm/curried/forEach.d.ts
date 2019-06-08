import { Callback } from '../types';
/**
 * @example
 * forEach(n => log(n))([1, 2, 3, 4, 5])
 * forEach((c, i) => log(i, c))('foobar')
 */
export declare const forEach: <T>(fn: Callback<T, void>) => (it: Iterable<T>) => void;
//# sourceMappingURL=forEach.d.ts.map