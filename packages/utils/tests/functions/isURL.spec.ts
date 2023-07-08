import { test, expect } from 'vitest'
import { isURL } from '../../src'

test('isURL()', () => {
  expect(isURL(new URL('http://localhost:8080'))).toBe(true)
  expect(isURL('http://localhost:8080')).toBe(false)
})
