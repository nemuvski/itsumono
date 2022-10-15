/**
 * 引数valueがstringの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isString(value)) {
 *   // この時、valueはstring値と推論できる
 * }
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}
