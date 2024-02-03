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
        <NavLink to="/saved" className={"nav__links"}>
          Saved
        </NavLink>
        <NavLink to="/mylist" className={"nav__links"}>
          My List
        </NavLink>
        <NavLink to="/create-listing" className={"nav__links"}>
          Create Listing
        </NavLink>
        <NavLink to="/profile" className={"nav__links"}>
          Profile
        </NavLink>
      </nav>
    </footer>
  );
};
export default FooterNav;
