import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/homepage" className={"nav__links"}>
        Home
      </NavLink>
      <NavLink to="/charities" className={"nav__links"}>
        Charities
      </NavLink>
      <NavLink to="/events" className={"nav__links"}>
        Events
      </NavLink>
      <NavLink to="/individual" className={"nav__links"}>
        Individual
      </NavLink>
      <NavLink to="/one-off" className={"nav__links"}>
        One-Off
      </NavLink>
      <NavLink to="/weekends" className={"nav__links"}>
        Weekends
      </NavLink>
      <NavLink to="/midweek" className={"nav__links"}>
        Midweek
      </NavLink>
      <NavLink to="/afterwork" className={"nav__links"}>
        Afterwork
      </NavLink>
    </nav>
  );
}

export default Nav;
