import { expect, test } from 'vitest'
import { getHashFragment } from '../../src'

test('getHashFragment()', () => {
  expect(getHashFragment('https://localhost:8080?test=32')).toBe('')
  expect(getHashFragment(new URL('https://localhost:8080?test=32#hash-fragment'))).toBe('hash-fragment')
  expect(getHashFragment('https://localhost:8080?test=32#hash-fragment')).toBe('hash-fragment')
  expect(getHashFragment('https://localhost:8080?test=32#hash_fragment')).toBe('hash_fragment')
  expect(getHashFragment('https://localhost:8080?test=32#hash+fragment')).toBe('hash fragment')
  expect(getHashFragment('https://localhost:8080?test=32#%E3%83%86%E3%82%B9%E3%83%88')).toBe('テスト')
  expect(() => getHashFragment('https://localhost:8080?test=32#%E0%A4%A')).toThrowError(URIError)
})
