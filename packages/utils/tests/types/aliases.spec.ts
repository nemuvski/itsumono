import { expectTypeOf } from 'expect-type'
import { Primitive, Falsy, Nullish } from '../../src/types/aliases'

describe('types/aliases.ts', () => {
  test('Primitive', () => {
    expectTypeOf({ a: 1 }).not.toMatchTypeOf<Primitive>()
    expectTypeOf(new Date()).not.toMatchTypeOf<Primitive>()

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
    expectTypeOf(new Date()).not.toMatchTypeOf<Falsy>()
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
    expectTypeOf(new Date()).not.toMatchTypeOf<Nullish>()
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
