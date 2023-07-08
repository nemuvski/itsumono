import { test, expect } from 'vitest'
import { replaceHwAlphanumericsWithFw } from '../../src'

test('replaceHwAlphanumericsWithFw()', () => {
  expect(replaceHwAlphanumericsWithFw('0-9a-zA-Z')).toBe('０-９ａ-ｚＡ-Ｚ')
  expect(replaceHwAlphanumericsWithFw('０-９ａ-ｚＡ-Ｚ')).toBe('０-９ａ-ｚＡ-Ｚ')
})
