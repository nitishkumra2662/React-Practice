import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeText = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
    if (todo.trim() === "") return; // blank task na ho
    setTodos((prev) => [...prev, todo]);
    setTodo(""); // input clear after adding
  };

  return (
    <>
      <div className='container'>
        <h1>Todo nitish List</h1>

        {/* Task List */}
        <ul>
          {todos.map((value, indx) => (
            <li key={indx}>{value}</li>
          ))}
        </ul>

        {/* Input and Button */}
        <div className='inputTask'>
          <input
            type='text'
            placeholder='Please write a task'
            value={todo}
            onChange={onChangeText}
          />
          <button onClick={addTodo}>Add</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
