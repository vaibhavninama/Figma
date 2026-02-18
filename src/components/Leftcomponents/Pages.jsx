import React from 'react'
import { RiArrowDropDownLine,RiAddLargeFill } from "@remixicon/react";
import { useState } from 'react';
import PageComponet from './PageComponet';
import Nav from './Nav';
import Assent from './Assent';
 


const Pages = ({searchValue,activeTab}) => {
    
  const [dropdwon, setdropdwon] = useState(false)
  const [createpage, setCreatepage] = useState([])

  function HidePages (){
      setdropdwon((pre)=> !pre)
      
  }
  function CreatePages(){
    const NewPage ={
        id:Date.now(),
        title:`page ${createpage.length + 1}`
    }
       setCreatepage((pre)=>[...pre,NewPage])
  }
   
   const filteredPages = createpage.filter(page =>
    page.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='flex flex-col overflow-hidden bg-gray-200 w-6/6 h-full rounded'>
     
    {activeTab==='pages' && (
   <>
      <div className='flex items-center justify-between '>
            <div className='flex '>
                 <RiArrowDropDownLine
      onClick={HidePages}
      className={`cursor-pointer transition-transform duration-300 
        ${dropdwon ? "rotate-270" : ""}`}
    />
            <h3>Pages</h3>
            </div>
            <RiAddLargeFill className='w-4 h-4' onClick={()=>{CreatePages()}} />
          

        </div>
       {dropdwon && (<div className='flex  flex-col gap-2 mt-3 w-55 rounded pagecheak overflow-scroll'>
           {filteredPages.map(page => (
             <PageComponet key={page.id} title={page.title} />
                  ))}
           
          </div>)}
   
   </>
    )}
        {activeTab==='assent'&&(
         <Assent />
  )}  
          
    </div>
  )
}

export default Pages