import "./Charities.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";

function Charities() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;

  const [charityOpportunities, setCharityOpportunities] = useState(null);
  const fetchCharityOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/opportunities`);
      setCharityOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCharityOpportunities();
  });

  if (!charityOpportunities) {
    return (
      <>
        <Header />
        <FilterMenu />
      </>
    );
  }

  const onlyCharity = charityOpportunities.filter(
    (opp) => opp.type === "Charity"
  );

  return (
    <>
      <Header />
      <FilterMenu />
      <Opportunity opportunities={onlyCharity} />
      <FooterNav />
    </>
  );
}

export default Charities;
