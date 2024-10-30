import { createContext, useEffect, useReducer, useState } from "react";
import "./style.css";
import { TodoList } from "./components/TodoList";

const LOCAL_STORAGE_KEY = "TODOS";
const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  TOGGLE: "TOGGLE",
};
function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id)
          return { ...todo, completed: payload.completed };

        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload.id);
    case ACTIONS.UPDATE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name };
        }
        return todo;
      });
    default:
      return [];
  }
}

export const TodoContext = createContext();
function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return initialValue;
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo() {
    if (newTodoName === "") return;

    dispatch({ type: ACTIONS.ADD, payload: { name: newTodoName } });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }

  function updateTodo(id, name) {
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        addNewTodo,
        deleteTodo,
        toggleTodo,
        updateTodo,
      }}
    >
      <h1>My Todo App</h1>
      <TodoList />
      <form id="new-todo-form">
        <label htmlFor="todo-input">Add A New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button type="submit" onClick={addNewTodo}>
          Add Todo
        </button>
      </form>
    </TodoContext.Provider>
  );
}

export default App;
