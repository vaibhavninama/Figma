import { RiSearchLine } from "@remixicon/react";
import { useState } from "react";


const Nav  = ({searchValue,setSearchValue,setActiveTab}) => {

  const [search, SetSearch] = useState('')
  
  
  function createSearch(){
    SetSearch((pre)=>!pre)
  }
  function CloseSearch(){
    SetSearch(false)
    setSearchValue('')
  }
  function InputHendler(e){
    setSearchValue(e.target.value)
  }
  function ShowAssent(){
    setAssent(true)
  }
  function ShowFile (){
  setFile(true)
  }
  return (
     <div className="flex  justify-between leftnav bg-gray-200 w-6/6 h-10 p-4  items-center rounded">  
   {!search&&(
    <>
    <button onClick={() => setActiveTab("pages")} >File</button>
     <button onClick={() => setActiveTab("assent")} >assent</button>
    </>
     
     )}
      < RiSearchLine  onClick={()=>{createSearch()}}  />
         {search && (
         <>
          <input type="text" placeholder="Enter text... " value={searchValue}  onChange={InputHendler}/>
          <button onClick={()=>{CloseSearch()}} >X</button>
         </>
                   )}
     </div>
  )
}

export default  Nav