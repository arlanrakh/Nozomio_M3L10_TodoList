import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
}

export default ToDoList;