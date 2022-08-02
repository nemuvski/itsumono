import { isInvalidDate } from '../src/datetime'

describe('datetime.ts', () => {
  test('isInvalidDate()', () => {
    expect(isInvalidDate(new Date(''))).toBe(true)
    expect(isInvalidDate(new Date())).toBe(false)
  })
})
