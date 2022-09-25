---
id: "required-at-least-one"
title: "RequiredAtLeastOne"
sidebar_label: "RequiredAtLeastOne"
custom_edit_url: null
---

**RequiredAtLeastOne**<`T`, `K`\>: `Pick`<`T`, `Exclude`<keyof `T`, `K`\>\> & `Partial`<`Pick`<`T`, `K`\>\> & `K` extends keyof `T` ? { [\_K in K]-?: Pick<Required<T\>, \_K\> }[`K`] : `never`

Tのプロパティのうち、Kで指定したプロパティのうち最低1つは値を持つオブジェクトである型を得る

**`Example`**

```ts
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
// --- [例1] titleまたはbodyのうち1つは値をとり（undefinedではない）、他プロパティは既存の型に従うオブジェクト型を扱う --- //
// Props1 =>
//   ({ revision?: number; createdAt: Date; updatedAt?: Date } & { title?: string; body?: string } & { title: string })
//   | ({ revision?: number; createdAt: Date; updatedAt?: Date } & { title?: string; body?: string } & { body: string })
type Props1 = RequiredAtLeastOne<Post, 'title' | 'body'>

// NG
const ngSample: Props1 = {}
// 次の場合はcreatedAtプロパティがあるが、titleまたはbodyプロパティにundefined値以外があてられていないためエラー
const ngSample: Props1 = { title: undefined, createdAt: new Date() }
// 次の場合はtitleプロパティがあるが、createdAtプロパティはundefinedではないためエラー
const ngSample: Props1 = { title: 'Hello!' }

// OK
const okSample: Props1 = { title: 'Hello!', createdAt: new Date() }
const okSample: Props1 = { body: 'Baby!', createdAt: new Date() }
const okSample: Props1 = { title: 'Hello!', body: 'Baby!', createdAt: new Date() }

// --- [例2] 全プロパティのうち1つは値をとるオブジェクト型を扱う --- //
type Props2 = RequiredAtLeastOne<Post>

// NG
const ngSample: Props2 = {}
const ngSample: Props2 = { title: undefined }

// OK
const okSample: Props2 = { title: 'Hello!' }
const okSample: Props2 = { title: 'Hello!', revision: 3 }
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |
