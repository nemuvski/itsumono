---
id: "remove-zwchars"
title: "removeZWChars"
sidebar_label: "removeZWChars"
custom_edit_url: null
---

**removeZWChars**(`str`, `options?`): `string`

引数str中のZeroWidth関連の文字を取り除いて（空文字に置換）返却

以下はデフォルトで対象とする
- `\u200B` : ZERO WIDTH SPACE

以下はオプションで対象とするかを選択可能
- `\u200C` : ZERO WIDTH NON-JOINER (ZWNJ)
- `\u200D` : ZERO WIDTH JOINER (ZWJ)
- `\u200E` : LEFT TO RIGHT MARK (LRM)
- `\u200F` : RIGHT TO LEFT MARK (RLM)
- `\uFEFF` : ZERO WIDTH NO-BREAK SPACE (ZWNBSP)

**`Example`**

```ts
// 返値: te\u200Cst
removeZWChars('te\u200B\u200Cst')

// 返値: test
removeZWChars('te\u200Bst\u200C', { zwnj: true })
```

## Parameters

| Name | Type                                                       | Description |
| :------ |:-----------------------------------------------------------| :------ |
| `str` | `string`                                                   |  |
| `options?` | [`RemoveZWCharsOptions`](../types/RemoveZWCharsOptions.md) | デフォルト以外を対象とする場合に設定 |

## Returns

`string`
