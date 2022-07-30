import React from 'react'
import { Maybe, RC } from '@itsumono/react'
import { isString } from '@itsumono/utils'

const App: RC.WithoutChildren = () => {
  return (
    <div>
      <Maybe test={isString('test')}>test</Maybe>
    </div>
  )
}

export default App
