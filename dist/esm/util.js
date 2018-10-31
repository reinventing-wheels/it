/** Extracts an iterator from an iterable. */
export const unwrap = (it) => it[Symbol.iterator]();
/** Creates an iterable from an iterator. */
export const wrap = (it) => ({ [Symbol.iterator]: () => it });
/** Creates an iterable from a function. */
export const iter = (next) => wrap({ next });
/** Creates an iterator result with `done` set to true. */
export const done = () => ({ done: true });
/** Creates an iterator result with specified `value`. */
export const value = (value) => ({ value });
