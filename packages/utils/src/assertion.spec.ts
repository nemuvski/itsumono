import { isBoolean, isDate, isNotNullish, isNumber, isString } from './assertion'

describe('assertion.ts', () => {
  test('isNotNullish()', () => {
    expect(isNotNullish(0)).toBe(true)
    expect(isNotNullish('')).toBe(true)
    expect(isNotNullish([])).toBe(true)
    expect(isNotNullish({})).toBe(true)
    expect(isNotNullish(null)).toBe(false)
    expect(isNotNullish(undefined)).toBe(false)
  })

  test('isNumber()', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(NaN)).toBe(true)
    expect(isNumber('a')).toBe(false)
  })

  test('isString()', () => {
    expect(isString('a')).toBe(true)
    expect(isString(0)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString(['a'])).toBe(false)
  })

  test('isBoolean()', () => {
    expect(isBoolean('a')).toBe(false)
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean(['a'])).toBe(false)
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  test('isDate()', () => {
    expect(isDate(0)).toBe(false)
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date(''))).toBe(true)
  })
})
