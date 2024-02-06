import "./SavedList.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";

function SavedList() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;
  const [failedAuth, setFailedAuth] = useState(false);
  const [savedOpportunities, setSavedOpportunities] = useState(null);
  const user = sessionStorage.getItem("user_id");

  const fetchSavedOpportunities = async () => {
    const foundUser = sessionStorage.getItem("user_id");
    const token = sessionStorage.getItem("token");
    if (!token) {
      return setFailedAuth(true);
    }
    try {
      const { data } = await axios.get(
        `${apiUrl}:${port}/users/saved/${user}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSavedOpportunities(data);
    } catch (error) {
      console.error(error.message);
      setFailedAuth(true);
    }
  };

  useEffect(() => {
    fetchSavedOpportunities();
  }, []);

  if (!savedOpportunities) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <FilterMenu />
      <Opportunity opportunities={savedOpportunities.savedOpportunities} />
      <FooterNav />
    </>
  );
}

export default SavedList;
