import React from 'react'

const PageComponet = ({title}) => {
  
   function CanvaHendler(){
        
   }

  return (
    <div className='cardpage'onClick={CanvaHendler()}>
        <h1>{title}</h1>
    </div>
  )
}

export default PageComponet