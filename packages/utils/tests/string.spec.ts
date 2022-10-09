import {
  escapeRegExpChars,
  removeControlChars,
  removeZWChars,
  replaceFwAlphanumericsWithHw,
  replaceHwAlphanumericsWithFw,
  replaceNewLineChars,
  replaceSpacesWithTab,
  replaceTabWithSpaces,
  strf,
} from '../src/string'

describe('string.ts', () => {
  test('removeControlChars()', () => {
    expect(removeControlChars('t\te\rs\nt\r\n')).toBe('t\te\rs\nt\r\n')
    expect(removeControlChars('t\te\rs\nt\r\n', { htab: false, lf: false, cr: false })).toBe('t\te\rs\nt\r\n')
    expect(removeControlChars('t\te\rs\nt\r\n', { htab: true })).toBe('te\rs\nt\r\n')
    expect(removeControlChars('t\te\rs\nt\r\n', { lf: true })).toBe('t\te\rst\r')
    expect(removeControlChars('t\te\rs\nt\r\n', { cr: true })).toBe('t\tes\nt\n')
    expect(
      removeControlChars(['\0\b', '\t', '\n', '\x0B\x0C', '\r', '\x0E\x1F', '\x7F\x9F'].join(''), {
        htab: false,
        lf: false,
        cr: false,
      })
    ).toBe('\t\n\r')
    expect(
      removeControlChars(['\0\b', '\t', '\n', '\x0B\x0C', '\r', '\x0E\x1F', '\x7F\x9F'].join(''), {
        htab: true,
        lf: true,
        cr: true,
      })
    ).toBe('')
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

  test('escapeRegExpChars()', () => {
    expect(escapeRegExpChars('a 0')).toBe('a 0')
    expect(escapeRegExpChars('.')).toBe('\\.')
    expect(escapeRegExpChars('*')).toBe('\\*')
    expect(escapeRegExpChars('+')).toBe('\\+')
    expect(escapeRegExpChars('-')).toBe('\\-')
    expect(escapeRegExpChars('?')).toBe('\\?')
    expect(escapeRegExpChars('^')).toBe('\\^')
    expect(escapeRegExpChars('$')).toBe('\\$')
    expect(escapeRegExpChars('|')).toBe('\\|')
    expect(escapeRegExpChars('{}')).toBe('\\{\\}')
    expect(escapeRegExpChars('()')).toBe('\\(\\)')
    expect(escapeRegExpChars('[]')).toBe('\\[\\]')
    expect(escapeRegExpChars('\\')).toBe('\\\\')
    expect(escapeRegExpChars('test-123')).toBe('test\\-123')

    const escapedStr = escapeRegExpChars('test-123')
    const reg = new RegExp(escapedStr)
    expect('test-1234'.replace(reg, 'OK')).toBe('OK4')
  })

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
})
