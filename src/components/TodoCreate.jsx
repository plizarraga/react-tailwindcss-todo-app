import React, { useState } from 'react';

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');

  const handleCreateTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitle('');
      return;
    }

    createTodo(title.trim());
    setTitle('');
  };
  return (
    <form
      onSubmit={handleCreateTodo}
      className="mt-7 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        className="w-full text-gray-400 outline-none"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
