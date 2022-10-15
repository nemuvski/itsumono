import { isNumber } from '../../src'

test('isNumber()', () => {
  expect(isNumber(0)).toBe(true)
  expect(isNumber(Infinity)).toBe(true)
  expect(isNumber(NaN)).toBe(true)
  expect(isNumber('a')).toBe(false)
})
