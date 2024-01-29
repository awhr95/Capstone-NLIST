import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./FooterNav.scss";
const FooterNav = () => {
  return (
    <footer to="/basket" className="footer">
      <nav className="nav">
        <NavLink to="/homepage" className={"nav__links"}>
          Explore
        </NavLink>
        <NavLink to="/charities" className={"nav__links"}>
          Saved
        </NavLink>
        <NavLink to="/events" className={"nav__links"}>
          My List
        </NavLink>
        <NavLink to="/individual" className={"nav__links"}>
          Mssgs
        </NavLink>
        <NavLink to="/one-off" className={"nav__links"}>
          Account
        </NavLink>
      </nav>
    </footer>
  );
};
export default FooterNav;
