import { isPositiveInteger } from './number'
import type { Primitive } from './types/aliases'
import type { NewLineCodeIdentifier, RemoveControlCharsOptions, RemoveZWCharsOptions } from './types/misc'

/**
 * 引数str中の制御文字を取り除いて（空文字に置換）返却
 *
 * 以下はデフォルトで対象とする (16進数が示すコードは、説明欄にあるリンク先を参照)
 * - `0x00-0x08`
 * - `0x0B-0x0C`
 * - `0x0E-0x1F`
 * - `0x7F-0x9F`
 *
 * 以下はオプションで対象とするかを選択可能
 * - `\t` (`0x09`) : Horizontal Tab
 * - `\n` (`0x0A`) : LF
 * - `\r` (`0x0D`) : CR
 *
 * @param str
 * @param options
 * @returns {string}
 * @see {@link https://en.wikipedia.org/wiki/Control_character}
 * @example
 * // 返値: \ttest\n
 * removeControlChars('\ttest\n')
 * // 返値: test
 * removeControlChars('\ttest\n', { htab: true, lf: true })
 */
export function removeControlChars(str: string, options?: RemoveControlCharsOptions) {
  let regexStr = '\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F'
  if (options) {
    if (options.htab) regexStr += '\x09'
    if (options.lf) regexStr += '\x0A'
    if (options.cr) regexStr += '\x0D'
  }
  return str.replace(new RegExp('[' + regexStr + ']', 'g'), '')
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
 * @param numSpaces スペース数（1以上の整数値をとる）
 * @returns {string}
 * @throws {TypeError} numSpacesが1以上の整数値でない場合はエラー
 * @example
 * // 返値: te  st
 * replaceTabWithSpaces('te\tst', 2)
 * // 返値: te st
 * replaceTabWithSpaces('te\tst', 1)
 */
export function replaceTabWithSpaces(str: string, numSpaces: number) {
  if (!isPositiveInteger(numSpaces, false)) {
    throw new TypeError('replaceTabToSpace(): The argument numSpaces expects integer greater than or equal to 1')
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

/**
 * 引数str中の正規表現でエスケープが必要な文字をエスケープしたものを返却
 *
 * @param str
 * @returns {string}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#flags_in_constructor}
 * @example
 * // 返値: test\\-123
 * const escapedStr = escapeRegExpChars('test-123')
 * // RegExpで利用する
 * const reg = new RegExp(escapedStr)
 */
export function escapeRegExpChars(str: string) {
  // NOTE: $&については https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/replace#specifying_a_string_as_the_replacement
  return str.replace(/[.*+\-?^$|{}()[\]\\]/g, '\\$&')
}

/**
 * 引数str(テンプレート)に引数fieldsの値を埋め込んだ文字列を返却
 *
 * @param str テンプレート
 * @param fields 埋め込む値
 * @param transFn 埋め込む際の処理(出力するロジックをカスタマイズしたい場合のみ)
 * @returns {string}
 * @example
 * // 返値: /user/29/post/33
 * strf('/user/{userId}/post/{postId}', { userId: 29, postId: 33 })
 * // 返値: He is Taro YAMADA. Taro is 25 years old.
 * strf(
 *   'He is {last-name} {first-name}. {last-name} is {age} years old.',
 *   { 'last-name': 'Taro', 'first-name': 'yamada'.toUpperCase(), age: 25 }
 * )
 * // 返値: He is Taro YAMADA. Taro is 25 years old.
 * strf(
 *   'He is {last-name} {first-name}. {last-name} is {age} years old.',
 *   { 'last-name': 'Taro', 'first-name': 'yamada', age: 25 },
 *   (fieldName, fieldValue) => {
 *     if (fieldName === 'first-name') {
 *       return fieldValue.toString().toUpperCase()
 *     }
 *     return String(fieldValue).toString()
 *   }
 * )
 * // 返値: true false
 * strf('{t} {f}', { t: true, f: false })
 * // 返値: null undefined
 * strf('{n} {und}', { n: null, und: undefined })
 */
export function strf<F extends Record<string, Primitive>>(
  str: string,
  fields: F,
  transFn: (fieldName: keyof F, fieldValue: F[keyof F]) => string = (n, v) => String(v).toString()
) {
  if (!Object.keys(fields).length) {
    return str
  }
  const fieldNamesPattern = Object.keys(fields)
    .map((k) => escapeRegExpChars(k))
    .join('|')
  return str.replace(new RegExp(`\\{(${fieldNamesPattern})\\}`, 'g'), (substring) => {
    // 先頭と末尾の波括弧を除いたものをフィールド名とする
    const fieldName = substring.slice(1).slice(0, -1)
    if (Object.hasOwn(fields, fieldName)) {
      return transFn(fieldName, fields[fieldName] as F[keyof F])
    }
    // 埋め込むフィールドがない場合はそのままとする
    return substring
  })
}
