import { isString } from './isString'
import { getQueryString } from './getQueryString'
import { isURL } from './isURL'
import { escapeRegExpChars } from './escapeRegExpChars'

/**
 * 引数urlで指定したパラメータ名が存在する場合はTrueを返却
 * ※ パラメータがとる値によらない点に注意
 *
 * @param url
 * @param paramName
 * @returns {boolean}
 * @example
 * // 返値: true
 * containParamInUrl('https://localhost:8080?test=32', 'test')
 *
 * // 返値: false
 * containParamInUrl('https://localhost:8080?test1=32', 'test')
 *
 * // 返値: true
 * containParamInUrl(new URL('https://localhost:8080?test=32'), 'test')
 *
 * // 返値: false
 * containParamInUrl(new URL('https://localhost:8080?test1=32'), 'test')
 */
export function containParamInUrl<P extends string>(url: string | URL | URLSearchParams, paramName: P) {
  if (isString(url)) {
    return new RegExp('(\\?|&)' + escapeRegExpChars(paramName) + '=', 'g').test(getQueryString(url))
  }
  return isURL(url) ? url.searchParams.has(paramName) : url.has(paramName)
}
