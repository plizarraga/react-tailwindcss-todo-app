import { useState } from "react";

import {
  Footer,
  Header,
  TodoComputed,
  TodoCreate,
  TodoFilter,
  TodoList,
} from "./components";
const initialState = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    completed: true,
  },
  {
    id: 3,
    title: "Learn Node",
    completed: false,
  },
];
const App = () => {
  const [todos, setTodos] = useState(initialState);

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

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto px-6">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <TodoComputed />
        <TodoFilter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
