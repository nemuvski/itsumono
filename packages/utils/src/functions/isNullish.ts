import type { Nullish } from '../types/aliases'

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
