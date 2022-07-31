/**
 * @jest-environment node
 */

import { isBrowser } from '../src/env'

describe('env.ts', () => {
  test('isBrowser()', () => {
    expect(isBrowser()).toBe(false)
  })
})
