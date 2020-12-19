import "./Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link to="/">TODO</Link>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
