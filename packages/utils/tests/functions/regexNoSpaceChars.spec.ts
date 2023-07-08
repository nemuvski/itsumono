import { test, expect } from 'vitest'
import { regexpNoSpaceChars } from '../../src'

test('regexNoSpaceChars()', () => {
  expect(regexpNoSpaceChars().test('')).toBe(false)
  expect(regexpNoSpaceChars().test(' ')).toBe(false)
  expect(regexpNoSpaceChars().test('  \n  \t  ')).toBe(false)
  expect(regexpNoSpaceChars().test('  wa  ')).toBe(true)
})
