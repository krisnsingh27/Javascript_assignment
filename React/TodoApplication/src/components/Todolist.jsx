import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  if (todos.length === 0) return <p>No todos yet!</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
