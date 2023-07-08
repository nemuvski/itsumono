import { test, expect } from 'vitest'
import { regexpValidEmailAddressFormat } from '../../src'

test('regexValidEmailAddress()', () => {
  expect(regexpValidEmailAddressFormat().test('abcd-efgh@example')).toBe(false)
  expect(regexpValidEmailAddressFormat().test('abcd-efgh@   ')).toBe(false)
  expect(regexpValidEmailAddressFormat().test('@example')).toBe(false)
  expect(regexpValidEmailAddressFormat().test('abcd-efgh+test@example.com')).toBe(true)
  expect(regexpValidEmailAddressFormat().test('abcd-efgh@example.com')).toBe(true)
})
