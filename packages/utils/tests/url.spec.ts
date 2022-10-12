import {
  removeHashFragment,
  containParamInUrl,
  getQueryString,
  getHashFragment,
  getQueryParamValue,
  buildPath,
  withTrailingSlash,
  removeTrailingSlash,
  withRootRelativePath,
  getQueryParamsValue,
} from '../src/url'

describe('url.ts', () => {
  test('buildPath()', () => {
    expect(buildPath('/', 'path/to/', 'test')).toBe('path/to/test')
    expect(buildPath('path/to///', null, undefined, 'test')).toBe('path/to/test')
    expect(buildPath('path/to', '///', 'test/')).toBe('path/to/test')
    expect(buildPath('    ', 'test/')).toBe('test')
    expect(buildPath('/blog', 120)).toBe('/blog/120')
    expect(buildPath('  /blog  ', 120, '/')).toBe('/blog/120')
  })

  test('removeHashFragment()', () => {
    expect(removeHashFragment('https://localhost:8080?test=32#hash-fragment')).toBe('https://localhost:8080?test=32')
    expect(removeHashFragment('https://localhost:8080#?test=32')).toBe('https://localhost:8080')
  })

  test('getHashFragment()', () => {
    expect(getHashFragment('https://localhost:8080?test=32#hash-fragment')).toBe('hash-fragment')
    expect(getHashFragment('https://localhost:8080?test=32#hash_fragment')).toBe('hash_fragment')
    expect(getHashFragment('https://localhost:8080?test=32#hash+fragment')).toBe('hash fragment')
    expect(getHashFragment('https://localhost:8080?test=32#%E3%83%86%E3%82%B9%E3%83%88')).toBe('テスト')
  })

  test('removeTrailingSlash()', () => {
    expect(removeTrailingSlash('https://localhost:8080')).toBe('https://localhost:8080')
    expect(removeTrailingSlash('https://localhost:8080/')).toBe('https://localhost:8080')
    expect(removeTrailingSlash('https://localhost:8080//')).toBe('https://localhost:8080')
  })

  test('withTrailingSlash()', () => {
    expect(withTrailingSlash('https://localhost:8080')).toBe('https://localhost:8080/')
    expect(withTrailingSlash('https://localhost:8080/')).toBe('https://localhost:8080/')
    expect(withTrailingSlash('https://localhost:8080//')).toBe('https://localhost:8080/')
  })

  test('withRootRelativePath()', () => {
    expect(withRootRelativePath('path/to/test')).toBe('/path/to/test')
    expect(withRootRelativePath('/path/to/test')).toBe('/path/to/test')
    expect(withRootRelativePath('  path/to/test  ')).toBe('/path/to/test')
    expect(withRootRelativePath('  /path/to/test  ')).toBe('/path/to/test')
  })

  test('getQueryString()', () => {
    expect(getQueryString('https://localhost:8080?test1=3+2&test2=%E3%82%A2#fragment')).toBe('?test1=3 2&test2=ア')
    expect(getQueryString('/path/to/?test1=3+2&test2=%E3%82%A2#fragment')).toBe('?test1=3 2&test2=ア')
    expect(getQueryString('?test1=3+2&test2=%E3%82%A2#fragment')).toBe('?test1=3 2&test2=ア')
    expect(getQueryString('https://localhost:8080?#test1=3+2&test2=%E3%82%A2')).toBe('?')
    expect(getQueryString('https://localhost:8080#?test1=3+2&test2=%E3%82%A2')).toBe('')
    expect(getQueryString('https://localhost:8080/#?test1=32&test2=%E3%82%A2')).toBe('')
  })

  test('containParamInUrl()', () => {
    expect(containParamInUrl('https://localhost:8080', 'test')).toBe(false)
    expect(containParamInUrl('https://localhost:8080/?test1=32', 'test')).toBe(false)
    expect(containParamInUrl('https://localhost:8080/?_test=32', '_test')).toBe(true)
    expect(containParamInUrl('https://localhost:8080/?test()=32', 'test()')).toBe(true)
    expect(containParamInUrl('https://localhost:8080/?test[]=32', 'test[]')).toBe(true)
    expect(containParamInUrl('https://localhost:8080/?test{}=32', 'test{}')).toBe(true)
    expect(containParamInUrl('https://localhost:8080/?@!test=32', '@!test')).toBe(true)
    expect(containParamInUrl('https://localhost:8080/?te.st=32', 'te.st')).toBe(true)
    expect(containParamInUrl('https://localhost:8080?test1=32&test2=', 'test')).toBe(false)
    expect(containParamInUrl('https://localhost:8080?#test=', 'test')).toBe(false)
    expect(containParamInUrl(new URL('https://localhost:8080?test=32'), 'test')).toBe(true)
    expect(containParamInUrl(new URL('https://localhost:8080?_test='), '_test')).toBe(true)
    expect(containParamInUrl(new URL('https://localhost:8080?test()='), 'test()')).toBe(true)
    expect(containParamInUrl(new URL('https://localhost:8080?test[]='), 'test[]')).toBe(true)
    expect(containParamInUrl(new URL('https://localhost:8080?test{}='), 'test{}')).toBe(true)
    expect(containParamInUrl(new URL('https://localhost:8080?@!test='), '@!test')).toBe(true)
    expect(containParamInUrl(new URL('https://localhost:8080?te.st='), 'te.st')).toBe(true)
    expect(containParamInUrl(new URL('https://localhost:8080#?test='), 'test')).toBe(false)
    expect(containParamInUrl(new URL('https://localhost:8080?#test='), 'test')).toBe(false)
  })

  test('getQueryParamValue()', () => {
    expect(getQueryParamValue('https://localhost:8080', 'test')).toBe(null)
    expect(getQueryParamValue('https://localhost:8080/?test1=32', 'test')).toBe(null)
    expect(getQueryParamValue('https://localhost:8080/#?test=32', 'test')).toBe(null)
    expect(getQueryParamValue('https://localhost:8080?test=', 'test')).toBe('')
    expect(getQueryParamValue('https://localhost:8080?_test=33', '_test')).toBe('33')
    expect(getQueryParamValue('https://localhost:8080?test()=33', 'test()')).toBe('33')
    expect(getQueryParamValue('https://localhost:8080?test=%E3%82%A2', 'test')).toBe('ア')
    expect(getQueryParamValue(new URL('https://localhost:8080?test=%E3%83%86%E3%82%B9%E3%83%88'), 'test')).toBe(
      'テスト'
    )
    expect(getQueryParamValue(new URL('https://localhost:8080?test='), 'test')).toBe('')
    expect(getQueryParamValue(new URL('https://localhost:8080'), 'test')).toBe(null)
  })

  test('getQueryParamsValue()', () => {
    // expect(getQueryParamsValue())
    const p = getQueryParamsValue<'test' | 'daas'>('https://localhost:8080?test1=3+2&test2=%E3%82%A2#fragment', [
      'test',
    ])
  })
})
