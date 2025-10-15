import React, { useState } from 'react'

function Clickcounter() {
    const [count,setCount]=useState(0)
    const handleclick=()=>{
        const id=setInterval(()=>{
        setCount(prevCount => {
        if (prevCount === 10) {
          clearInterval(id);
          return prevCount;
        }
        return prevCount + 1;
      });
            
  },1000)
    }
  return (
    <div>
        <h1><strong>{count}</strong></h1>
      <button onClick={handleclick}>start</button>
    </div>
  )
}

export default Clickcounter
