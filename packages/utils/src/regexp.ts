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

/**
 * URLの形式であるか判定する正規表現を提供
 *
 * @returns {RegExp} `/^https?:\/\/[\w/:%#$&?()~.=+-]+$/i`
 * @example
 * regexpValidUrlFormat().test('https://example.com')
 */
export function regexpValidUrlFormat() {
  return /^https?:\/\/[\w/:%#$&?()~.=+-]+$/i
}

/**
 * 空白文字以外の文字が含まれるかを判定する正規表現を提供
 *
 * @returns {RegExp} `/\S+/`
 * @example
 * regexpNoSpaceChars().test('form-field-value')
 */
export function regexpNoSpaceChars() {
  return /\S+/
}
