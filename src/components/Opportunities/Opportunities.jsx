import "./Opportunities.scss";
import { Link } from "react-router-dom";

function Opportunity({ opportunities }) {
  return (
    <section>
      <ul>
        {opportunities.map((opportunity) => {
          const formattedDate = new Date(
            opportunity.date_of_opportunity
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <li key={opportunity.id}>
              <Link to={`/opportunity/${opportunity.id}`}>
                <h2>{opportunity.title}</h2>
                <p>{opportunity.description}</p>
                <p>{formattedDate}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Opportunity;
