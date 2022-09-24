---
id: "is-nullish"
title: "isNullish"
sidebar_label: "isNullish"
custom_edit_url: null
---

**isNullish**(`value`): value is Nullish

引数valueがNullish値である場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isNullish(value)) {
  // この時、valueはnullと推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is Nullish
