import { Callback, Flatten, Reducer } from './types'
import { staticMethods } from './util'
import * as uc from './uncurried'
import * as c from './curried'

export class IT<T> implements Iterable<T> {
  [Symbol.iterator]: () => Iterator<T>

  static uncurried = uc
  static curried = c

  constructor(it: Iterable<T>) {
    this[Symbol.iterator] = it[Symbol.iterator].bind(it)
  }

  /**
   * @example
   * it.count() // (0, 1, 2, 3, 4, …)
   * it.count(5) // (5, 6, 7, 8, 9, …)
   * it.count(5, -1) // (5, 4, 3, 2, 1, …)
   * it.count(0, -2) // (0, -2, -4, -6, …)
   */
  static count(start?: number, step?: number) {
    return it(uc.count(start, step))
  }

  /**
   * @example
   * it.generate(Math.random, 5) // 5 random numbers
   * it.generate(i => i, 5) // (0, 1, 2, 3, 4)
   * it.generate(i => i) // (0, 1, 2, 3, 4, …)
   */
  static generate<T>(fn: (index: number) => T, times?: number) {
    return it(uc.generate(fn, times))
  }

  /**
   * @example
   * function* countTo3() { for (let i = 1; i <= 3; i++) yield i }
   * function* countTo(n) { for (let i = 1; i <= n; i++) yield i }
   * it.loop(countTo3) // (1, 2, 3, 1, 2, 3, 1, 2, 3, …)
   * it.loop(countTo3, 3) // (1, 2, 3, 1, 2, 3, 1, 2, 3)
   * it.loop(countTo, 4) // (1, 1, 2, 1, 2, 3, 1, 2, 3, 4)
   */
  static loop<T>(fn: (index: number) => Iterable<T>, times?: number) {
    return it(uc.loop(fn, times))
  }

  /**
   * @example
   * // (['foo', 'f', 'oo', index: 0, input: 'foobarbaz'],
   * //  ['bar', 'b', 'ar', index: 3, input: 'foobarbaz'],
   * //  ['baz', 'b', 'az', index: 6, input: 'foobarbaz'])
   * it.match('foobarbaz', /(f|b)(..)/g)
   */
  static match(input: string, regexp: RegExp) {
    return it(uc.match(input, regexp))
  }

  /**
   * @example
   * it.range() // (0, 1, 2, 3, 4, …)
   * it.range(0, 5) // (0, 1, 2, 3, 4)
   * it.range(1, 10, 2) // (1, 3, 5, 7, 9)
   */
  static range(start?: number, stop?: number, step?: number) {
    return it(uc.range(start, stop, step))
  }

  /**
   * @example
   * it.repeat(42) // (42, 42, 42, …)
   * it.repeat(42, 5) // (42, 42, 42, 42, 42)
   * it.repeat('foo', 3) // ('foo', 'foo', 'foo')
   */
  static repeat<T>(value: T, times?: number) {
    return it(uc.repeat(value, times))
  }

  /**
   * @example
   * it.sequence(n => n+1, 1) // (1, 2, 3, 4, 5, …)
   * it.sequence(n => n*2, 1, 7) // (1, 2, 4, 8, 16, 32, 64)
   * it.sequence(n => n**2, 2, 5) // (2, 4, 16, 256, 65536)
   */
  static sequence<T>(fn: Callback<T, T>, first: T, length?: number) {
    return it(uc.sequence(fn, first, length))
  }

  /**
   * @example
   * it([1, 2, 3]).cast(it => new Uint8Array(it)) // Uint8Array
   * it([1, 2, 3]).cast(it => new Set(it)) // Set<number>
   * it('foobar').cast(it => new Set(it)) // Set<string>
   */
  cast<U>(fn: (it: this) => U) {
    return uc.cast(this, fn as () => U)
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).chunk(2) // ([1, 2], [3, 4], [5])
   * it('foobar').chunk(3) // (['f', 'o', 'o'], ['b', 'a', 'r'])
   */
  chunk(size: number) {
    return it(uc.chunk(this, size))
  }

  /**
   * @example
   * it([1, 2]).chain([3, 4], [5]) // (1, 2, 3, 4, 5)
   * it('foo').chain('bar') // ('f', 'o', 'o', 'b', 'a', 'r')
   */
  chain<U>(...its: Iterable<U>[]) {
    return it(uc.chain<T | U>(this, ...its))
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).collect() // [1, 2, 3, 4, 5]
   * it('foobar').collect() // ['f', 'o', 'o', 'b', 'a', 'r']
   */
  collect() {
    return uc.collect(this)
  }

  /**
   * @example
   * it([1, 2, 3]).cycle(2) // (1, 2, 3, 1, 2, 3)
   * it([1, 2, 3]).cycle() // (1, 2, 3, 1, 2, 3, …)
   * it('foo').cycle() // ('f', 'o', 'o', 'f', 'o', …)
   */
  cycle(times?: number) {
    return it(uc.cycle(this, times))
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).drop(2) // (3, 4, 5)
   * it('foobar').drop(3) // ('b', 'a', 'r')
   */
  drop(amount?: number) {
    return it(uc.drop(this, amount))
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).dropWhile(n => n < 3) // (3, 4, 5)
   * it('foobar').dropWhile(c => c != 'b') // ('b', 'a', 'r')
   */
  dropWhile(fn: Callback<T, boolean>) {
    return it(uc.dropWhile(this, fn))
  }

  /**
   * @example
   * it(['foo', 'bar']).enumerate() // ([0, 'foo'], [1, 'bar'])
   * it('foo').enumerate() // ([0, 'f'], [1, 'o'], [2, 'o'])
   */
  enumerate() {
    return it(uc.enumerate(this))
  }

  /**
   * @example
   * it([1, 2, 3]).every(n => n > 0) // true
   * it([1, 2, 3]).every(n => n > 1) // false
   */
  every(fn: Callback<T, boolean>) {
    return uc.every(this, fn)
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).filter(n => n%2 == 0) // (2, 4)
   * it([1, 2, 3, 4, 5]).filter(n => n%2 != 0) // (1, 3, 5)
   * it('foobar').filter(c => c != 'o') // ('f', 'b', 'a', 'r')
   */
  filter(fn: Callback<T, boolean>) {
    return it(uc.filter(this, fn))
  }

  /**
   * @example
   * it([1, 2, 3]).find(n => n%2 == 0) // 2
   * it([1, 2, 3]).find(n => n%2 != 0) // 1
   * it('foobar').find(c => c != 'f') // 'o'
   */
  find(fn: Callback<T, boolean>) {
    return uc.find(this, fn)
  }

  /**
   * @example
   * it([1, 2, 3]).first() // 1
   * it('foobar').first() // 'f'
   */
  first() {
    return uc.first(this)
  }

  /**
   * @example
   * it([1, 2, 3]).flatMap(n => [-n, +n]) // (-1, 1, -2, 2, -3, 3)
   * it(['foo', 'bar']).flatMap(s => s) // ('f', 'o', 'o', 'b', 'a', 'r')
   */
  flatMap<U>(fn: Callback<T, U[]>) {
    return it(uc.flatMap(this, fn))
  }

  /**
   * @example
   * it([[1, 2], [3, 4], [5]]).flatten() // (1, 2, 3, 4, 5)
   * it(['foo', 'bar']).flatten() // ('f', 'o', 'o', 'b', 'a', 'r')
   */
  flatten() {
    return it(uc.flatten<Flatten<T>>(this as any))
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).forEach(n => log(n))
   * it('foobar').forEach((c, i) => log(i, c))
   */
  forEach(fn: Callback<T, void>) {
    uc.forEach(this, fn)
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).inspect(n => log(n)) // (1, 2, 3, 4, 5)
   * it('foobar').inspect((c, i) => log(i, c)) // ('f', 'o', …)
   */
  inspect(fn: Callback<T, void>) {
    return it(uc.inspect(this, fn))
  }

  /**
   * @example
   * it([1, 2, 3]).last() // 3
   * it('foobar').last() // 'r'
   */
  last() {
    return uc.last(this)
  }

  /**
   * @example
   * it([1, 2, 3]).length() // 3
   * it('foobar').length() // 6
   */
  length() {
    return uc.length(this)
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).map(n => 2*n) // (2, 4, 6, 8, 10)
   * it('foo').map(c => c.charCodeAt(0)) // (102, 111, 111)
   */
  map<U>(fn: Callback<T, U>) {
    return it(uc.map(this, fn))
  }

  /**
   * @example
   * it([1, 2, 3]).nth(1) // 2
   * it('foobar').nth(0) // 'f'
   * it('foobar').nth(3) // 'b'
   */
  nth(n: number) {
    return uc.nth(this, n)
  }

  /**
   * @example
   * it([1, 2, 3]).reduce((acc, n) => acc + n, 0) // 6
   * it([1, 2, 3]).reduce((acc, n) => acc + n, '') // '123'
   * it('foo').reduce((map, c, i) => map.set(i, c), new Map) // Map
   */
  reduce<U>(fn: Reducer<T, U>, first: U) {
    return uc.reduce(this, fn, first)
  }

  /**
   * @example
   * it([1, 2, 3]).some(n => n < 2) // true
   * it([1, 2, 3]).some(n => n < 1) // false
   */
  some(fn: Callback<T, boolean>) {
    return uc.some(this, fn)
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).take(3) // (1, 2, 3)
   * it('foobar').take(3) // ('f', 'o', 'o')
   */
  take(amount?: number) {
    return it(uc.take(this, amount))
  }

  /**
   * @example
   * it([1, 2, 3, 4, 5]).takeWhile(n => n < 4) // (1, 2, 3)
   * it('foobar').takeWhile(c => c != 'b') // ('f', 'o', 'o')
   */
  takeWhile(fn: Callback<T, boolean>) {
    return it(uc.takeWhile(this, fn))
  }

  /**
   * @example
   * it([1, 3, 3, 7]).unique() // (1, 3, 7)
   * it('foobar').unique() // ('f', 'o', 'b', 'a', 'r')
   */
  unique() {
    return it(uc.unique(this))
  }

  /**
   * @example
   * it([1, 2, 3]).zip([4, 5, 6]) // ([1, 4], [2, 5], [3, 6])
   * it([1, 2, 3]).zip('foobar') // ([1, 'f'], [2, 'o'], [3, 'o'])
   */
  zip<U>(itʹ: Iterable<U>) {
    return it(uc.zip(this, itʹ))
  }
}

export const it = Object.assign(
  <T>(it: Iterable<T>) => new IT(it),
  staticMethods(IT)
)
