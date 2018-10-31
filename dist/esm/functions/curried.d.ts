import { Callback, Reducer } from '../types';
/** Calls a function for each value of an iterable. */
export declare const forEach: <T>(fn: Callback<T, void>) => (it: Iterable<T>) => void;
/** Reduces an iterable to a single value. */
export declare const reduce: <T, U>(fn: Reducer<T, U>) => (first: U) => (it: Iterable<T>) => U;
/** Filters values of an iterable. */
export declare const filter: <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) => IterableIterator<T>;
/** Maps values of an iterable. */
export declare const map: <T, U>(fn: Callback<T, U>) => (it: Iterable<T>) => IterableIterator<U>;
/** Yields a sequence of values derived from previous values. */
export declare const sequence: <T>(fn: Callback<T, T>) => (first: T) => IterableIterator<T>;
/** Yields a sequence of monotonically increasing numbers. */
export declare const range: (start?: number | undefined) => (stop?: number | undefined) => (step?: number | undefined) => IterableIterator<number>;
/** Yields a sequence of matches. */
export declare const match: (regexp: RegExp) => (input: string) => IterableIterator<RegExpExecArray>;
/** Yields an iterable by chunks of specified size. */
export declare const chunk: (size: number) => <T>(it: Iterable<T>) => IterableIterator<T[]>;
/** Takes specified amount of values from an iterable. */
export declare const take: (amount: number) => <T>(it: Iterable<T>) => IterableIterator<T>;
/** Drops specified amount of values from an iterable. */
export declare const drop: (amount: number) => <T>(it: Iterable<T>) => IterableIterator<T>;
export { concat, flatten, cycle, repeat, loop, generate, zip } from './uncurried';
//# sourceMappingURL=curried.d.ts.map