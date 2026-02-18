import React from 'react'
import LeftSide from './components/LeftSide'
import Canva from './components/Canva'
import RightSide from './components/RightSide'

const App = () => {
  return (
    <div className='flex gap-4 h-screen '>
      <LeftSide />
      <Canva />
      <RightSide />
    </div>
  )
}

export default App