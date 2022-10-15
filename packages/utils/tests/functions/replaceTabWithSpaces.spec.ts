import { replaceTabWithSpaces } from '../../src'

test('replaceTabWithSpaces()', () => {
  expect(replaceTabWithSpaces('\ttest', 2)).toBe('  test')
  expect(replaceTabWithSpaces('t\te\ts\tt', 1)).toBe('t e s t')
  expect(() => {
    replaceTabWithSpaces('t\te\ts\tt', 0)
  }).toThrowError('replaceTabToSpace(): The argument numSpaces expects integer greater than or equal to 1')
  expect(() => {
    replaceTabWithSpaces('t\te\ts\tt', 1.1)
  }).toThrowError('replaceTabToSpace(): The argument numSpaces expects integer greater than or equal to 1')
  expect(() => {
    replaceTabWithSpaces('t\te\ts\tt', -1)
  }).toThrowError('replaceTabToSpace(): The argument numSpaces expects integer greater than or equal to 1')
})
