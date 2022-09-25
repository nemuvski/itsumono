---
id: "regexp-valid-url-format"
title: "regexpValidUrlFormat"
sidebar_label: "regexpValidUrlFormat"
custom_edit_url: null
---

**regexpValidUrlFormat**(): `RegExp`

URLの形式であるか判定する正規表現を提供

**`Example`**

```ts
regexpValidUrlFormat().test('https://example.com')
```

## Returns

`RegExp`

`/^https?://[\w/:%#$&?()~.=+-]+$/i`
