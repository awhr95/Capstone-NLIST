import "./OpportunityPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backArrow from "../../assets/icons/backarrow.svg";

function timeFormatter(timeString) {
  let startTime = new Date(`2024-01-01T${timeString}`);
  let formattedTime = startTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
}
const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const OpportunityPage = () => {
  const [opportunity, setOpportunity] = useState(null);
  const { opportunityId } = useParams();

  const fetchOpportunity = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}:${port}/opportunities/${opportunityId}`
      );
      setOpportunity(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchOpportunity();
  }, [opportunityId]);

  const userOppSignUp = async () => {
    const userId = sessionStorage.getItem("user_id");

    const newRecord = {
      user_id: userId,
      opportunities_id: opportunityId,
    };

    const volunteerIds = opportunity.cleanUsers.map((volunteer) => {
      return volunteer.id;
    });

    if (volunteerIds.includes(Number(userId))) {
      console.log(`user ${userId} already exists`);
      return;
    }

    try {
      await axios.post(
        `${apiUrl}:${port}/opportunities/signup/${opportunityId}`,
        newRecord
      );
      fetchOpportunity();
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!opportunity) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main>
        <Link to={"/homepage"}>
          <img src={backArrow} />
        </Link>
        <h1>{opportunity.title}</h1>
        <p>{opportunity.description}</p>
        <p>when:</p>
        <p>
          {new Date(opportunity.date_of_opportunity).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </p>
        <p>{timeFormatter(opportunity.start_time_of_opportunity)}</p>
        <p>to:</p>
        <p>{timeFormatter(opportunity.end_time_of_opportunity)}</p>
        <p>Number of volunteers needed:</p>
        <p>{opportunity.number_of_volunteers_needed}</p>
        <p>current volunteers:</p>
        <ul>
          {opportunity.cleanUsers.map((volunteer) => {
            return <li key={volunteer.id}>{volunteer.first_name}</li>;
          })}
        </ul>
      </main>
      <button onClick={userOppSignUp}>sign up</button>
    </>
  );
};

export default OpportunityPage;
