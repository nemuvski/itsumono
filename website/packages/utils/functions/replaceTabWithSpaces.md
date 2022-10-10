---
id: "replace-tab-with-spaces"
title: "replaceTabWithSpaces"
sidebar_label: "replaceTabWithSpaces"
custom_edit_url: null
---

**replaceTabWithSpaces**(`str`, `numSpaces`): `string`

引数str中のタブをスペースに置換

**`Throws`**

numSpacesが1以上の整数値でない場合はエラー

**`Example`**

```ts
// 返値: te  st
replaceTabWithSpaces('te\tst', 2)

// 返値: te st
replaceTabWithSpaces('te\tst', 1)
```

## Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  |
| `numSpaces` | `number` | スペース数（1以上の整数値をとる） |

## Returns

`string`
