---
id: "non-nullish-fields"
title: "NonNullishFields"
sidebar_label: "NonNullishFields"
custom_edit_url: null
---

オブジェクトの全フィールドの型から undefined,null を除外した型を得る

※ ネストしたオブジェクトのフィールドに対しては適用されない

**`Example`**

```ts
type Post = {
  id: `post_${number}`;
  title: string;
  body: string | undefined;
  author: { name: string; age: number | undefined };
  createdAt: Date;
  updatedAt?: Date | null;
};
// NewPost => { id: `post_${number}`; title: string; body: string; author: { name: string; age: number | undefined }; createdAt: Date; updatedAt: Date }
type NewPost = NonNullishFields<Post>;
```
