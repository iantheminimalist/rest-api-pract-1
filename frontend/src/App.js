import Todo from "./todoApp/Todo";
import TodoList from "./todoApp/TodoList";

function App() {
  return (
    <div className="App">
      < div className=" bg-gray-200 w-full h-svh flex p-4 items-center justify-start">
        <div className="mx-auto w-full max-w-4xl">
        <Todo />
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <TodoList />
          </div>
        </div>
    </div>
  );
}

export default App;
