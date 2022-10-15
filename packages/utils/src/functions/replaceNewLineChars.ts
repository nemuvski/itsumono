/**
 * replaceNewLineChars()の引数replaceCodeの型
 */
export type NewLineCodeIdentifier = 'LF' | 'CR' | 'CRLF'

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
 *
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
