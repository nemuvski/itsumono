---
id: "escape-reg-exp-chars"
title: "escapeRegExpChars"
sidebar_label: "escapeRegExpChars"
custom_edit_url: null
---

**escapeRegExpChars**(`str`): `string`

引数str中の正規表現でエスケープが必要な文字をエスケープしたものを返却

**`See`**

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#flags_in_constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#flags_in_constructor)

**`Example`**

```ts
// 返値: test\\-123
const escapedStr = escapeRegExpChars('test-123')

// RegExpで利用する
const reg = new RegExp(escapedStr)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`
