import { isNotNullish } from '../../src'

test('isNotNullish()', () => {
  expect(isNotNullish(0)).toBe(true)
  expect(isNotNullish('')).toBe(true)
  expect(isNotNullish([])).toBe(true)
  expect(isNotNullish({})).toBe(true)
  expect(isNotNullish(null)).toBe(false)
  expect(isNotNullish(undefined)).toBe(false)
})
