import "./Netflix.css";

function Netflix() {
  console.log(com);

  return (
    <div className="netflix">
      <div className="netflix-container">
        <header className="netflix-header">
          <h2 className="netflix-header__text">Netflix</h2>
          <select className="netflix-header__select">
            <option value="English">English</option>
            <option value="Русский">Русский</option>
          </select>
          <button className="netflix-header__button">Sign In</button>
        </header>
        <section className="netflix-section">
          <h2 className="netflix-section__title">
            Unlimited movies, TV <br /> shows, and more
          </h2>
          <p className="netflix-section__text">
            Starts at EUR 7.99. Cancel anytime.
          </p>
          <p className="netflix-section__text">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Netflix;
