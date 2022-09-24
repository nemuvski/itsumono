---
id: "is-finite-number"
title: "isFiniteNumber"
sidebar_label: "isFiniteNumber"
custom_edit_url: null
---

**isFiniteNumber**(`value`): `boolean`

引数valueが有限数（InfinityまたはNaNでない）である場合はTrueを返却

**`Example`**

```ts
// 返値: true
isFiniteNumber(10)
// 返値: false
isFiniteNumber(NaN)
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

## Returns

`boolean`
