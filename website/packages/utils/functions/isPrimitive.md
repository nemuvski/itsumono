---
id: "is-primitive"
title: "isPrimitive"
sidebar_label: "isPrimitive"
custom_edit_url: null
---

**isPrimitive**(`value`): value is Primitive

引数valueがプリミティブ値である場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isPrimitive(value)) {
  // この時、valueはプリミティブ値と推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is Primitive
