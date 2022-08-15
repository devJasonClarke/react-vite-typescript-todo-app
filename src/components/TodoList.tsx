import React from "react";
import "./styles.css";

import { Todo } from "../models/model";
import { SingleTodo } from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <ul className="todos">
      {todos.map((todo, index) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};
