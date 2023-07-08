import { test, expect } from 'vitest'
import { removeControlChars } from '../../src'

test('removeControlChars()', () => {
  expect(removeControlChars('t\te\rs\nt\r\n')).toBe('t\te\rs\nt\r\n')
  expect(removeControlChars('t\te\rs\nt\r\n', { htab: false, lf: false, cr: false })).toBe('t\te\rs\nt\r\n')
  expect(removeControlChars('t\te\rs\nt\r\n', { htab: true })).toBe('te\rs\nt\r\n')
  expect(removeControlChars('t\te\rs\nt\r\n', { lf: true })).toBe('t\te\rst\r')
  expect(removeControlChars('t\te\rs\nt\r\n', { cr: true })).toBe('t\tes\nt\n')
  expect(
    removeControlChars(['\0\b', '\t', '\n', '\x0B\x0C', '\r', '\x0E\x1F', '\x7F\x9F'].join(''), {
      htab: false,
      lf: false,
      cr: false,
    })
  ).toBe('\t\n\r')
  expect(
    removeControlChars(['\0\b', '\t', '\n', '\x0B\x0C', '\r', '\x0E\x1F', '\x7F\x9F'].join(''), {
      htab: true,
      lf: true,
      cr: true,
    })
  ).toBe('')
})
