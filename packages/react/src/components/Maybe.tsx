import { RC } from '../types/rc'

/**
 * 条件式がtrueになった場合のみ子要素を出力するコンポーネント
 *
 * @example
 * <Maybe test={someCondition}>
 *   <span>hello!</span>
 * </Maybe>
 */
const Maybe: RC.WithChildren<{ test?: boolean | null }> = ({ test, children }) => (!test ? null : <>{children}</>)

export default Maybe
