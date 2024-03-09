import { expect, test } from 'vitest'
import { isPositiveInteger } from '../../src'

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
  expect(isPositiveInteger(Number.NaN)).toBe(false)
  expect(isPositiveInteger(Number.POSITIVE_INFINITY)).toBe(false)
})
