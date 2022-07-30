/**
 * メールアドレスの形式であるか判定する正規表現
 *
 * @example
 * regexValidEmailAddressFormat.test('your-email@example.com')
 */
export const regexValidEmailAddressFormat = /^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i

/**
 * URLの形式であるか判定する正規表現
 *
 * @example
 * regexValidUrlFormat.test('https://example.com')
 */
export const regexValidUrlFormat = /^https?:\/\/[\w/:%#$&?()~.=+-]+$/i

/**
 * 空白文字以外の文字が含まれるかを判定する正規表現
 *
 * @example
 * regexNoSpaceChars.test('form-field-value')
 */
export const regexNoSpaceChars = /\S+/
