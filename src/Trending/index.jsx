import "./Trending.css";

function Trending() {
  return (
    <div className="trending">
      <div className="trending-container">
        <header className="trending-header">
          <div className="trending-header__dropdown">
            <select className="trending-header__select">
              <option className="trending-header__select-text" value="English">
                Movies - Other Languages
              </option>
              <option className="trending-header__select-text" value="Русский">
                TV Shows - English
              </option>
              <option className="trending-header__select-text" value="Русский">
                TV Shows - Other Languages
              </option>
            </select>
          </div>
        </header>
        <nav className="trending-navigation">
          <div className="trending-navigation__cards"></div>
        </nav>
      </div>
    </div>
  );
}

export default Trending;
