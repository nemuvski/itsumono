---
id: "get-query-param-value"
title: "getQueryParamValue"
sidebar_label: "getQueryParamValue"
custom_edit_url: null
---

**getQueryParamValue**<`P`\>(`url`, `paramName`): ``null`` \| `string`

引数urlで指定したパラメータの値を返却
※ パラメータが存在しない場合はnull

**`Example`**

```ts
// 返値: 32
getQueryParamValue('https://localhost:8080?test=32', 'test')
// 返値: （※空文字）
getQueryParamValue('https://localhost:8080?test=', 'test')
// 返値: null
getQueryParamValue('https://localhost:8080', 'test')
// 返値: 32
getQueryParamValue(new URL('https://localhost:8080?test=32'), 'test')
// 返値: （※空文字）
getQueryParamValue(new URL('https://localhost:8080?test='), 'test')
// 返値: null
getQueryParamValue(new URL('https://localhost:8080'), 'test')
```

## Type

| Name | Type |
| :------ | :------ |
| `P` | extends `string` |

## Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `paramName` | `P` |

## Returns

``null`` \| `string`
