import { expect, test } from 'vitest'
import { isFiniteNumber } from '../../src'

test('isFiniteNumber()', () => {
  expect(isFiniteNumber(0)).toBe(true)
  expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).toBe(false)
  expect(isFiniteNumber(Number.POSITIVE_INFINITY)).toBe(false)
  expect(isFiniteNumber(Number.NaN)).toBe(false)
})
