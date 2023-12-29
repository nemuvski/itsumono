---
id: "get-query-params-value"
title: "getQueryParamsValue"
sidebar_label: "getQueryParamsValue"
custom_edit_url: null
---


**getQueryParamsValue**\<`P`\>(`url`, `paramNames`): `Record`\<`P`, `string`[]\>

引数urlから指定したパラメータをキーとした配列を値に持つオブジェクトを返却

**`Example`**

```ts
// 返値: { test1: ['3 2', '56'], test2: ['ア'], test3: [] }
getQueryParamsValue('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment', [
  'test1',
  'test2',
  'test3', // クエリストリング中にないパラメータを指定した場合は空配列 (返値を参照)
])

// 返値: { test1: ['3 2', '56'], test2: ['ア'], test3: [] }
getQueryParamsValue(new URL('https://localhost:8080?test1=3+2&test2=%E3%82%A2&test1=56#fragment'), [
  'test1',
  'test2',
  'test3',
])
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` \| `URLSearchParams` |
| `paramNames` | `P`[] |

#### Returns

`Record`\<`P`, `string`[]\>
