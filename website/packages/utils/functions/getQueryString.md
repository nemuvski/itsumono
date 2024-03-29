---
id: "get-query-string"
title: "getQueryString"
sidebar_label: "getQueryString"
custom_edit_url: null
---

**getQueryString**(`url`): `string`

引数 url のクエリパラメータ部分を返却

※ 文字列中に含まれる `+` (プラス記号)は半角スペースに変換されます

**`Throws`**

内部で利用している `decodeURIComponent()` がエラーをスローする可能性がある

**`Example`**

```ts
// 返値: ?test1=32&test2=ア
getQueryString("https://localhost:8080?test1=32&test2=%E3%82%A2#fragment");

// 返値: ?test1=32&test2=ア
getQueryString("/path/to/?test1=32&test2=%E3%82%A2#fragment");

// 返値: ?test1=3 2&test2=ア
getQueryString("https://localhost:8080?test1=3+2&test2=%E3%82%A2#fragment");
```

## Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

## Returns

`string`
