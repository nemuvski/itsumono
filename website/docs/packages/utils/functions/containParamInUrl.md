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
containParamInUrl('https://localhost:8080?test=32', 'test')
containParamInUrl(new URL('https://localhost:8080?test=32'), 'test')
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

`boolean`
