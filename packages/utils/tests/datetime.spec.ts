import { isInvalidDate } from '../src/datetime'

describe('datetime.ts', () => {
  test('isInvalidDate()', () => {
    expect(isInvalidDate(new Date(''))).toBe(true)
    expect(isInvalidDate(new Date('August 19, 1975 23:15:30'))).toBe(false)
  })
})
