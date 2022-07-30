import { regexNoSpaceChars, regexValidEmailAddressFormat, regexValidUrlFormat } from '../src/regex'

describe('regex.ts', () => {
  test('regexValidEmailAddress', () => {
    expect(regexValidEmailAddressFormat.test('abcd-efgh@example')).toBe(false)
    expect(regexValidEmailAddressFormat.test('abcd-efgh@   ')).toBe(false)
    expect(regexValidEmailAddressFormat.test('@example')).toBe(false)
    expect(regexValidEmailAddressFormat.test('abcd-efgh+test@example.com')).toBe(true)
    expect(regexValidEmailAddressFormat.test('abcd-efgh@example.com')).toBe(true)
  })

  test('regexValidUrl', () => {
    expect(regexValidUrlFormat.test('https://example.com/')).toBe(true)
    expect(regexValidUrlFormat.test('http://example.com/')).toBe(true)
    expect(regexValidUrlFormat.test('https://example.com/none.js')).toBe(true)
    expect(regexValidUrlFormat.test('example.jp')).toBe(false)
  })

  test('regexNoSpaceChars', () => {
    expect(regexNoSpaceChars.test('')).toBe(false)
    expect(regexNoSpaceChars.test(' ')).toBe(false)
    expect(regexNoSpaceChars.test('  \n  \t  ')).toBe(false)
    expect(regexNoSpaceChars.test('  wa  ')).toBe(true)
  })
})
