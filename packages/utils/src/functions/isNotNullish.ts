/**
 * 引数valueがNullish値ではない場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isNotNullish(value)) {
 *   // この時、valueはnumber値と推論できる
 * }
 */
export function isNotNullish<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null
}
