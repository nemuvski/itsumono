import { describe, test, expect } from 'vitest'
import { diffArray } from '../../src'

describe('diffArray()', () => {
  test('diffArray() - Pattern1', () => {
    const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray([1, 2, 3, '4', '5'], ['1', '2', 3, 4, 5])
    expect(leftOnlyItems).toStrictEqual([1, 2, '4', '5'])
    expect(rightOnlyItems).toStrictEqual(['1', '2', 4, 5])
    expect(bothItems).toStrictEqual([3])
  })
  test('diffArray() - Pattern2', () => {
    type Test = {
      id: number
      value: number | string
    }
    const left: Array<Test> = [
      { id: 1, value: 'test1' },
      { id: 2, value: 'test2' },
      { id: 3, value: 'test3-1' },
    ]
    const right: Array<Test> = [
      { id: 3, value: 'test3-2' },
      { id: 4, value: 'test4' },
      { id: 5, value: 'test5' },
    ]
    // idプロパティのみ一致を評価する場合
    const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray(left, right, (a, b) => a.id === b.id)
    expect(leftOnlyItems).toStrictEqual([
      { id: 1, value: 'test1' },
      { id: 2, value: 'test2' },
    ])
    expect(rightOnlyItems).toStrictEqual([
      { id: 4, value: 'test4' },
      { id: 5, value: 'test5' },
    ])
    expect(bothItems).toStrictEqual([{ id: 3, value: 'test3-1' }])
  })
  test('diffArray() - Pattern3', () => {
    type Test = {
      id: number
      value: number | string
    }
    const left: Array<Test> = [
      { id: 1, value: 'test1' },
      { id: 2, value: 'test2' },
      { id: 3, value: 'test3-1' },
    ]
    const right: Array<Test> = [
      { id: 3, value: 'test3-2' },
      { id: 4, value: 'test4' },
      { id: 5, value: 'test5' },
    ]
    // idプロパティとvalueプロパティで一致を評価する場合
    const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray(
      left,
      right,
      (a, b) => a.id === b.id && a.value === b.value
    )
    expect(leftOnlyItems).toStrictEqual([
      { id: 1, value: 'test1' },
      { id: 2, value: 'test2' },
      { id: 3, value: 'test3-1' },
    ])
    expect(rightOnlyItems).toStrictEqual([
      { id: 3, value: 'test3-2' },
      { id: 4, value: 'test4' },
      { id: 5, value: 'test5' },
    ])
    expect(bothItems).toStrictEqual([])
  })
})
