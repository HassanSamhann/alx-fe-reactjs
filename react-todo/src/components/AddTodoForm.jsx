// src/components/AddTodoForm.jsx

import  { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-button">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
