export const unwrap = <T>(it: Iterable<T>): Iterator<T> =>
  it[Symbol.iterator]()

export const wrap = <T>(it: Iterator<T>): Iterable<T> =>
  ({ [Symbol.iterator]: () => it })

export const iter = <T>(next: () => IteratorResult<T>) =>
  wrap({ next })
