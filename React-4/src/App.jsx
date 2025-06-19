import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task === "") return;
    setTodos([...todos, task]);
    setTask("");
  };
  const listTodo = (e) => {
    setTask(e.target.value);
  }
  return (
    <div>
      <h1>Simple First Todo List</h1>

      <input
        type="text"
        placeholder="Write a task"
        value={task}
        onChange={listTodo}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <div>
            <button>
              Delete
            </button>

            <li key={index}> {item}</li>
          </div>
        ))}
      </ul>
      <button>Delete
      </button>
    </div>
  );
};

export default Todo;
