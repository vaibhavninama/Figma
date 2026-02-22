import React from 'react'

const CreateText = ({
  x,
  y,
  width,
  height,
  selected,
  onselect
}) => {
  return (
    <div onClick={onselect} style={{
   position: "absolute",
  left: x,
  top: y,
  width:width,
  height:height,
    background:'#f1f1f1',
        border: selected ? '1px solid blue':'none'
  
}} >CreateText</div>
  )
}

export default CreateText