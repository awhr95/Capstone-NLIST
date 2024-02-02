import "./HomePage.scss";
import Header from "../../components/Header/Header";
import sliders from "../../assets/icons/sliders.svg";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";

function HomePage() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;

  const [opportunities, setOpportunities] = useState(null);

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/opportunities`);
      setOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchOpportunities();
  }, []);

  if (!opportunities) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Header />
      <section className="search">
        <input
          type="text"
          className="search__box"
          placeholder="Charities, events, locations"
        />
        <Link>
          <img src={sliders} alt="filters" className="header__img--alt" />
        </Link>
      </section>
      <Nav />
      <section>
        <ul>
          {opportunities.map((opportunity) => {
            const formattedDate = new Date(
              opportunity.date_of_opportunity
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <li key={opportunity.id}>
                <Link to={`/opportunity/${opportunity.id}`}>
                  <h2>{opportunity.title}</h2>
                  <p>{opportunity.description}</p>
                  <p>{formattedDate}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <FooterNav />
    </>
  );
}

export default HomePage;
