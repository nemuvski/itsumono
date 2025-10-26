import { test, expect } from 'vitest'
import { isFalsy } from '../../src'

test('isFalsy()', () => {
  expect(isFalsy(false)).toBe(true)
  expect(isFalsy(0)).toBe(true)
  expect(isFalsy(0n)).toBe(true)
  expect(isFalsy('')).toBe(true)
  expect(isFalsy(undefined)).toBe(true)
  expect(isFalsy(null)).toBe(true)
  expect(isFalsy(1)).toBe(false)
})
