import { Methods } from './types'

export const done = <T>() =>
  ({ done: true }) as IteratorResult<T>

export const value = <T>(value: T) =>
  ({ value }) as IteratorResult<T>

export const wrap = <T>(it: Iterator<T>) =>
  ({ [Symbol.iterator]: () => it }) as Iterable<T>

export const unwrap = <T>(it: Iterable<T>) =>
  it[Symbol.iterator]()

export const lock = <T>(it: Iterable<T>) => {
  const itʹ = unwrap(it)
  return wrap({ next: itʹ.next.bind(itʹ) })
}

export const staticMethods = <C>(ctor: C) => {
  const props = Object.getOwnPropertyNames(ctor) as (keyof C)[]
  const acc = {} as C
  for (const prop of props)
    if (typeof ctor[prop] === 'function')
      acc[prop] = ctor[prop]
  return acc as Methods<C>
}
