---
id: "replace-spaces-with-tab"
title: "replaceSpacesWithTab"
sidebar_label: "replaceSpacesWithTab"
custom_edit_url: null
---

**replaceSpacesWithTab**(`str`, `numSpaces`): `string`

引数str中のスペースをタブに置換

**`Throws`**

numSpacesが1以上の整数値でない場合はエラー

**`Example`**

```ts
// 返値: \ttest
replaceSpacesWithTab('  test', 2)
```

## Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  |
| `numSpaces` | `number` | スペース数（1以上の整数値をとる） |

## Returns

`string`
