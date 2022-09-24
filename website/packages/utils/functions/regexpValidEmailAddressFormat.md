---
id: "regexp-valid-email-address-format"
title: "regexpValidEmailAddressFormat"
sidebar_label: "regexpValidEmailAddressFormat"
custom_edit_url: null
---

**regexpValidEmailAddressFormat**(): `RegExp`

メールアドレスの形式であるか判定する正規表現を提供

**`Example`**

```ts
regexpValidEmailAddressFormat().test('your-email@example.com')
```

## Returns

`RegExp`

`/^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i`
