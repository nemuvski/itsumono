import { getQueryParamsValue } from '../../src'

test('getQueryParamsValue()', () => {
  expect(
    getQueryParamsValue('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment', [
      'test1',
      'test2',
      'test3',
    ])
  ).toEqual({
    test1: ['3 2', '56'],
    test2: ['ア'],
    test3: [],
  })
  expect(
    getQueryParamsValue('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment', ['test0', 'test-1'])
  ).toEqual({
    test0: [],
    'test-1': [],
  })
  expect(
    getQueryParamsValue('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment', ['test1', 'test2'])
  ).toEqual({
    test1: ['3 2', '56'],
    test2: ['ア'],
  })
  expect(
    getQueryParamsValue('https://localhost:8080?test[]=32&test[]=%E3%82%A2&test[]=56#fragment', ['test[]'])
  ).toEqual({
    'test[]': ['32', 'ア', '56'],
  })
  expect(
    getQueryParamsValue('https://localhost:8080?test[]=32&test[]=%E3%82%A2&test[]=56&=3&.=#fragment', [
      'test[]',
      '',
      '.',
    ])
  ).toEqual({
    'test[]': ['32', 'ア', '56'],
    '': ['3'],
    '.': [''],
  })

  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment').search, [
      'test1',
      'test2',
      'test3',
    ])
  ).toEqual({
    test1: ['3 2', '56'],
    test2: ['ア'],
    test3: [],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment').search, [
      'test0',
      'test-1',
    ])
  ).toEqual({
    test0: [],
    'test-1': [],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment').search, [
      'test1',
      'test2',
    ])
  ).toEqual({
    test1: ['3 2', '56'],
    test2: ['ア'],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test[]=32&test[]=%E3%82%A2&test[]=56#fragment').search, [
      'test[]',
    ])
  ).toEqual({
    'test[]': ['32', 'ア', '56'],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test[]=32&test[]=%E3%82%A2&test[]=56&=3&.=#fragment').search, [
      'test[]',
      '',
      '.',
    ])
  ).toEqual({
    'test[]': ['32', 'ア', '56'],
    '': ['3'],
    '.': [''],
  })

  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment'), [
      'test1',
      'test2',
      'test3',
    ])
  ).toEqual({
    test1: ['3 2', '56'],
    test2: ['ア'],
    test3: [],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment'), [
      'test0',
      'test-1',
    ])
  ).toEqual({
    test0: [],
    'test-1': [],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment'), [
      'test1',
      'test2',
    ])
  ).toEqual({
    test1: ['3 2', '56'],
    test2: ['ア'],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test[]=32&test[]=%E3%82%A2&test[]=56#fragment'), ['test[]'])
  ).toEqual({
    'test[]': ['32', 'ア', '56'],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test[]=32&test[]=%E3%82%A2&test[]=56&=3&.=#fragment'), [
      'test[]',
      '',
      '.',
    ])
  ).toEqual({
    'test[]': ['32', 'ア', '56'],
    '': ['3'],
    '.': [''],
  })

  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment').searchParams, [
      'test1',
      'test2',
      'test3',
    ])
  ).toEqual({
    test1: ['3 2', '56'],
    test2: ['ア'],
    test3: [],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment').searchParams, [
      'test0',
      'test-1',
    ])
  ).toEqual({
    test0: [],
    'test-1': [],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment').searchParams, [
      'test1',
      'test2',
    ])
  ).toEqual({
    test1: ['3 2', '56'],
    test2: ['ア'],
  })
  expect(
    getQueryParamsValue(new URL('https://localhost:8080?test[]=32&test[]=%E3%82%A2&test[]=56#fragment').searchParams, [
      'test[]',
    ])
  ).toEqual({
    'test[]': ['32', 'ア', '56'],
  })
  expect(
    getQueryParamsValue(
      new URL('https://localhost:8080?test[]=32&test[]=%E3%82%A2&test[]=56&=3&.=#fragment').searchParams,
      ['test[]', '', '.']
    )
  ).toEqual({
    'test[]': ['32', 'ア', '56'],
    '': ['3'],
    '.': [''],
  })
})
