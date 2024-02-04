import { NavLink } from "react-router-dom";
import "./FooterNav.scss";
import profile from "../../assets/icons/user-img.svg";
import plus from "../../assets/icons/add.svg";
import nlist from "../../assets/logos/NList-logos_transparent_small.png";
import save from "../../assets/icons/heart.svg";
import explore from "../../assets/icons/search.svg";
const FooterNav = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <NavLink to="/" className={"footer__links"}>
          <img src={explore} className="footer__icon" alt="explore" />
          <p>Explore</p>
        </NavLink>
        <NavLink to="/saved" className={"footer__links"}>
          <img src={save} className="footer__icon" alt="save" />
          <p>Saved</p>
        </NavLink>
        <NavLink to="/mylist" className={"footer__links"}>
          <img src={nlist} className="footer__icon" alt="my list" />
          <p>My List</p>
        </NavLink>
        <NavLink to="/create-listing" className={"footer__links"}>
          <img src={plus} className="footer__icon" alt="add listing" />
          <p>Add</p>
        </NavLink>
        <NavLink to="/profile" className={"footer__links"}>
          <img src={profile} className="footer__icon" alt="profile page" />
          <p>Profile</p>
        </NavLink>
      </nav>
    </footer>
  );
};
export default FooterNav;
