import "./Card.css";

function Card() {
  return (
    <div className="card-container">
      <section className="card-section">
        <div className="card-section_text">
          <h2 className="cars-item__text">More Reasons to Join </h2>
        </div>

        <div className="card">
          <ul className="card-items">
            <li className="card-item">
              <h2>Enjoy on your TV</h2>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </li>
            <li className="card-item"></li>
            <li className="card-item"></li>
            <li className="card-item"></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Card;
