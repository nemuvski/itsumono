import { test, expect } from 'vitest'
import { isBigInt } from '../../src'

test('isBigInt()', () => {
  expect(isBigInt(0)).toBe(false)
  expect(isBigInt(Infinity)).toBe(false)
  expect(isBigInt(NaN)).toBe(false)
  expect(isBigInt('a')).toBe(false)
  // @ts-ignore: 0n
  expect(isBigInt(0n)).toBe(true)
  expect(isBigInt(BigInt(32))).toBe(true)
})
