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
  arr.forEach((v) => {
    if (matchFn(v)) {
      // @ts-ignore: MはTと異なる場合がある
      matches.push(v)
    } else {
      // @ts-ignore: NはTと異なる場合がある
      notMatches.push(v)
    }
  })
  return { matches, notMatches }
}

/**
 * 2つの配列でそれぞれにのみ存在する要素、両方に存在する要素を分けたものを返却
 *
 * @param left
 * @param right
 * @param matchFn 要素一致を評価する関数（一致する場合はTrueを返却する）
 * @returns {leftOnlyItems:Array<T>;rightOnlyItems:Array<T>;bothItems:Array<T>}
 * @example
 * // --- [例1] 文字列と数値を要素にとる配列 --- //
 * const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray([1, 2, 3, '4', '5'], ['1', '2', 3, 4, 5])
 * // leftOnlyItems => [1, 2, '4', '5']
 * // rightOnlyItems => ['1', '2', 4, 5]
 * // bothItems => [3]
 *
 * // --- [例1] 任意のオブジェクトを要素にとる配列 --- //
 * const left: Array<Test> = [
 *   { id: 1, value: 'test1' },
 *   { id: 2, value: 'test2' },
 *   { id: 3, value: 'test3' },
 * ]
 * const right: Array<Test> = [
 *   { id: 3, value: 'test3' },
 *   { id: 4, value: 'test4' },
 *   { id: 5, value: 'test5' },
 * ]
 * const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray(left, right, (a, b) => a.id === b.id && a.value === b.value)
 * // leftOnlyItems => [{ id: 1, value: 'test1' }, { id: 2, value: 'test2' }]
 * // rightOnlyItems => [{ id: 4, value: 'test4' }, { id: 5, value: 'test5' }]
 * // bothItems => [{ id: 3, value: 'test3' }]
 */
export function diffArray<T>(
  left: Array<T>,
  right: Array<T>,
  matchFn: (a: T, b: T) => boolean = (a: T, b: T) => a === b
) {
  const leftOnlyItems: Array<T> = []
  const rightOnlyItems: Array<T> = []
  const bothItems: Array<T> = []

  if (!left.length) {
    return { leftOnlyItems, rightOnlyItems: right, bothItems }
  } else if (!right.length) {
    return { leftOnlyItems: left, rightOnlyItems, bothItems }
  } else {
    // 配列leftを起点に配列leftにしか無い要素、両方に存在する要素を評価する
    for (const leftItem of left) {
      const matchedIndex = right.findIndex((rightItem) => matchFn(leftItem, rightItem))
      if (matchedIndex < 0) {
        leftOnlyItems.push(leftItem)
      } else {
        bothItems.push(leftItem)
      }
    }
    // 次に、配列rightから両方に存在する要素を除いたものを求める
    for (const rightItem of right) {
      const matchedIndex = bothItems.findIndex((bothItem) => matchFn(rightItem, bothItem))
      if (matchedIndex < 0) {
        rightOnlyItems.push(rightItem)
      }
    }
  }
  return { leftOnlyItems, rightOnlyItems, bothItems }
}
