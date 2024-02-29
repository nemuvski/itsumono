/**
 * decodeURIComponent()で発生する例外をキャッチして、例外が発生した場合はエラーオブジェクトを返却する
 *
 * @param value
 * @returns {{ data: string; error: null } | { data: null; error: URIError }}
 * @example
 * const { data, error } = safeDecodeURIComponent('foo%20bar') // => { data: 'foo bar', error: null }
 * if (error) {
 *  console.error(error)
 * } else {
 *   console.log(data) // => 'foo bar'
 * }
 */
export function safeDecodeURIComponent(value: string): { data: string; error: null } | { data: null; error: URIError } {
  try {
    const data = decodeURIComponent(value)
    return { data, error: null }
  } catch (e) {
    return {
      data: null,
      /**
       * try中で発生する例外はdecodeURIComponentの仕様によるものなので、SyntaxErrorでアサーションしている
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#exceptions}
       */
      error: e as URIError,
    }
  }
}
