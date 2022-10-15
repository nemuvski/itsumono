import { isInvalidDate } from '../../src'

test('isInvalidDate()', () => {
  expect(isInvalidDate(new Date(''))).toBe(true)
  expect(isInvalidDate(new Date('August 19, 1975 23:15:30'))).toBe(false)
})
