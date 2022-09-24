---
id: "is-not-nullish"
title: "isNotNullish"
sidebar_label: "isNotNullish"
custom_edit_url: null
---

**isNotNullish**<`T`\>(`value`): value is NonNullable<T\>

引数valueがNullish値ではない場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isNotNullish(value)) {
  // この時、valueはnumber値と推論できる
}
```

## Type

| Name |
| :------ |
| `T` |

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

## Returns

value is NonNullable<T\>
