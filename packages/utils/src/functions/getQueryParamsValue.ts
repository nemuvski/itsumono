import { isString } from './isString'
import { getQueryString } from './getQueryString'
import { isURL } from './isURL'
import { escapeRegExpChars } from './escapeRegExpChars'

/**
 * 引数urlから指定したパラメータをキーとした配列を値に持つオブジェクトを返却
 *
 * @param url
 * @param paramNames
 * @returns {{[key:string]:Array<string>}}
 * @example
 * // 返値: { test1: ['3 2', '56'], test2: ['ア'], test3: [] }
 * getQueryParamsValue('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment', [
 *   'test1',
 *   'test2',
 *   'test3', // クエリストリング中にないパラメータを指定した場合は空配列 (返値を参照)
 * ])
 *
 * // 返値: { test1: ['3 2', '56'], test2: ['ア'], test3: [] }
 * getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment'), [
 *   'test1',
 *   'test2',
 *   'test3',
 * ])
 */
export function getQueryParamsValue<P extends string>(
  url: string | URL | URLSearchParams,
  paramNames: Array<P>
): Record<P, Array<string>> {
  const res: Record<string, Array<string>> = {}
  if (!paramNames.length) {
    return res
  }

  paramNames.forEach((f) => {
    res[f] = []
  })

  if (isString(url)) {
    const queryStr = getQueryString(url)
    const paramNamesPattern = paramNames.map((k) => escapeRegExpChars(k)).join('|')
    const matches = queryStr.matchAll(new RegExp('(\\?|&)(' + paramNamesPattern + ')=([^&]*)', 'g'))
    for (const m of matches) {
      // NOTE: 添字2はパラメータ名グループ, 添字3はパラメータの値グループ
      if (m[2] !== undefined && m[3] !== undefined) {
        res[m[2]].push(m[3])
      }
    }
  } else {
    const searchParams = isURL(url) ? url.searchParams : url
    paramNames.forEach((param) => {
      res[param] = searchParams.getAll(param)
    })
  }

  return res
}
