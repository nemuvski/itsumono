import { test, expect } from 'vitest'
import { removeZWChars } from '../../src'

test('removeZWChars()', () => {
  const zwsp = 'a\u200Bb'
  const zwnj = 'a\u200Cb'
  const zwj = 'a\u200Db'
  const lrm = 'a\u200Eb'
  const rlm = 'a\u200Fb'
  const zwnbsp = 'a\uFEFFb'

  expect(
    removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
      zwnj: true,
      zwj: true,
      lrm: true,
      rlm: true,
      zwnbsp: true,
    })
  ).toBe('ab ab ab ab ab ab')
  expect(
    removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
      zwnj: true,
    })
  ).toBe('ab ab a\u200Db a\u200Eb a\u200Fb a\uFEFFb')
  expect(
    removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
      zwj: true,
    })
  ).toBe('ab a\u200Cb ab a\u200Eb a\u200Fb a\uFEFFb')
  expect(
    removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
      lrm: true,
    })
  ).toBe('ab a\u200Cb a\u200Db ab a\u200Fb a\uFEFFb')
  expect(
    removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
      rlm: true,
    })
  ).toBe('ab a\u200Cb a\u200Db a\u200Eb ab a\uFEFFb')
  expect(
    removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
      zwnbsp: true,
    })
  ).toBe('ab a\u200Cb a\u200Db a\u200Eb a\u200Fb ab')

  expect(removeZWChars('🙇‍♀️')).toBe('🙇‍♀️')
})
