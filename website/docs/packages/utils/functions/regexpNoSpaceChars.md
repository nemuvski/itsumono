---
id: "regexp-no-space-chars"
title: "regexpNoSpaceChars"
sidebar_label: "regexpNoSpaceChars"
custom_edit_url: null
---

**regexpNoSpaceChars**(): `RegExp`

空白文字以外の文字が含まれるかを判定する正規表現を提供

**`Example`**

```ts
regexpNoSpaceChars().test('form-field-value')
```

## Returns

`RegExp`

`/\S+/`
