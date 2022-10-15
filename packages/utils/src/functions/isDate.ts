/**
 * 引数valueがDateオブジェクトの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isDate(value)) {
 *   // この時、valueはDateオブジェクトと推論できる
 * }
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date
}
