import React, { useState } from 'react'

function Todo() {
    const [input,setInput]=useState("")
     const [tasks, setTasks] = useState([]);
    const handlechange=(e)=>{
       setInput(e.target.value)
    }
    const handleclick=()=>{
        if(input.trim().length===0){
            setTasks('no task available')
        }
         setTasks([...tasks,input ]); 
         setInput('');

    }
  return (
    <div>
      <input type="text" placeholder='enter task...' value={input} onChange={handlechange}/>
      <button onClick={handleclick}>Addtask</button>
      <ul>
          {tasks.map((task, index) => ( 
          
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
