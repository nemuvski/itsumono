import { isPositiveInteger } from './isPositiveInteger'

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
