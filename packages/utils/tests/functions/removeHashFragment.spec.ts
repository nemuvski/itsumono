import { removeHashFragment } from '../../src'

test('removeHashFragment()', () => {
  expect(removeHashFragment('https://localhost:8080?test=32#hash-fragment')).toBe('https://localhost:8080?test=32')
  expect(removeHashFragment('https://localhost:8080#?test=32')).toBe('https://localhost:8080')
})
