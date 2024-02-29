import { describe, expect, test } from 'vitest'
import { safeJsonParse } from '../../src'

describe('safeJsonParse()', () => {
  describe('パースに成功する', () => {
    test('optionsなし', () => {
      const jsonString = '{"foo": "bar"}'
      const { data, error } = safeJsonParse<{ foo: string }>(jsonString)
      expect(data).toEqual({ foo: 'bar' })
      expect(error).toBeNull()
    })

    test('options.reviverあり', () => {
      const jsonString = '{"foo": "bar"}'
      const { data, error } = safeJsonParse<{ foo: string }>(jsonString, {
        reviver: (key, value) => {
          if (key === 'foo') {
            return `${value}!`
          }
          return value
        },
      })
      expect(data).toEqual({ foo: 'bar!' })
      expect(error).toBeNull()
    })
  })

  test('パースに失敗する', () => {
    const jsonString = '{"foo": "bar"'
    const { data, error } = safeJsonParse(jsonString)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(SyntaxError)
  })
})
