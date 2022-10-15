/**
 * 引数urlにあるフラグメントを削除したものを返却
 *
 * @param url
 * @returns {string}
 * @example
 * // 返値: https://localhost:8080?test=32
 * removeHashFragment('https://localhost:8080?test=32#hash-fragment')
 */
export function removeHashFragment(url: string) {
  return url.trim().replace(/#.*/, '')
}
