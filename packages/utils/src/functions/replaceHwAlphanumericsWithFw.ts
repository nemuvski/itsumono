/**
 * 半角(Half-width)英数字を全角(Full-width)英数字に置換
 *
 * 以下を対象とする
 * - `0-9` → `０-９`
 * - `a-z` → `ａ-ｚ`
 * - `A-Z` → `Ａ-Ｚ`
 *
 * @param str
 * @returns {string}
 * @see {@link https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)}
 * @example
 * // 返値: Ａａ０
 * replaceFwAlphanumericsWithHw('Aa0')
 *
 * // 返値: Ａａ０
 * replaceFwAlphanumericsWithHw('Ａa0')
 */
export function replaceHwAlphanumericsWithFw(str: string) {
  return str.replace(/[\da-z]/gi, (substring) => {
    // 0xFEE0は0xFF10と0x0030の差分
    return String.fromCharCode(substring.charCodeAt(0) + 0xfee0)
  })
}
