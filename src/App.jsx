import "./App.css";
import Card from "./Card";

import Netflix from "./Netflix";
import Trending from "./Trending";

function App() {
  return (
    <div className="app-container">
      <Netflix />
      <Trending />
    </div>
  );
}

export default App;
