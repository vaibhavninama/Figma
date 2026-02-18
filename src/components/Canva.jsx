import { useState } from 'react'
import Tools from './CanvaComponents/Tools'
import CanvaPage from './CanvaComponents/CanvaPage'

const Canva = () => {
     const [toolsActive, setToolsActive] = useState('cursor')
  return (
    <div className='w-4/6 bg-gray-50  rounded-sm canvas' >
      <div className='parentCenva bg-red-700 w-full h-6/6 relative'>
            <CanvaPage />
            <Tools toolsActive={toolsActive} setToolsActive={setToolsActive} />   
      </div>

      
    </div>
  )
}

export default Canva