import React from 'react'
import { RiCursorFill,RiRectangleLine,RiCircleLine,RiText } from "@remixicon/react";

const Tools = ({toolsActive,setToolsActive}) => {


   const tools =[
    {name:'cursor',icon:<RiCursorFill />},
    {name:'rectangle',icon:<RiRectangleLine />},
    {name:'circle',icon:<RiCircleLine />},
    {name:'text',icon:<RiText />},
   ]

  return (
     <div className='tools flex w-2/6 h-12 justify-between  absolute bottom-1.5 left-2/6 bg-gray-300 rounded-xl '>
       {tools.map(function(tool){
        return <button key={tool.name} onClick={()=>{setToolsActive(tool.name)}}className={`w-12 rounded-lg transition-all ${toolsActive===tool.name ?"border-2 border-blue-500 bg-white text-blue-500":"border-2 border-transparent hover:bg-white"}  `} >{tool.icon}</button>
       })}
      </div>
  )
}

export default Tools