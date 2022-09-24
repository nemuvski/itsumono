---
id: "remove-hash-fragment"
title: "removeHashFragment"
sidebar_label: "removeHashFragment"
custom_edit_url: null
---

**removeHashFragment**(`url`): `string`

引数urlにあるフラグメントを削除したものを返却

**`Example`**

```ts
// 返値: https://localhost:8080?test=32
removeHashFragment('https://localhost:8080?test=32#hash-fragment')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

## Returns

`string`
