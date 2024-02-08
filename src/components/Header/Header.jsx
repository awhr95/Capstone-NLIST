import "./Header.scss";
import logo from "../../assets/logos/NList-logos_transparent.png";
import { Link } from "react-router-dom";

function Header() {
  const user = sessionStorage.getItem("user_id");

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="nlist" />
      {!user && (
        <Link to={"/login"} className="header__login">
          Log in
        </Link>
      )}
    </header>
  );
}

export default Header;
