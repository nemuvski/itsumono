---
id: "safe-json-stringify"
title: "safeJsonStringify"
sidebar_label: "safeJsonStringify"
custom_edit_url: null
---

**safeJsonStringify**\<`T`\>(`value`, `options?`): \{ `data`: `string` ; `error`: `null` } \| \{ `data`: `null` ; `error`: `TypeError` }

JSON.stringify()で発生する例外をキャッチして、例外が発生した場合はエラーオブジェクトを返す

**`Example`**

```ts
const { data, error } = safeJsonStringify({ foo: "bar" }); // => { data: '{"foo":"bar"}', error: null }
if (error) {
  console.error(error);
} else {
  console.log(data); // => '{"foo":"bar"}'
}
```

## Parameters

| Name                | Type     |
| :------------------ | :------- |
| `value`             | `T`      |
| `options?`          | `Object` |
| `options.replacer?` | _※1_     |
| `options.space?`    | _※2_     |

- _※1_ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#replacer に従う
- _※2_ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#space に従う

## Returns

\{ `data`: `T` ; `error`: `null` } \| \{ `data`: `null` ; `error`: `SyntaxError` }
