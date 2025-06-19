import React, { useState } from 'react';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [editingId, setEditingId] = useState(null); // Track edit mode

  function handleChangeTodoName(e) {
    setTodoName(e.target.value);
  }

  function handleTodoAdd() {
    if (todoName.trim() === '') return;

    
    if (editingId !== null) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editingId ? { ...todo, title: todoName } : todo
        )
      );
      setEditingId(null); 
    } else {
      setTodos((prev) => [
        ...prev,
        { title: todoName, isComplete: false, id: Math.random() }
      ]);
    }

    setTodoName('');
  }

  function handleDeleteTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function handleEditTodo(todo) {
    setTodoName(todo.title);
    setEditingId(todo.id); 
  }

  function handleToggleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoName}
        onChange={handleChangeTodoName}
        placeholder="Enter todo"
      />
      <button onClick={handleTodoAdd}>
        Add Todo
      </button>

      {todos.map((todo,index) => (
        <Todo key={index}
        editingId={editingId}
        handleEditTodo={handleEditTodo}
        handleChangeTodoName={handleChangeTodoName}
        handleToggleComplete={handleToggleComplete}
        todo={todo}
        todoName={todoName}
        handleDeleteTodo={handleDeleteTodo}
        />
        
      ))}

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default Todos;
