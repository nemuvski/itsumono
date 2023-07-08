import { test, expect } from 'vitest'
import { removeTrailingSlash } from '../../src'

test('removeTrailingSlash()', () => {
  expect(removeTrailingSlash('https://localhost:8080')).toBe('https://localhost:8080')
  expect(removeTrailingSlash('https://localhost:8080/')).toBe('https://localhost:8080')
  expect(removeTrailingSlash('https://localhost:8080//')).toBe('https://localhost:8080')
})
