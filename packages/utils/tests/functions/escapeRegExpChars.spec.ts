import { escapeRegExpChars } from '../../src'

test('escapeRegExpChars()', () => {
  expect(escapeRegExpChars('a 0')).toBe('a 0')
  expect(escapeRegExpChars('.')).toBe('\\.')
  expect(escapeRegExpChars('*')).toBe('\\*')
  expect(escapeRegExpChars('+')).toBe('\\+')
  expect(escapeRegExpChars('-')).toBe('\\-')
  expect(escapeRegExpChars('?')).toBe('\\?')
  expect(escapeRegExpChars('^')).toBe('\\^')
  expect(escapeRegExpChars('$')).toBe('\\$')
  expect(escapeRegExpChars('|')).toBe('\\|')
  expect(escapeRegExpChars('{}')).toBe('\\{\\}')
  expect(escapeRegExpChars('()')).toBe('\\(\\)')
  expect(escapeRegExpChars('[]')).toBe('\\[\\]')
  expect(escapeRegExpChars('\\')).toBe('\\\\')
  expect(escapeRegExpChars('test-123')).toBe('test\\-123')

  const escapedStr = escapeRegExpChars('test-123')
  const reg = new RegExp(escapedStr)
  expect('test-1234'.replace(reg, 'OK')).toBe('OK4')
})
