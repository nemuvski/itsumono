import type { Falsy } from '../types/aliases'

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
