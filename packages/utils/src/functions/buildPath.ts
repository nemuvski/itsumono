import { isNotNullish } from './isNotNullish'
import { isString } from './isString'

/**
 * パスを結合して返却
 *
 * @param paths
 * @returns {string}
 * @example
 * // 返値: path/to/test
 * buildPath('path/to/', null, undefined, 'test')
 *
 * // 返値: path/to/test
 * buildPath('/', 'path/to/', null, undefined, 'test')
 *
 * // 返値: /blog/120
 * buildPath('/blog', 120)
 *
 * // 返値: /blog/120
 * buildPath('  /blog/  ', 120, '/')
 */
export function buildPath(...paths: Array<string | number | null | undefined>) {
  return (
    paths
      .filter((p) => isNotNullish(p))
      // NOTE: 前のfilterでNullish値は通らない
      .map((p, i) => {
        if (isString(p)) {
          if (i === 0) {
            return p.trim().replace(/\/*$/g, '')
          } else {
            return p.trim().replace(/(^\/*|\/*$)/g, '')
          }
        }
        // フォールバック
        return p
      })
      // NOTE: 文字列の場合に空文字を除く
      .filter((p) => {
        if (isString(p)) {
          return p
        }
        // フォールバック
        return true
      })
      .join('/')
  )
}
