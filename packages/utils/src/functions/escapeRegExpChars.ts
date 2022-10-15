/**
 * 引数str中の正規表現でエスケープが必要な文字をエスケープしたものを返却
 *
 * @param str
 * @returns {string}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#flags_in_constructor}
 * @example
 * // 返値: test\\-123
 * const escapedStr = escapeRegExpChars('test-123')
 *
 * // RegExpで利用する
 * const reg = new RegExp(escapedStr)
 */
export function escapeRegExpChars(str: string) {
  // NOTE: $&については https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/replace#specifying_a_string_as_the_replacement
  return str.replace(/[.*+\-?^$|{}()[\]\\]/g, '\\$&')
}
