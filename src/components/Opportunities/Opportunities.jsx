import "./Opportunities.scss";
import { Link } from "react-router-dom";

function Opportunity({ opportunities }) {
  function timeFormatter(timeString) {
    let startTime = new Date(`2024-01-01T${timeString}`);
    let formattedTime = startTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return formattedTime;
  }
  return (
    <section className="opportunity">
      <ul className="opportunity__list">
        {opportunities.map((opportunity) => {
          const formattedDate = new Date(
            opportunity.date_of_opportunity
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <li key={opportunity.id} className="opportunity__card">
              <Link
                className="opportunity__link"
                to={`/opportunity/${opportunity.id}`}
              >
                <h2 className="opportunity__title">{opportunity.title}</h2>
                <p className="opportunity__descpription">
                  {opportunity.description}
                </p>
                <div className="opportunity__details">
                  <p className="opportunity__date">{formattedDate}</p>
                  <div className="opportunity__container">
                    <p className="opportunity__time">
                      {`${timeFormatter(
                        opportunity.start_time_of_opportunity
                      )} to ${timeFormatter(
                        opportunity.end_time_of_opportunity
                      )}`}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Opportunity;
