// @vitest-environment node

import { test, expect } from 'vitest'
import { isBrowser } from '../../src'

test('isBrowser()', () => {
  expect(isBrowser()).toBe(false)
})
