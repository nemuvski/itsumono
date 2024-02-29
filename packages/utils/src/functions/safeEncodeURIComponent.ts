/**
 * encodeURIComponent()で発生する例外をキャッチして、例外が発生した場合はエラーオブジェクトを返却する
 *
 * @param value
 * @returns {{ data: string; error: null } | { data: null; error: URIError }}
 * @example
 * const { data, error } = safeEncodeURIComponent('foo bar') // => { data: 'foo%20bar', error: null }
 * if (error) {
 *   console.error(error)
 * } else {
 *   console.log(data) // => 'foo%20bar'
 * }
 */
export function safeEncodeURIComponent(value: string): { data: string; error: null } | { data: null; error: URIError } {
  try {
    const data = encodeURIComponent(value)
    return { data, error: null }
  } catch (e) {
    return {
      data: null,
      /**
       * try中で発生する例外はencodeURIComponentの仕様によるものなので、SyntaxErrorでアサーションしている
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#exceptions}
       */
      error: e as SyntaxError,
    }
  }
}
