
import React, { useState } from 'react'

function Backgroundcolor() {

  const [color,setColor]=useState("red")

  const changecolor=()=>{
    setColor("blue")
    
  }

  return (
    <div onClick={changecolor} style={{border:"1px solid black" ,width:"300px",height:"200px",backgroundColor:color}}>
      
    </div>
  )
}
 

export default Backgroundcolor;