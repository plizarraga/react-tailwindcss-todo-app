import React from "react";

const TodoComputed = () => {
  return (
    <section className="flex justify-between rounded-b-md bg-white p-4">
      <span className="text-gray-400">5 items left</span>
      <button className="text-gray-400">Clear Compleated</button>
    </section>
  );
};

export default TodoComputed;
