---
id: "is-undefined"
title: "isUndefined"
sidebar_label: "isUndefined"
custom_edit_url: null
---

**isUndefined**(`value`): value is undefined

引数valueがundefinedである場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isUndefined(value)) {
  // この時、valueはundefinedと推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is undefined
