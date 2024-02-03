import "./Events.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";

function Events() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;

  const [eventsOpportunities, setEventsOpportunities] = useState(null);
  const fetchCharityOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/opportunities`);
      setEventsOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchEventsOpportunities();
  });

  if (!eventsOpportunities) {
    return <p>Loading...</p>;
  }

  const onlyEvents = eventsOpportunities.filter((opp) => opp.type === "Events");

  return (
    <>
      <Header />
      <FilterMenu />
      <Opportunity opportunities={onlyEvents} />
      <FooterNav />
    </>
  );
}

export default Events;
