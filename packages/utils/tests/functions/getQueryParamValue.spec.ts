import { getQueryParamValue } from '../../src'

test('getQueryParamValue()', () => {
  expect(getQueryParamValue('https://localhost:8080', 'test')).toBe(null)
  expect(getQueryParamValue('https://localhost:8080/?test1=32', 'test')).toBe(null)
  expect(getQueryParamValue('https://localhost:8080/#?test=32', 'test')).toBe(null)
  expect(getQueryParamValue('https://localhost:8080?test=', 'test')).toBe('')
  expect(getQueryParamValue('https://localhost:8080?_test=33', '_test')).toBe('33')
  expect(getQueryParamValue('https://localhost:8080?test()=33', 'test()')).toBe('33')
  expect(getQueryParamValue('https://localhost:8080?test=%E3%82%A2', 'test')).toBe('ア')
  expect(getQueryParamValue(new URL('https://localhost:8080?test=%E3%83%86%E3%82%B9%E3%83%88'), 'test')).toBe('テスト')
  expect(getQueryParamValue(new URL('https://localhost:8080?test='), 'test')).toBe('')
  expect(getQueryParamValue(new URL('https://localhost:8080'), 'test')).toBe(null)
})
