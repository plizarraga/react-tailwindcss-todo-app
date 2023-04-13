import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <div
          className="mt-4 rounded-t-md bg-white transition-all duration-700 dark:bg-slate-800"
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
              {(provided) => (
                <TodoListItem
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
