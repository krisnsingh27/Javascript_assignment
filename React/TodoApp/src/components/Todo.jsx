import React, { useState } from 'react'
import Addtodo from './Addtodo'

function Todo({onAddtodo}) {
    const[input,setInput]=useState("")
    const handlechange=(e)=>{
        setInput(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault
        if(input.trim()){
           onAddtodo(input)
            setInput('')

        }
    }
    
  return (
    <div>
      <input style={{width:"50px"}}type="text" placeholder='enter task....' value={input} onChange={handlechange}style={{}}/>
      <button onClick={handlesubmit}>Add</button>
    </div>
  )
}

export default Todo