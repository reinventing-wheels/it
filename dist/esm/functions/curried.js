import * as uc from './uncurried';
/** Calls a function for each value of an iterable. */
export const forEach = (fn) => (it) => uc.forEach(it, fn);
/** Reduces an iterable to a single value. */
export const reduce = (fn) => (first) => (it) => uc.reduce(it, fn, first);
/** Filters values of an iterable. */
export const filter = (fn) => (it) => uc.filter(it, fn);
/** Maps values of an iterable. */
export const map = (fn) => (it) => uc.map(it, fn);
/** Yields a sequence of values derived from previous values. */
export const sequence = (fn) => (first) => uc.sequence(fn, first);
/** Yields a sequence of monotonically increasing numbers. */
export const range = (start) => (stop) => (step) => uc.range(start, stop, step);
/** Yields a sequence of matches. */
export const match = (regexp) => (input) => uc.match(input, regexp);
/** Takes some amount of values from an iterable. */
export const take = (amount) => (it) => uc.take(it, amount);
/** Drops some amount of values from an iterable. */
export const drop = (amount) => (it) => uc.drop(it, amount);
export { concat, cycle, repeat, loop, generate, zip } from './uncurried';
