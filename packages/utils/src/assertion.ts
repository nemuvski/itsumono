import { Falsy, Nullish, Primitive } from './types/aliases'

/**
 * 引数valueがNullish値ではない場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isNotNullish<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null
}

/**
 * 引数valueがNullish値である場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isNullish(value: unknown): value is Nullish {
  return value === undefined || value === null
}

/**
 * 引数valueがプリミティブ値である場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isPrimitive(value: unknown): value is Primitive {
  return (
    value === undefined ||
    value === null ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'bigint' ||
    typeof value === 'boolean' ||
    typeof value === 'symbol'
  )
}

/**
 * 引数valueがFalsy値である場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 */
export function isFalsy(value: unknown): value is Falsy {
  return !value
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
