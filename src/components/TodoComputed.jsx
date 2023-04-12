import React from 'react';

const TodoComputed = ({ itemsLeft, clearCompletedTodos }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white p-4 text-sm transition-all duration-700 dark:bg-slate-800">
      <span className="text-gray-400 transition-all duration-700 dark:text-slate-500">
        {itemsLeft} {itemsLeft > 1 ? 'items' : 'item'} left
      </span>
      <button
        onClick={clearCompletedTodos}
        className="text-gray-400 transition-all duration-700 dark:text-slate-500"
      >
        Clear Compleated
      </button>
    </section>
  );
};

export default TodoComputed;
