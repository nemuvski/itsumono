---
id: "build-path"
title: "buildPath"
sidebar_label: "buildPath"
custom_edit_url: null
---

**buildPath**(...`paths`): `string`

パスを結合して返却

**`Example`**

```ts
// 返値: path/to/test
buildPath('path/to/', null, undefined, 'test')
// 返値: path/to/test
buildPath('/', 'path/to/', null, undefined, 'test')
// 返値: /blog/120
buildPath('/blog', 120)
// 返値: /blog/120
buildPath('  /blog/  ', 120, '/')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | (`undefined` \| ``null`` \| `string` \| `number`)[] |

## Returns

`string`
