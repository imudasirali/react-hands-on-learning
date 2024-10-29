import { useState, useEffect } from "react";
import { User } from "./User";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    setloading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        if (e?.name == "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  let listRenderer;

  if (loading) {
    listRenderer = <h2>Loading...</h2>;
  } else if (error != null) {
    listRenderer = <h2>error</h2>;
  } else {
    listRenderer = (
      <ul>
        {users.map((user) => {
          return (
            <User
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
            />
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <h1>User List</h1>
      {listRenderer}
    </>
  );
}

export default App;
