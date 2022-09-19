---
id: "itsumono_utils"
title: "Module: @itsumono/utils"
sidebar_label: "@itsumono/utils"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### ExactMatchTypeKeys

Ƭ **ExactMatchTypeKeys**<`T`, `U`\>: { [K in keyof T]-?: [U] extends [T[K]] ? [T[K]] extends [U] ? K : never : never }[keyof `T`]

Tのプロパティのうち、Uで指定した型と一致するプロパティのキーを取り出す

**`Example`**

```ts
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
// Keys => "updatedAt"
type Keys = ExactMatchTypeKeys<Post, Date | undefined>
// Props => { updatedAt?: Date }
type Props = Pick<Post, Keys>
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

___

### ExactNotMatchTypeKeys

Ƭ **ExactNotMatchTypeKeys**<`T`, `U`\>: keyof `Omit`<`T`, [`ExactMatchTypeKeys`](itsumono_utils.md#exactmatchtypekeys)<`T`, `U`\>\>

Tのプロパティのうち、Uで指定した型を持プロパティのキーを取り出す

**`Example`**

```ts
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
// Keys => "title" | "body" | "revision" | "createdAt"
type Keys = ExactNotMatchTypeKeys<Post, Date | undefined>
// Props => { title: string; body: string; revision?: number; createdAt: Date }
type Props = Pick<Post, Keys>
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

___

### Falsy

Ƭ **Falsy**: ``false`` \| ``0`` \| `0n` \| ``""`` \| `undefined` \| ``null``

Falsy値

**`Example`**

```ts
Exclude<object | undefined, Falsy>
```

**`See`**

[https://developer.mozilla.org/en-US/docs/Glossary/Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

___

### IntervalSymbolIdentifier

Ƭ **IntervalSymbolIdentifier**: ``"[]"`` \| ``"(]"`` \| ``"[)"`` \| ``"()"``

isNumberInRange()の引数intervalの型

___

### MatchTypeKeys

Ƭ **MatchTypeKeys**<`T`, `U`\>: { [K in keyof T]-?: U extends T[K] ? K : never }[keyof `T`]

Tのプロパティのうち、Uで指定した型を持つプロパティのキーを取り出す

**`Example`**

```ts
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
// Keys => "revision" | "createdAt" | "updatedAt"
type Keys = MatchTypeKeys<Post, Date | undefined>
// Props => { revision?: number; createdAt: Date; updatedAt?: Date }
type Props = Pick<Post, Keys>
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

___

### NewLineCodeIdentifier

Ƭ **NewLineCodeIdentifier**: ``"LF"`` \| ``"CR"`` \| ``"CRLF"``

replaceNewLineChars()の引数replaceCodeの型

___

### NotMatchTypeKeys

Ƭ **NotMatchTypeKeys**<`T`, `U`\>: keyof `Omit`<`T`, [`MatchTypeKeys`](itsumono_utils.md#matchtypekeys)<`T`, `U`\>\>

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

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

___

### Nullish

Ƭ **Nullish**: `undefined` \| ``null``

Nullish値

**`Example`**

```ts
Exclude<string | number | undefined, Nullish>
```

___

### Primitive

Ƭ **Primitive**: `string` \| `number` \| `bigint` \| `boolean` \| `symbol` \| `undefined` \| ``null``

プリミティブ値

**`Example`**

```ts
Exclude<string | object | undefined, Primitive>
```

**`See`**

[https://developer.mozilla.org/en-US/docs/Glossary/Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

___

### RemoveControlCharsOptions

Ƭ **RemoveControlCharsOptions**: `Object`

removeControlChars()の引数optionsの型

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cr?` | `boolean` |
| `htab?` | `boolean` |
| `lf?` | `boolean` |

___

### RemoveZWCharsOptions

Ƭ **RemoveZWCharsOptions**: `Object`

removeZWChars()の引数optionsの型

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lrm?` | `boolean` |
| `rlm?` | `boolean` |
| `zwj?` | `boolean` |
| `zwnbsp?` | `boolean` |
| `zwnj?` | `boolean` |

___

### RequiredAtLeastOne

Ƭ **RequiredAtLeastOne**<`T`, `K`\>: `Pick`<`T`, `Exclude`<keyof `T`, `K`\>\> & `Partial`<`Pick`<`T`, `K`\>\> & `K` extends keyof `T` ? { [\_K in K]-?: Pick<Required<T\>, \_K\> }[`K`] : `never`

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

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |

## Functions

### buildPath

▸ **buildPath**(...`paths`): `string`

パスを結合して返却

**`Example`**

```ts
// 返値: path/to/test
buildPath('path/to/', null, undefined, 'test')
// 返値: path/to/test
buildPath('/', 'path/to/', null, undefined, 'test')
// 返値: /blog/120
buildPath('/blog', 120)
// 返値: /blog/120
buildPath('  /blog/  ', 120, '/')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | (`undefined` \| ``null`` \| `string` \| `number`)[] |

#### Returns

`string`

___

### containParamInUrl

▸ **containParamInUrl**<`P`\>(`url`, `paramName`): `boolean`

引数urlで指定したパラメータ名が存在する場合はTrueを返却
※ パラメータがとる値によらない点に注意

**`Example`**

```ts
containParamInUrl('https://localhost:8080?test=32', 'test')
containParamInUrl(new URL('https://localhost:8080?test=32'), 'test')
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `paramName` | `P` |

#### Returns

`boolean`

___

### diffArray

▸ **diffArray**<`T`\>(`left`, `right`, `matchFn?`): `Object`

2つの配列でそれぞれにのみ存在する要素、両方に存在する要素を分けたものを返却

**`Example`**

```ts
// --- [例1] 文字列と数値を要素にとる配列 --- //
const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray([1, 2, 3, '4', '5'], ['1', '2', 3, 4, 5])
// leftOnlyItems => [1, 2, '4', '5']
// rightOnlyItems => ['1', '2', 4, 5]
// bothItems => [3]

// --- [例1] 任意のオブジェクトを要素にとる配列 --- //
const left: Array<Test> = [
  { id: 1, value: 'test1' },
  { id: 2, value: 'test2' },
  { id: 3, value: 'test3' },
]
const right: Array<Test> = [
  { id: 3, value: 'test3' },
  { id: 4, value: 'test4' },
  { id: 5, value: 'test5' },
]
const { leftOnlyItems, rightOnlyItems, bothItems } = diffArray(left, right, (a, b) => a.id === b.id && a.value === b.value)
// leftOnlyItems => [{ id: 1, value: 'test1' }, { id: 2, value: 'test2' }]
// rightOnlyItems => [{ id: 4, value: 'test4' }, { id: 5, value: 'test5' }]
// bothItems => [{ id: 3, value: 'test3' }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `T`[] |  |
| `right` | `T`[] |  |
| `matchFn` | (`a`: `T`, `b`: `T`) => `boolean` | 要素一致を評価する関数（一致する場合はTrueを返却する） |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bothItems` | `T`[] |
| `leftOnlyItems` | `T`[] |
| `rightOnlyItems` | `T`[] |

___

### getHashFragment

▸ **getHashFragment**(`url`): `string`

引数urlにあるフラグメントを削除したものを返却

**`Example`**

```ts
// 返値: hash fragment
removeHashFragment('https://localhost:8080?test=32#hash+fragment')
// 返値: テスト
removeHashFragment('https://localhost:8080?test=32#%E3%83%86%E3%82%B9%E3%83%88')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |

#### Returns

`string`

___

### getQueryParamValue

▸ **getQueryParamValue**<`P`\>(`url`, `paramName`): ``null`` \| `string`

引数urlで指定したパラメータの値を返却
※ パラメータが存在しない場合はnull

**`Example`**

```ts
// 返値: 32
getQueryParamValue('https://localhost:8080?test=32', 'test')
// 返値: （※空文字）
getQueryParamValue('https://localhost:8080?test=', 'test')
// 返値: null
getQueryParamValue('https://localhost:8080', 'test')
// 返値: 32
getQueryParamValue(new URL('https://localhost:8080?test=32'), 'test')
// 返値: （※空文字）
getQueryParamValue(new URL('https://localhost:8080?test='), 'test')
// 返値: null
getQueryParamValue(new URL('https://localhost:8080'), 'test')
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `paramName` | `P` |

#### Returns

``null`` \| `string`

___

### getQueryString

▸ **getQueryString**(`url`): `string`

引数urlのクエリパラメータ部分を返却

**`Example`**

```ts
// 返値: ?test1=32&test2=ア
getQueryString('https://localhost:8080?test1=32&test2=%E3%82%A2#fragment')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

___

### isBigInt

▸ **isBigInt**(`value`): value is bigint

引数valueがbigintの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isBigInt(value)) {
  // この時、valueはbigint値と推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is bigint

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean

引数valueがbooleanの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isBoolean(value)) {
  // この時、valueはboolean値であると推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is boolean

___

### isBrowser

▸ **isBrowser**(): `boolean`

ブラウザでの実行の場合はTrueを返却する
※ 判定はdocumentとwindowがundefinedではないことで評価している

**`Example`**

```ts
if (isBrowser()) {
  const nodeCollection = document.getElementsByClassName('sample')
}
```

#### Returns

`boolean`

___

### isDate

▸ **isDate**(`value`): value is Date

引数valueがDateオブジェクトの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isDate(value)) {
  // この時、valueはDateオブジェクトと推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Date

___

### isFalsy

▸ **isFalsy**(`value`): value is Falsy

引数valueがFalsy値である場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isFalsy(value)) {
  // この時、valueはFalsy値と推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Falsy

___

### isFiniteNumber

▸ **isFiniteNumber**(`value`): `boolean`

引数valueが有限数（InfinityまたはNaNでない）である場合はTrueを返却

**`Example`**

```ts
// 返値: true
isFiniteNumber(10)
// 返値: false
isFiniteNumber(NaN)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

___

### isInvalidDate

▸ **isInvalidDate**(`date`): `boolean`

無効なDateオブジェクトである場合はTrueを返却

**`Example`**

```ts
// 返値: false
isInvalidDate(new Date())
// 返値: true
isInvalidDate(new Date(''))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

___

### isNotNullish

▸ **isNotNullish**<`T`\>(`value`): value is NonNullable<T\>

引数valueがNullish値ではない場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isNotNullish(value)) {
  // この時、valueはnumber値と推論できる
}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

value is NonNullable<T\>

___

### isNull

▸ **isNull**(`value`): value is null

引数valueがundefinedである場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isNull(value)) {
  // この時、valueはnullと推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is null

___

### isNullish

▸ **isNullish**(`value`): value is Nullish

引数valueがNullish値である場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isNullish(value)) {
  // この時、valueはnullと推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Nullish

___

### isNumber

▸ **isNumber**(`value`): value is number

引数valueがnumberの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isNumber(value)) {
  // この時、valueはnumber値と推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is number

___

### isNumberInRange

▸ **isNumberInRange**(`value`, `minValue`, `maxValue`, `interval?`): `boolean`

引数valueが指定した最小値、最大値以内の場合はTrueを返却

**`Example`**

```ts
// 返値: true
isNumberInRange(3, 3, 5)
// 返値: false
isNumberInRange(3, 3, 5, '(]')
// 返値: true
isNumberInRange(3, 3, 5, '[)')
// 返値: false
isNumberInRange(5, 3, 5, '()')
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` |  |
| `minValue` | `number` | `undefined` |  |
| `maxValue` | `number` | `undefined` |  |
| `interval` | [`IntervalSymbolIdentifier`](itsumono_utils.md#intervalsymbolidentifier) | `'[]'` | 区間記号 []: min以上max以下, (]: minより大きいmax以下, [): min以上max未満, (): minより大きくmax未満 |

#### Returns

`boolean`

___

### isPositiveInteger

▸ **isPositiveInteger**(`value`, `includeZero?`, `safety?`): `boolean`

引数の数値が正の整数（引数の指定で0を含ませることが可能）である場合はTrueを返却する

**`See`**

 - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
 - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

**`Example`**

```ts
// 返値: true
isPositiveInteger(100)
// 返値: false
isPositiveInteger(0)
// 返値: true
isPositiveInteger(0, true)
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `string` \| `number` | `undefined` |  |
| `includeZero` | `boolean` | `false` | 0を含ませる場合はTrueを設定 |
| `safety` | `boolean` | `false` | MAX_SAFE_INTEGERを考慮する場合はTrueを設定 |

#### Returns

`boolean`

boolean

___

### isPrimitive

▸ **isPrimitive**(`value`): value is Primitive

引数valueがプリミティブ値である場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isPrimitive(value)) {
  // この時、valueはプリミティブ値と推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Primitive

___

### isString

▸ **isString**(`value`): value is string

引数valueがstringの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isString(value)) {
  // この時、valueはstring値と推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is string

___

### isSymbol

▸ **isSymbol**(`value`): value is symbol

引数valueがsymbolの場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isSymbol(value)) {
  // この時、valueはsymbol値と推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is symbol

___

### isURL

▸ **isURL**(`value`): value is URL

引数valueがURLオブジェクトの場合はTrueを返却

**`Example`**

```ts
const url = getCurrentPageURLObject()
if (isURL(url)) {
  // この時、valueはURLオブジェクトと推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is URL

___

### isUndefined

▸ **isUndefined**(`value`): value is undefined

引数valueがundefinedである場合はTrueを返却

**`Example`**

```ts
let value = getValueFn()
if (isUndefined(value)) {
  // この時、valueはundefinedと推論できる
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined

___

### regexpNoSpaceChars

▸ **regexpNoSpaceChars**(): `RegExp`

空白文字以外の文字が含まれるかを判定する正規表現を提供

**`Example`**

```ts
regexpNoSpaceChars().test('form-field-value')
```

#### Returns

`RegExp`

`/\S+/`

___

### regexpValidEmailAddressFormat

▸ **regexpValidEmailAddressFormat**(): `RegExp`

メールアドレスの形式であるか判定する正規表現を提供

**`Example`**

```ts
regexpValidEmailAddressFormat().test('your-email@example.com')
```

#### Returns

`RegExp`

`/^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i`

___

### regexpValidUrlFormat

▸ **regexpValidUrlFormat**(): `RegExp`

URLの形式であるか判定する正規表現を提供

**`Example`**

```ts
regexpValidUrlFormat().test('https://example.com')
```

#### Returns

`RegExp`

`/^https?://[\w/:%#$&?()~.=+-]+$/i`

___

### removeControlChars

▸ **removeControlChars**(`str`, `options?`): `string`

引数str中の制御文字を取り除いて（空文字に置換）返却

以下はデフォルトで対象とする (16進数が示すコードは、説明欄にあるリンク先を参照)
- `0x00-0x08`
- `0x0B-0x0C`
- `0x0E-0x1F`
- `0x7F-0x9F`

以下はオプションで対象とするかを選択可能
- `\t` (`0x09`) : Horizontal Tab
- `\n` (`0x0A`) : LF
- `\r` (`0x0D`) : CR

**`See`**

[https://en.wikipedia.org/wiki/Control_character](https://en.wikipedia.org/wiki/Control_character)

**`Example`**

```ts
// 返値: \ttest\n
removeControlChars('\ttest\n')
// 返値: test
removeControlChars('\ttest\n', { htab: true, lf: true })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `options?` | [`RemoveControlCharsOptions`](itsumono_utils.md#removecontrolcharsoptions) |

#### Returns

`string`

___

### removeHashFragment

▸ **removeHashFragment**(`url`): `string`

引数urlにあるフラグメントを削除したものを返却

**`Example`**

```ts
// 返値: https://localhost:8080?test=32
removeHashFragment('https://localhost:8080?test=32#hash-fragment')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

___

### removeTrailingSlash

▸ **removeTrailingSlash**(`path`): `string`

引数pathの末尾スラッシュ（TrailingSlash）を削除して、返却

**`Example`**

```ts
// 返値: /path/to/ok
withTrailingSlash('/path/to/ok')
// 返値: /path/to/ok
withTrailingSlash('/path/to/ok/')
// 返値: http://localhost:8000/sample
withTrailingSlash('http://localhost:8000/sample/')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

___

### removeZWChars

▸ **removeZWChars**(`str`, `options?`): `string`

引数str中のZeroWidth関連の文字を取り除いて（空文字に置換）返却

以下はデフォルトで対象とする
- `\u200B` : ZERO WIDTH SPACE

以下はオプションで対象とするかを選択可能
- `\u200C` : ZERO WIDTH NON-JOINER (ZWNJ)
- `\u200D` : ZERO WIDTH JOINER (ZWJ)
- `\u200E` : LEFT TO RIGHT MARK (LRM)
- `\u200F` : RIGHT TO LEFT MARK (RLM)
- `\uFEFF` : ZERO WIDTH NO-BREAK SPACE (ZWNBSP)

**`Example`**

```ts
// 返値: te\u200Cst
removeZWChars('te\u200B\u200Cst')
// 返値: test
removeZWChars('te\u200Bst\u200C', { zwnj: true })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  |
| `options?` | [`RemoveZWCharsOptions`](itsumono_utils.md#removezwcharsoptions) | デフォルト以外を対象とする場合に設定 |

#### Returns

`string`

___

### replaceFwAlphanumericsWithHw

▸ **replaceFwAlphanumericsWithHw**(`str`): `string`

全角(Full-width)英数字を半角(Half-width)英数字に置換

以下を対象とする
- `０-９` → `0-9`
- `ａ-ｚ` → `a-z`
- `Ａ-Ｚ` → `A-Z`

**`See`**

[https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)](https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block))

**`Example`**

```ts
// 返値: Aa0
replaceFwAlphanumericsWithHw('Ａａ０')
// 返値: Aa0
replaceFwAlphanumericsWithHw('Ａa0')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### replaceHwAlphanumericsWithFw

▸ **replaceHwAlphanumericsWithFw**(`str`): `string`

半角(Half-width)英数字を全角(Full-width)英数字に置換

以下を対象とする
- `0-9` → `０-９`
- `a-z` → `ａ-ｚ`
- `A-Z` → `Ａ-Ｚ`

**`See`**

[https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)](https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block))

**`Example`**

```ts
// 返値: Ａａ０
replaceFwAlphanumericsWithHw('Aa0')
// 返値: Ａａ０
replaceFwAlphanumericsWithHw('Ａa0')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### replaceNewLineChars

▸ **replaceNewLineChars**(`str`, `replaceCode?`): `string`

引数str中の改行コード（CR、LF、CRLF）を引数replaceCodeで指定した改行コードに置換

**`Throws`**

replaceCodeがLF,CR,CRLF以外の場合はエラー

**`Example`**

```ts
// 返値: t\n\n\te\ns\nt
replaceNewLineChars('t\r\n\r\te\rs\nt')
// 返値: t\r\n\r\n\te\r\ns\r\nt
replaceNewLineChars('t\r\n\r\te\rs\nt', 'CRLF')
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` |  |
| `replaceCode` | [`NewLineCodeIdentifier`](itsumono_utils.md#newlinecodeidentifier) | `'LF'` | （デフォルト:LF） |

#### Returns

`string`

___

### replaceSpacesWithTab

▸ **replaceSpacesWithTab**(`str`, `numSpaces`): `string`

引数str中のスペースをタブに置換

**`Throws`**

numSpacesが1以上の整数値でない場合はエラー

**`Example`**

```ts
// 返値: \ttest
replaceSpacesWithTab('  test', 2)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  |
| `numSpaces` | `number` | スペース数（1以上の整数値をとる） |

#### Returns

`string`

___

### replaceTabWithSpaces

▸ **replaceTabWithSpaces**(`str`, `numSpaces`): `string`

引数str中のタブをスペースに置換

**`Throws`**

numSpacesが1以上の整数値でない場合はエラー

**`Example`**

```ts
// 返値: te  st
replaceTabWithSpaces('te\tst', 2)
// 返値: te st
replaceTabWithSpaces('te\tst', 1)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  |
| `numSpaces` | `number` | スペース数（1以上の整数値をとる） |

#### Returns

`string`

___

### separateArray

▸ **separateArray**<`T`, `M`, `N`\>(`arr`, `matchFn`): `Object`

引数arrのうち、引数matchFnの実行結果についてTrue/Falseで分けたものを返却

**`Example`**

```ts
// --- [例1] プリミティブ値を格納する配列に対して、null/undefinedであるか否かで分ける --- //
type ItemType = number | string | null | undefined
const { matches, notMatches } = separateArray<ItemType, Exclude<ItemType, Nullish>, Nullish>(
  [1, 2, 3, '4', null, undefined],
  isNotNullish
)
// matches => [1, 2, 3, '4']
// notMatches => [null, undefined]

// --- [例2] 任意のオブジェクトを格納する配列に対して、updatedAtの有無で分ける --- //
type Post = {
  title: string
  body: string
  revision?: number
  createdAt: Date
  updatedAt?: Date
}
const arr: Array<Post> = [
  { title: 'sample', body: 'sample', createdAt: new Date() },
  { title: 'sample', body: 'sample', revision: 1, createdAt: new Date(), updatedAt: new Date() },
  { title: 'sample', body: 'sample', revision: 2, createdAt: new Date(), updatedAt: new Date() },
]
const { matches, notMatches } = separateArray(arr, (post) => !post.updatedAt)
// matches => [{ title: 'sample', body: 'sample', createdAt: new Date() }]
// notMatches => [
//   { title: 'sample', body: 'sample', revision: 1, createdAt: new Date(), updatedAt: new Date() },
//   { title: 'sample', body: 'sample', revision: 2, createdAt: new Date(), updatedAt: new Date() },
// ]
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |
| `N` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `matchFn` | (`v`: `T`) => `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `matches` | `M`[] |
| `notMatches` | `N`[] |

___

### withRootRelativePath

▸ **withRootRelativePath**(`path`): `string`

引数pathの先頭にルートパスを表すを付与して、返却

**`Example`**

```ts
// 返値: /path/to/test
withRootRelativePath('/path/to/test')
// 返値: /path/to/test
withRootRelativePath('path/to/test')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

___

### withTrailingSlash

▸ **withTrailingSlash**(`path`): `string`

引数pathに末尾スラッシュ（TrailingSlash）を付与して、返却

**`Example`**

```ts
// 返値: /path/to/ok/
withTrailingSlash('/path/to/ok')
// 返値: /path/to/ok/
withTrailingSlash('/path/to/ok/')
// 返値: http://localhost:8000/sample/
withTrailingSlash('http://localhost:8000/sample')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`
