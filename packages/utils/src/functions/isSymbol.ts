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
