---
id: "safe-decode-uri-component"
title: "safeDecodeURIComponent"
sidebar_label: "safeDecodeURIComponent"
custom_edit_url: null
---

**safeDecodeURIComponent**(`value`): \{ `data`: `string` ; `error`: `null` } \| \{ `data`: `null` ; `error`: `URIError` }

decodeURIComponent()で発生する例外をキャッチして、例外が発生した場合はエラーオブジェクトを返却する

**`Example`**

```ts
const { data, error } = safeDecodeURIComponent("foo%20bar"); // => { data: 'foo bar', error: null }
if (error) {
  console.error(error);
} else {
  console.log(data); // => 'foo bar'
}
```

## Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

## Returns

\{ `data`: `string` ; `error`: `null` } \| \{ `data`: `null` ; `error`: `URIError` }
