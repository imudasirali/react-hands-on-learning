import { useLoaderData } from "react-router-dom";
import { User } from "../components/User";

function UsersPage() {
  const users = useLoaderData();
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            companyName={user.company.name}
            website={user.website}
            email={user.email}
          />
        ))}
      </div>
    </>
  );
}

const loader = function loader({ request: { signal } }) {
  return fetch("http://127.0.0.1:3000/users", {
    signal,
  });
};

export const UsersPageRoute = {
  loader,
  element: <UsersPage />,
};
