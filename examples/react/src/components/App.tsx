import React from 'react'
import { Maybe, RC } from '@itsumono/react'

const App: RC.WithoutChildren = () => {
  return (
    <div>
      <Maybe test={true}>test</Maybe>
    </div>
  )
}

export default App
