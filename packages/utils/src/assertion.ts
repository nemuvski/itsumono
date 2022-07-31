import { Falsy, Nullish, Primitive } from './types/aliases'

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

/**
 * 引数valueがNullish値である場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isNullish(value)) {
 *   // この時、valueはnullと推論できる
 * }
 */
export function isNullish(value: unknown): value is Nullish {
  return value === undefined || value === null
}

/**
 * 引数valueがプリミティブ値である場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isPrimitive(value)) {
 *   // この時、valueはプリミティブ値と推論できる
 * }
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
 * @example
 * let value = getValueFn()
 * if (isFalsy(value)) {
 *   // この時、valueはFalsy値と推論できる
 * }
 */
export function isFalsy(value: unknown): value is Falsy {
  return !value
}

/**
 * 引数valueがundefinedである場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * let value = getValueFn()
 * if (isUndefined(value)) {
 *   // この時、valueはundefinedと推論できる
 * }
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

/**
 * 引数valueがundefinedである場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * let value = getValueFn()
 * if (isNull(value)) {
 *   // この時、valueはnullと推論できる
 * }
 */
export function isNull(value: unknown): value is null {
  return value === null
}

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

/**
 * 引数valueがbigintの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isBigInt(value)) {
 *   // この時、valueはbigint値と推論できる
 * }
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint'
}

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

/**
 * 引数valueがsymbolの場合はTrueを返却
 *
 * @param value
 * @returns {boolean}
 * @example
 * let value = getValueFn()
 * if (isSymbol(value)) {
 *   // この時、valueはsymbol値と推論できる
 * }
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

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
