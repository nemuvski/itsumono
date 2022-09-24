---
id: "is-null"
title: "isNull"
sidebar_label: "isNull"
custom_edit_url: null
---

**isNull**(`value`): value is null

引数valueがundefinedである場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isNull(value)) {
  // この時、valueはnullと推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is null
