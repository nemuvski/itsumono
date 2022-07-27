/**
 * プリミティブ値
 *
 * @example
 *    // 型: object
 *    Exclude<string | object | undefined, Primitive>
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Primitive}
 */
export type Primitive = string | number | bigint | boolean | symbol | undefined | null

/**
 * Falsy値
 *
 * @example
 *    // 型: object
 *    Exclude<object | undefined, Falsy>
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy}
 */
export type Falsy = false | 0 | 0n | '' | undefined | null

/**
 * Nullish値
 *
 * @example
 *    // 型: string | number
 *    Exclude<string | number | undefined, Nullish>
 */
export type Nullish = undefined | null
