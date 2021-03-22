import { NavLink } from "react-router-dom";
import navStyles from "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className={"nav"}>
      <h2 style={{fontSize: "2rem" }}>FenDev</h2>
      <ul>
        <li>
          <NavLink to={`/`} style={{ color: "white", fontSize: "1.25rem"}}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/about`} style={{ color: "white", fontSize: "1.25rem" }}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

