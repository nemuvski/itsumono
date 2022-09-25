---
id: "exact-match-type-keys"
title: "ExactMatchTypeKeys"
sidebar_label: "ExactMatchTypeKeys"
custom_edit_url: null
---

**ExactMatchTypeKeys**<`T`, `U`\>: { [K in keyof T]-?: [U] extends [T[K]] ? [T[K]] extends [U] ? K : never : never }[keyof `T`]

Tのプロパティのうち、Uで指定した型と一致するプロパティのキーを取り出す

**`Example`**

```ts
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
// Keys => "updatedAt"
type Keys = ExactMatchTypeKeys<Post, Date | undefined>
// Props => { updatedAt?: Date }
type Props = Pick<Post, Keys>
```

## Type parameters

| Name |
| :------ |
| `T` |
| `U` |
