---
id: "get-hash-fragment"
title: "getHashFragment"
sidebar_label: "getHashFragment"
custom_edit_url: null
---

**getHashFragment**(`url`): `string`

引数urlにあるフラグメントを削除したものを返却

**`Example`**

```ts
// 返値: hash fragment
removeHashFragment('https://localhost:8080?test=32#hash+fragment')

// 返値: テスト
removeHashFragment('https://localhost:8080?test=32#%E3%83%86%E3%82%B9%E3%83%88')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |

## Returns

`string`
