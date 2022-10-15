import { isDate } from '../../src'

test('isDate()', () => {
  expect(isDate(0)).toBe(false)
  expect(isDate(new Date('August 19, 1975 23:15:30'))).toBe(true)
  expect(isDate(new Date(''))).toBe(true)
})
