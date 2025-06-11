import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    dispatch(addTodo(input));
    setInput("");
  };

  //
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        className="input"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-secondary w-full">
        Add Todo
      </button>
    </form>
  );
}
