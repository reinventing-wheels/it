/** Calls a function for each value of an iterable. */
export declare const forEach: <T>(fn: (value: T, index: number) => void) => (it: Iterable<T>) => void;
/** Reduces an iterable to a single value. */
export declare const reduce: <T, U>(fn: (previous: U, current: T, index: number) => U) => (first: U) => (it: Iterable<T>) => U;
/** Filters values of an iterable. */
export declare const filter: <T>(fn: (value: T, index: number) => boolean) => (it: Iterable<T>) => IterableIterator<T>;
/** Maps values of an iterable. */
export declare const map: <T, U>(fn: (value: T, index: number) => U) => (it: Iterable<T>) => IterableIterator<U>;
/** Yields a sequence of values derived from previous values. */
export declare const sequence: <T>(fn: (previous: T, index: number) => T) => (first: T) => IterableIterator<T>;
/** Yields a sequence of monotonically increasing numbers. */
export declare const range: (start?: number | undefined) => (stop?: number | undefined) => (step?: number | undefined) => IterableIterator<number>;
/** Yields a sequence of matches. */
export declare const match: (regexp: RegExp) => (input: string) => IterableIterator<RegExpExecArray>;
/** Takes some amount of values from an iterable. */
export declare const take: (amount: number) => <T>(it: Iterable<T>) => IterableIterator<T>;
/** Drops some amount of values from an iterable. */
export declare const drop: (amount: number) => <T>(it: Iterable<T>) => IterableIterator<T>;
export { concat, cycle, repeat, loop, generate, zip } from './uncurried';
