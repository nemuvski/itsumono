---
id: "replace-hw-alphanumerics-with-fw"
title: "replaceHwAlphanumericsWithFw"
sidebar_label: "replaceHwAlphanumericsWithFw"
custom_edit_url: null
---

**replaceHwAlphanumericsWithFw**(`str`): `string`

半角(Half-width)英数字を全角(Full-width)英数字に置換

以下を対象とする
- `0-9` → `０-９`
- `a-z` → `ａ-ｚ`
- `A-Z` → `Ａ-Ｚ`

**`See`**

[https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)](https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block))

**`Example`**

```ts
// 返値: Ａａ０
replaceFwAlphanumericsWithHw('Aa0')
// 返値: Ａａ０
replaceFwAlphanumericsWithHw('Ａa0')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

## Returns

`string`
