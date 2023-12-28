---
id: "maybe"
title: "Maybe"
sidebar_label: "Maybe"
custom_edit_url: null
---

**Maybe**(`props`, `context?`): ``null`` \| `ReactElement`\<`any`, `any`\>

条件式がtrueになった場合のみ子要素を出力するコンポーネント

**`Example`**

```ts
<Maybe test={someCondition}>
  <span>hello!</span>
</Maybe>
```

## Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`\<\{ `test?`: ``null`` \| `boolean`  \}\> |
| `context?` | `any` |

## Returns

``null`` \| `ReactElement`\<`any`, `any`\>
