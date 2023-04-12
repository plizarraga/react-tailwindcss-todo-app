import React from "react";
import { IconCheck, IconCross } from "./icons";

const TodoListItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-gray-200 p-4">
      <button
        onClick={() => toggleTodo(id)}
        type="button"
        className={`h-5 w-5 rounded-full ${
          completed
            ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block border-2"
        }`}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow ${
          completed ? "text-gray-300 line-through" : "text-gray-600"
        }`}
      >
        {title}
      </p>
      <button onClick={() => deleteTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoListItem;
