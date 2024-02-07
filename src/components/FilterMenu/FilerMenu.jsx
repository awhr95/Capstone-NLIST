import "./FilterMenu.scss";
import { Link } from "react-router-dom";
import map from "../../assets/icons/Map.svg";
import Nav from "../../components/Nav/Nav";

function FilterMenu({ setOppType }) {
  return (
    <section>
      <div className="search">
        <input
          type="text"
          className="search__box"
          placeholder="Charities, events, locations"
        />
        <Link to={"/map"}>
          <img src={map} alt="filters" className="header__img--alt" />
        </Link>
      </div>
      <Nav setOppType={setOppType} />
    </section>
  );
}

export default FilterMenu;
