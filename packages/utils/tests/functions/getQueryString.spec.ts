import { expect, test } from 'vitest'
import { getQueryString } from '../../src'

test('getQueryString()', () => {
  expect(getQueryString('https://localhost:8080?test1=3+2&test2=%E3%82%A2#fragment')).toBe('?test1=3 2&test2=ア')
  expect(getQueryString('/path/to/?test1=3+2&test2=%E3%82%A2#fragment')).toBe('?test1=3 2&test2=ア')
  expect(getQueryString('?test1=3+2&test2=%E3%82%A2#fragment')).toBe('?test1=3 2&test2=ア')
  expect(getQueryString('https://localhost:8080?#test1=3+2&test2=%E3%82%A2')).toBe('?')
  expect(getQueryString('https://localhost:8080#?test1=3+2&test2=%E3%82%A2')).toBe('')
  expect(getQueryString('https://localhost:8080/#?test1=32&test2=%E3%82%A2')).toBe('')
  expect(() => getQueryString('https://localhost:8080/?test1=32&test2=%E0%A4%A')).toThrowError(URIError)
})
