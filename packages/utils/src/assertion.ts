/**
 * 引数valueがnull/undefinedではない場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isNotNullish<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null
}

/**
 * 引数valueがnumberの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

/**
 * 引数valueがstringの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * 引数valueがbooleanの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * 引数valueがDateオブジェクトの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date
}
