import React, { useState } from 'react'

function Counter() {
    const [input,setInput]=useState(0)
    const handleclick=()=>{
        setInput(input+1)
    }
  return (
    <div>
        <p>Current Count:{input}</p>
      <button onClick={handleclick}>inc</button>
    </div>
  )
}

export default Counter
