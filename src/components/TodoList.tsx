import { Todo } from "../types/todo.model"

interface todoProps {
    items: Todo[]
}

const TodoList = (props: todoProps) => {
  return (
    <div>
        {
            props.items.map(todo => <li key={todo.id}>{todo.name}</li> )
        }
    </div>
  )
}

export default TodoList