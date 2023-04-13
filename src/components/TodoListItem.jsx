import React, { forwardRef } from 'react';
import { IconCheck, IconCross } from './icons';

const TodoListItem = forwardRef(
  ({ todo, toggleTodo, deleteTodo, ...props }, ref) => {
    const { id, title, completed } = todo;
    return (
      <article
        ref={ref}
        {...props}
        className="flex gap-4 border-b border-gray-200 p-4 dark:border-slate-500"
      >
        <button
          onClick={() => toggleTodo(id)}
          type="button"
          className={`h-5 w-5 rounded-full ${
            completed
              ? 'flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700'
              : 'inline-block border-2 transition-all duration-700 dark:border-slate-600'
          }`}
        >
          {completed && <IconCheck />}
        </button>
        <p
          className={`grow ${
            completed
              ? 'text-gray-300 line-through transition-all duration-700 dark:text-slate-500'
              : 'text-gray-500 transition-all duration-700 dark:text-slate-400'
          }`}
        >
          {title}
        </p>
        <button onClick={() => deleteTodo(id)}>
          <IconCross />
        </button>
      </article>
    );
  }
);

export default TodoListItem;
