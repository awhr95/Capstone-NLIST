import "./FailedAuth.scss";
import FilterMenu from "../../components/FilterMenu/FilerMenu";
import FooterNav from "../../components/FooterNav/FooterNav";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const FailedAuth = ({ setOppType }) => {
  return (
    <>
      <Header />
      <FilterMenu setOppType={setOppType} />
      <section className="failed-auth">
        <h2>You must be logged in to view this page</h2>
        <Link className="failed-auth__link" to={"/login"}>
          <p className="failed-auth__login"> login in </p>
        </Link>
      </section>
      <FooterNav />
    </>
  );
};

export default FailedAuth;
