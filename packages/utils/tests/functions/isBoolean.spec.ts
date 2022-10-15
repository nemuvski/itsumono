import { isBoolean } from '../../src'

test('isBoolean()', () => {
  expect(isBoolean('a')).toBe(false)
  expect(isBoolean(0)).toBe(false)
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean(undefined)).toBe(false)
  expect(isBoolean(['a'])).toBe(false)
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
})
