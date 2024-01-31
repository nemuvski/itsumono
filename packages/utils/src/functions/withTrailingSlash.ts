import { removeTrailingSlash } from './removeTrailingSlash'

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
  return `${removeTrailingSlash(path)}/`
}
