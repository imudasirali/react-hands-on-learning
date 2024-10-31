import { useLoaderData } from "react-router-dom";
import { SingleTodoItem } from "../components/SingleTodoItem";

export function TodosPage() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <SingleTodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

const loader = function loader({ request: { signal } }) {
  return fetch("http://127.0.0.1:3000/todos", {
    signal,
  });
};

export const TodosPageRoute = {
  loader,
  element: <TodosPage />,
};
