import { Link } from "react-router-dom";
import "../style/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ToDo App</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            List
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/add" className="navbar-link">
            Add Task
          </Link>
        </li>
      </ul>
    </nav>
  );
};
