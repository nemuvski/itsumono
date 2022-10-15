/**
 * 引数valueが有限数（InfinityまたはNaNでない）である場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * // 返値: true
 * isFiniteNumber(10)
 *
 * // 返値: false
 * isFiniteNumber(NaN)
 */
export function isFiniteNumber(value: number) {
  return Number.isFinite(value)
}
