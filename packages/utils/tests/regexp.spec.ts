import { regexpNoSpaceChars, regexpValidEmailAddressFormat, regexpValidUrlFormat } from '../src/regexp'

describe('regex.ts', () => {
  test('regexValidEmailAddress()', () => {
    expect(regexpValidEmailAddressFormat().test('abcd-efgh@example')).toBe(false)
    expect(regexpValidEmailAddressFormat().test('abcd-efgh@   ')).toBe(false)
    expect(regexpValidEmailAddressFormat().test('@example')).toBe(false)
    expect(regexpValidEmailAddressFormat().test('abcd-efgh+test@example.com')).toBe(true)
    expect(regexpValidEmailAddressFormat().test('abcd-efgh@example.com')).toBe(true)
  })

  test('regexValidUrl()', () => {
    expect(regexpValidUrlFormat().test('https://example.com/')).toBe(true)
    expect(regexpValidUrlFormat().test('http://example.com/')).toBe(true)
    expect(regexpValidUrlFormat().test('https://example.com/none.js')).toBe(true)
    expect(regexpValidUrlFormat().test('https://example.com/?test=123&d=ABC')).toBe(true)
    expect(regexpValidUrlFormat().test('https://example.com/#test-123')).toBe(true)
    expect(regexpValidUrlFormat().test('example.jp')).toBe(false)
  })

  test('regexNoSpaceChars()', () => {
    expect(regexpNoSpaceChars().test('')).toBe(false)
    expect(regexpNoSpaceChars().test(' ')).toBe(false)
    expect(regexpNoSpaceChars().test('  \n  \t  ')).toBe(false)
    expect(regexpNoSpaceChars().test('  wa  ')).toBe(true)
  })
})
