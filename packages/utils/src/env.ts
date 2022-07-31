/**
 * ブラウザでの実行の場合はTrueを返却する
 * ※ 判定はdocumentとwindowがundefinedではないことで評価している
 *
 * @returns {boolean}
 * @example
 * if (isBrowser()) {
 *   const nodeCollection = document.getElementsByClassName('sample')
 * }
 */
export function isBrowser() {
  return typeof document !== 'undefined' && typeof window !== 'undefined'
}
