---
id: "is-boolean"
title: "isBoolean"
sidebar_label: "isBoolean"
custom_edit_url: null
---

**isBoolean**(`value`): value is boolean

引数valueがbooleanの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isBoolean(value)) {
  // この時、valueはboolean値であると推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is boolean
