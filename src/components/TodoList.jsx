import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="mt4 mt-4 rounded-t-md bg-white">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
