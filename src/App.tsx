import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import LeftsideNavbar from "./components/LeftsideNavbar/LeftsideNavbar";
import Genres from "./pages/Genres/Genres";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Search from "./pages/Search/Search";
import Trailers from "./pages/Trailers/Trailers";

function App() {
  return (
    <div className="App">
      <LeftsideNavbar />
      <Header />

      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Genres" element={<Genres />} />
        <Route path="News" element={<News />} />
        <Route path="Trailers" element={<Trailers />} />
        <Route path="Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
