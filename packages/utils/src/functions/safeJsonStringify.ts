/**
 * JSON.stringify()で発生する例外をキャッチして、例外が発生した場合はエラーオブジェクトを返す
 *
 * @param value
 * @param options
 * @returns {{ data: string; error: null } | { data: null; error: TypeError }}
 * @example
 * const { data, error } = safeJsonStringify({ foo: 'bar' }) // => { data: '{"foo":"bar"}', error: null }
 * if (error) {
 *   console.error(error)
 * } else {
 *   console.log(data) // => '{"foo":"bar"}'
 * }
 */
export function safeJsonStringify<T>(
  value: T,
  options?: {
    replacer?: Parameters<typeof JSON.stringify>[1]
    space?: Parameters<typeof JSON.stringify>[2]
  }
): { data: string; error: null } | { data: null; error: TypeError } {
  try {
    const data = JSON.stringify(value, options?.replacer, options?.space)
    return { data, error: null }
  } catch (e) {
    return {
      data: null,
      /**
       * try中で発生する例外はJSON.stringifyの仕様によるものなので、TypeErrorでアサーションしている
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#exceptions}
       */
      error: e as TypeError,
    }
  }
}
