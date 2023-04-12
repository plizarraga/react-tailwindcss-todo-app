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
      className="mt-7 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4 dark:bg-slate-800"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2 dark:border-slate-600"></span>
      <input
        type="text"
        className="w-full text-gray-500 outline-none placeholder:text-gray-400 dark:bg-slate-800 dark:text-slate-500 dark:placeholder:text-slate-500"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
