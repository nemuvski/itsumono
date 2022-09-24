---
id: "exact-not-match-type-keys"
title: "ExactNotMatchTypeKeys"
sidebar_label: "ExactNotMatchTypeKeys"
custom_edit_url: null
---

**ExactNotMatchTypeKeys**<`T`, `U`\>: keyof `Omit`<`T`, [`ExactMatchTypeKeys`](./ExactMatchTypeKeys.md)<`T`, `U`\>\>

Tのプロパティのうち、Uで指定した型を持プロパティのキーを取り出す

**`Example`**

```ts
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
// Keys => "title" | "body" | "revision" | "createdAt"
type Keys = ExactNotMatchTypeKeys<Post, Date | undefined>
// Props => { title: string; body: string; revision?: number; createdAt: Date }
type Props = Pick<Post, Keys>
```

## Type parameters

| Name |
| :------ |
| `T` |
| `U` |
