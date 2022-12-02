import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./types/todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string) => {
    console.log(name);
    console.log(todos.length);
    setTodos((val) => [{ id: Math.random(), name: name }, ...val]);
  };
  return (
    <div>
      {/* todo input */}
      <TodoForm onAddTodo={addTodo} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
