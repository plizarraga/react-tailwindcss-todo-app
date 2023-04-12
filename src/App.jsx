import { CrossIcon, MoonIcon } from "./components";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-6 pt-11">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold uppercase tracking-[0.5em] text-white">
            Todo
          </h1>
          <button type="button" className="">
            <MoonIcon className="fill-yellow-200" />
          </button>
        </div>
      </header>
      <main className="container mx-auto px-6">
        {/* TodoCreate Component */}
        <form className="mt-7 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            type="text"
            className="w-full text-gray-400 outline-none"
            placeholder="Create a new todo..."
          />
        </form>

        {/* TodoList Component */}
        <div className="mt4 mt-4 rounded-t-md bg-white">
          {/* TodoListItem Component */}
          <article className="flex gap-4 border-b border-gray-200 p-4">
            <button
              type="button"
              className="inline-block h-5 w-5 rounded-full border-2"
            ></button>
            <p className="grow text-gray-600">Buy food</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-gray-200 p-4">
            <button
              type="button"
              className="inline-block h-5 w-5 rounded-full border-2"
            ></button>
            <p className="grow text-gray-600">Buy food</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-gray-200 p-4">
            <button
              type="button"
              className="inline-block h-5 w-5 rounded-full border-2"
            ></button>
            <p className="grow text-gray-600">Buy food</p>
            <button>
              <CrossIcon />
            </button>
          </article>
        </div>

        {/* TodoComputed Component */}
        <section className="flex justify-between rounded-b-md bg-white p-4">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">Clear Compleated</button>
        </section>

        {/* TodoFilter Component */}
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
      </main>
      <footer className="mt-11">
        <p className="text-center text-gray-500">
          Drag and drop to reorder list
        </p>
      </footer>
    </div>
  );
};

export default App;
