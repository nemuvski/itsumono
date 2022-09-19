---
id: "itsumono_react.RC"
title: "Namespace: RC"
sidebar_label: "@itsumono/react.RC"
custom_edit_url: null
---

[@itsumono/react](../modules/itsumono_react.md).RC

RC (ReactComponent)

## Type Aliases

### Element

Ƭ **Element**: `ReactNode`

ReactNodeのエイリアス

#### Defined in

[packages/react/src/types/rc.ts:10](https://github.com/nemuvski/itsumono/blob/db7da64/packages/react/src/types/rc.ts#L10)

___

### WithChildren

Ƭ **WithChildren**<`Props`\>: `FC`<`PropsWithChildren`<`Props`\>\>

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

#### Defined in

[packages/react/src/types/rc.ts:20](https://github.com/nemuvski/itsumono/blob/db7da64/packages/react/src/types/rc.ts#L20)

___

### WithoutChildren

Ƭ **WithoutChildren**<`Props`\>: `FC`<`Props`\>

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

#### Defined in

[packages/react/src/types/rc.ts:30](https://github.com/nemuvski/itsumono/blob/db7da64/packages/react/src/types/rc.ts#L30)
