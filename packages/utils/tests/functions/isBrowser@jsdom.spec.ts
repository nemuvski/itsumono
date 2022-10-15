/**
 * @jest-environment jsdom
 */

import { isBrowser } from '../../src'

test('isBrowser()', () => {
  expect(isBrowser()).toBe(true)
})
