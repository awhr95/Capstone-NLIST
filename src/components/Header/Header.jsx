import "./Header.scss";
import logo from "../../assets/logos/NList-logos_transparent.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="nlist" />
    </header>
  );
}

export default Header;
