import { Callback } from '../types';
/**
 * @example
 * sequence()(n => n+1)(1) // (1 2 3 4 5 …)
 * sequence(7)(n => n*2)(1) // (1 2 4 8 16 32 64)
 * sequence(5)(n => n**2)(2) // (2 4 16 256 65536)
 */
export declare const sequence: (length?: number | undefined) => <T>(fn: Callback<T, T>) => (first: T) => Generator<T, void, unknown>;
//# sourceMappingURL=sequence.d.ts.map