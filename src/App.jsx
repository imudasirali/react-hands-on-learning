import { useArray } from "./useArray";
import "./style.css";
const INITIAL_ARRAY = [1, 2, 3];

function App() {
  const { array, set, push, replace, filter, remove, clear, reset } =
    useArray(INITIAL_ARRAY);

  return (
    <>
      <div className="array-display">{array.join(", ")}</div>
      <div className="button-container">
        <button onClick={() => set([1, 2, 3, 4, 5, 6])}>
          Set to [1, 2, 3, 4, 5, 6]
        </button>
        <button onClick={() => push(4)}>Push 4</button>
        <button onClick={() => replace(1, 9)}>
          Replace the second element with 9
        </button>
        <button onClick={() => filter((n) => n < 3)}>
          Keep numbers less than 3
        </button>
        <button onClick={() => remove(1)}>Remove second element</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
