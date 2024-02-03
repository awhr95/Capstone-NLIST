import "./Individual.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";

function Individual() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;

  const [individualOpportunities, setIndividualOpportunities] = useState(null);
  const fetchIndividualOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/opportunities`);
      setIndividualOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchIndividualOpportunities();
  });

  if (!individualOpportunities) {
    return <p>Loading...</p>;
  }

  const onlyIndividual = individualOpportunities.filter(
    (opp) => opp.type === "Event"
  );

  return (
    <>
      <Header />
      <FilterMenu />
      <Opportunity opportunities={onlyIndividual} />
      <FooterNav />
    </>
  );
}

export default Individual;
