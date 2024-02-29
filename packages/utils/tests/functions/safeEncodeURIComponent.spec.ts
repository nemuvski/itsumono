import { describe, expect, test } from 'vitest'
import { safeEncodeURIComponent } from '../../src'

describe('safeEncodeURIComponent()', () => {
  test('エンコードされた値が返ってくる', () => {
    expect(safeEncodeURIComponent('?x=test')).toEqual({ data: '%3Fx%3Dtest', error: null })
    expect(safeEncodeURIComponent('foo bar')).toEqual({ data: 'foo%20bar', error: null })
    expect(safeEncodeURIComponent('テスト')).toEqual({ data: '%E3%83%86%E3%82%B9%E3%83%88', error: null })
  })

  test('URIErrorが返ってくる', () => {
    const { data, error } = safeEncodeURIComponent('\uD800')
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(URIError)
  })
})
