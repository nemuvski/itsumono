/**
 * 引数valueがnumberの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isNumber(value)) {
 *   // この時、valueはnumber値と推論できる
 * }
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}
