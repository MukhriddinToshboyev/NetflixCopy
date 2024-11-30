import "./Trending.css";

import TrendingImage1 from "../assets/Trending-image1.png";
import TrendingImage2 from "../assets/Trending-image2.png";
import TrendingImage3 from "../assets/Trending-image3.png";
import TrendingImage4 from "../assets/Trending-image4.png";
import TrendingImage5 from "../assets/Trending-image5.png";
import TrendingImage6 from "../assets/Trending-image6.png";
import TrendingImage7 from "../assets/Trending-image7.png";
import TrendingImage8 from "../assets/Trending-image8.png";
import TrendingImage9 from "../assets/Trending-image9.png";
import Card from "../Card";
import Aksed from "../Aksed";

function Trending() {
  return (
    <div className="trending">
      <div className="trending-container">
        <header className="trending-header">
          <h2 className="trending-header__text">Trending Now</h2>
          <select className="trending-header__dropdown">
            <option className="trending-header__dropdown-text" value="English">
              Movies - Other Languages
            </option>
            <option className="trending-header__dropdown-text" value="Русский">
              TV Shows - English
            </option>
            <option className="trending-header__dropdown-text" value="Русский">
              TV Shows - Other Languages
            </option>
          </select>
        </header>
        <nav className="trending-navigation">
          <div className="trending-navigation__cards">
            <ul className="trending-navigation__items">
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage1} alt="img" />
                </a>
                <span className="img-name">1</span>
              </li>
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage2} alt="img" />
                </a>
                <span className="img-name">2</span>
              </li>
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage3} alt="img" />
                </a>
                <span className="img-name">3</span>
              </li>
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage4} alt="img" />
                </a>
                <span className="img-name">4</span>
              </li>
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage5} alt="img" />
                </a>
                <span className="img-name">5</span>
              </li>
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage6} alt="img" />
                </a>
                <span className="img-name">6</span>
              </li>
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage7} alt="img" />
                </a>
                <span className="img-name">7</span>
              </li>
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage8} alt="img" />
                </a>
                <span className="img-name">8</span>
              </li>
              <li className="trending-navigation__item">
                <a href="#" className="trending-navigation__item-img">
                  <img src={TrendingImage9} alt="img" />
                </a>
                <span className="img-name">9</span>
              </li>
            </ul>
          </div>
        </nav>
        <Card />
        <Aksed />
      </div>
    </div>
  );
}

export default Trending;
