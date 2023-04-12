import React from "react";

const TodoCreate = () => {
  return (
    <form className="mt-7 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        className="w-full text-gray-400 outline-none"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default TodoCreate;
