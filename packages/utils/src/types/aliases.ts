/**
 * プリミティブ値
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Primitive}
 */
export type Primitive = string | number | bigint | boolean | symbol | undefined | null

/**
 * Falsy値
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy}
 */
export type Falsy = false | 0 | 0n | '' | undefined | null

/**
 * Nullish値
 */
export type Nullish = undefined | null
