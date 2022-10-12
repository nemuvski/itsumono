import { isNotNullish, isString, isURL } from './assertion'
import { escapeRegExpChars } from './string'

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

/**
 * 引数pathの末尾スラッシュ（TrailingSlash）を削除して、返却
 *
 * @param path
 * @returns {string}
 * @example
 * // 返値: /path/to/ok
 * withTrailingSlash('/path/to/ok')
 *
 * // 返値: /path/to/ok
 * withTrailingSlash('/path/to/ok/')
 *
 * // 返値: http://localhost:8000/sample
 * withTrailingSlash('http://localhost:8000/sample/')
 */
export function removeTrailingSlash(path: string) {
  return path.trim().replace(/\/+$/, '')
}

/**
 * 引数pathに末尾スラッシュ（TrailingSlash）を付与して、返却
 *
 * @param path
 * @returns {string}
 * @example
 * // 返値: /path/to/ok/
 * withTrailingSlash('/path/to/ok')
 *
 * // 返値: /path/to/ok/
 * withTrailingSlash('/path/to/ok/')
 *
 * // 返値: http://localhost:8000/sample/
 * withTrailingSlash('http://localhost:8000/sample')
 */
export function withTrailingSlash(path: string) {
  return removeTrailingSlash(path) + '/'
}

/**
 * 引数pathの先頭にルートパスを表すを付与して、返却
 *
 * @param path
 * @returns {string}
 * @example
 * // 返値: /path/to/test
 * withRootRelativePath('/path/to/test')
 *
 * // 返値: /path/to/test
 * withRootRelativePath('path/to/test')
 */
export function withRootRelativePath(path: string) {
  return '/' + path.trim().replace(/^\/+/, '')
}

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

/**
 * 引数urlにあるフラグメントを削除したものを返却
 *
 * ※ 文字列中に含まれる+(プラス記号)は半角スペースに変換されます
 *
 * @param url
 * @returns {string}
 * @example
 * // 返値: hash fragment
 * removeHashFragment('https://localhost:8080?test=32#hash+fragment')
 *
 * // 返値: テスト
 * removeHashFragment('https://localhost:8080?test=32#%E3%83%86%E3%82%B9%E3%83%88')
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

/**
 * 引数urlのクエリパラメータ部分を返却
 *
 * ※ 文字列中に含まれる+(プラス記号)は半角スペースに変換されます
 *
 * @param url
 * @returns {string}
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
  return sepIdx > 0 ? decodeURIComponent(trimmed.substring(sepIdx, trimmed.length).replace(/\+/g, ' ')) : ''
}

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
 * // 返値: true
 * containParamInUrl(new URL('https://localhost:8080?test=32'), 'test')
 *
 * // 返値: false
 * containParamInUrl(new URL('https://localhost:8080?test1=32'), 'test')
 */
export function containParamInUrl<P extends string>(url: string | URL, paramName: P) {
  if (isString(url)) {
    return new RegExp('(\\?|&)' + escapeRegExpChars(paramName) + '=', 'g').test(getQueryString(url))
  }
  return url.searchParams.has(paramName)
}

/**
 * 引数urlで指定したパラメータの値を返却
 * ※ パラメータが存在しない場合はnull
 *
 * @deprecated getQueryParamsValue() を使用してください
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

/**
 * 引数urlから指定したパラメータの値を返却
 *
 * @param url
 * @param paramNames
 * @returns {{[key:string]:Array<string>}}
 * @example
 */
export function getQueryParamsValue<P extends string>(
  url: string | URL | URLSearchParams,
  paramNames: Array<P>
): Record<P, Array<string>> {
  const res: Record<string, Array<string>> = {}
  paramNames.forEach((f) => {
    res[f] = []
  })

  if (isString(url)) {
    const queryStr = getQueryString(url)

    console.log(queryStr)
  } else {
    const searchParams = isURL(url) ? url.searchParams : url
    paramNames.forEach((param) => {
      res[param] = searchParams.getAll(param)
    })
  }

  return res
}
