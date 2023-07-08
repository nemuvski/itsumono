import { test, expect } from 'vitest'
import { strf } from '../../src'

test('strf()', () => {
  expect(strf('hello {}', {})).toBe('hello {}')
  expect(strf('{0} {1} {2} {3} {0}', { 0: 'Grape' })).toBe('Grape {1} {2} {3} Grape')
  expect(strf('{0} {1} {2} {3} {0}', { 0: '{1}', 1: '{2}' })).toBe('{1} {2} {2} {3} {1}')
  expect(strf('{C-3PO}', { 'C-3PO': 'Thank the maker!' })).toBe('Thank the maker!')
  expect(strf('{Who R U?}\n{I am ...}', { 'Who R U?': 'Who are you?', 'I am ...': 'I am Jar Jar Binks.' })).toBe(
    'Who are you?\nI am Jar Jar Binks.'
  )
  expect(strf('/user/{id}', { id: 29 })).toBe('/user/29')
  expect(strf('/user/{userId}/post/{postId}', { userId: 29, postId: 33 })).toBe('/user/29/post/33')
  // @ts-ignore: 29n
  expect(strf('/user/{id}/', { id: 29n })).toBe('/user/29/')
  expect(strf('{t} {f}', { t: true, f: false })).toBe('true false')
  expect(strf('{s}', { s: Symbol('シンボル') })).toBe('Symbol(シンボル)')
  expect(strf('{n} {ufd}', { n: null, ufd: undefined })).toBe('null undefined')
  expect(strf('{year}', { year: new Date('August 19, 1975 23:15:30').getFullYear() })).toBe('1975')
  expect(
    strf('He is {last-name} {first-name}. {last-name} is {age} years old.', {
      'last-name': 'Taro',
      'first-name': 'yamada'.toUpperCase(),
      age: 25,
    })
  ).toBe('He is Taro YAMADA. Taro is 25 years old.')
  expect(
    strf(
      'He is {last-name} {first-name}. {last-name} is {age} years old.',
      { 'last-name': 'Taro', 'first-name': 'yamada', age: 25 },
      (fieldName, fieldValue) => {
        if (fieldName === 'first-name') {
          return fieldValue.toString().toUpperCase()
        }
        return String(fieldValue).toString()
      }
    )
  ).toBe('He is Taro YAMADA. Taro is 25 years old.')
})
