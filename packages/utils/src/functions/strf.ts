import type { Primitive } from '../types/aliases'
import { escapeRegExpChars } from './escapeRegExpChars'

/**
 * 引数str(テンプレート)に引数fieldsの値を埋め込んだ文字列を返却
 *
 * @param str テンプレート
 * @param fields 埋め込む値
 * @param transFn 埋め込む際の処理(出力するロジックをカスタマイズしたい場合のみ)
 * @returns {string}
 * @example
 * // 返値: /user/29/post/33
 * strf('/user/{userId}/post/{postId}', { userId: 29, postId: 33 })
 *
 * // 返値: He is Taro YAMADA. Taro is 25 years old.
 * strf(
 *   'He is {last-name} {first-name}. {last-name} is {age} years old.',
 *   { 'last-name': 'Taro', 'first-name': 'yamada'.toUpperCase(), age: 25 }
 * )
 *
 * // 返値: He is Taro YAMADA. Taro is 25 years old.
 * strf(
 *   'He is {last-name} {first-name}. {last-name} is {age} years old.',
 *   { 'last-name': 'Taro', 'first-name': 'yamada', age: 25 },
 *   (fieldName, fieldValue) => {
 *     if (fieldName === 'first-name') {
 *       return fieldValue.toString().toUpperCase()
 *     }
 *     return String(fieldValue).toString()
 *   }
 * )
 *
 * // 返値: true false
 * strf('{t} {f}', { t: true, f: false })
 *
 * // 返値: null undefined
 * strf('{n} {und}', { n: null, und: undefined })
 */
export function strf<F extends Record<string, Primitive>>(
  str: string,
  fields: F,
  transFn: (fieldName: keyof F, fieldValue: F[keyof F]) => string = (n, v) => String(v).toString()
) {
  if (!Object.keys(fields).length) {
    return str
  }
  const fieldNamesPattern = Object.keys(fields)
    .map((k) => escapeRegExpChars(k))
    .join('|')
  return str.replace(new RegExp(`\\{(${fieldNamesPattern})\\}`, 'g'), (substring) => {
    // 先頭と末尾の波括弧を除いたものをフィールド名とする
    const fieldName = substring.slice(1).slice(0, -1)
    if (Object.hasOwn(fields, fieldName)) {
      return transFn(fieldName, fields[fieldName] as F[keyof F])
    }
    // 埋め込むフィールドがない場合はそのままとする
    return substring
  })
}
