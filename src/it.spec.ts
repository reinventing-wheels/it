import { forEach, reduce, filter, map, concat, repeat, generate, range, take, drop } from './functions/curried'
import { it as wrap } from './it'

describe('it', () => {
  const countToInf = range(1)()
  const countTo5 = range(1)(6)

  describe('interface', () => {
    it('should have #cast', () => {
      const expected = [...'foobar']
      const received = wrap('foobar').cast(it => [...it])
      expect(received).toEqual(expected)
    })

    it('should have #forEach', () => {
      const [f, g] = [jest.fn(), jest.fn()]
      forEach(f)('foobar')
      wrap('foobar').forEach(g)
      expect(f.mock.calls).toEqual(g.mock.calls)
    })

    it('should have #reduce', () => {
      const add = (n: number, m: number) => n + m
      const expected = reduce(add)(0)(countTo5())
      const received = wrap(countTo5()).reduce(add, 0)
      expect(received).toEqual(expected)
    })

    it('should have #filter', () => {
      const isOdd = (n: number) => n%2 !== 0
      const expected = [...filter(isOdd)(countTo5())]
      const received = [...wrap(countTo5()).filter(isOdd)]
      expect(received).toEqual(expected)
    })

    it('should have #map', () => {
      const addOne = (n: number) => n + 1
      const expected = [...map(addOne)(countTo5())]
      const received = [...wrap(countTo5()).map(addOne)]
      expect(received).toEqual(expected)
    })

    it('should have #concat', () => {
      const expected = [...concat('foo', 'bar', 'baz')]
      const received = [...wrap('foo').concat('bar', 'baz')]
      expect(received).toEqual(expected)
    })

    it('should have #repeat', () => {
      const expected = [...take(10)(repeat('foo'))]
      const received = [...wrap('foo').repeat().take(10)]
      expect(received).toEqual(expected)
    })

    it('should have #take', () => {
      const expected = [...take(3)('foobar')]
      const received = [...wrap('foobar').take(3)]
      expect(received).toEqual(expected)
    })

    it('should have #drop', () => {
      const expected = [...drop(3)('foobar')]
      const received = [...wrap('foobar').drop(3)]
      expect(received).toEqual(expected)
    })
  })

  describe('behavior', () => {
    it('should proxy passed iterable', () => {
      const expected = [...'foobar']
      const received = [...wrap('foobar')]
      expect(received).toEqual(expected)
    })

    it('should handle infinite drop/take', () => {
      const inf = wrap(countToInf())
      expect([...inf.take(Infinity).take(5)]).toEqual([1, 2, 3, 4, 5])
      expect([...inf.take(5).drop(Infinity)]).toEqual([])
    })

    it('should not close underlying iterator on drop/take', () => {
      const inf = wrap(countToInf())
      expect([...inf.drop(2).take(2)]).toEqual([3, 4])
      expect([...inf.drop(2).take(2)]).toEqual([7, 8])
    })

    it('should be lazy', () => {
      const fn = jest.fn(n => n)
      const it = wrap(generate(fn)).drop(5).take(5).filter(fn).map(fn)
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([5, 6, 7, 8, 9])
      expect(fn).toHaveBeenCalledTimes(20)
    })
  })
})
