import { describe, expect, test } from 'vitest'
import { safeJsonStringify } from '../../src'

describe('safeJsonStringify()', () => {
  describe('文字列化に成功する', () => {
    test('optionsなし', () => {
      const { data, error } = safeJsonStringify({ foo: 'bar' })
      expect(data).toBe('{"foo":"bar"}')
      expect(error).toBeNull()
    })

    test('options.replacerあり (関数のケース)', () => {
      const target = { foo: 'bar', hoo: 3, goo: true }
      const { data, error } = safeJsonStringify(target, {
        // @ts-expect-error: 問題ないので型エラーを無視
        replacer: (key: keyof typeof target, value: (typeof target)[keyof typeof target]) => {
          if (key === 'foo') {
            return `${value}!`
          }
          if (key === 'hoo' && typeof value === 'number') {
            return value * 2
          }
          return value
        },
      })
      expect(data).toBe('{"foo":"bar!","hoo":6,"goo":true}')
      expect(error).toBeNull()
    })

    test('options.replacerあり (配列のケース)', () => {
      const target = { foo: 'bar', hoo: 3, goo: true, 3: 'three' }
      const { data, error } = safeJsonStringify(target, {
        replacer: ['foo', 'hoo', 3],
      })
      expect(data).toBe('{"foo":"bar","hoo":3,"3":"three"}')
      expect(error).toBeNull()
    })

    test('options.spaceあり (数値のケース)', () => {
      const target = { foo: 'bar' }
      const { data, error } = safeJsonStringify(target, {
        space: 2,
      })
      expect(data).toBe('{\n  "foo": "bar"\n}')
      expect(error).toBeNull()
    })

    test('options.spaceあり (文字のケース)', () => {
      const target = { foo: 'bar' }
      const { data, error } = safeJsonStringify(target, {
        space: '\t',
      })
      expect(data).toBe('{\n\t"foo": "bar"\n}')
      expect(error).toBeNull()
    })
  })

  test('文字列化に失敗する', () => {
    // BigInt は JSON.stringify で文字列化できないので例外が発生する
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#exceptions
    const { data, error } = safeJsonStringify({ bigint: 2n })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(TypeError)
  })
})
