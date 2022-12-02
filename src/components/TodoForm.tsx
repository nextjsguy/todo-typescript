import React, { FormEvent, useRef } from "react";

interface addTodoProps {
  onAddTodo: (name: string) => void;
}

const TodoForm = ({ onAddTodo }: addTodoProps) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();

    if (todoInputRef.current) {
      const taskName = todoInputRef.current.value;
      onAddTodo(taskName);

      todoInputRef.current.value = "";
    }
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todo-input">Enter a Todo task:</label>
      <div>
        <input ref={todoInputRef} type="text" />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
