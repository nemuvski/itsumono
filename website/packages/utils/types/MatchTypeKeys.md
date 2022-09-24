---
id: "match-type-keys"
title: "MatchTypeKeys"
sidebar_label: "MatchTypeKeys"
custom_edit_url: null
---

**MatchTypeKeys**<`T`, `U`\>: { [K in keyof T]-?: U extends T[K] ? K : never }[keyof `T`]

Tのプロパティのうち、Uで指定した型を持つプロパティのキーを取り出す

**`Example`**

```ts
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
// Keys => "revision" | "createdAt" | "updatedAt"
type Keys = MatchTypeKeys<Post, Date | undefined>
// Props => { revision?: number; createdAt: Date; updatedAt?: Date }
type Props = Pick<Post, Keys>
```

## Type parameters

| Name |
| :------ |
| `T` |
| `U` |
