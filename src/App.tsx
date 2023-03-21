import { MoviesAPI } from "./API/MoviesAPI";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import LeftsideNavbar from "./components/LeftsideNavbar/LeftsideNavbar";

function App() {
  return (
    <div className="App">
      <LeftsideNavbar />
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {MoviesAPI.map((e, i) => (
          <Card
            key={i}
            image={e.image}
            imdb={e.imdb}
            title={e.name}
            desc={e.genres}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
