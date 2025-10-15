import React, { useState } from 'react'

function Event() {

    const [input,setInput]=useState("")

    const handlechange=(e)=>{
        console.log(e.target.value)
        setInput(e.target.value)

    }
    const handleclick=()=>{
        console.log(input)
    }
  return (
    <div>
      <input type="text" placeholder='enter name' onChange={handlechange} value={input}  style={{margin:"5px"}}/>
       
       
       <button onClick={handleclick}>submit</button>
       <p>{input}</p>
       
    </div>
  )
}

export default Event
