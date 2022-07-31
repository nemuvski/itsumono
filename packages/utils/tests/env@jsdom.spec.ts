/**
 * @jest-environment jsdom
 */

import { isBrowser } from '../src/env'

describe('env.ts', () => {
  test('isBrowser()', () => {
    expect(isBrowser()).toBe(true)
  })
})
