import * as uc from './uncurried'

/** Calls a function for each value of an iterable. */
export const forEach = <T>(fn: (value: T, index: number) => void) => (it: Iterable<T>) =>
  uc.forEach(it, fn)

/** Reduces an iterable to a single value. */
export const reduce = <T, U>(fn: (previous: U, current: T, index: number) => U) => (first: U) => (it: Iterable<T>) =>
  uc.reduce(it, fn, first)

/** Filters values of an iterable. */
export const filter = <T>(fn: (value: T, index: number) => boolean) => (it: Iterable<T>) =>
  uc.filter(it, fn)

/** Maps values of an iterable. */
export const map = <T, U>(fn: (value: T, index: number) => U) => (it: Iterable<T>) =>
  uc.map(it, fn)

/** Yields a sequence of values derived from previous values. */
export const sequence = <T>(fn: (previous: T, index: number) => T) => (first: T) =>
  uc.sequence(fn, first)

/** Yields a sequence of monotonically increasing numbers. */
export const range = (start?: number) => (stop?: number) => (step?: number) =>
  uc.range(start, stop, step)

/** Yields a sequence of matches. */
export const match = (regexp: RegExp) => (input: string) =>
  uc.match(input, regexp)

/** Takes some amount values from an iterable. */
export const take = (amount: number) => <T>(it: Iterable<T>) =>
  uc.take(it, amount)

/** Drops some amount values from an iterable. */
export const drop = (amount: number) => <T>(it: Iterable<T>) =>
  uc.drop(it, amount)

export { concat, repeat, always, loop, generate } from './uncurried'
