 import React from 'react'
 
 const Todo = ({handleDeleteTodo,editingId,handleToggleComplete,todo,todoName,handleChangeTodoName,handleEditTodo}) => {
   return (
     <div style={{ margin: '10px 0' }}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => handleToggleComplete(todo.id)}
          />
         {editingId===null? <span
            style={{
              textDecoration: todo.isComplete ? 'line-through' : 'none',
              marginLeft: '10px'
            }}
          >
            {todo.title}
          </span>:<input
        type="text"
        value={todoName}
        onChange={handleChangeTodoName}
        placeholder="Enter todo"
      />} 
          <button onClick={() => handleEditTodo(todo)} >
            {editingId !== null ? 'Update' : 'Edit'}
          </button>
          <button onClick={() => handleDeleteTodo(todo.id)}>
            Delete
          </button>
        </div>

   )
 }
 
 export default Todo