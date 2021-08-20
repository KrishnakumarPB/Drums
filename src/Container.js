import React from 'react'
import "./style.css"
let x=""
function Container(props)
{
  function playSound(src,id)
  {
    
    x=document.getElementById(id);
    console.log(x)
    x.play();
  }
  return(
    <div >
      <button className="elements" onClick={()=>playSound(props.audio,props.id)}>{props.id}</button>
      <audio id={props.id} src={props.audio} autoPlay></audio>
    </div>
  )
}
export default Container