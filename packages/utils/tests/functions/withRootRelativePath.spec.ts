import { withRootRelativePath } from '../../src'

test('withRootRelativePath()', () => {
  expect(withRootRelativePath('path/to/test')).toBe('/path/to/test')
  expect(withRootRelativePath('/path/to/test')).toBe('/path/to/test')
  expect(withRootRelativePath('  path/to/test  ')).toBe('/path/to/test')
  expect(withRootRelativePath('  /path/to/test  ')).toBe('/path/to/test')
})
