import React, { useState,useEffect } from 'react'
import CreateRectangl from './CreateRectangl'
import CreateCircle from './CreateCircle'
import CreateText from './CreateText'

const CanvaPage = ({toolsActive}) => {
   
   const [elements, setElements] = useState([]);
   const [selecteID, setselecteID] = useState(null)
  
          useEffect(() => {
            
            if(toolsActive!=='cursor'){
              setselecteID(null)
            }
           
          }, [toolsActive])
          
 
    function Hendler(e){
        

        

      
     const rect = e.currentTarget.getBoundingClientRect();  
          
      const NewElements ={
        id:Date.now(),
        type:toolsActive,
        x:e.clientX - rect.left,
        y:e.clientY -rect.top,
         width: 150,
         height: 100,
         
      }
      setElements((pre)=>[...pre,NewElements])
       
    
         
    } 
    
    function selectedHendler(id ,e){
         e.stopPropagation()  
         
         if(toolsActive ==='cursor'){
          return   setselecteID(id)
         }
         return
          
      }


  return (
    <div className='bg-white ccc w-full h-full overflow-hidden ' onClick={Hendler}>
     
    {elements.map(function(elem){
        
       const propsCM={
          
            x:elem.x,
            y:elem.y,
            width:elem.width,
            height:elem.height,
            selected:elem.id===selecteID &&toolsActive==='cursor',
            onselect:(e) =>{selectedHendler(elem.id,e)}
       } 



       if(elem.type==='rectangle'){
      return  <CreateRectangl key={elem.id}  {...propsCM}  />
       }
       
       if(elem.type==='circle'){
      return   <CreateCircle key={elem.id} {...propsCM} />
       }
       if(elem.type==='text'){
       return <CreateText key={elem.id} {...propsCM} />
       }
        
       return null
    })}

    </div>
  )
}

export default CanvaPage