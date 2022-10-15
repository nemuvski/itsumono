import { isNumberInRange } from '../../src'

test('isNumberInRange()', () => {
  expect(isNumberInRange(3, 3, 5)).toBe(true)
  expect(isNumberInRange(3, 3, 5, '[]')).toBe(true)
  expect(isNumberInRange(3, 3, 5, '(]')).toBe(false)
  expect(isNumberInRange(5, 3, 5, '[)')).toBe(false)
  expect(isNumberInRange(5, 3, 5, '()')).toBe(false)
  expect(isNumberInRange(4.5, 4.49, 4.51, '()')).toBe(true)
})
