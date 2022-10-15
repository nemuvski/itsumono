/**
 * メールアドレスの形式であるか判定する正規表現を提供
 *
 * @returns {RegExp} `/^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i`
 * @example
 * regexpValidEmailAddressFormat().test('your-email@example.com')
 */
export function regexpValidEmailAddressFormat() {
  return /^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i
}
