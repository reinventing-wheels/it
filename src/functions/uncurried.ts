// tslint:disable:only-arrow-functions
import { Callback, Reducer } from '../types'
import { unwrap, wrap, iter } from '../util'

/** Calls a function for each value of an iterable. */
export function forEach<T>(it: Iterable<T>, fn: Callback<T, void>) {
  let i = 0
  for (const value of it)
    fn(value, i++)
}

/** Reduces an iterable to a single value. */
export function reduce<T, U>(it: Iterable<T>, fn: Reducer<T, U>, first: U) {
  let i = 0, acc = first
  for (const value of it)
    acc = fn(acc, value, i++)
  return acc
}

/** Filters values of an iterable. */
export function* filter<T>(it: Iterable<T>, fn: Callback<T, boolean>) {
  let i = 0
  for (const value of it)
    if (fn(value, i++))
      yield value
}

/** Maps values of an iterable. */
export function* map<T, U>(it: Iterable<T>, fn: Callback<T, U>) {
  let i = 0
  for (const value of it)
    yield fn(value, i++)
}

/** Concatenates multiple iterables to a single one. */
export function* concat<T>(...its: Iterable<T>[]) {
  for (const it of its)
    yield* it
}

/** Yields values from an iterable in cycle. */
export function* cycle<T>(it: Iterable<T>) {
  for (;;)
    yield* it
}

/** Repeatedly yields the same value. */
export function* repeat<T>(value: T) {
  for (;;)
    yield value
}

/** Loops a generator function. */
export function* loop<T>(fn: (index: number) => Iterable<T>) {
  for (let i = 0;;)
    yield* fn(i++)
}

/** Yields values generated by a function. */
export function* generate<T>(fn: (index: number) => T) {
  for (let i = 0;;)
    yield fn(i++)
}

/** Yields a sequence of values derived from previous values. */
export function* sequence<T>(fn: Callback<T, T>, first: T) {
  for (let i = 0, value = first;; value = fn(value, i++))
    yield value
}

/** Yields a sequence of monotonically increasing numbers. */
export function* range(start = 0, stop = Infinity, step = 1) {
  for (let number = start; number < stop; number += step)
    yield number
}

/** Yields a sequence of matches. */
export function* match(input: string, regexp: RegExp) {
  for (let match; match = regexp.exec(input);)
    yield match
}

/** Yields an iterable by chunks of specified size. */
export function* chunk<T>(it: Iterable<T>, size: number) {
  for (let chunk; (chunk = [...take(it, size)]).length;)
    yield chunk
}

/** Zips multiple iterables to a single one. */
export function* zip<T>(...its: Iterable<T>[]) {
  const itsʹ = its.map(unwrap)
  yield* iter(() => {
    const results = itsʹ.map(it => it.next())
    const result = results.find(r => r.done) || { value: results.map(r => r.value) }
    return result as IteratorResult<T[]>
  })
}

/** Takes specified amount of values from an iterable. */
export function* take<T>(it: Iterable<T>, amount: number) {
  let i = 0
  const itʹ = unwrap(it)
  const done = { done: true } as IteratorResult<T>
  yield* iter(() => i++ < amount ? itʹ.next() : done)
}

/** Drops specified amount of values from an iterable. */
export function* drop<T>(it: Iterable<T>, amount: number) {
  const itʹ = wrap(unwrap(it)) // always return the same iterator
  for (const _ of take(itʹ, amount)); // noop
  yield* itʹ
}
