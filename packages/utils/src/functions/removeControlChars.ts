/**
 * removeControlChars()の引数optionsの型
 */
export type RemoveControlCharsOptions = {
  htab?: boolean
  lf?: boolean
  cr?: boolean
}

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
 *
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
