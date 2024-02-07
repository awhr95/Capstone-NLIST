import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav({ page }) {
  const path = page ? `/${page}` : "";
  return (
    <nav className="nav">
      <Link to={`${path}/`} className={"nav__links"}>
        All
      </Link>
      <NavLink to={`${path}/Charity`} className={"nav__links"}>
        Charities
      </NavLink>
      <NavLink to={`${path}/Event`} className={"nav__links"}>
        Events
      </NavLink>
      <NavLink to={`${path}/Community`} className={"nav__links"}>
        Community
      </NavLink>
      <NavLink to={`${path}/Individual`} className={"nav__links"}>
        Individual
      </NavLink>
      <NavLink to={`${path}/One-off`} className={"nav__links"}>
        One-Off
      </NavLink>
    </nav>
  );
}

export default Nav;
