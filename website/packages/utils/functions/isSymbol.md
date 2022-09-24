---
id: "is-symbol"
title: "isSymbol"
sidebar_label: "isSymbol"
custom_edit_url: null
---

**isSymbol**(`value`): value is symbol

引数valueがsymbolの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isSymbol(value)) {
  // この時、valueはsymbol値と推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is symbol
