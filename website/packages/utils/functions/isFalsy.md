---
id: "is-falsy"
title: "isFalsy"
sidebar_label: "isFalsy"
custom_edit_url: null
---

**isFalsy**(`value`): value is Falsy

引数valueがFalsy値である場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isFalsy(value)) {
  // この時、valueはFalsy値と推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is Falsy
