import React, { useState } from 'react';
import Todo from './Todo'
import Todolist from './Todolist';

function Addtodo() {
const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
       
      <Todo onAddtodo={handleAddTodo} />
      <Todolist todos={todos} />
     
    </div>
  )
}

export default Addtodo
