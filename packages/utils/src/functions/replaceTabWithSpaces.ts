import { isPositiveInteger } from './isPositiveInteger'

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
 *
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
