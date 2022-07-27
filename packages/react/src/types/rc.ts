import type { FC, PropsWithChildren, ReactNode } from 'react'

/**
 * RC (ReactComponent)
 */
export namespace RC {
  /**
   * ReactNodeのエイリアス
   */
  export type Element = ReactNode

  /**
   * 子要素を持つ(childrenプロパティあり)コンポーネントの型
   *
   * @example
   *    const YourComponent: RC.WithChildren<{ value: string }> = ({ value, children }) => {
   *      // コンポーネントの内容
   *    }
   */
  export type WithChildren<Props = object> = FC<PropsWithChildren<Props>>

  /**
   * 子要素を持たない(childrenプロパティなし)コンポーネントの型
   *
   * @example
   *    const YourComponent: RC.WithoutChildren<{ value: string }> = ({ value }) => {
   *      // コンポーネントの内容
   *    }
   */
  export type WithoutChildren<Props = object> = FC<Props>
}
