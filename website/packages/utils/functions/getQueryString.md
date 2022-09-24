---
id: "get-query-string"
title: "getQueryString"
sidebar_label: "getQueryString"
custom_edit_url: null
---

**getQueryString**(`url`): `string`

引数urlのクエリパラメータ部分を返却

**`Example`**

```ts
// 返値: ?test1=32&test2=ア
getQueryString('https://localhost:8080?test1=32&test2=%E3%82%A2#fragment')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

## Returns

`string`
