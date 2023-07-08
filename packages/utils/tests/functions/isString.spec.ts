import { test, expect } from 'vitest'
import { isString } from '../../src'

test('isString()', () => {
  expect(isString('a')).toBe(true)
  expect(isString(0)).toBe(false)
  expect(isString(null)).toBe(false)
  expect(isString(undefined)).toBe(false)
  expect(isString(['a'])).toBe(false)
})
