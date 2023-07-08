import { test, expect } from 'vitest'
import { isNullish } from '../../src'

test('isNullish()', () => {
  expect(isNullish(0)).toBe(false)
  expect(isNullish('')).toBe(false)
  expect(isNullish([])).toBe(false)
  expect(isNullish({})).toBe(false)
  expect(isNullish(null)).toBe(true)
  expect(isNullish(undefined)).toBe(true)
})
