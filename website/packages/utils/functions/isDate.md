---
id: "is-date"
title: "isDate"
sidebar_label: "isDate"
custom_edit_url: null
---

**isDate**(`value`): value is Date

引数valueがDateオブジェクトの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isDate(value)) {
  // この時、valueはDateオブジェクトと推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is Date
