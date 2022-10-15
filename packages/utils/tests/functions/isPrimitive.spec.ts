import { isPrimitive } from '../../src'

test('isPrimitive()', () => {
  const date = new Date('August 19, 1975 23:15:30')

  expect(isPrimitive(null)).toBe(true)
  expect(isPrimitive(undefined)).toBe(true)
  expect(isPrimitive(0)).toBe(true)
  expect(isPrimitive(NaN)).toBe(true)
  expect(isPrimitive('')).toBe(true)
  expect(isPrimitive(0n)).toBe(true)
  expect(isPrimitive(false)).toBe(true)
  expect(isPrimitive(Symbol('a'))).toBe(true)
  expect(isPrimitive(date)).toBe(false)
})
