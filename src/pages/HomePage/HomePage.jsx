import "./HomePage.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";

function HomePage({ setUser, user, setOppType }) {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;
  const { oppType } = useParams();

  const [allOpportunities, setAllOpportunities] = useState(null);

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/opportunities`);
      setAllOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchOpportunities();
  }, []);

  if (!allOpportunities) {
    return (
      <>
        <Header />
        <FilterMenu />
      </>
    );
  }
  return (
    <>
      <Header />
      <FilterMenu />
      <Opportunity
        oppType={oppType}
        setUser={setUser}
        user={user}
        opportunities={allOpportunities}
      />
      <FooterNav />
    </>
  );
}

export default HomePage;
