import { describe, test, expect } from 'vitest'
import { isNotNullish, isNumber, type Nullish, separateArray } from '../../src'

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
    const date = new Date('August 19, 1975 23:15:30')
    const arr: Array<Post> = [
      { title: 'sample', body: 'sample', createdAt: date },
      { title: 'sample', body: 'sample', revision: 1, createdAt: date, updatedAt: date },
      { title: 'sample', body: 'sample', revision: 2, createdAt: date, updatedAt: date },
    ]
    const { matches, notMatches } = separateArray(arr, (post) => !post.updatedAt)
    expect(matches).toStrictEqual([{ title: 'sample', body: 'sample', createdAt: date }])
    expect(notMatches).toStrictEqual([
      { title: 'sample', body: 'sample', revision: 1, createdAt: date, updatedAt: date },
      { title: 'sample', body: 'sample', revision: 2, createdAt: date, updatedAt: date },
    ])
  })
})
