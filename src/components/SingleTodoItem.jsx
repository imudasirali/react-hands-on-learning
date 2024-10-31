export function SingleTodoItem({ title, completed }) {
  return <li className={completed ? "strike-through" : ""}>{title}</li>;
}
