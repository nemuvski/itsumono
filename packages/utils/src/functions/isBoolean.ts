/**
 * 引数valueがbooleanの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isBoolean(value)) {
 *   // この時、valueはboolean値であると推論できる
 * }
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}
