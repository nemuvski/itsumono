import {
  isBigInt,
  isBoolean,
  isDate,
  isFalsy,
  isNotNullish,
  isNullish,
  isNumber,
  isPrimitive,
  isString,
  isSymbol,
} from '../src/assertion'

describe('assertion.ts', () => {
  test('isNotNullish()', () => {
    expect(isNotNullish(0)).toBe(true)
    expect(isNotNullish('')).toBe(true)
    expect(isNotNullish([])).toBe(true)
    expect(isNotNullish({})).toBe(true)
    expect(isNotNullish(null)).toBe(false)
    expect(isNotNullish(undefined)).toBe(false)
  })

  test('isNullish()', () => {
    expect(isNullish(0)).toBe(false)
    expect(isNullish('')).toBe(false)
    expect(isNullish([])).toBe(false)
    expect(isNullish({})).toBe(false)
    expect(isNullish(null)).toBe(true)
    expect(isNullish(undefined)).toBe(true)
  })

  test('isPrimitive()', () => {
    expect(isPrimitive(null)).toBe(true)
    expect(isPrimitive(undefined)).toBe(true)
    expect(isPrimitive(0)).toBe(true)
    expect(isPrimitive(NaN)).toBe(true)
    expect(isPrimitive('')).toBe(true)
    expect(isPrimitive(0n)).toBe(true)
    expect(isPrimitive(false)).toBe(true)
    expect(isPrimitive(Symbol('a'))).toBe(true)
    expect(isPrimitive(new Date())).toBe(false)
  })

  test('isFalsy()', () => {
    expect(isFalsy(false)).toBe(true)
    expect(isFalsy(0)).toBe(true)
    expect(isFalsy(0n)).toBe(true)
    expect(isFalsy('')).toBe(true)
    expect(isFalsy(undefined)).toBe(true)
    expect(isFalsy(null)).toBe(true)
    expect(isFalsy(1)).toBe(false)
  })

  test('isNumber()', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(NaN)).toBe(true)
    expect(isNumber('a')).toBe(false)
  })

  test('isBigInt()', () => {
    expect(isBigInt(0)).toBe(false)
    expect(isBigInt(Infinity)).toBe(false)
    expect(isBigInt(NaN)).toBe(false)
    expect(isBigInt('a')).toBe(false)
    expect(isBigInt(0n)).toBe(true)
    expect(isBigInt(BigInt(32))).toBe(true)
  })

  test('isString()', () => {
    expect(isString('a')).toBe(true)
    expect(isString(0)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString(['a'])).toBe(false)
  })

  test('isSymbol', () => {
    expect(isSymbol('a')).toBe(false)
    expect(isSymbol(Symbol('a'))).toBe(true)
    expect(isSymbol(Symbol(3))).toBe(true)
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
