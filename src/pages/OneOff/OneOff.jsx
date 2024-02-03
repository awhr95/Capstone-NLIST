import "./OneOff.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";

function OneOff() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;

  const [oneOffOpportunities, setOneOffOpportunities] = useState(null);
  const fetchOneOffOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/opportunities`);
      setOneOffOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchOneOffOpportunities();
  });

  if (!oneOffOpportunities) {
    return <p>Loading...</p>;
  }

  const onlyOneOff = oneOffOpportunities.filter(
    (opp) => opp.type === "One-off"
  );

  return (
    <>
      <Header />
      <FilterMenu />
      <Opportunity opportunities={onlyOneOff} />
      <FooterNav />
    </>
  );
}

export default OneOff;
