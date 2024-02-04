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
  const isOpportunitiesEmpty = (opportunities) => {
    return Object.keys(opportunities).length === 0;
  };

  if (isOpportunitiesEmpty(opportunities)) {
    return (
      <div className="opportunities__empty">
        <section className="opportunities__card">
          <h2>This section stores all youre ongoing opportunities</h2>
          <h2>You have'nt signed up to any opportunities yet!</h2>
        </section>
        <section className="opportunities__card">
          <h2>Have an explore and find some opportunities that suit!</h2>
        </section>
      </div>
    );
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
