import * as uncurried from './uncurried'
import * as curried from './curried'
import * as index from '.'
import { IT } from '.'

import {
  cast, chain, chunk, count, collect, cycle, drop, dropWhile,
  enumerate, every, filter, find, first, flatMap, flatten,
  forEach, generate, inspect, last, length, loop, map, match,
  nth, range, reduce, repeat, sequence, some, take, takeWhile,
  unique, zip
} from './curried'

function* leet() { yield* [1, 3, 3, 7] }
function* countTo(n: number) { for (let i = 1; i <= n;) yield i++ }
const counter = (i = 0) => () => i++
const inf = () => countTo(Infinity)
const add = (n: number, m: number) => n + m
const double = (n: number) => 2*n
const square = (n: number) => n**2
const isOdd = (n: number) => n%2 !== 0
const isEven = (n: number) => n%2 === 0
const lt = (ref: number) => (n: number) => n < ref
const gt = (ref: number) => (n: number) => n > ref
const pair = (n: number) => [-n, +n]
const chars = ([...chars]: string) => chars

describe('exports', () => {
  const indexKeys = Object.keys(index)
  const wrapperMethods = [
    ...Object.getOwnPropertyNames(IT), // static methods
    ...Object.getOwnPropertyNames(IT.prototype) // methods
  ]

  it('wrapper', () => {
    for (const key of Object.keys(uncurried))
      expect(wrapperMethods).toContain(key)
    expect(IT.uncurried).toBe(uncurried)
    expect(IT.curried).toBe(curried)
  })

  it('curried', () => {
    for (const key of Object.keys(curried))
      expect(indexKeys).toContain(key)
    expect(index.curried).toBe(curried)
  })

  it('uncurried', () => {
    for (const key of Object.keys(uncurried))
      expect(indexKeys).toContain(key + 'ʹ')
    expect(index.uncurried).toBe(uncurried)
  })
})

describe('functions', () => {
  describe('cast', () => {
    it('should cast to other type using callback', () => {
      expect(cast(it => new Set(it))([1, 2, 3])).toBeInstanceOf(Set)
      expect(cast(it => new Set(it))('foobar')).toBeInstanceOf(Set)
    })
  })

  describe('chain', () => {
    it('should yield values from all the iterables in order', () => {
      expect([...chain(countTo(3), leet())]).toEqual([1, 2, 3, 1, 3, 3, 7])
      expect([...chain('foo', 'bar')]).toEqual([...'foobar'])
      expect([...chain()]).toEqual([])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c, d, e] = chain(inf(), inf())
      expect([a, b, c, d, e]).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('chunk', () => {
    it('should yield values in chunks of specified size', () => {
      expect([...chunk(2)('')]).toEqual([])
      expect([...chunk(2)(countTo(3))]).toEqual([[1, 2], [3]])
      expect([...chunk(2)(countTo(4))]).toEqual([[1, 2], [3, 4]])
      expect([...chunk(Infinity)('foobar')]).toEqual([[...'foobar']])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c] = chunk(2)(inf())
      expect([a, b, c]).toEqual([[1, 2], [3, 4], [5, 6]])
    })
  })

  describe('count', () => {
    it('should yield monotonically increasing numbers', () => {
      const [a, b, c, d, e] = count(0)(1)
      expect([a, b, c, d, e]).toEqual([0, 1, 2, 3, 4])
    })

    it('should yield monotonically decreasing numbers', () => {
      const [a, b, c, d, e] = count(5)(-1)
      expect([a, b, c, d, e]).toEqual([5, 4, 3, 2, 1])
    })

    it('should yield [0, +inf) when called with no args', () => {
      const [a, b, c, d, e] = count()()
      expect([a, b, c, d, e]).toEqual([0, 1, 2, 3, 4])
    })
  })

  describe('collect', () => {
    it('should collect values to an array', () => {
      expect([...collect('')]).toEqual([])
      expect([...collect('foobar')]).toEqual([...'foobar'])
      expect([...collect(countTo(3))]).toEqual([1, 2, 3])
    })
  })

  describe('cycle', () => {
    it('should yield values in cycle', () => {
      expect([...cycle(3)('')]).toEqual([])
      expect([...cycle(0)('foo')]).toEqual([])
      expect([...cycle(3)('foo')]).toEqual([...'foofoofoo'])
      expect([...cycle(3)(leet())]).toEqual([1, 3, 3, 7])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c, d, e] = cycle()(inf())
      expect([a, b, c, d, e]).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('drop', () => {
    it('should drop specified amount of values', () => {
      expect([...drop()(countTo(5))]).toEqual([2, 3, 4, 5])
      expect([...drop(0)(countTo(5))]).toEqual([1, 2, 3, 4, 5])
      expect([...drop(2)(countTo(5))]).toEqual([3, 4, 5])
      expect([...drop(Infinity)(countTo(5))]).toEqual([])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c, d, e] = drop(2)(inf())
      expect([a, b, c, d, e]).toEqual([3, 4, 5, 6, 7])
    })
  })

  describe('dropWhile', () => {
    it('should drop values while fn(value) is truthy', () => {
      expect([...dropWhile(lt(0))(countTo(5))]).toEqual([1, 2, 3, 4, 5])
      expect([...dropWhile(lt(3))(countTo(5))]).toEqual([3, 4, 5])
      expect([...dropWhile(lt(6))(countTo(5))]).toEqual([])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c, d, e] = dropWhile(lt(3))(inf())
      expect([a, b, c, d, e]).toEqual([3, 4, 5, 6, 7])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(lt(3))
      const it = dropWhile(fn)(countTo(5))
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([3, 4, 5])
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('enumerate', () => {
    it('should yield [index, value] pairs', () => {
      expect([...enumerate('')]).toEqual([])
      expect([...enumerate('foo')]).toEqual([[0, 'f'], [1, 'o'], [2, 'o']])
      expect([...enumerate(countTo(3))]).toEqual([[0, 1], [1, 2], [2, 3]])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c] = enumerate(inf())
      expect([a, b, c]).toEqual([[0, 1], [1, 2], [2, 3]])
    })
  })

  describe('every', () => {
    it('should return true if fn(value) is truthy for every value', () => {
      expect(every(lt(0))(countTo(3))).toBe(false)
      expect(every(gt(0))(countTo(3))).toBe(true)
      expect(every(gt(1))(countTo(3))).toBe(false)
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(() => true)
      expect(every(fn)(countTo(3))).toBe(true)
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(() => false)
      expect(every(fn)(countTo(3))).toBe(false)
      expect(fn.mock.calls).toEqual([[1, 0]])
    })
  })

  describe('filter', () => {
    it('should yield values for which fn(value) is truthy', () => {
      expect([...filter(lt(0))(countTo(5))]).toEqual([])
      expect([...filter(gt(0))(countTo(5))]).toEqual([1, 2, 3, 4, 5])
      expect([...filter(isOdd)(countTo(5))]).toEqual([1, 3, 5])
      expect([...filter(isEven)(countTo(5))]).toEqual([2, 4])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c, d, e] = filter(isOdd)(inf())
      expect([a, b, c, d, e]).toEqual([1, 3, 5, 7, 9])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(isOdd)
      const it = filter(fn)(countTo(3))
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([1, 3])
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('find', () => {
    it('should return the first value for which fn(value) is truthy', () => {
      expect(find(lt(0))(countTo(3))).toBeUndefined()
      expect(find(gt(0))(countTo(3))).toEqual(1)
      expect(find(gt(1))(countTo(3))).toEqual(2)
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(() => true)
      expect(find(fn)(countTo(3))).toBe(1)
      expect(fn.mock.calls).toEqual([[1, 0]])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(() => false)
      expect(find(fn)(countTo(3))).toBeUndefined()
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('first', () => {
    it('should return the first value', () => {
      expect(first('foobar')).toBe('f')
      expect(first(countTo(5))).toBe(1)
      expect(first([])).toBeUndefined()
    })

    it('should be ok with infinite sequences', () => {
      expect(first(inf())).toBe(1)
    })

    it('should not close the underlying iterator', () => {
      const nums = inf()
      expect(first(nums)).toBe(1)
      expect(first(nums)).toBe(2)
    })
  })

  describe('flatMap', () => {
    it('should flatten and yield mapped values', () => {
      expect([...flatMap(pair)(countTo(3))]).toEqual([-1, 1, -2, 2, -3, 3])
      expect([...flatMap(chars)(['foo', 'bar'])]).toEqual([...'foobar'])
      expect([...flatMap(chars)([])]).toEqual([])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c, d, e] = flatMap(pair)(inf())
      expect([a, b, c, d, e]).toEqual([-1, 1, -2, 2, -3])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(pair)
      const it = flatMap(fn)(countTo(3))
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([-1, 1, -2, 2, -3, 3])
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('flatten', () => {
    it('should flatten nested iterables', () => {
      expect([...flatten([])]).toEqual([])
      expect([...flatten([[1, 2], [3, 4]])]).toEqual([1, 2, 3, 4])
      expect([...flatten([[1, [2, [3]]]])]).toEqual([1, [2, [3]]])
      expect([...flatten(['foo', 'bar'])]).toEqual([...'foobar'])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c, d, e] = flatten(repeat()('foo'))
      expect([a, b, c, d, e]).toEqual([...'foofo'])
    })
  })

  describe('forEach', () => {
    it('should call fn for each value', () => {
      let sum = 0
      forEach((n: number) => sum += n)(countTo(5))
      expect(sum).toBe(15)
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn()
      expect(forEach(fn)(countTo(3))).toBeUndefined()
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('generate', () => {
    it('should yield values generated by a function', () => {
      expect([...generate(3)(counter())]).toEqual([0, 1, 2])
      expect([...generate(5)(counter())]).toEqual([0, 1, 2, 3, 4])
    })

    it('should yield infinite sequence', () => {
      const [a, b, c, d, e] = generate()(counter())
      expect([a, b, c, d, e]).toEqual([0, 1, 2, 3, 4])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(counter())
      const it = generate(3)(fn)
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([0, 1, 2])
      expect(fn.mock.calls).toEqual([[0], [1], [2]])
    })
  })

  describe('inspect', () => {
    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn()
      const it = inspect(fn)(countTo(3))
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([1, 2, 3])
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('last', () => {
    it('should return the last value', () => {
      expect(last(countTo(5))).toBe(5)
      expect(last('foobar')).toBe('r')
      expect(last('')).toBeUndefined()
    })
  })

  describe('length', () => {
    it('should return the length', () => {
      expect(length(countTo(5))).toBe(5)
      expect(length('foobar')).toBe(6)
      expect(length('')).toBe(0)
    })
  })

  describe('loop', () => {
    it('should call a function and yield the result in a loop', () => {
      expect([...loop(3)(leet)]).toEqual([...leet(), ...leet(), ...leet()])
      expect([...loop(3)(countTo)]).toEqual([...countTo(1), ...countTo(2)])
    })

    it('should yield infinite sequence', () => {
      const [a, b, c, d, e] = loop()(leet)
      expect([a, b, c, d, e]).toEqual([1, 3, 3, 7, 1])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(leet)
      const it = loop(3)(fn)
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([...leet(), ...leet(), ...leet()])
      expect(fn.mock.calls).toEqual([[0], [1], [2]])
    })
  })

  describe('map', () => {
    it('should yield mapped values', () => {
      expect([...map(double)([])]).toEqual([])
      expect([...map(double)(countTo(5))]).toEqual([2, 4, 6, 8, 10])
      expect([...map(square)(countTo(5))]).toEqual([1, 4, 9, 16, 25])
      expect([...map(chars)(['foo', 'bar'])]).toEqual([[...'foo'], [...'bar']])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c] = map(double)(inf())
      expect([a, b, c]).toEqual([2, 4, 6])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(double)
      const it = map(fn)(countTo(3))
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([2, 4, 6])
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('match', () => {
    it('should yield RegExp.exec results', () => {
      const expected = [['foo', 'f', 'oo'], ['bar', 'b', 'ar']]
      const received = [...match(/(\S)(\S*)/g)('foo bar')].map(m => [...m])
      expect(received).toEqual(expected)
    })
  })

  describe('nth', () => {
    it('should return the nth value', () => {
      expect(nth(0)('foobar')).toBe('f')
      expect(nth(3)('foobar')).toBe('b')
      expect(nth(6)('foobar')).toBeUndefined()
    })

    it('should be ok with infinite sequences', () => {
      expect(nth(4)(inf())).toBe(5)
    })
  })

  describe('range', () => {
    it('should yield monotonically increasing numbers', () => {
      expect([...range()(5)()]).toEqual([0, 1, 2, 3, 4])
      expect([...range(1)(10)(2)]).toEqual([1, 3, 5, 7, 9])
      expect([...range(10)(50)(10)]).toEqual([10, 20, 30, 40])
    })

    it('should yield [0, +inf) when called with no args', () => {
      const [a, b, c, d, e] = range()()()
      expect([a, b, c, d, e]).toEqual([0, 1, 2, 3, 4])
    })
  })

  describe('reduce', () => {
    it('should reduce values to a single one', () => {
      expect(reduce(add)(0)(countTo(0))).toEqual(0)
      expect(reduce(add)(0)(countTo(3))).toEqual(6)
      expect(reduce(add)(0)(countTo(5))).toEqual(15)
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(add)
      expect(reduce(fn)(0)(countTo(3))).toEqual(6)
      expect(fn.mock.calls).toEqual([[0, 1, 0], [1, 2, 1], [3, 3, 2]])
    })
  })

  describe('repeat', () => {
    it('should yield the same value multiple times', () => {
      expect([...repeat(0)(42)]).toEqual([])
      expect([...repeat(5)(42)]).toEqual([42, 42, 42, 42, 42])
      expect([...repeat(3)('foo')]).toEqual(['foo', 'foo', 'foo'])
    })

    it('should yield infinite sequence', () => {
      const [a, b, c, d, e] = repeat()(42)
      expect([a, b, c, d, e]).toEqual([42, 42, 42, 42, 42])
    })
  })

  describe('sequence', () => {
    it('should yield values generated by a function', () => {
      expect([...sequence(5)(double)(1)]).toEqual([1, 2, 4, 8, 16])
      expect([...sequence(5)(square)(2)]).toEqual([2, 4, 16, 256, 65536])
    })

    it('should yield infinite sequence', () => {
      const [a, b, c, d, e] = sequence()(double)(1)
      expect([a, b, c, d, e]).toEqual([1, 2, 4, 8, 16])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(double)
      expect([...sequence(3)(fn)(1)]).toEqual([1, 2, 4])
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [4, 2]])
    })
  })

  describe('some', () => {
    it('should return true if fn(value) is truthy for some of the values', () => {
      expect(some(lt(0))(countTo(3))).toBe(false)
      expect(some(gt(0))(countTo(3))).toBe(true)
      expect(some(gt(1))(countTo(3))).toBe(true)
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(() => true)
      expect(some(fn)(countTo(3))).toBe(true)
      expect(fn.mock.calls).toEqual([[1, 0]])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(() => false)
      expect(some(fn)(countTo(3))).toBe(false)
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('take', () => {
    it('should take specified amount of values', () => {
      expect([...take()(countTo(5))]).toEqual([1])
      expect([...take(0)(countTo(5))]).toEqual([])
      expect([...take(3)(countTo(5))]).toEqual([1, 2, 3])
      expect([...take(Infinity)(countTo(3))]).toEqual([1, 2, 3])
    })

    it('should be ok with infinite sequences', () => {
      expect([...take(5)(inf())]).toEqual([1, 2, 3, 4, 5])
    })

    it('should not close the underlying iterator', () => {
      const nums = countTo(5)
      expect([...take(3)(nums)]).toEqual([1, 2, 3])
      expect([...take(3)(nums)]).toEqual([4, 5])
    })
  })

  describe('takeWhile', () => {
    it('should take values while fn(value) is truthy', () => {
      expect([...takeWhile(lt(0))(countTo(5))]).toEqual([])
      expect([...takeWhile(lt(4))(countTo(5))]).toEqual([1, 2, 3])
      expect([...takeWhile(lt(6))(countTo(5))]).toEqual([1, 2, 3, 4, 5])
    })

    it('should be ok with infinite sequences', () => {
      expect([...takeWhile(lt(4))(inf())]).toEqual([1, 2, 3])
    })

    it('should call fn expected amount of times with expected args', () => {
      const fn = jest.fn(lt(3))
      const it = takeWhile(fn)(countTo(5))
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([1, 2])
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2]])
    })
  })

  describe('unique', () => {
    it('should yield unique values', () => {
      expect([...unique(leet())]).toEqual([1, 3, 7])
      expect([...unique('foobar')]).toEqual([...'fobar'])
      expect([...unique('')]).toEqual([])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c, d, e] = unique(inf())
      expect([a, b, c, d, e]).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('zip', () => {
    it('should yield values from multiple iterables grouped in arrays', () => {
      expect([...zip('foo', 'bar')]).toEqual([[...'fb'], [...'oa'], [...'or']])
      expect([...zip('foo', 'ba')]).toEqual([[...'fb'], [...'oa']])
      expect([...zip('fo', 'bar')]).toEqual([[...'fb'], [...'oa']])
      expect([...zip('foo')]).toEqual([['f'], ['o'], ['o']])
    })

    it('should be ok with infinite sequences', () => {
      const [a, b, c] = zip(inf(), inf())
      expect([a, b, c]).toEqual([[1, 1], [2, 2], [3, 3]])
    })
  })
})
