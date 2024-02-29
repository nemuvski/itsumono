import { describe, expect, test } from 'vitest'
import { safeDecodeURIComponent } from '../../src'

describe('safeDecodeURIComponent()', () => {
  test('デコードされた値が返ってくる', () => {
    expect(safeDecodeURIComponent('%3Fx%3Dtest')).toEqual({ data: '?x=test', error: null })
    expect(safeDecodeURIComponent('foo%20bar')).toEqual({ data: 'foo bar', error: null })
    expect(safeDecodeURIComponent('%E3%83%86%E3%82%B9%E3%83%88')).toEqual({ data: 'テスト', error: null })
  })

  test('URIErrorが返ってくる', () => {
    const { data, error } = safeDecodeURIComponent('%')
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(URIError)
  })
})
