---
id: "contain-param-in-url"
title: "containParamInUrl"
sidebar_label: "containParamInUrl"
custom_edit_url: null
---

**containParamInUrl**<`P`\>(`url`, `paramName`): `boolean`

引数urlで指定したパラメータ名が存在する場合はTrueを返却
※ パラメータがとる値によらない点に注意

**`Example`**

```ts
// 返値: true
containParamInUrl('https://localhost:8080?test=32', 'test')

// 返値: false
containParamInUrl('https://localhost:8080?test1=32', 'test')

// 返値: true
containParamInUrl(new URL('https://localhost:8080?test=32'), 'test')

// 返値: false
containParamInUrl(new URL('https://localhost:8080?test1=32'), 'test')
```

## Type

| Name | Type |
| :------ | :------ |
| `P` | extends `string` |

## Parameters

| Name        | Type      |
|:------------|:----------|
| `url`       | `string` \| `URL` \| `URLSearchParams` |
| `paramName` | `P`       |

## Returns

`boolean`
