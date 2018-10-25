import { countTo, leet, add, double, isOdd } from './functions/curried.spec'
import { forEach, reduce, filter, map, concat, repeat, take, drop } from './functions/curried'
import { always, loop, generate, sequence, range, match } from './functions/curried'
import { It, it as wrap } from './it'

describe('it', () => {
  describe('static methods', () => {
    it('should have #always', () => {
      const expected = [...take(10)(always(42))]
      const received = [...It.always(42).take(10)]
      expect(received).toEqual(expected)
    })

    it('should have #loop', () => {
      const expected = [...take(10)(loop(leet))]
      const received = [...It.loop(leet).take(10)]
      expect(received).toEqual(expected)
    })

    it('should have #generate', () => {
      const expected = [...take(10)(generate(double))]
      const received = [...It.generate(double).take(10)]
      expect(received).toEqual(expected)
    })

    it('should have #sequence', () => {
      const expected = [...take(10)(sequence(double)(1))]
      const received = [...It.sequence(double, 1).take(10)]
      expect(received).toEqual(expected)
    })

    it('should have #range', () => {
      const expected = [...take(10)(range()()())]
      const received = [...It.range().take(10)]
      expect(received).toEqual(expected)
    })

    it('should have #match', () => {
      const expected = [...match(/./g)('foo')]
      const received = [...It.match('foo', /./g)]
      expect(received).toEqual(expected)
    })
  })

  describe('methods', () => {
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
      const expected = reduce(add)(0)(countTo(10))
      const received = wrap(countTo(10)).reduce(add, 0)
      expect(received).toEqual(expected)
    })

    it('should have #filter', () => {
      const expected = [...filter(isOdd)(countTo(10))]
      const received = [...wrap(countTo(10)).filter(isOdd)]
      expect(received).toEqual(expected)
    })

    it('should have #map', () => {
      const expected = [...map(double)(countTo(10))]
      const received = [...wrap(countTo(10)).map(double)]
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
      const inf = wrap(countTo(Infinity))
      expect([...inf.take(Infinity).take(5)]).toEqual([1, 2, 3, 4, 5])
      expect([...inf.take(5).drop(Infinity)]).toEqual([])
    })

    it('should not close underlying iterator on drop/take', () => {
      const inf = wrap(countTo(Infinity))
      expect([...inf.drop(2).take(2)]).toEqual([3, 4])
      expect([...inf.drop(2).take(2)]).toEqual([7, 8])
    })

    it('should be lazy', () => {
      const fn = jest.fn(n => n)
      const it = It.generate(fn).drop(5).take(5).filter(fn).map(fn)
      expect(fn).not.toHaveBeenCalled()
      expect([...it]).toEqual([5, 6, 7, 8, 9])
      expect(fn).toHaveBeenCalledTimes(20)
    })
  })
})
