import { cls } from '../../src'

test('cls()', () => {
  expect(cls('box box--lg')).toBe('box box--lg')
  expect(cls('.box')).toBe('.box')
  expect(cls('.box', { trimPeriod: true })).toBe('box')
  expect(cls([100, 100.01], { trimPeriod: true })).toBe('100 10001')
  expect(cls({ hello: true, 'is-open': true, 'is-close': false })).toBe('hello is-open')
  expect(cls([null, undefined, true, false])).toBe('')
  expect(cls(['test', 100, { hello: true, 'is-open': true, 'is-close': false }])).toBe('test 100 hello is-open')

  const isOpen = true
  expect(cls(['button', isOpen && 'is-open', !isOpen && 'is-close'])).toBe('button is-open')
  expect(cls(['button', { isOpen, 'is-open': isOpen, 'is-close': !isOpen }])).toBe('button isOpen is-open')
})
