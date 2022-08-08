import React, { useEffect } from 'react'
import { Maybe, RC } from '@itsumono/react'
import { isNumberInRange, isString, removeZWChars } from '@itsumono/utils'

const App: RC.WithoutChildren = () => {
  useEffect(() => {
    console.log(isNumberInRange(3, 1, 5, '()'))
    console.log(removeZWChars('te\u200bst'))
  }, [])

  return (
    <div>
      <Maybe test={isString('test')}>test</Maybe>
    </div>
  )
}

export default App
