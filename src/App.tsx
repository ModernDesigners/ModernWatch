import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import LeftsideNavbar from "./components/LeftsideNavbar/LeftsideNavbar";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Genres from "./pages/Genres/Genres";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import News from "./pages/News/News";
import Search from "./pages/Search/Search";
import Trailers from "./pages/Trailers/Trailers";

function App() {
  return (
    <div className="App">
      <LeftsideNavbar />
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Genres" element={<Genres />} />
          <Route path="News" element={<News />} />
          <Route path="Trailers" element={<Trailers />} />
          <Route path="Search" element={<Search />} />
          <Route path="ComingSoon" element={<ComingSoon />} />
          <Route path="Movie" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
