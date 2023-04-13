import React from 'react';

const TodoFilter = ({ filter, updateFilter }) => {
  return (
    <section className="container mx-auto mt-4">
      <div className="flex justify-center gap-5 rounded-md bg-white p-4 transition-all duration-700 dark:bg-slate-800">
        <button
          onClick={() => updateFilter('all')}
          type="button"
          className={`font-semibold ${
            filter === 'all'
              ? 'text-blue-500 transition-all duration-700 hover:text-gray-400 dark:hover:text-slate-500'
              : 'text-gray-400 transition-all duration-700 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-500'
          }`}
        >
          All
        </button>
        <button
          onClick={() => updateFilter('active')}
          type="button"
          className={`font-semibold ${
            filter === 'active'
              ? 'text-blue-500 transition-all duration-700 hover:text-gray-400 dark:hover:text-slate-500'
              : 'text-gray-400 transition-all duration-700 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-500'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => updateFilter('completed')}
          type="button"
          className={`font-semibold ${
            filter == 'completed'
              ? 'text-blue-500 transition-all duration-700 hover:text-gray-400 dark:hover:text-slate-500'
              : 'text-gray-400 transition-all duration-700 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-500'
          }`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
