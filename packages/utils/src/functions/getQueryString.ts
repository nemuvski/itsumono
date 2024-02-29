import { removeHashFragment } from './removeHashFragment'

/**
 * 引数urlのクエリパラメータ部分を返却
 *
 * ※ 文字列中に含まれる+(プラス記号)は半角スペースに変換されます
 *
 * @param url
 * @returns {string}
 * @throws {URIError} 内部で利用している `decodeURIComponent()` がエラーをスローする可能性がある
 * @example
 * // 返値: ?test1=32&test2=ア
 * getQueryString('https://localhost:8080?test1=32&test2=%E3%82%A2#fragment')
 *
 * // 返値: ?test1=32&test2=ア
 * getQueryString('/path/to/?test1=32&test2=%E3%82%A2#fragment')
 *
 * // 返値: ?test1=3 2&test2=ア
 * getQueryString('https://localhost:8080?test1=3+2&test2=%E3%82%A2#fragment')
 */
export function getQueryString(url: string) {
  const trimmed = removeHashFragment(url)
  const sepIdx = trimmed.indexOf('?')
  // デコード&「+」をスペースに置換する
  return sepIdx >= 0 ? decodeURIComponent(trimmed.substring(sepIdx, trimmed.length).replace(/\+/g, ' ')) : ''
}
