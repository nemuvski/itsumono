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
