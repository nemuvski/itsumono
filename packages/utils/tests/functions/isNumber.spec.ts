import { expect, test } from 'vitest'
import { isNumber } from '../../src'

test('isNumber()', () => {
  expect(isNumber(0)).toBe(true)
  expect(isNumber(Number.POSITIVE_INFINITY)).toBe(true)
  expect(isNumber(Number.NaN)).toBe(true)
  expect(isNumber('a')).toBe(false)
})
