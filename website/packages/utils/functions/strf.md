---
id: "strf"
title: "strf"
sidebar_label: "strf"
custom_edit_url: null
---

**strf**\<`F`\>(`str`, `fields`, `transFn?`): `string`

引数str(テンプレート)に引数fieldsの値を埋め込んだ文字列を返却

**`Example`**

```ts
// 返値: /user/29/post/33
strf('/user/{userId}/post/{postId}', { userId: 29, postId: 33 })

// 返値: He is Taro YAMADA. Taro is 25 years old.
strf(
  'He is {last-name} {first-name}. {last-name} is {age} years old.',
  { 'last-name': 'Taro', 'first-name': 'yamada'.toUpperCase(), age: 25 }
)

// 返値: He is Taro YAMADA. Taro is 25 years old.
strf(
  'He is {last-name} {first-name}. {last-name} is {age} years old.',
  { 'last-name': 'Taro', 'first-name': 'yamada', age: 25 },
  (fieldName, fieldValue) => {
    if (fieldName === 'first-name') {
      return fieldValue.toString().toUpperCase()
    }
    return String(fieldValue).toString()
  }
)

// 返値: true false
strf('{t} {f}', { t: true, f: false })

// 返値: null undefined
strf('{n} {und}', { n: null, und: undefined })
```

#### Type parameters

| Name | Type                                                              |
| :------ |:------------------------------------------------------------------|
| `F` | extends `Record`\<`string`, [`Primitive`](../types/Primitive.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | テンプレート |
| `fields` | `F` | 埋め込む値 |
| `transFn` | (`fieldName`: keyof `F`, `fieldValue`: `F`[keyof `F`]) =\> `string` | 埋め込む際の処理(出力するロジックをカスタマイズしたい場合のみ) |

#### Returns

`string`
