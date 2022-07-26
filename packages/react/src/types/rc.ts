import type { FC, PropsWithChildren, ReactNode } from 'react'

/**
 * RC (ReactComponent)
 */
namespace RC {
  /**
   * ReactNodeのエイリアス
   */
  export type Element = ReactNode

  /**
   * 子要素を持つ(childrenプロパティあり)コンポーネントの型
   */
  export type WithChildren<Props = object> = FC<PropsWithChildren<Props>>

  /**
   * 子要素を持たない(childrenプロパティなし)コンポーネントの型
   */
  export type WithoutChildren<Props = object> = FC<Props>
}

export default RC
