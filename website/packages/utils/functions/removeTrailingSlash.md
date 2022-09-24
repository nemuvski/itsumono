---
id: "remove-trailing-slash"
title: "removeTrailingSlash"
sidebar_label: "removeTrailingSlash"
custom_edit_url: null
---

**removeTrailingSlash**(`path`): `string`

引数pathの末尾スラッシュ（TrailingSlash）を削除して、返却

**`Example`**

```ts
// 返値: /path/to/ok
withTrailingSlash('/path/to/ok')
// 返値: /path/to/ok
withTrailingSlash('/path/to/ok/')
// 返値: http://localhost:8000/sample
withTrailingSlash('http://localhost:8000/sample/')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

## Returns

`string`
