/**
 * removeZWChars()の引数optionsの型
 */
export type RemoveZWCharsOptions = {
  zwnj?: boolean
  zwj?: boolean
  lrm?: boolean
  rlm?: boolean
  zwnbsp?: boolean
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
 *
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
