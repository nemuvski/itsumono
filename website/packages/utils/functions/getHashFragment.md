---
id: "get-hash-fragment"
title: "getHashFragment"
sidebar_label: "getHashFragment"
custom_edit_url: null
---

**getHashFragment**(`url`): `string`

引数 url にあるフラグメントを削除したものを返却

※ 文字列中に含まれる `+` (プラス記号)は半角スペースに変換されます

**`Throws`**

内部で利用している `decodeURIComponent()` がエラーをスローする可能性がある

**`Example`**

```ts
// 返値: hash fragment
getHashFragment("https://localhost:8080?test=32#hash+fragment");

// 返値: テスト
getHashFragment("https://localhost:8080?test=32#%E3%83%86%E3%82%B9%E3%83%88");
```

## Parameters

| Name  | Type              |
| :---- | :---------------- |
| `url` | `string` \| `URL` |

## Returns

`string`
