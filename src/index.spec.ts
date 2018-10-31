import * as uncurried from './functions/uncurried'
import * as curried from './functions/curried'
import * as index from '.'

describe('exports', () => {
  const indexKeys = Object.keys(index)

  it('should export all curried functions', () => {
    for (const key of Object.keys(curried))
      expect(indexKeys).toContain(key)
    expect(index.curried).toBe(curried)
  })

  it('should export all uncurried functions', () => {
    for (const key of Object.keys(uncurried))
      expect(indexKeys).toContain(key + 'ʹ')
    expect(index.uncurried).toBe(uncurried)
  })
})
