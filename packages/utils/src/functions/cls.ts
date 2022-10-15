import { isNullish } from './isNullish'
import { isBoolean } from './isBoolean'
import { isString } from './isString'
import { isNumber } from './isNumber'

/**
 * cls()の引数optionsの型
 */
export type ClsOptions = {
  // ピリオドを削除する場合はTrue
  trimPeriod?: boolean
}

/**
 * 引数の値からclass属性の値を構築して返却
 *
 * オプションにより、構築時に処理を加えることが可能
 * - trimPeriod: 先頭のピリオドを削除
 *
 * @param value
 * @param options
 * @returns {string}
 * @see {@link https://www.npmjs.com/package/clsx} inspired by clsx
 * @example
 * // 返値: button button--lg
 * cls('button button--lg')
 *
 * // 返値: button button--lg
 * cls(['button', 'button--lg'])
 *
 * // 返値: button
 * cls('.button', { trimPeriod: true })
 *
 * // 返値: button is-open
 * const isOpen = true
 * cls(['button', isOpen && 'is-open', !isOpen && 'is-close'])
 *
 * // 返値: button isOpen is-open
 * const isOpen = true
 * cls(['button', { isOpen, 'is-open': isOpen, 'is-close': !isOpen }])
 *
 * // 返値: hello
 * cls({ hello: true, world: false })
 */
export function cls(
  value:
    | undefined
    | null
    | string
    | number
    | boolean
    | Record<string, boolean | null | undefined>
    | Array<undefined | null | string | number | boolean | Record<string, boolean | null | undefined>>,
  options?: ClsOptions
): string {
  // null,undefined,真偽値はclassの値として出力しない
  if (isNullish(value) || isBoolean(value)) return ''
  if (isString(value) || isNumber(value)) return options?.trimPeriod ? String(value).replace(/\.+/g, '') : String(value)
  let res = ''
  if (Array.isArray(value)) {
    value.forEach((n) => {
      const childRes = cls(n, options)
      if (childRes) res += (res && ' ') + childRes
    })
  } else {
    for (const key in value) {
      if (value[key]) res += (res && ' ') + key
    }
  }
  return options?.trimPeriod ? res.replace(/\.+/g, '') : res
}
