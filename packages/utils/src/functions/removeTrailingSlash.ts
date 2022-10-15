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
