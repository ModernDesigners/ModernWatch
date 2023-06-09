import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import LeftsideNavbar from "./components/LeftsideNavbar/LeftsideNavbar";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Favorites from "./pages/Favorites/Favorites";
import GenreResults from "./pages/Genres/GenreResult/GenreResults";
import Genres from "./pages/Genres/Genres";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import News from "./pages/News/News";
import Search from "./pages/Search/Search";
import Trailers from "./pages/Trailers/Trailers";

function App() {
  const [favorites, setFavorites] = useState<Array<number>>([]);
  const [navToggle, setNavToggle] = useState(false);
  const [openResults, setOpenResults] = useState(0);

  let location = useLocation();
  const [padding, setPadding] = useState(0);

  useEffect(() => {
    if (location.pathname.includes("Movie")) {
      setPadding(1);
    } else {
      setPadding(0);
    }
    setNavToggle(false);
  }, [location.pathname]);
  return (
    <>
      <div className="nBlurr"></div>
      <div className={`${padding ? "navPad" : ""} App`}>
        <LeftsideNavbar
          navToggle={navToggle}
          setNavToggle={setNavToggle}
          openResults={openResults}
          setOpenResults={setOpenResults}
        />
        <Header openResults={openResults} setOpenResults={setOpenResults} />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Genres" element={<Genres />} />
            <Route path="Genres/:genre" element={<GenreResults />} />
            <Route path="News" element={<News />} />
            <Route path="Trailers" element={<Trailers />} />
            <Route path="Search" element={<Search />} />
            <Route path="ComingSoon" element={<ComingSoon />} />
            <Route
              path="Movie/:id"
              element={
                <Movie favorites={favorites} setFavorites={setFavorites} />
              }
            />
            <Route
              path="Favorites"
              element={
                <Favorites favorites={favorites} setFavorites={setFavorites} />
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
