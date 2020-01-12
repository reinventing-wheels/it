import { Callback } from '../types';
/**
 * @example
 * takeWhile(n => n < 4)([1, 2, 3, 4, 5]) // (1 2 3)
 * takeWhile(c => c != 'b')('foobar') // (f o o)
 */
export declare const takeWhile: <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) => Generator<T, void, unknown>;
//# sourceMappingURL=takeWhile.d.ts.map