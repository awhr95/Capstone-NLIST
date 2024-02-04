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
    <section className="opportunities">
      <ul className="opportunities__list">
        {opportunities.map((opportunity) => {
          const formattedDate = new Date(
            opportunity.date_of_opportunity
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <li key={opportunity.id} className="opportunities__card">
              <Link
                className="opportunities__link"
                to={`/opportunity/${opportunity.id}`}
              >
                <h2 className="opportunities__title">{opportunity.title}</h2>
                <p className="opportunities__descpription">
                  {opportunity.description}
                </p>
                <div className="opportunities__details">
                  <p className="opportunities__date">{formattedDate}</p>
                  <div className="opportunities__container">
                    <p className="opportunities__time">
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
