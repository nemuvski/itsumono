/**
 * JSON.parse()で発生する例外をキャッチして、例外が発生した場合はエラーオブジェクトを返す
 *
 * 型変数 `T` はJSON.parse()でパースするデータの型を指定する
 *
 * ※ ただし、型ガードは行わないため、呼び出し元で型ガードを適宜実施すること
 *
 * @param value
 * @param options
 * @returns {{ data: T; error: null } | { data: null; error: SyntaxError }}
 * @example
 * const { data, error } = safeJsonParse<{ foo: string }>('{"foo": "bar"}') // => { data: { foo: 'bar' }, error: null }
 * if (error) {
 *   console.error(error)
 * } else {
 *   console.log(data) // => { foo: 'bar' }
 * }
 */
export function safeJsonParse<T>(
  value: string,
  options?: { reviver?: Parameters<typeof JSON.parse>[1] }
): { data: T; error: null } | { data: null; error: SyntaxError } {
  try {
    const data = JSON.parse(value, options?.reviver)
    return { data, error: null }
  } catch (e) {
    return {
      data: null,
      /**
       * try中で発生する例外はJSON.parseの仕様によるものなので、SyntaxErrorでアサーションしている
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#exceptions}
       */
      error: e as SyntaxError,
    }
  }
}
