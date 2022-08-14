import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  const submit: (event: React.FormEvent) => unknown = (
    event: React.FormEvent
  ) => {
    event.preventDefault();
  };

  return (
    <form className="input" onSubmit={submit}>
      <input
        type="input"
        placeholder="enter your task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};
