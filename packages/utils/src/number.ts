import { isString } from './assertion'

/**
 * 引数の数値が正の整数（引数の指定で0を含ませることが可能）である場合はTrueを返却する
 *
 * @param value
 * @param includeZero 0を含ませる場合はTrueを設定
 * @param safety MAX_SAFE_INTEGERを考慮する場合はTrueを設定
 * @returns boolean
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER}
 * @example
 * // 返値: true
 * isPositiveInteger(100)
 * // 返値: false
 * isPositiveInteger(0)
 * // 返値: true
 * isPositiveInteger(0, true)
 */
export function isPositiveInteger(value: number | string, includeZero = false, safety = false) {
  const tempValue = isString(value) ? Number(value) : value
  const isInt = safety ? Number.isSafeInteger(tempValue) : Number.isInteger(tempValue)
  return isInt && tempValue >= (includeZero ? 0 : 1)
}

/**
 * 引数valueが有限数（InfinityまたはNaNでない）である場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isFiniteNumber(value: number) {
  return Number.isFinite(value)
}

/**
 * 引数valueが指定した最小値、最大値以内の場合はTrueを返却
 *
 * @param value
 * @param minValue
 * @param maxValue
 * @param interval 区間記号 []: min以上max以下, (]: minより大きいmax以下, [): min以上max未満, (): minより大きくmax未満
 * @returns {boolean}
 */
export function isNumberInRange(
  value: number,
  minValue: number,
  maxValue: number,
  interval: '[]' | '(]' | '[)' | '()' = '[]'
) {
  if (interval === '(]') {
    return value > minValue && value <= maxValue
  }
  if (interval === '[)') {
    return value >= minValue && value < maxValue
  }
  if (interval === '()') {
    return value > minValue && value < maxValue
  }
  return value >= minValue && value <= maxValue
}
