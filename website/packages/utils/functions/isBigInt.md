---
id: "is-big-int"
title: "isBigInt"
sidebar_label: "isBigInt"
custom_edit_url: null
---

**isBigInt**(`value`): value is bigint

引数valueがbigintの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isBigInt(value)) {
  // この時、valueはbigint値と推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is bigint
