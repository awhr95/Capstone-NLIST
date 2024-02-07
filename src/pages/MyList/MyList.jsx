import "./MyList.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Opportunity from "../../components/Opportunities/Opportunities";
import FilterMenu from "../../components/FilterMenu/FilerMenu";
import FailedAuth from "../../components/FailedAuth/FailedAuth";
import { useParams } from "react-router-dom";

function MyList() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;

  const [myOpportunities, setMyOpportunities] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  // const [oppType, setOppType] = useState(null);
  const { oppType } = useParams();

  const fetchOpportunities = async () => {
    const user = sessionStorage.getItem("user_id");
    const token = sessionStorage.getItem("token");
    if (!token) {
      return setFailedAuth(true);
    }
    try {
      const { data } = await axios.get(`${apiUrl}:${port}/users/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMyOpportunities(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchOpportunities();
  }, []);

  if (failedAuth) {
    return <FailedAuth />;
  }

  if (!myOpportunities) {
    return (
      <>
        <Header />
        <FilterMenu page="mylist" />
      </>
    );
  }

  return (
    <>
      <Header />
      <FilterMenu page="mylist" />
      <Opportunity
        opportunities={myOpportunities.opportunities}
        oppType={oppType}
      />
      <FooterNav />
    </>
  );
}

export default MyList;
