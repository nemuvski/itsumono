import { test, expect } from 'vitest'
import { regexpValidUrlFormat } from '../../src'

test('regexValidUrl()', () => {
  expect(regexpValidUrlFormat().test('https://example.com/')).toBe(true)
  expect(regexpValidUrlFormat().test('http://example.com/')).toBe(true)
  expect(regexpValidUrlFormat().test('https://example.com/none.js')).toBe(true)
  expect(regexpValidUrlFormat().test('https://example.com/?test=123&d=ABC')).toBe(true)
  expect(regexpValidUrlFormat().test('https://example.com/#test-123')).toBe(true)
  expect(regexpValidUrlFormat().test('example.jp')).toBe(false)
})
