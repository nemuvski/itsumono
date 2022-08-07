import { removeControlChars, replaceNewLineChars, replaceSpacesWithTab, replaceTabWithSpaces } from '../src/string'

describe('string.ts', () => {
  test('removeControlChars()', () => {
    expect(removeControlChars('t\te\rs\nt')).toBe('test')
    expect(removeControlChars('t\te\rs\nt\r\n', false)).toBe('test')
    expect(removeControlChars('t\te\r\ns\nt', true)).toBe('te\r\ns\nt')
    expect(removeControlChars('t\be\fs\vt\0@example.com')).toBe('test@example.com')
  })

  test('replaceTabWithSpaces()', () => {
    expect(replaceTabWithSpaces('\ttest', 2)).toBe('  test')
    expect(replaceTabWithSpaces('t\te\ts\tt', 1)).toBe('t e s t')
    expect(replaceTabWithSpaces('t\te\ts\tt', 0)).toBe('test')
    expect(() => {
      replaceTabWithSpaces('t\te\ts\tt', 1.1)
    }).toThrowError('replaceTabToSpace(): The argument numSpaces expects integer greater than or equal to 0')
    expect(() => {
      replaceTabWithSpaces('t\te\ts\tt', -1)
    }).toThrowError('replaceTabToSpace(): The argument numSpaces expects integer greater than or equal to 0')
  })

  test('replaceSpacesWithTab()', () => {
    expect(replaceSpacesWithTab('  test', 2)).toBe('\ttest')
    expect(replaceSpacesWithTab('    test', 2)).toBe('\t\ttest')
    expect(replaceSpacesWithTab('     test', 2)).toBe('\t\t test')
    expect(() => {
      replaceSpacesWithTab('test', 0)
    }).toThrowError('replaceSpacesWithTab(): The argument numSpaces expects integer greater than or equal to 1')
  })

  test('replaceNewLineChars()', () => {
    expect(replaceNewLineChars('t\r\n\r\te\rs\nt')).toBe('t\n\n\te\ns\nt')
    expect(replaceNewLineChars('t\r\n\r\te\rs\nt', 'LF')).toBe('t\n\n\te\ns\nt')
    expect(replaceNewLineChars('t\r\n\r\te\rs\nt', 'CR')).toBe('t\r\r\te\rs\rt')
    expect(replaceNewLineChars('t\r\n\r\te\rs\nt', 'CRLF')).toBe('t\r\n\r\n\te\r\ns\r\nt')
  })
})
