import React from 'react'
import RC from '../types/rc'

const Either: RC.WithoutChildren<{ test?: boolean | null; match: RC.Element; not: RC.Element }> = ({
  test,
  match,
  not,
}) => (!test ? <>{not}</> : <>{match}</>)

export default Either
