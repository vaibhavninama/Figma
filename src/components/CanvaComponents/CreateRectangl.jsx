const CreateRectangl = ({
  x,
  y,
  
  width,
  height,
   selected,
   onselect

}) => {

  return (
    <div 
        onClick={onselect}
        style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        background:'#f1f1f1',
        border: selected ? '1px solid blue':'none'

      }}
    ></div>
  )
}

export default CreateRectangl