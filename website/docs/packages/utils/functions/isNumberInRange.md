---
id: "is-number-in-range"
title: "isNumberInRange"
sidebar_label: "isNumberInRange"
custom_edit_url: null
---

**isNumberInRange**(`value`, `minValue`, `maxValue`, `interval?`): `boolean`

引数valueが指定した最小値、最大値以内の場合はTrueを返却

**`Example`**

```ts
// 返値: true
isNumberInRange(3, 3, 5)
// 返値: false
isNumberInRange(3, 3, 5, '(]')
// 返値: true
isNumberInRange(3, 3, 5, '[)')
// 返値: false
isNumberInRange(5, 3, 5, '()')
```

## Parameters

| Name | Type                                                               | Default value | Description |
| :------ |:-------------------------------------------------------------------| :------ | :------ |
| `value` | `number`                                                           | `undefined` |  |
| `minValue` | `number`                                                           | `undefined` |  |
| `maxValue` | `number`                                                           | `undefined` |  |
| `interval` | [`IntervalSymbolIdentifier`](../types/IntervalSymbolIdentifier.md) | `'[]'` | 区間記号 []: min以上max以下, (]: minより大きいmax以下, [): min以上max未満, (): minより大きくmax未満 |

## Returns

`boolean`
