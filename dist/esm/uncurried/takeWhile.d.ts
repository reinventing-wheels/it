import { Callback } from '../types';
/**
 * @example
 * takeWhile([1, 2, 3, 4, 5], n => n < 4) // (1 2 3)
 * takeWhile('foobar', c => c != 'b') // (f o o)
 */
export declare function takeWhile<T>(it: Iterable<T>, fn: Callback<T, boolean>): Generator<T, void, unknown>;
//# sourceMappingURL=takeWhile.d.ts.map