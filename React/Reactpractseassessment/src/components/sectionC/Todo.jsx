import React, { useState } from 'react';

function Todo() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.trim().length === 0) {
      alert('Please enter a task before adding!');
      return;
    }
    setTasks([...tasks, input]);
    setInput('');
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add Task</button>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              {task}{' '}
              <button
                onClick={() => handleDelete(index)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Todo;

