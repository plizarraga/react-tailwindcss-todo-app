import React from "react";

const TodoFilter = () => {
  return (
    <section className="container mx-auto mt-4">
      <div className="flex justify-center gap-5 rounded-md bg-white p-4">
        <button type="button" className="font-semibold text-blue-500">
          All
        </button>
        <button
          type="button"
          className="font-semibold text-gray-400 hover:text-blue-500"
        >
          Active
        </button>
        <button
          type="button"
          className="font-semibold text-gray-400 hover:text-blue-500"
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
