/**
 * 全角(Full-width)英数字を半角(Half-width)英数字に置換
 *
 * 以下を対象とする
 * - `０-９` → `0-9`
 * - `ａ-ｚ` → `a-z`
 * - `Ａ-Ｚ` → `A-Z`
 *
 * @param str
 * @returns {string}
 * @see {@link https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)}
 * @example
 * // 返値: Aa0
 * replaceFwAlphanumericsWithHw('Ａａ０')
 *
 * // 返値: Aa0
 * replaceFwAlphanumericsWithHw('Ａa0')
 */
export function replaceFwAlphanumericsWithHw(str: string) {
  return str.replace(/[\uFF10-\uFF19\uFF21-\uFF3A]/gi, (substring) => {
    // 0xFEE0は0xFF10と0x0030の差分
    return String.fromCharCode(substring.charCodeAt(0) - 0xfee0)
  })
}
