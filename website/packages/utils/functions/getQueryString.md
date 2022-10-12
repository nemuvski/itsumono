---
id: "get-query-string"
title: "getQueryString"
sidebar_label: "getQueryString"
custom_edit_url: null
---

**getQueryString**(`url`): `string`

引数urlのクエリパラメータ部分を返却

※ 文字列中に含まれる `+` (プラス記号)は半角スペースに変換されます

**`Example`**

```ts
// 返値: ?test1=32&test2=ア
getQueryString('https://localhost:8080?test1=32&test2=%E3%82%A2#fragment')

// 返値: ?test1=3 2&test2=ア
getQueryString('https://localhost:8080?test1=3+2&test2=%E3%82%A2#fragment')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

## Returns

`string`
