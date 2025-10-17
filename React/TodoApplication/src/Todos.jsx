import React, { useState } from "react";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";


const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List</h2>
      <Addtodo addTodo={addTodo} />
      <Todolist todos={todos} />
    </div>
  );
};

export default Todos;
