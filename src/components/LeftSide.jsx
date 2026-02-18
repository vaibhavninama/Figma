import Nav from './Leftcomponents/Nav'
import Pages from './Leftcomponents/Pages'
import Assent from './Leftcomponents/Assent';
import { useState } from "react";

const LeftSide = () => {
 const [searchValue, setSearchValue] = useState('')
const [activeTab, setActiveTab] = useState("pages");
  return (
    <div className='leftside w-1/6  gap-12 flex flex-col' >
     <Nav   searchValue={searchValue}
        setSearchValue={setSearchValue} setActiveTab={setActiveTab}  />
      <Pages searchValue={searchValue} activeTab={activeTab} />
    </div>
  )
}

export default LeftSide