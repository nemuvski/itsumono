/**
 * isNumberInRange()の引数intervalの型
 */
export type IntervalSymbolIdentifier = '[]' | '(]' | '[)' | '()'

/**
 * 引数valueが指定した最小値、最大値以内の場合はTrueを返却
 *
 * @param value
 * @param minValue
 * @param maxValue
 * @param interval 区間記号 []: min以上max以下, (]: minより大きいmax以下, [): min以上max未満, (): minより大きくmax未満
 * @returns {boolean}
 * @example
 * // 返値: true
 * isNumberInRange(3, 3, 5)
 *
 * // 返値: false
 * isNumberInRange(3, 3, 5, '(]')
 *
 * // 返値: true
 * isNumberInRange(3, 3, 5, '[)')
 *
 * // 返値: false
 * isNumberInRange(5, 3, 5, '()')
 */
export function isNumberInRange(
  value: number,
  minValue: number,
  maxValue: number,
  interval: IntervalSymbolIdentifier = '[]'
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
