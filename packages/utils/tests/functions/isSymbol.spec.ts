import { isSymbol } from '../../src'

test('isSymbol', () => {
  expect(isSymbol('a')).toBe(false)
  expect(isSymbol(Symbol('a'))).toBe(true)
  expect(isSymbol(Symbol(3))).toBe(true)
})
