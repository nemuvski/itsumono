import { isPositiveInteger } from './number'

/**
 * 引数str中の制御文字を取り除いて（空文字に置換）返却
 *
 * @param str
 * @param excludeCRLF CRLFは置換対象から除く場合はTrueを設定（デフォルト:False）
 * @returns {string}
 * @see {@link https://en.wikipedia.org/wiki/Control_character}
 * @example
 * // 返値: test@example.com
 * removeControlChars('t\be\fs\vt\0@example.com')
 * // 返値: te\r\ns\nt
 * removeControlChars('t\te\r\ns\nt', true)
 */
export function removeControlChars(str: string, excludeCRLF = false) {
  // eslint-disable-next-line no-control-regex
  const regex = new RegExp(excludeCRLF ? /[\x00-\x09\v\f\x0E-\x1F\x7F-\x9F]/ : /[\x00-\x1F\x7F-\x9F]/, 'g')
  return str.replace(regex, '')
}

/**
 * 引数str中のタブをスペースに置換
 *
 * @param str
 * @param numSpaces スペース数（0以上の整数値をとる）
 * @returns {string}
 * @throws {TypeError} numSpacesが0以上の整数値でない場合はエラー
 * @example
 * // 返値: te  st
 * replaceTabWithSpaces('te\tst', 2)
 * // 返値: test
 * replaceTabWithSpaces('te\tst', 0)
 */
export function replaceTabWithSpaces(str: string, numSpaces: number) {
  if (!isPositiveInteger(numSpaces, true)) {
    throw new TypeError('replaceTabToSpace(): The argument numSpaces expects integer greater than or equal to 0')
  }
  const spaces = new Array(numSpaces).fill(' ').join('')
  return str.replace(/\t/g, spaces)
}

/**
 * 引数str中のスペースをタブに置換
 *
 * @param str
 * @param numSpaces スペース数（1以上の整数値をとる）
 * @returns {string}
 * @throws {TypeError} numSpacesが1以上の整数値でない場合はエラー
 * @example
 * // 返値: \ttest
 * replaceSpacesWithTab('  test', 2)
 */
export function replaceSpacesWithTab(str: string, numSpaces: number) {
  if (!isPositiveInteger(numSpaces, false)) {
    throw new TypeError('replaceSpacesWithTab(): The argument numSpaces expects integer greater than or equal to 1')
  }
  const regex = new RegExp(`[ ]{${numSpaces}}`, 'g')
  return str.replace(regex, '\t')
}

/**
 * 引数str中の改行コード（CR、LF、CRLF）を引数replaceCodeで指定した改行コードに置換
 *
 * @param str
 * @param replaceCode （デフォルト:LF）
 * @returns {string}
 * @throws {TypeError} replaceCodeがLF,CR,CRLF以外の場合はエラー
 * @example
 * // 返値: t\n\n\te\ns\nt
 * replaceNewLineChars('t\r\n\r\te\rs\nt')
 * // 返値: t\r\n\r\n\te\r\ns\r\nt
 * replaceNewLineChars('t\r\n\r\te\rs\nt', 'CRLF')
 */
export function replaceNewLineChars(str: string, replaceCode: 'LF' | 'CR' | 'CRLF' = 'LF') {
  let replaceChar: string | undefined
  if (replaceCode === 'LF') {
    replaceChar = '\n'
  } else if (replaceCode === 'CR') {
    replaceChar = '\r'
  } else if (replaceCode === 'CRLF') {
    replaceChar = '\r\n'
  }
  if (!replaceChar) {
    throw new TypeError('replaceNewLineChars(): The argument replaceCode expects CR, LF, or CRLF.')
  }
  return str.replace(/\r\n|\r|\n/g, replaceChar)
}
