/**
 * 引数valueがundefinedである場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isNull(value)) {
 *   // この時、valueはnullと推論できる
 * }
 */
export function isNull(value: unknown): value is null {
  return value === null
}
