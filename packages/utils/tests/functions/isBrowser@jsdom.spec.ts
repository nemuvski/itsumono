// @vitest-environment jsdom

import { test, expect } from 'vitest'
import { isBrowser } from '../../src'

test('isBrowser()', () => {
  expect(isBrowser()).toBe(true)
})
