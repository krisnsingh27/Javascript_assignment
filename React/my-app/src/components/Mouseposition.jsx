


import React, { useState } from 'react'

function Mouseposition() {
  
    const [positionx,setPositionx]=useState(0)
    const [positiony,setPositiony]=useState(0)


    const handlemoseposition=(e)=>{

         setPositionx(e.clientX)
         setPositiony(e.clientY)
         
    }

  return (
    <>
    <div onMouseMove={handlemoseposition}  style={{border:"1px solid black",margin:"10px",width:"100px",height:"100px"}}>
      
    </div>
    <span>x:{positionx}</span><br />
    <span>y:{positiony}</span>
    </>
  )
}

export default Mouseposition
