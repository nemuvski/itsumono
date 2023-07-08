import { test, expect } from 'vitest'
import { replaceNewLineChars } from '../../src'

test('replaceNewLineChars()', () => {
  expect(replaceNewLineChars('t\r\n\r\te\rs\nt')).toBe('t\n\n\te\ns\nt')
  expect(replaceNewLineChars('t\r\n\r\te\rs\nt', 'LF')).toBe('t\n\n\te\ns\nt')
  expect(replaceNewLineChars('t\r\n\r\te\rs\nt', 'CR')).toBe('t\r\r\te\rs\rt')
  expect(replaceNewLineChars('t\r\n\r\te\rs\nt', 'CRLF')).toBe('t\r\n\r\n\te\r\ns\r\nt')
})
