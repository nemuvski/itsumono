---
id: "is-positive-integer"
title: "isPositiveInteger"
sidebar_label: "isPositiveInteger"
custom_edit_url: null
---

**isPositiveInteger**(`value`, `includeZero?`, `safety?`): `boolean`

引数の数値が正の整数（引数の指定で0を含ませることが可能）である場合はTrueを返却する

**`See`**

 - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
 - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

**`Example`**

```ts
// 返値: true
isPositiveInteger(100)

// 返値: false
isPositiveInteger(0)

// 返値: true
isPositiveInteger(0, true)
```

## Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `string` \| `number` | `undefined` |  |
| `includeZero` | `boolean` | `false` | 0を含ませる場合はTrueを設定 |
| `safety` | `boolean` | `false` | MAX_SAFE_INTEGERを考慮する場合はTrueを設定 |

## Returns

`boolean`

boolean
