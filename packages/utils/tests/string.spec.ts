import {
  removeControlChars,
  removeZWChars,
  replaceFwAlphanumericsWithHw,
  replaceHwAlphanumericsWithFw,
  replaceNewLineChars,
  replaceSpacesWithTab,
  replaceTabWithSpaces,
} from '../src/string'

describe('string.ts', () => {
  test('removeControlChars()', () => {
    expect(removeControlChars('t\te\rs\nt')).toBe('test')
    expect(removeControlChars('t\te\rs\nt\r\n', false)).toBe('test')
    expect(removeControlChars('t\te\r\ns\nt', true)).toBe('te\r\ns\nt')
    expect(removeControlChars('t\be\fs\vt\0@example.com')).toBe('test@example.com')
  })

  test('removeZWChars()', () => {
    const zwsp = 'a\u200Bb'
    const zwnj = 'a\u200Cb'
    const zwj = 'a\u200Db'
    const lrm = 'a\u200Eb'
    const rlm = 'a\u200Fb'
    const zwnbsp = 'a\uFEFFb'

    expect(
      removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
        zwnj: true,
        zwj: true,
        lrm: true,
        rlm: true,
        zwnbsp: true,
      })
    ).toBe('ab ab ab ab ab ab')
    expect(
      removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
        zwnj: true,
      })
    ).toBe('ab ab a\u200Db a\u200Eb a\u200Fb a\uFEFFb')
    expect(
      removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
        zwj: true,
      })
    ).toBe('ab a\u200Cb ab a\u200Eb a\u200Fb a\uFEFFb')
    expect(
      removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
        lrm: true,
      })
    ).toBe('ab a\u200Cb a\u200Db ab a\u200Fb a\uFEFFb')
    expect(
      removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
        rlm: true,
      })
    ).toBe('ab a\u200Cb a\u200Db a\u200Eb ab a\uFEFFb')
    expect(
      removeZWChars([zwsp, zwnj, zwj, lrm, rlm, zwnbsp].join(' '), {
        zwnbsp: true,
      })
    ).toBe('ab a\u200Cb a\u200Db a\u200Eb a\u200Fb ab')

    expect(removeZWChars('🙇‍♀️')).toBe('🙇‍♀️')
  })

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

  test('replaceFwAlphanumericsWithHw()', () => {
    expect(replaceFwAlphanumericsWithHw('０-９ａ-ｚＡ-Ｚ')).toBe('0-9a-zA-Z')
    expect(replaceFwAlphanumericsWithHw('0-9a-zA-Z')).toBe('0-9a-zA-Z')
  })

  test('replaceHwAlphanumericsWithFw()', () => {
    expect(replaceHwAlphanumericsWithFw('0-9a-zA-Z')).toBe('０-９ａ-ｚＡ-Ｚ')
    expect(replaceHwAlphanumericsWithFw('０-９ａ-ｚＡ-Ｚ')).toBe('０-９ａ-ｚＡ-Ｚ')
  })
})
