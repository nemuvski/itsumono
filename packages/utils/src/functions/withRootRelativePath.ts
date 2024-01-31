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
  return `/${path.trim().replace(/^\/+/, '')}`
}
