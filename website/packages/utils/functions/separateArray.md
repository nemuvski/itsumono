---
id: "separate-array"
title: "separateArray"
sidebar_label: "separateArray"
custom_edit_url: null
---

**separateArray**\<`T`, `M`, `N`\>(`arr`, `matchFn`): `Object`

引数arrのうち、引数matchFnの実行結果についてTrue/Falseで分けたものを返却

**`Example`**

```ts
// --- [例1] プリミティブ値を格納する配列に対して、null/undefinedであるか否かで分ける --- //
type ItemType = number | string | null | undefined
const { matches, notMatches } = separateArray<ItemType, Exclude<ItemType, Nullish>, Nullish>(
  [1, 2, 3, '4', null, undefined],
  isNotNullish
)
// matches => [1, 2, 3, '4']
// notMatches => [null, undefined]

// --- [例2] 任意のオブジェクトを格納する配列に対して、updatedAtの有無で分ける --- //
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
// matches => [{ title: 'sample', body: 'sample', createdAt: new Date() }]
// notMatches => [
//   { title: 'sample', body: 'sample', revision: 1, createdAt: new Date(), updatedAt: new Date() },
//   { title: 'sample', body: 'sample', revision: 2, createdAt: new Date(), updatedAt: new Date() },
// ]
```

## Type

| Name |
| :------ |
| `T` |
| `M` |
| `N` |

## Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `matchFn` | (`v`: `T`) =\> `boolean` |

## Returns

`Object`

| Name | Type |
| :------ | :------ |
| `matches` | `M`[] |
| `notMatches` | `N`[] |
