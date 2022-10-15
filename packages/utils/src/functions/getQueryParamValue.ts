import { isString } from './isString'
import { getQueryString } from './getQueryString'
import { escapeRegExpChars } from './escapeRegExpChars'

/**
 * 引数urlで指定したパラメータの値を返却
 * ※ パラメータが存在しない場合はnull
 *
 * @deprecated 将来的にこの関数は削除されます。getQueryParamsValue()を使用してください。
 * @param url
 * @param paramName
 * @returns {string|null}
 * @example
 * // 返値: 32
 * getQueryParamValue('https://localhost:8080?test=32', 'test')
 *
 * // 返値: （※空文字）
 * getQueryParamValue('https://localhost:8080?test=', 'test')
 *
 * // 返値: null
 * getQueryParamValue('https://localhost:8080', 'test')
 *
 * // 返値: 32
 * getQueryParamValue(new URL('https://localhost:8080?test=32'), 'test')
 *
 * // 返値: （※空文字）
 * getQueryParamValue(new URL('https://localhost:8080?test='), 'test')
 *
 * // 返値: null
 * getQueryParamValue(new URL('https://localhost:8080'), 'test')
 */
export function getQueryParamValue<P extends string>(url: string | URL, paramName: P) {
  if (isString(url)) {
    const result = new RegExp('(\\?|&)' + escapeRegExpChars(paramName) + '=([^&]*)').exec(getQueryString(url))
    if (!result) {
      return null
    }
    // 添字2番目（つまり、値の部分）がundefinedではない（空文字を考慮）
    if (result[2] !== undefined) {
      return result[2]
    }
    // フォールバック
    return null
  }
  return url.searchParams.get(paramName)
}
