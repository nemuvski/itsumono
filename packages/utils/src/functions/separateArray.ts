/**
 * 引数arrのうち、引数matchFnの実行結果についてTrue/Falseで分けたものを返却
 *
 * @param arr
 * @param matchFn
 * @returns {matches:Array<M>;notMatches:Array<N>}
 * @example
 * // --- [例1] プリミティブ値を格納する配列に対して、null/undefinedであるか否かで分ける --- //
 * type ItemType = number | string | null | undefined
 * const { matches, notMatches } = separateArray<ItemType, Exclude<ItemType, Nullish>, Nullish>(
 *   [1, 2, 3, '4', null, undefined],
 *   isNotNullish
 * )
 * // matches => [1, 2, 3, '4']
 * // notMatches => [null, undefined]
 *
 * // --- [例2] 任意のオブジェクトを格納する配列に対して、updatedAtの有無で分ける --- //
 * type Post = {
 *   title: string
 *   body: string
 *   revision?: number
 *   createdAt: Date
 *   updatedAt?: Date
 * }
 * const arr: Array<Post> = [
 *   { title: 'sample', body: 'sample', createdAt: new Date() },
 *   { title: 'sample', body: 'sample', revision: 1, createdAt: new Date(), updatedAt: new Date() },
 *   { title: 'sample', body: 'sample', revision: 2, createdAt: new Date(), updatedAt: new Date() },
 * ]
 * const { matches, notMatches } = separateArray(arr, (post) => !post.updatedAt)
 * // matches => [{ title: 'sample', body: 'sample', createdAt: new Date() }]
 * // notMatches => [
 * //   { title: 'sample', body: 'sample', revision: 1, createdAt: new Date(), updatedAt: new Date() },
 * //   { title: 'sample', body: 'sample', revision: 2, createdAt: new Date(), updatedAt: new Date() },
 * // ]
 */
export function separateArray<T, M extends T, N extends T>(arr: Array<T>, matchFn: (v: T) => boolean) {
  const matches: Array<M> = []
  const notMatches: Array<N> = []
  for (const v of arr) {
    if (matchFn(v)) {
      // @ts-ignore: MはTと異なる場合がある
      matches.push(v)
    } else {
      // @ts-ignore: NはTと異なる場合がある
      notMatches.push(v)
    }
  }
  return { matches, notMatches }
}
