import { isPositiveInteger } from './number'
import type { NewLineCodeIdentifier, RemoveZWCharsOptions } from './types/misc'

/**
 * 引数str中の制御文字を取り除いて（空文字に置換）返却
 *
 * @param str
 * @param excludeCRLF CRとLF（改行コード）文字は置換対象から除く場合はTrueを設定（デフォルト:False）
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
 * 引数str中のZeroWidth関連の文字を取り除いて（空文字に置換）返却
 *
 * 以下はデフォルトで対象とする
 * - `\u200B` : ZERO WIDTH SPACE
 *
 * 以下はオプションで対象とするかを選択可能
 * - `\u200C` : ZERO WIDTH NON-JOINER (ZWNJ)
 * - `\u200D` : ZERO WIDTH JOINER (ZWJ)
 * - `\u200E` : LEFT TO RIGHT MARK (LRM)
 * - `\u200F` : RIGHT TO LEFT MARK (RLM)
 * - `\uFEFF` : ZERO WIDTH NO-BREAK SPACE (ZWNBSP)
 *
 * @param str
 * @param options デフォルト以外を対象とする場合に設定
 * @returns {string}
 * @example
 * // 返値: te\u200Cst
 * removeZWChars('te\u200B\u200Cst')
 * // 返値: test
 * removeZWChars('te\u200Bst\u200C', { zwnj: true })
 */
export function removeZWChars(str: string, options?: RemoveZWCharsOptions) {
  let regexStr = '\u200b'
  if (options) {
    if (options.zwnj) regexStr += '\u200c'
    if (options.zwj) regexStr += '\u200d'
    if (options.lrm) regexStr += '\u200e'
    if (options.rlm) regexStr += '\u200f'
    if (options.zwnbsp) regexStr += '\ufeff'
  }
  return str.replace(new RegExp('[' + regexStr + ']', 'g'), '')
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
export function replaceNewLineChars(str: string, replaceCode: NewLineCodeIdentifier = 'LF') {
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

/**
 * 全角(Full-width)英数字を半角(Half-width)英数字に置換
 *
 * 以下を対象とする
 * - `０-９` → `0-9`
 * - `ａ-ｚ` → `a-z`
 * - `Ａ-Ｚ` → `A-Z`
 *
 * @param str
 * @returns {string}
 * @see {@link https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)}
 * @example
 * // 返値: Aa0
 * replaceFwAlphanumericsWithHw('Ａａ０')
 * // 返値: Aa0
 * replaceFwAlphanumericsWithHw('Ａa0')
 */
export function replaceFwAlphanumericsWithHw(str: string) {
  return str.replace(/[\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A]/g, (substring) => {
    // 0xFEE0は0xFF10と0x0030の差分
    return String.fromCharCode(substring.charCodeAt(0) - 0xfee0)
  })
}

/**
 * 半角(Half-width)英数字を全角(Full-width)英数字に置換
 *
 * 以下を対象とする
 * - `0-9` → `０-９`
 * - `a-z` → `ａ-ｚ`
 * - `A-Z` → `Ａ-Ｚ`
 *
 * @param str
 * @returns {string}
 * @see {@link https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)}
 * @example
 * // 返値: Ａａ０
 * replaceFwAlphanumericsWithHw('Aa0')
 * // 返値: Ａａ０
 * replaceFwAlphanumericsWithHw('Ａa0')
 */
export function replaceHwAlphanumericsWithFw(str: string) {
  return str.replace(/[\da-zA-Z]/g, (substring) => {
    // 0xFEE0は0xFF10と0x0030の差分
    return String.fromCharCode(substring.charCodeAt(0) + 0xfee0)
  })
}
