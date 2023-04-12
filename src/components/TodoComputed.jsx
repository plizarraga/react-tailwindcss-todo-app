import React from "react";

const TodoComputed = ({ itemsLeft, clearCompletedTodos }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white p-4">
      <span className="text-gray-400">{itemsLeft} {itemsLeft > 1 ? 'items' : 'item'} left</span>
      <button onClick={clearCompletedTodos} className="text-gray-400">
        Clear Compleated
      </button>
    </section>
  );
};

export default TodoComputed;
