---
id: "diff-array"
title: "diffArray"
sidebar_label: "diffArray"
custom_edit_url: null
---

**diffArray**\<`T`\>(`left`, `right`, `matchFn?`): `Object`

2つの配列でそれぞれにのみ存在する要素、両方に存在する要素を分けたものを返却

**`Example`**

```ts
// --- [例1] 文字列と数値を要素にとる配列 --- //
const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray([1, 2, 3, '4', '5'], ['1', '2', 3, 4, 5])
// leftOnlyItems => [1, 2, '4', '5']
// rightOnlyItems => ['1', '2', 4, 5]
// bothItems => [3]

// --- [例1] 任意のオブジェクトを要素にとる配列 --- //
const left: Array<Test> = [
  { id: 1, value: 'test1' },
  { id: 2, value: 'test2' },
  { id: 3, value: 'test3' },
]
const right: Array<Test> = [
  { id: 3, value: 'test3' },
  { id: 4, value: 'test4' },
  { id: 5, value: 'test5' },
]
const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray(left, right, (a, b) => a.id === b.id && a.value === b.value)
// leftOnlyItems => [{ id: 1, value: 'test1' }, { id: 2, value: 'test2' }]
// rightOnlyItems => [{ id: 4, value: 'test4' }, { id: 5, value: 'test5' }]
// bothItems => [{ id: 3, value: 'test3' }]
```

## Type

| Name |
| :------ |
| `T` |

## Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `T`[] |  |
| `right` | `T`[] |  |
| `matchFn` | (`a`: `T`, `b`: `T`) => `boolean` | 要素一致を評価する関数（一致する場合はTrueを返却する） |

## Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bothItems` | `T`[] |
| `leftOnlyItems` | `T`[] |
| `rightOnlyItems` | `T`[] |
