import { expectTypeOf } from 'expect-type'
import { Primitive, Falsy, Nullish } from '../../src/types/aliases'

describe('types/aliases.ts', () => {
  const date = new Date('August 19, 1975 23:15:30')

  test('Primitive', () => {
    expectTypeOf({ a: 1 }).not.toMatchTypeOf<Primitive>()
    expectTypeOf(date).not.toMatchTypeOf<Primitive>()

    expectTypeOf('1').toMatchTypeOf<Primitive>()
    expectTypeOf(1).toMatchTypeOf<Primitive>()
    expectTypeOf(1n).toMatchTypeOf<Primitive>()
    expectTypeOf(true).toMatchTypeOf<Primitive>()
    expectTypeOf(Symbol('')).toMatchTypeOf<Primitive>()
    expectTypeOf(undefined).toMatchTypeOf<Primitive>()
    expectTypeOf(null).toMatchTypeOf<Primitive>()
  })

  test('Falsy', () => {
    expectTypeOf({ a: 1 }).not.toMatchTypeOf<Falsy>()
    expectTypeOf(date).not.toMatchTypeOf<Falsy>()
    expectTypeOf('1').not.toMatchTypeOf<Falsy>()
    expectTypeOf(1).not.toMatchTypeOf<Falsy>()
    expectTypeOf(1n).not.toMatchTypeOf<Falsy>()
    expectTypeOf<true>(true).not.toMatchTypeOf<Falsy>()
    expectTypeOf(Symbol('')).not.toMatchTypeOf<Falsy>()

    expectTypeOf<false>(false).toMatchTypeOf<Falsy>()
    expectTypeOf<0>(0).toMatchTypeOf<Falsy>()
    expectTypeOf<0n>(0n).toMatchTypeOf<Falsy>()
    expectTypeOf<''>('').toMatchTypeOf<Falsy>()
    expectTypeOf(undefined).toMatchTypeOf<Falsy>()
    expectTypeOf(null).toMatchTypeOf<Falsy>()
  })

  test('Nullish', () => {
    expectTypeOf({ a: 1 }).not.toMatchTypeOf<Nullish>()
    expectTypeOf(date).not.toMatchTypeOf<Nullish>()
    expectTypeOf('').not.toMatchTypeOf<Nullish>()
    expectTypeOf(0).not.toMatchTypeOf<Nullish>()
    expectTypeOf(0n).not.toMatchTypeOf<Falsy>()
    expectTypeOf(true).not.toMatchTypeOf<Nullish>()
    expectTypeOf(false).not.toMatchTypeOf<Nullish>()
    expectTypeOf(Symbol('')).not.toMatchTypeOf<Nullish>()

    expectTypeOf(undefined).toMatchTypeOf<Falsy>()
    expectTypeOf(null).toMatchTypeOf<Falsy>()
  })
})
