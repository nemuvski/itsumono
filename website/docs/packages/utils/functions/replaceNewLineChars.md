---
id: "replace-new-line-chars"
title: "replaceNewLineChars"
sidebar_label: "replaceNewLineChars"
custom_edit_url: null
---

**replaceNewLineChars**(`str`, `replaceCode?`): `string`

引数str中の改行コード（CR、LF、CRLF）を引数replaceCodeで指定した改行コードに置換

**`Throws`**

replaceCodeがLF,CR,CRLF以外の場合はエラー

**`Example`**

```ts
// 返値: t\n\n\te\ns\nt
replaceNewLineChars('t\r\n\r\te\rs\nt')
// 返値: t\r\n\r\n\te\r\ns\r\nt
replaceNewLineChars('t\r\n\r\te\rs\nt', 'CRLF')
```

## Parameters

| Name | Type                                                         | Default value | Description |
| :------ |:-------------------------------------------------------------| :------ | :------ |
| `str` | `string`                                                     | `undefined` |  |
| `replaceCode` | [`NewLineCodeIdentifier`](../types/NewLineCodeIdentifier.md) | `'LF'` | （デフォルト:LF） |

## Returns

`string`
