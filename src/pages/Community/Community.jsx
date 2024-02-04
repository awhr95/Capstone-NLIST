import "./Community.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";

function Community() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;

  const [communityOpportunities, setCommunityOpportunities] = useState(null);
  const fetchCommunityOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/opportunities`);
      setCommunityOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCommunityOpportunities();
  }, []);

  if (!communityOpportunities) {
    return (
      <>
        <Header />
        <FilterMenu />
      </>
    );
  }

  const onlyCommunity = communityOpportunities.filter(
    (opp) => opp.type === "Community"
  );

  return (
    <>
      <Header />
      <FilterMenu />
      <Opportunity opportunities={onlyCommunity} />
      <FooterNav />
    </>
  );
}

export default Community;
