import React from "react";

const Todo = ({ todo }) => {
  return (
    <li style={{ marginBottom: "10px" }}>
      {todo.text}
    </li>
  );
};

export default Todo;
