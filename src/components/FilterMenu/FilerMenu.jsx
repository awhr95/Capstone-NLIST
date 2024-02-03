import "./FilterMenu.scss";
import { Link } from "react-router-dom";
import sliders from "../../assets/icons/sliders.svg";
import Nav from "../../components/Nav/Nav";

function FilterMenu() {
  return (
    <section>
      <div className="search">
        <input
          type="text"
          className="search__box"
          placeholder="Charities, events, locations"
        />
        <Link>
          <img src={sliders} alt="filters" className="header__img--alt" />
        </Link>
      </div>
      <Nav />
    </section>
  );
}

export default FilterMenu;
