import React from "react";
import { Todo } from "./model";
import SignleTodo from "./SignleTodo";
import "./style.css";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SignleTodo />
      ))}
    </div>
  );
}

export default TodoList;
