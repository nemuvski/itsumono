import { test, expect } from 'vitest'
import { isUndefined } from '../../src'

test('isUndefined()', () => {
  expect(isUndefined(undefined)).toBe(true)
  expect(isUndefined(null)).toBe(false)
  expect(isUndefined(0)).toBe(false)
})
