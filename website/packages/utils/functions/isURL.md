---
id: "is-url"
title: "isURL"
sidebar_label: "isURL"
custom_edit_url: null
---

**isURL**(`value`): value is URL

引数valueがURLオブジェクトの場合はTrueを返却

**`Example`**

```ts
const url = getCurrentPageURLObject()
if (isURL(url)) {
  // この時、valueはURLオブジェクトと推論できる
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

## Returns

value is URL
