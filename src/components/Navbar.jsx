import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="top-nav">
      <div className="nav-text-large">My Blog</div>
      <ul className="nav-list">
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}