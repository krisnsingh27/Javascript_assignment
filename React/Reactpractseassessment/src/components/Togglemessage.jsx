import React, { useState } from 'react'

function Togglemessage() {
    const [color,setColor]=useState('yellow')
        const handleclick=()=>{
            setColor(prev => !prev);
        }
  return (
       <>
    <div style={{border:"1px solid black",backgroundColor:color?"yellow":"darkblue",height:"300px",width:"200px"}}>
    </div>
    <button onClick={handleclick}>{color?'goodmorning':'goodnight'}</button>
    </>
  )
}

export default Togglemessage
