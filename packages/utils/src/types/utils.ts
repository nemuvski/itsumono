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

/**
 * オブジェクトの全フィールドの型からundefined,nullを除外した型を得る
 *
 * ※ ネストしたオブジェクトのフィールドに対しては適用されない
 *
 * @example
 * type Post = {
 *   id: `post_${number}`
 *   title: string
 *   body: string | undefined
 *   author: { name: string; age: number | undefined }
 *   createdAt: Date
 *   updatedAt?: Date | null
 * }
 * type NewPost = NonNullishFields<Post> // { id: `post_${number}`; title: string; body: string; author: { name: string; age: number | undefined }; createdAt: Date; updatedAt: Date }
 */
export type NonNullishFields<T extends {}> = { [K in keyof T]-?: NonNullable<T[K]> }

/**
 * 配列の要素の型を取得する
 *
 * @example
 * type T0 = ArrayElement<string[]> // string
 * type T1 = ArrayElement<readonly string[]> // string
 * type T2 = ArrayElement<Array<string | null>> // string | null
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never

/**
 * Tの全てのプロパティを必須(undefined)を除いた型を取得する
 *
 * 関数型は引数、戻り値の型をについては除かれない
 *
 * @example
 * type T0 = DeepRequired<{ a?: number | undefined | null }> // { a: number | null }
 * type T1 = DeepRequired<{ a?: { b?: string | undefined | null } }> // { a: { b: string | null } }
 * type T2 = DeepRequired<string | undefined | null> // string | null
 * type T3 = DeepRequired<{ a?: (v?: string) => string | undefined | null }> // { a: (v?: string) => string | undefined | null }
 * type T4 = DeepRequired<Array<string | undefined | null>> // Array<string | null>
 * type T5 = DeepRequired<Array<{ a?: string | undefined | null }>> // Array<{ a: string | null }>
 */
export type DeepRequired<T> = T extends (infer U)[]
  ? DeepRequired<U>[]
  : T extends object
    ? // biome-ignore lint/complexity/noBannedTypes: ignore
      T extends Function
      ? T // 関数の場合はそのまま
      : { [K in keyof T]-?: DeepRequired<T[K]> } // オブジェクトの場合は再帰
    : Exclude<T, undefined> // プリミティブ型の場合は、undefinedを除外
