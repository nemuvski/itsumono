import { isNull } from '../../src'

test('isNull()', () => {
  expect(isNull(undefined)).toBe(false)
  expect(isNull(null)).toBe(true)
  expect(isNull(0)).toBe(false)
})
