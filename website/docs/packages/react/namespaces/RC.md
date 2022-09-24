---
id: "rc"
title: "RC"
sidebar_label: "RC"
custom_edit_url: null
---

RC (React Component)の略。

コンポーネントに関する型を提供します。

`children` (子要素)を持つコンポーネントや独自のプロパティを持つコンポーネントの定義などに利用できます。


## Type Aliases

### Element

**Element**: `ReactNode`

ReactNodeのエイリアス

___

### WithChildren

**WithChildren**<`Props`\>: `FC`<`PropsWithChildren`<`Props`\>\>

子要素を持つ(childrenプロパティあり)コンポーネントの型

**`Example`**

```ts
const YourComponent: RC.WithChildren<{ value: string }> = ({ value, children }) => {
  // コンポーネントの内容
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | `object` |

___

### WithoutChildren

**WithoutChildren**<`Props`\>: `FC`<`Props`\>

子要素を持たない(childrenプロパティなし)コンポーネントの型

**`Example`**

```ts
const YourComponent: RC.WithoutChildren<{ value: string }> = ({ value }) => {
  // コンポーネントの内容
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | `object` |
