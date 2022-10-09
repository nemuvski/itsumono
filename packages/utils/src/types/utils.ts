/**
 * Tのプロパティのうち、Uで指定した型を持つプロパティのキーを取り出す
 *
 * @example
 * type Post = {
 *   title: string
 *   body: string
 *   revision?: number
 *   createdAt: Date
 *   updatedAt?: Date
 * }
 *
 * // Keys => "revision" | "createdAt" | "updatedAt"
 * type Keys = MatchTypeKeys<Post, Date | undefined>
 *
 * // Props => { revision?: number; createdAt: Date; updatedAt?: Date }
 * type Props = Pick<Post, Keys>
 *
 */
export type MatchTypeKeys<T, U> = { [K in keyof T]-?: U extends T[K] ? K : never }[keyof T]

/**
 * Tのプロパティのうち、Uで指定した型と一致するプロパティのキーを取り出す
 *
 * @example
 * type Post = {
 *   title: string
 *   body: string
 *   revision?: number
 *   createdAt: Date
 *   updatedAt?: Date
 * }
 *
 * // Keys => "updatedAt"
 * type Keys = ExactMatchTypeKeys<Post, Date | undefined>
 *
 * // Props => { updatedAt?: Date }
 * type Props = Pick<Post, Keys>
 */
export type ExactMatchTypeKeys<T, U> = {
  [K in keyof T]-?: [U] extends [T[K]] ? ([T[K]] extends [U] ? K : never) : never
}[keyof T]

/**
 * Tのプロパティのうち、Uで指定した型を持たないプロパティのキーを取り出す
 *
 * @example
 * type Post = {
 *   title: string
 *   body: string
 *   revision?: number
 *   createdAt: Date
 *   updatedAt?: Date
 * }
 *
 * // Keys => "title" | "body"
 * type Keys = NotMatchTypeKeys<Post, Date | undefined>
 *
 * // Props => { title: string; body: string }
 * type Props = Pick<Post, Keys>
 */
export type NotMatchTypeKeys<T, U> = keyof Omit<T, MatchTypeKeys<T, U>>

/**
 * Tのプロパティのうち、Uで指定した型を持プロパティのキーを取り出す
 *
 * @example
 * type Post = {
 *   title: string
 *   body: string
 *   revision?: number
 *   createdAt: Date
 *   updatedAt?: Date
 * }
 *
 * // Keys => "title" | "body" | "revision" | "createdAt"
 * type Keys = ExactNotMatchTypeKeys<Post, Date | undefined>
 *
 * // Props => { title: string; body: string; revision?: number; createdAt: Date }
 * type Props = Pick<Post, Keys>
 */
export type ExactNotMatchTypeKeys<T, U> = keyof Omit<T, ExactMatchTypeKeys<T, U>>

/**
 * Tのプロパティのうち、Kで指定したプロパティのうち最低1つは値を持つオブジェクトである型を得る
 *
 * @example
 * type Post = {
 *   title: string
 *   body: string
 *   revision?: number
 *   createdAt: Date
 *   updatedAt?: Date
 * }
 *
 * // --- [例1] titleまたはbodyのうち1つは値をとり（undefinedではない）、他プロパティは既存の型に従うオブジェクト型を扱う --- //
 * // Props1 =>
 * //   ({ revision?: number; createdAt: Date; updatedAt?: Date } & { title?: string; body?: string } & { title: string })
 * //   | ({ revision?: number; createdAt: Date; updatedAt?: Date } & { title?: string; body?: string } & { body: string })
 * type Props1 = RequiredAtLeastOne<Post, 'title' | 'body'>
 *
 * // NG
 * const ngSample: Props1 = {}
 * // 次の場合はcreatedAtプロパティがあるが、titleまたはbodyプロパティにundefined値以外があてられていないためエラー
 * const ngSample: Props1 = { title: undefined, createdAt: new Date() }
 * // 次の場合はtitleプロパティがあるが、createdAtプロパティはundefinedではないためエラー
 * const ngSample: Props1 = { title: 'Hello!' }
 *
 * // OK
 * const okSample: Props1 = { title: 'Hello!', createdAt: new Date() }
 * const okSample: Props1 = { body: 'Baby!', createdAt: new Date() }
 * const okSample: Props1 = { title: 'Hello!', body: 'Baby!', createdAt: new Date() }
 *
 *
 * // --- [例2] 全プロパティのうち1つは値をとるオブジェクト型を扱う --- //
 * type Props2 = RequiredAtLeastOne<Post>
 *
 * // NG
 * const ngSample: Props2 = {}
 * const ngSample: Props2 = { title: undefined }
 *
 * // OK
 * const okSample: Props2 = { title: 'Hello!' }
 * const okSample: Props2 = { title: 'Hello!', revision: 3 }
 */
export type RequiredAtLeastOne<T, K extends keyof T = keyof T> = Pick<T, Exclude<keyof T, K>> &
  Partial<Pick<T, K>> &
  (K extends keyof T ? { [_K in K]-?: Pick<Required<T>, _K> }[K] : never)
