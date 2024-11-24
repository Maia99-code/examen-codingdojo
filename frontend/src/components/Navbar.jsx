import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold ">Comics Manager</h1>
      </Link>

      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Welcome User
            </li>
            <li>
              <Link to="/add-comic">Add Comic</Link>
            </li><li>
              <Link to="/add-comic">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register"></Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
