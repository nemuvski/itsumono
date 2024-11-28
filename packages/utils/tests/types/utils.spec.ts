import { describe, expectTypeOf, test } from 'vitest'
import type {
  ArrayElement,
  ExactMatchTypeKeys,
  ExactNotMatchTypeKeys,
  MatchTypeKeys,
  NonNullishFields,
  NotMatchTypeKeys,
  RequiredAtLeastOne,
} from '../../src'

describe('types/utils.ts', () => {
  const date = new Date('August 19, 1975 23:15:30')

  test('MatchTypeKeys', () => {
    type Post = {
      title: string
      body: string
      revision?: number
      createdAt: Date
      updatedAt?: Date
    }
    type Test = MatchTypeKeys<Post, Date | undefined>
    expectTypeOf<'revision' | 'updatedAt' | 'createdAt'>().toEqualTypeOf<Test>()
    expectTypeOf<'title'>().not.toEqualTypeOf<Test>()
    expectTypeOf<'body'>().not.toEqualTypeOf<Test>()
  })

  test('ExactMatchTypeKeys', () => {
    type Post = {
      title: string
      body: string
      revision?: number
      createdAt: Date
      updatedAt?: Date
    }
    type Test = ExactMatchTypeKeys<Post, Date | undefined>
    expectTypeOf<'updatedAt'>().toEqualTypeOf<Test>()
    expectTypeOf<'createdAt'>().not.toEqualTypeOf<Test>()
    expectTypeOf<'revision'>().not.toEqualTypeOf<Test>()
    expectTypeOf<'title'>().not.toEqualTypeOf<Test>()
    expectTypeOf<'body'>().not.toEqualTypeOf<Test>()
  })

  test('NotMatchTypeKeys', () => {
    type Post = {
      title: string
      body: string
      revision?: number
      createdAt: Date
      updatedAt?: Date
    }
    type Test = NotMatchTypeKeys<Post, Date | undefined>
    expectTypeOf<'updatedAt'>().not.toEqualTypeOf<Test>()
    expectTypeOf<'createdAt'>().not.toEqualTypeOf<Test>()
    expectTypeOf<'revision'>().not.toEqualTypeOf<Test>()
    expectTypeOf<'body' | 'title'>().toEqualTypeOf<Test>()
  })

  test('ExactNotMatchTypeKeys', () => {
    type Post = {
      title: string
      body: string
      revision?: number
      createdAt: Date
      updatedAt?: Date
    }
    type Test = ExactNotMatchTypeKeys<Post, Date | undefined>
    expectTypeOf<'updatedAt'>().not.toEqualTypeOf<Test>()
    expectTypeOf<'title' | 'body' | 'revision' | 'createdAt'>().toEqualTypeOf<Test>()
  })

  describe('RequiredAtLeastOne', () => {
    type Post = {
      title: string
      body: string
      revision?: number
      createdAt: Date
      updatedAt?: Date
    }

    test('RequiredAtLeastOne - Pattern1', () => {
      type Test = RequiredAtLeastOne<Post, 'title' | 'body'>

      expectTypeOf<Test>({ title: 'Hello!', createdAt: date }).toEqualTypeOf<Test>()
      expectTypeOf<Test>({ body: 'Baby!', createdAt: date }).toEqualTypeOf<Test>()
      expectTypeOf<Test>({ title: 'Hello!', body: 'Baby!', createdAt: date }).toEqualTypeOf<Test>()
      expectTypeOf<Test>({
        title: 'Hello!',
        body: 'Baby!',
        revision: 0,
        createdAt: date,
        updatedAt: date,
      }).toEqualTypeOf<Test>()

      expectTypeOf({ revision: 0, createdAt: date, updatedAt: date }).not.toEqualTypeOf<Test>()
    })

    test('RequiredAtLeastOne - Pattern2', () => {
      type Test = RequiredAtLeastOne<Post>

      expectTypeOf<Test>({ title: 'Hello!' }).toEqualTypeOf<Test>()
      expectTypeOf<Test>({ body: 'Baby!' }).toEqualTypeOf<Test>()
      expectTypeOf<Test>({ revision: 0 }).toEqualTypeOf<Test>()
      expectTypeOf<Test>({ createdAt: date }).toEqualTypeOf<Test>()
      expectTypeOf<Test>({ updatedAt: date }).toEqualTypeOf<Test>()
      expectTypeOf<Test>({
        title: 'Hello!',
        body: 'Baby!',
        revision: 0,
        createdAt: date,
        updatedAt: date,
      }).toEqualTypeOf<Test>()

      expectTypeOf({}).not.toEqualTypeOf<Test>()
    })
  })

  test('NonNullishFields', () => {
    expectTypeOf<
      NonNullishFields<{
        id: `post_${number}`
        title: string
        body: string | undefined
        author: { name: string; age: number | undefined }
        createdAt: Date
        updatedAt?: Date | null
      }>
    >().toEqualTypeOf<{
      id: `post_${number}`
      title: string
      body: string
      author: { name: string; age: number | undefined }
      createdAt: Date
      updatedAt: Date
    }>()

    expectTypeOf<NonNullishFields<string>>().toEqualTypeOf<string>()
  })

  test('ArrayElement', () => {
    expectTypeOf<ArrayElement<Array<number>>>().toEqualTypeOf<number>()
    expectTypeOf<ArrayElement<ReadonlyArray<number>>>().toEqualTypeOf<number>()
    expectTypeOf<ArrayElement<Array<{ v: string[] } | string | null>>>().toEqualTypeOf<
      { v: string[] } | string | null
    >()
    expectTypeOf<ArrayElement<null>>().toEqualTypeOf<never>()
    expectTypeOf<ArrayElement<[]>>().toEqualTypeOf<never>()
  })
})
