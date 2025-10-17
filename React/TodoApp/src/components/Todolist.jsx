import React from 'react'

function Todolist({todos}) {
  return (
    <div>
      
      <ul>
        <p>Add Task...</p>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
    </div>
  )
}

export default Todolist
