/**
 * 引数valueがURLオブジェクトの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * const url = getCurrentPageURLObject()
 * if (isURL(url)) {
 *   // この時、valueはURLオブジェクトと推論できる
 * }
 */
export function isURL(value: unknown): value is URL {
  return value instanceof URL
}
