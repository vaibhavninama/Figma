import React from 'react'

const CreateCircle = ({x,y,key,width,height,selected,onselect}) => {
  return (
    <div onClick={onselect}  style={{
   position: "absolute",
  left: x,
  top: y,
  width:width,
  height:height,
  background:'#f1f1f1',
  borderRadius:50+'%',

  border: selected ? '1px solid blue':'none'
}} ></div>
  )
}

export default CreateCircle