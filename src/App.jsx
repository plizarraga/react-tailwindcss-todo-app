import { useState } from 'react';
import {
  Footer,
  Header,
  TodoComputed,
  TodoCreate,
  TodoFilter,
  TodoList,
} from './components';
const initialState = [
  {
    id: 1,
    title: 'Learn React',
    completed: false,
  },
  {
    id: 2,
    title: 'Learn Redux',
    completed: true,
  },
  {
    id: 3,
    title: 'Learn Node',
    completed: false,
  },
];
const App = () => {
  const [todos, setTodos] = useState(initialState);
  const [filter, setFilter] = useState('all');

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

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-slate-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <Header />
      <main className="container mx-auto px-6">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filteredTodos()}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <TodoComputed
          itemsLeft={itemsLeft}
          clearCompletedTodos={clearCompletedTodos}
        />
        <TodoFilter filter={filter} updateFilter={updateFilter} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
