import { buildPath } from '../../src'

test('buildPath()', () => {
  expect(buildPath('/', 'path/to/', 'test')).toBe('path/to/test')
  expect(buildPath('path/to///', null, undefined, 'test')).toBe('path/to/test')
  expect(buildPath('path/to', '///', 'test/')).toBe('path/to/test')
  expect(buildPath('    ', 'test/')).toBe('test')
  expect(buildPath('/blog', 120)).toBe('/blog/120')
  expect(buildPath('  /blog  ', 120, '/')).toBe('/blog/120')
})
