import { NavLink } from "react-router-dom";
import navStyles from "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className={"nav"}>
      <ul>
        <li>
          <NavLink to={`/`} style={{ color: "white" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/about`} style={{ color: "white" }}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

