import { isString } from './isString'

/**
 * 引数urlにあるフラグメントを削除したものを返却
 *
 * ※ 文字列中に含まれる+(プラス記号)は半角スペースに変換されます
 *
 * @param url
 * @returns {string}
 * @throws {URIError} 内部で利用している `decodeURIComponent()` がエラーをスローする可能性がある
 * @example
 * // 返値: hash fragment
 * getHashFragment('https://localhost:8080?test=32#hash+fragment')
 *
 * // 返値: テスト
 * getHashFragment('https://localhost:8080?test=32#%E3%83%86%E3%82%B9%E3%83%88')
 */
export function getHashFragment(url: string | URL) {
  let hash = ''
  if (isString(url)) {
    const result = /#.*/.exec(url.trim())
    if (!result) {
      return ''
    }
    hash = result[0]
  } else {
    hash = url.hash
  }
  // デコード&「+」をスペースに置換する
  return decodeURIComponent(hash.replace(/^#+/, '').replace(/\+/g, ' '))
}
