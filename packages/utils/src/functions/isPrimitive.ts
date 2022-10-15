import type { Primitive } from '../types/aliases'

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
