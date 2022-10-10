---
id: "replace-fw-alphanumerics-with-hw"
title: "replaceFwAlphanumericsWithHw"
sidebar_label: "replaceFwAlphanumericsWithHw"
custom_edit_url: null
---

**replaceFwAlphanumericsWithHw**(`str`): `string`

全角(Full-width)英数字を半角(Half-width)英数字に置換

以下を対象とする
- `０-９` → `0-9`
- `ａ-ｚ` → `a-z`
- `Ａ-Ｚ` → `A-Z`

**`See`**

[https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)](https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block))

**`Example`**

```ts
// 返値: Aa0
replaceFwAlphanumericsWithHw('Ａａ０')

// 返値: Aa0
replaceFwAlphanumericsWithHw('Ａa0')
```

## Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

## Returns

`string`
