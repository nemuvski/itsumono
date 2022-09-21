---
id: "either"
title: "Either"
sidebar_label: "Either"
sidebar_position: 0
custom_edit_url: null
---

## Summary

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

## Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.match` | `ReactNode` |
| `props.not` | `ReactNode` |
| `props.test?` | ``null`` \| `boolean` |
| `context?` | `any` |

## Returns

``null`` \| `ReactElement`<`any`, `any`\>
