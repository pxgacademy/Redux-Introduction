import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //
  return (
    <div>
      <h2>Todos</h2>

      <div>
        {todos &&
          todos?.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
          ))}
      </div>
    </div>
  );
}
