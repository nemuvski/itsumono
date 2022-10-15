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
