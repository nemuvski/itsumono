import { test, expect } from 'vitest'
import { replaceFwAlphanumericsWithHw } from '../../src'

test('replaceFwAlphanumericsWithHw()', () => {
  expect(replaceFwAlphanumericsWithHw('０-９ａ-ｚＡ-Ｚ')).toBe('0-9a-zA-Z')
  expect(replaceFwAlphanumericsWithHw('0-9a-zA-Z')).toBe('0-9a-zA-Z')
})
