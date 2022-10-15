/**
 * @jest-environment node
 */

import { isBrowser } from '../../src'

test('isBrowser()', () => {
  expect(isBrowser()).toBe(false)
})
