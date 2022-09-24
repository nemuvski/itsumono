---
id: "is-browser"
title: "isBrowser"
sidebar_label: "isBrowser"
custom_edit_url: null
---

**isBrowser**(): `boolean`

ブラウザでの実行の場合はTrueを返却する
※ 判定はdocumentとwindowがundefinedではないことで評価している

**`Example`**

```ts
if (isBrowser()) {
  const nodeCollection = document.getElementsByClassName('sample')
}
```

## Returns

`boolean`
