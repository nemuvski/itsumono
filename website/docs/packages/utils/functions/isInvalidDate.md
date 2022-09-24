---
id: "is-invalid-date"
title: "isInvalidDate"
sidebar_label: "isInvalidDate"
custom_edit_url: null
---

**isInvalidDate**(`date`): `boolean`

無効なDateオブジェクトである場合はTrueを返却

**`Example`**

```ts
// 返値: false
isInvalidDate(new Date())
// 返値: true
isInvalidDate(new Date(''))
```

## Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

## Returns

`boolean`
