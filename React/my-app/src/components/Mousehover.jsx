import React, { useState } from 'react'

function Mousehover() {
    const [color,setColor]=useState("green")

    const handlemouseenter=()=>{
        setColor("red")
    }
    const handlemouseleave=()=>{
        setColor("olive")
    }

  return (
    <div onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave} style={{border:"1px solid black",width:"300px",height:"200px",backgroundColor:color}}>
      
    </div>
  )
}

export default Mousehover
