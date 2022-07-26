import React from 'react'
import RC from '../types/rc'

const Maybe: RC.WithChildren<{ test?: boolean | null }> = ({ test, children }) => (!test ? null : <>{children}</>)

export default Maybe
