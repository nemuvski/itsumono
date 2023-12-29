declare module '@theme/Layout' {
  /**
   * NOTE: TypeError回避のために定義
   *
   * TODO: 不要になり次第削除
   */
  export default function Layout(props: React.PropsWithChildren): JSX.Element
}
