---
id: "with-root-relative-path"
title: "withRootRelativePath"
sidebar_label: "withRootRelativePath"
custom_edit_url: null
---

**withRootRelativePath**(`path`): `string`

引数pathの先頭にルートパスを表すを付与して、返却

**`Example`**

```ts
// 返値: /path/to/test
withRootRelativePath('/path/to/test')
// 返値: /path/to/test
withRootRelativePath('path/to/test')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

## Returns

`string`
