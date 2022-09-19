---
id: "itsumono_react"
title: "Module: @itsumono/react"
sidebar_label: "@itsumono/react"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [RC](../namespaces/itsumono_react.RC.md)

## Functions

### Either

▸ **Either**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

条件式がtrue/falseで出力する内容を切り替えるコンポーネント

**`Example`**

```ts
<Either
  test={someCondition}
  match={'testの条件式がtrueの時の出力内容'}
  not={'testの条件式がfalseの時の出力内容'}
/>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.match` | `ReactNode` |
| `props.not` | `ReactNode` |
| `props.test?` | ``null`` \| `boolean` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

___

### Maybe

▸ **Maybe**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

条件式がtrueになった場合のみ子要素を出力するコンポーネント

**`Example`**

```ts
<Maybe test={someCondition}>
  <span>hello!</span>
</Maybe>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<{ `test?`: ``null`` \| `boolean`  }\> |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>
