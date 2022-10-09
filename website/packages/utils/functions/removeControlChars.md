---
id: "remove-control-chars"
title: "removeControlChars"
sidebar_label: "removeControlChars"
custom_edit_url: null
---

**removeControlChars**(`str`, `options?`): `string`

引数str中の制御文字を取り除いて（空文字に置換）返却

以下はデフォルトで対象とする (16進数が示すコードは、説明欄にあるリンク先を参照)
- `0x00-0x08`
- `0x0B-0x0C`
- `0x0E-0x1F`
- `0x7F-0x9F`

以下はオプションで対象とするかを選択可能
- `\t` (`0x09`) : Horizontal Tab
- `\n` (`0x0A`) : LF
- `\r` (`0x0D`) : CR

**`See`**

[https://en.wikipedia.org/wiki/Control_character](https://en.wikipedia.org/wiki/Control_character)

**`Example`**

```ts
// 返値: \ttest\n
removeControlChars('\ttest\n')

// 返値: test
removeControlChars('\ttest\n', { htab: true, lf: true })
```

## Parameters

| Name | Type                                                                 |
| :------ |:---------------------------------------------------------------------|
| `str` | `string`                                                             |
| `options?` | [`RemoveControlCharsOptions`](../types/RemoveControlCharsOptions.md) |

## Returns

`string`
