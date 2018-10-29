/** Extracts an iterator from an iterable. */
export const unwrap = <T>(it: Iterable<T>): Iterator<T> =>
  it[Symbol.iterator]()

/** Creates an iterable from an iterator. */
export const wrap = <T>(it: Iterator<T>): Iterable<T> =>
  ({ [Symbol.iterator]: () => it })

/** Creates an iterable from a function. */
export const iter = <T>(next: () => IteratorResult<T>) =>
  wrap({ next })

/** Creates an iterator result with `done` set to true. */
export const done = <T>() =>
  ({ done: true }) as IteratorResult<T>

/** Creates an iterator result with specified `value`. */
export const value = <T>(value: T) =>
  ({ value }) as IteratorResult<T>
