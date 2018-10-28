import { Callback, Reducer } from '../types'
import * as uc from './uncurried'

/** Calls a function for each value of an iterable. */
export const forEach = <T>(fn: Callback<T, void>) => (it: Iterable<T>) =>
  uc.forEach(it, fn)

/** Reduces an iterable to a single value. */
export const reduce = <T, U>(fn: Reducer<T, U>) => (first: U) => (it: Iterable<T>) =>
  uc.reduce(it, fn, first)

/** Filters values of an iterable. */
export const filter = <T>(fn: Callback<T, boolean>) => (it: Iterable<T>) =>
  uc.filter(it, fn)

/** Maps values of an iterable. */
export const map = <T, U>(fn: Callback<T, U>) => (it: Iterable<T>) =>
  uc.map(it, fn)

/** Yields a sequence of values derived from previous values. */
export const sequence = <T>(fn: Callback<T, T>) => (first: T) =>
  uc.sequence(fn, first)

/** Yields a sequence of monotonically increasing numbers. */
export const range = (start?: number) => (stop?: number) => (step?: number) =>
  uc.range(start, stop, step)

/** Yields a sequence of matches. */
export const match = (regexp: RegExp) => (input: string) =>
  uc.match(input, regexp)

/** Takes some amount of values from an iterable. */
export const take = (amount: number) => <T>(it: Iterable<T>) =>
  uc.take(it, amount)

/** Drops some amount of values from an iterable. */
export const drop = (amount: number) => <T>(it: Iterable<T>) =>
  uc.drop(it, amount)

export { concat, cycle, repeat, loop, generate, zip } from './uncurried'
