---
id: "not-match-type-keys"
title: "NotMatchTypeKeys"
sidebar_label: "NotMatchTypeKeys"
custom_edit_url: null
---

**NotMatchTypeKeys**<`T`, `U`\>: keyof `Omit`<`T`, [`MatchTypeKeys`](MatchTypeKeys.md)<`T`, `U`\>\>

Tのプロパティのうち、Uで指定した型を持たないプロパティのキーを取り出す

**`Example`**

```ts
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
// Keys => "title" | "body"
type Keys = NotMatchTypeKeys<Post, Date | undefined>
// Props => { title: string; body: string }
type Props = Pick<Post, Keys>
```

## Type parameters

| Name |
| :------ |
| `T` |
| `U` |
