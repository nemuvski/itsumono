import { separateArray } from '../src/array'
import { isNumber, isNotNullish } from '../src/assertion'
import { Nullish } from '../src/types/aliases'

describe('array.ts', () => {
  describe('separateArray()', () => {
    test('separateArray() - Pattern1', () => {
      const { matches, notMatches } = separateArray([1, 2, 3, '4', null, undefined], isNumber)
      expect(matches).toStrictEqual([1, 2, 3])
      expect(notMatches).toStrictEqual(['4', null, undefined])
    })
    test('separateArray() - Pattern2', () => {
      type ItemType = number | string | null | undefined
      const { matches, notMatches } = separateArray<ItemType, Exclude<ItemType, Nullish>, Nullish>(
        [1, 2, 3, '4', null, undefined],
        isNotNullish
      )
      expect(matches).toStrictEqual([1, 2, 3, '4'])
      expect(notMatches).toStrictEqual([null, undefined])
    })
    test('separateArray() - Pattern3', () => {
      type Post = {
        title: string
        body: string
        revision?: number
        createdAt: Date
        updatedAt?: Date
      }
      const arr: Array<Post> = [
        { title: 'sample', body: 'sample', createdAt: new Date() },
        { title: 'sample', body: 'sample', revision: 1, createdAt: new Date(), updatedAt: new Date() },
        { title: 'sample', body: 'sample', revision: 2, createdAt: new Date(), updatedAt: new Date() },
      ]
      const { matches, notMatches } = separateArray(arr, (post) => !post.updatedAt)
      expect(matches).toStrictEqual([{ title: 'sample', body: 'sample', createdAt: new Date() }])
      expect(notMatches).toStrictEqual([
        { title: 'sample', body: 'sample', revision: 1, createdAt: new Date(), updatedAt: new Date() },
        { title: 'sample', body: 'sample', revision: 2, createdAt: new Date(), updatedAt: new Date() },
      ])
    })
  })
})
