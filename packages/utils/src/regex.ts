/**
 * メールアドレスの形式であるか判定する正規表現
 */
export const regexValidEmailAddressFormat = /^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i

/**
 * URLの形式であるか判定する正規表現
 */
export const regexValidUrlFormat = /^https?:\/\/[\w/:%#$&?()~.=+-]+$/i

/**
 * 空白文字以外の文字が含まれるかを判定する正規表現
 */
export const regexNoSpaceChars = /\S+/
