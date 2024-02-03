import "./MyList.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";

function MyList() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;

  const [myOpportunities, setMyOpportunities] = useState(null);
  const user = sessionStorage.getItem("user_id");

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/users/${user}`);
      setMyOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchOpportunities();
  });

  if (!myOpportunities) {
    return <p>Loading...</p>;
  }
  console.log(myOpportunities.opportunities);

  return (
    <>
      <Header />
      <FilterMenu />
      <Opportunity opportunities={myOpportunities.opportunities} />
      <FooterNav />
    </>
  );
}

export default MyList;
