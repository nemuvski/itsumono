---
id: "safe-encode-uri-component"
title: "safeEncodeURIComponent"
sidebar_label: "safeEncodeURIComponent"
custom_edit_url: null
---

**safeEncodeURIComponent**(`value`): \{ `data`: `string` ; `error`: `null` } \| \{ `data`: `null` ; `error`: `URIError` }

encodeURIComponent()で発生する例外をキャッチして、例外が発生した場合はエラーオブジェクトを返却する

**`Example`**

```ts
const { data, error } = safeEncodeURIComponent("foo bar"); // => { data: 'foo%20bar', error: null }
if (error) {
  console.error(error);
} else {
  console.log(data); // => 'foo%20bar'
}
```

## Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

## Returns

\{ `data`: `string` ; `error`: `null` } \| \{ `data`: `null` ; `error`: `URIError` }
