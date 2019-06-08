import { Callback } from '../types';
/**
 * @example
 * sequence(n => n+1, 1) // (1, 2, 3, 4, 5, …)
 * sequence(n => n*2, 1, 7) // (1, 2, 4, 8, 16, 32, 64)
 * sequence(n => n**2, 2, 5) // (2, 4, 16, 256, 65536)
 */
export declare function sequence<T>(fn: Callback<T, T>, first: T, length?: number): IterableIterator<T>;
//# sourceMappingURL=sequence.d.ts.map