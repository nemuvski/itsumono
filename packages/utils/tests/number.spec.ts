import { isFiniteNumber, isNumberInRange, isPositiveInteger } from '../src/number'

describe('number.ts', () => {
  test('isPositiveInteger()', () => {
    expect(isPositiveInteger(10.0)).toBe(true)
    expect(isPositiveInteger(100)).toBe(true)
    expect(isPositiveInteger('100')).toBe(true)
    expect(isPositiveInteger('0', true)).toBe(true)
    expect(isPositiveInteger('0', false)).toBe(false)
    expect(isPositiveInteger(-1)).toBe(false)
    expect(isPositiveInteger('-1')).toBe(false)
    expect(isPositiveInteger('a')).toBe(false)
    expect(isPositiveInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
    expect(isPositiveInteger(Number.MAX_SAFE_INTEGER, undefined, true)).toBe(true)
    expect(isPositiveInteger(Number.MAX_SAFE_INTEGER + 1, undefined, true)).toBe(false)
    expect(isPositiveInteger(NaN)).toBe(false)
    expect(isPositiveInteger(Infinity)).toBe(false)
  })

  test('isFiniteNumber()', () => {
    expect(isFiniteNumber(0)).toBe(true)
    expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).toBe(false)
    expect(isFiniteNumber(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isFiniteNumber(NaN)).toBe(false)
  })

  test('isNumberInRange()', () => {
    expect(isNumberInRange(3, 3, 5)).toBe(true)
    expect(isNumberInRange(3, 3, 5, '[]')).toBe(true)
    expect(isNumberInRange(3, 3, 5, '(]')).toBe(false)
    expect(isNumberInRange(5, 3, 5, '[)')).toBe(false)
    expect(isNumberInRange(5, 3, 5, '()')).toBe(false)
    expect(isNumberInRange(4.5, 4.49, 4.51, '()')).toBe(true)
  })
})
