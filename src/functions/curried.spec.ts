import { forEach, reduce, filter, map, concat, cycle, zip, take, drop } from './curried'
import { repeat, loop, generate, sequence, range, match } from './curried'

export function* countTo(n: number) { for (let i = 1; i <= n;) yield i++ }
export function* leet() { yield* [1, 3, 3, 7] }

export const add = (n: number, m: number) => n + m
export const double = (n: number) => 2*n
export const isOdd = (n: number) => n%2 !== 0

describe('functions', () => {
  describe('forEach', () => {
    it('should call a function for each value of an iterable', () => {
      const fn = jest.fn()
      forEach(fn)(countTo(5))
      expect(fn.mock.calls).toEqual([[1, 0], [2, 1], [3, 2], [4, 3], [5, 4]])
    })
  })

  describe('reduce', () => {
    it('should reduce an iterable to a single value', () => {
      const expected = 15
      const received = reduce(add)(0)(countTo(5))
      expect(received).toEqual(expected)
    })
  })

  describe('filter', () => {
    it('should filter values of an iterable', () => {
      const expected = [1, 3, 5]
      const received = [...filter(isOdd)(countTo(5))]
      expect(received).toEqual(expected)
    })
  })

  describe('map', () => {
    it('should map values of an iterable', () => {
      const expected = [2, 4, 6, 8, 10]
      const received = [...map(double)(countTo(5))]
      expect(received).toEqual(expected)
    })
  })

  describe('concat', () => {
    it('should concatenate multiple iterables to a single one', () => {
      const expected = [...'foo', ...'bar', ...'baz']
      const received = [...concat('foo', 'bar', 'baz')]
      expect(received).toEqual(expected)
    })
  })

  describe('cycle', () => {
    it('should yield values from an iterable in cycle', () => {
      const expected = [...'foofoofoof']
      const received = [...take(10)(cycle('foo'))]
      expect(received).toEqual(expected)
    })
  })

  describe('repeat', () => {
    it('should repeatedly yield the same value', () => {
      const expected = [42, 42, 42, 42, 42]
      const received = [...take(5)(repeat(42))]
      expect(received).toEqual(expected)
    })
  })

  describe('loop', () => {
    it('should loop a generator function', () => {
      const expected = [...leet(), ...leet(), ...leet()]
      const received = [...take(12)(loop(leet))]
      expect(received).toEqual(expected)
    })
  })

  describe('generate', () => {
    it('should yield values generated by a function', () => {
      const expected = [0, 2, 4, 6, 8]
      const received = [...take(5)(generate(double))]
      expect(received).toEqual(expected)
    })
  })

  describe('sequence', () => {
    it('should yield a sequence of values derived from previous values', () => {
      const expected = [1, 2, 4, 8, 16]
      const received = [...take(5)(sequence(double)(1))]
      expect(received).toEqual(expected)
    })
  })

  describe('range', () => {
    it('should yield a sequence of monotonically increasing values', () => {
      const expected = [0, 1, 2, 3, 4]
      const received = [...take(5)(range()()())]
      expect(received).toEqual(expected)
    })
  })

  describe('match', () => {
    it('should yield a sequence of matches', () => {
      const expected = [['foo', 'f'], ['bar', 'b'], ['baz', 'b']]
      const received = [...match(/(\S)\S*/g)('foo bar baz')].map(m => [...m])
      expect(received).toMatchObject(expected)
    })
  })

  describe('zip', () => {
    it('should zip multiple iterables to a single one', () => {
      const expected = [['f', 'b'], ['o', 'a'], ['o', 'r']]
      const received = [...zip('foo', 'bar')]
      expect(received).toEqual(expected)
    })
  })

  describe('take', () => {
    it('should take some amount of values from an iterable', () => {
      const expected = [1, 2, 3]
      const received = [...take(3)(countTo(5))]
      expect(received).toEqual(expected)
    })
  })

  describe('drop', () => {
    it('should drop some amount of values from an iterable', () => {
      const expected = [3, 4, 5]
      const received = [...drop(2)(countTo(5))]
      expect(received).toEqual(expected)
    })
  })
})
