import React, { useState } from 'react'

function ColorChange() {
    const [color,setColor]=useState('red')
    const handleclick=()=>{
         setColor(prev => !prev);
    }
  return (
    <>
    <div style={{border:"1px solid black",backgroundColor:color?"red":"blue"}}>
      <p>the box is red</p>
      
    </div>
    <button onClick={handleclick}>changecolor</button>
    </>
  )
}

export default ColorChange
