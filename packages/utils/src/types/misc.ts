/**
 * 関数や引数等で内部的に利用する
 */

/**
 * removeControlChars()の引数optionsの型
 */
export type RemoveControlCharsOptions = {
  htab?: boolean
  lf?: boolean
  cr?: boolean
}

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
 * replaceNewLineChars()の引数replaceCodeの型
 */
export type NewLineCodeIdentifier = 'LF' | 'CR' | 'CRLF'

/**
 * isNumberInRange()の引数intervalの型
 */
export type IntervalSymbolIdentifier = '[]' | '(]' | '[)' | '()'

/**
 * cls()の引数optionsの型
 */
export type ClsOptions = {
  // ピリオドを削除する場合はTrue
  trimPeriod?: boolean
}
