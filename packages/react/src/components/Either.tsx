import type { RC } from '../types/rc'

/**
 * 条件式がtrue/falseで出力する内容を切り替えるコンポーネント
 *
 * @example
 * <Either
 *   test={someCondition}
 *   match={'testの条件式がtrueの時の出力内容'}
 *   not={'testの条件式がfalseの時の出力内容'}
 * />
 */
const Either: RC.WithoutChildren<{ test?: boolean | null; match: RC.Element; not: RC.Element }> = ({
  test,
  match,
  not,
}) => (!test ? <>{not}</> : <>{match}</>)

export default Either
