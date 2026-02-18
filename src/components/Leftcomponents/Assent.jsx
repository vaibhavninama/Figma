import React, { useState } from 'react'
import{RiSearchLine} from "@remixicon/react";
import {icons} from '../../data'
const Assent = () => {
    const [search, setsearch] = useState('')
    function searchValue(e){
       setsearch(e.target.value)
    }
  const fildericon =icons.filter((icon)=> icon.title.toLowerCase().includes(search.toLowerCase()) )

  
  return (
    <div className='flex flex-col  p-0.5 gap-8'>
     <div className='flex assentSearch gap-4 bg-gray-300'>
  <input type="search"  placeholder='Enter name of Assent' value={search}  onChange={searchValue}/>
        <button><RiSearchLine /></button>
     </div>

     <div className='bg-amber-50 gap-8 w-full  flex flex-wrap   listassent '>
       {fildericon.map((icon)=>{
        return <img src={icon.img} className='w-6 h-6 flex flex-wrap ' alt="" />
       })}
     </div>
    </div>
  )
}

export default Assent