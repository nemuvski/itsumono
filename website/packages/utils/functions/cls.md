---
id: "cls"
title: "cls"
sidebar_label: "cls"
custom_edit_url: null
---

**cls**(`value`, `options?`): `string`

引数の値からclass属性の値を構築して返却

オプションにより、構築時に処理を加えることが可能
- trimPeriod: 先頭のピリオドを削除

**`See`**

[https://www.npmjs.com/package/clsx](https://www.npmjs.com/package/clsx) *inspired by clsx*

**`Example`**

```ts
// 返値: button button--lg
cls('button button--lg')

// 返値: button button--lg
cls(['button', 'button--lg'])

// 返値: button
cls('.button', { trimPeriod: true })

// 返値: button is-open
const isOpen = true
cls(['button', isOpen && 'is-open', !isOpen && 'is-close'])

// 返値: button isOpen is-open
const isOpen = true
cls(['button', { isOpen, 'is-open': isOpen, 'is-close': !isOpen }])

// 返値: hello
cls({ hello: true, world: false })
```

#### Parameters

| Name | Type                                  |
| :------ |:--------------------------------------|
| `value` | `undefined` \| ``null`` \| `string` \| `number` \| `boolean` \| `Record`<`string`, `undefined` \| ``null`` \| `boolean`\> \| (`undefined` \| ``null`` \| `string` \| `number` \| `boolean` \| `Record`<`string`, `undefined` \| ``null`` \| `boolean`\>)[] |
| `options?` | [`ClsOptions`](../types/ClsOptions.md) |

#### Returns

`string`
