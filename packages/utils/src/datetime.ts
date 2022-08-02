/**
 * 無効なDateオブジェクトである場合はTrueを返却
 *
 * @param date
 * @returns {boolean}
 * @example
 * // 返値: false
 * isInvalidDate(new Date())
 * // 返値: true
 * isInvalidDate(new Date(''))
 */
export function isInvalidDate(date: Date) {
  return date.toString() === 'Invalid Date'
}
