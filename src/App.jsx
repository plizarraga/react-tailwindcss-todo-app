import { useEffect, useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';

import {
  Footer,
  Header,
  TodoComputed,
  TodoCreate,
  TodoFilter,
  TodoList,
} from './components';

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

//https://github.com/ymulenll/react-beautiful-dnd-demo/blob/master/src/App.js
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const updateFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-700 dark:bg-slate-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />
      <main className="container mx-auto px-6 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filteredTodos()}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </DragDropContext>
        {itemsLeft > 0 && (
          <TodoComputed
            itemsLeft={itemsLeft}
            clearCompletedTodos={clearCompletedTodos}
          />
        )}
        {itemsLeft > 0 && (
          <TodoFilter filter={filter} updateFilter={updateFilter} />
        )}
      </main>
      {itemsLeft > 1 && <Footer />}
    </div>
  );
};

export default App;
