/**
 * 引数valueがundefinedである場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isUndefined(value)) {
 *   // この時、valueはundefinedと推論できる
 * }
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}
