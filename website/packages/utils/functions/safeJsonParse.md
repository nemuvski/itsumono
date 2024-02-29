---
id: "safe-json-parse"
title: "safeJsonParse"
sidebar_label: "safeJsonParse"
custom_edit_url: null
---

**safeJsonParse**\<`T`\>(`value`, `options?`): \{ `data`: `T` ; `error`: `null` } \| \{ `data`: `null` ; `error`: `SyntaxError` }

JSON.parse()で発生する例外をキャッチして、例外が発生した場合はエラーオブジェクトを返す

型変数 `T` は JSON.parse()でパースするデータの型を指定する

※ ただし、型ガードは行わないため、呼び出し元で型ガードを適宜実施すること

**`Example`**

```ts
const { data, error } = safeJsonParse<{ foo: string }>('{"foo": "bar"}'); // => { data: { foo: 'bar' }, error: null }
if (error) {
  console.error(error);
} else {
  console.log(data); // => { foo: 'bar' }
}
```

## Parameters

| Name               | Type     |
| :----------------- | :------- |
| `value`            | `string` |
| `options?`         | `Object` |
| `options.reviver?` | _※1_     |

- _※1_ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#reviver に従う

## Returns

\{ `data`: `T` ; `error`: `null` } \| \{ `data`: `null` ; `error`: `SyntaxError` }
