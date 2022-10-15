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
